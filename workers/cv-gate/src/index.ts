/**
 * cv-gate: records who downloads Nico's CV.
 * POST { email, token } -> verifies Turnstile, validates email, rate-limits
 * per IP, stores a row in D1, optionally emails a notification.
 */

import { EmailMessage } from 'cloudflare:email'

export interface Env {
  DB: D1Database
  TURNSTILE_SECRET_KEY: string
  ALLOWED_ORIGINS?: string
  RATE_LIMIT_PER_HOUR?: string
  NOTIFY_ENABLED?: string
  NOTIFY_FROM?: string
  NOTIFY_TO?: string
  NOTIFY?: SendEmail
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX_BODY_BYTES = 4096

const allowedOrigin = (req: Request, env: Env): string | null => {
  const origin = req.headers.get('Origin')
  if (!origin) return null
  const list = (env.ALLOWED_ORIGINS || 'https://nicoswan.com')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (list.includes(origin)) return origin
  // Any localhost / 127.0.0.1 port for local development.
  if (/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return origin
  return null
}

const json = (
  body: unknown,
  status: number,
  origin: string | null
): Response => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    Vary: 'Origin'
  }
  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Content-Type'
    headers['Access-Control-Max-Age'] = '86400'
  }
  return new Response(status === 204 ? null : JSON.stringify(body), {
    status,
    headers
  })
}

const sha256 = async (input: string): Promise<string> => {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(input)
  )
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

const verifyTurnstile = async (
  token: string,
  secret: string,
  ip: string | null
): Promise<boolean> => {
  const form = new FormData()
  form.append('secret', secret)
  form.append('response', token)
  if (ip) form.append('remoteip', ip)
  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form }
  )
  if (!res.ok) return false
  const data = (await res.json()) as { success?: boolean }
  return data.success === true
}

const notify = async (
  env: Env,
  email: string,
  country: string,
  ua: string
): Promise<void> => {
  if (env.NOTIFY_ENABLED !== 'true' || !env.NOTIFY) return
  const from = env.NOTIFY_FROM || 'cv-gate@nicoswan.com'
  const to = env.NOTIFY_TO || 'hi@nicoswan.com'
  const raw = [
    `From: CV Gate <${from}>`,
    `To: ${to}`,
    `Subject: CV downloaded by ${email}`,
    `Message-ID: <${crypto.randomUUID()}@nicoswan.com>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    '',
    `Email: ${email}`,
    `Country: ${country}`,
    `User agent: ${ua}`,
    `Time: ${new Date().toISOString()}`
  ].join('\r\n')
  await env.NOTIFY.send(new EmailMessage(from, to, raw))
}

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext) {
    const origin = allowedOrigin(req, env)

    if (req.method === 'OPTIONS') {
      return origin
        ? json(null, 204, origin)
        : new Response(null, { status: 403 })
    }
    if (req.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, origin)
    }
    if (!origin) return json({ error: 'Origin not allowed' }, 403, null)

    const len = Number(req.headers.get('Content-Length') || '0')
    if (len > MAX_BODY_BYTES) {
      return json({ error: 'Request too large' }, 413, origin)
    }

    let body: { email?: unknown; token?: unknown }
    try {
      body = await req.json()
    } catch {
      return json({ error: 'Invalid request' }, 400, origin)
    }

    const email =
      typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const token = typeof body.token === 'string' ? body.token : ''
    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return json({ error: 'Please enter a valid email address.' }, 400, origin)
    }
    if (!token || token.length > 2048) {
      return json(
        { error: 'Please complete the verification check.' },
        400,
        origin
      )
    }

    const ip = req.headers.get('CF-Connecting-IP')
    if (!(await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip))) {
      return json(
        { error: 'Verification failed. Please try again.' },
        403,
        origin
      )
    }

    // Basic rate limit: N successful submissions per IP (hashed) per hour.
    const ipHash = ip ? await sha256(`cv-gate:${ip}`) : null
    const limit = Number(env.RATE_LIMIT_PER_HOUR || '5')
    if (ipHash) {
      const since = new Date(Date.now() - 3600_000).toISOString()
      const row = await env.DB.prepare(
        'SELECT COUNT(*) AS n FROM cv_downloads WHERE ip_hash = ? AND created_at > ?'
      )
        .bind(ipHash, since)
        .first<{ n: number }>()
      if ((row?.n ?? 0) >= limit) {
        return json(
          { error: 'Too many requests. Please try again later.' },
          429,
          origin
        )
      }
    }

    const ua = (req.headers.get('User-Agent') || '').slice(0, 512)
    const country =
      (req.cf?.country as string | undefined) ||
      req.headers.get('CF-IPCountry') ||
      ''

    await env.DB.prepare(
      'INSERT INTO cv_downloads (email, created_at, user_agent, country, ip_hash) VALUES (?, ?, ?, ?, ?)'
    )
      .bind(email, new Date().toISOString(), ua, country, ipHash)
      .run()

    ctx.waitUntil(
      notify(env, email, country, ua).catch((err) =>
        console.error('notify failed', err)
      )
    )

    return json({ ok: true }, 200, origin)
  }
} satisfies ExportedHandler<Env>
