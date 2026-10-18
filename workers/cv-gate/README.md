# cv-gate

Cloudflare Worker behind the "lite" email gate on the CV download at
https://nicoswan.com. Visitors enter an email and pass Cloudflare Turnstile.
The site POSTs `{ email, token }` here, and on `200 { ok: true }` the browser
builds and downloads the PDF straight away.

The Worker:

- verifies the Turnstile token server-side (siteverify)
- validates the email
- rate-limits each IP to `RATE_LIMIT_PER_HOUR` successful submissions per hour
  (the IP is stored only as a SHA-256 hash)
- stores email, timestamp, user agent and country in D1 (`cv_downloads`)
- can email `hi@nicoswan.com` through Email Routing `send_email` (off by default)
- only answers CORS requests from `ALLOWED_ORIGINS` and any `localhost` port

## Deploy (one-time)

```bash
cd workers/cv-gate
npm install
npx wrangler login

# 1. D1 database: copy the printed database_id into wrangler.toml
npx wrangler d1 create cv-gate
npx wrangler d1 execute cv-gate --remote --file=schema.sql

# 2. Turnstile: Cloudflare dashboard > Turnstile > Add widget
#    Hostnames: nicoswan.com (and localhost for dev). Mode: Managed.
#    This gives you a Site Key (public) and a Secret Key.
npx wrangler secret put TURNSTILE_SECRET_KEY

# 3. Deploy. This prints the URL, e.g. https://cv-gate.<subdomain>.workers.dev
npx wrangler deploy
```

### Optional email notification

1. Enable Email Routing on nicoswan.com and verify `hi@nicoswan.com` as a
   destination address.
2. In `wrangler.toml`, uncomment the `[[send_email]]` block and set
   `NOTIFY_ENABLED = "true"`.
3. Run `npx wrangler deploy` again.

## Front-end configuration

Set these at build time (GitHub Actions repo variables, or `.env.local` for
dev):

```
NEXT_PUBLIC_CV_GATE_URL=https://cv-gate.<subdomain>.workers.dev
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<turnstile site key>
```

If either one is missing, the site shows the plain, ungated download button.

For local dev you can use Turnstile's test keys: site key
`1x00000000000000000000AA` and secret `1x0000000000000000000000000000000AA`,
with `npx wrangler dev` plus `npx wrangler d1 execute cv-gate --local --file=schema.sql`.

## Viewing downloads

```bash
npx wrangler d1 execute cv-gate --remote \
  --command "SELECT email, created_at, country FROM cv_downloads ORDER BY id DESC LIMIT 50"
```
