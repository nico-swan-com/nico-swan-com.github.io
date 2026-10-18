'use client'

import { pdf } from '@react-pdf/renderer'
import { FileDown, Loader2, X } from 'lucide-react'
import {
  FormEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState
} from 'react'
import { Button } from '@/components/ui/button'
import { PlainResumeDownloadButton } from './ResumeDownloadButton'
import { ResumePDF } from './ResumePDF'

const GATE_URL = process.env.NEXT_PUBLIC_CV_GATE_URL
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
const TURNSTILE_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
const FILE_NAME = 'Nico_Swan_Resume.pdf'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
      theme?: 'auto' | 'light' | 'dark'
    }
  ) => string
  reset: (id?: string) => void
  remove: (id?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let turnstileLoader: Promise<TurnstileApi> | null = null
const loadTurnstile = (): Promise<TurnstileApi> => {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (!turnstileLoader) {
    turnstileLoader = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = TURNSTILE_SRC
      script.async = true
      script.defer = true
      script.onload = () =>
        window.turnstile
          ? resolve(window.turnstile)
          : reject(new Error('Turnstile unavailable'))
      script.onerror = () => {
        turnstileLoader = null
        reject(new Error('Turnstile failed to load'))
      }
      document.head.appendChild(script)
    })
  }
  return turnstileLoader
}

const downloadResume = async () => {
  const blob = await pdf(<ResumePDF />).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = FILE_NAME
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

type Status = 'idle' | 'submitting' | 'done'

export const ResumeDownloadGate = () => {
  if (!GATE_URL || !SITE_KEY) return <PlainResumeDownloadButton />
  return <GatedDownload gateUrl={GATE_URL} siteKey={SITE_KEY} />
}

const GatedDownload = ({
  gateUrl,
  siteKey
}: {
  gateUrl: string
  siteKey: string
}) => {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const id = useId()
  const emailId = `${id}-email`
  const errorId = `${id}-error`
  const noteId = `${id}-note`

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    let cancelled = false
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !widgetRef.current || widgetId.current) return
        widgetId.current = ts.render(widgetRef.current, {
          sitekey: siteKey,
          theme: 'auto',
          callback: (t) => setToken(t),
          'expired-callback': () => setToken(null),
          'error-callback': () => {
            setToken(null)
            setError('Verification failed. Please try again.')
          }
        })
      })
      .catch(() => {
        if (!cancelled)
          setError('Could not load the verification check. Please retry.')
      })
    return () => {
      cancelled = true
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current)
      }
      widgetId.current = null
      setToken(null)
    }
  }, [open, siteKey])

  const close = useCallback(() => {
    setOpen(false)
    setError(null)
    setStatus('idle')
  }, [])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    const trimmed = email.trim()
    if (!EMAIL_RE.test(trimmed)) {
      setError('Please enter a valid email address.')
      inputRef.current?.focus()
      return
    }
    if (!token) {
      setError('Please complete the verification check.')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(gateUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, token })
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      await downloadResume()
      setStatus('done')
    } catch (err) {
      setStatus('idle')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setToken(null)
      if (widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current)
      }
    }
  }

  if (!open) {
    return (
      <Button
        variant='outline'
        className='gap-2'
        aria-expanded={false}
        onClick={() => setOpen(true)}
      >
        <FileDown className='size-4' />
        Download Resume
      </Button>
    )
  }

  return (
    <div
      role='region'
      aria-label='Download resume'
      className='w-full max-w-sm rounded-md border border-border bg-background p-4 text-left shadow-sm'
      onKeyDown={(e) => e.key === 'Escape' && close()}
    >
      {status === 'done' ? (
        <div className='flex flex-col gap-3' role='status' aria-live='polite'>
          <p className='text-sm text-primary'>
            Thanks! Your download should have started.
          </p>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'
              className='gap-2'
              onClick={() => downloadResume()}
            >
              <FileDown className='size-4' />
              Download again
            </Button>
            <Button variant='ghost' size='sm' onClick={close}>
              Close
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className='flex flex-col gap-3'>
          <div className='flex items-start justify-between gap-2'>
            <label
              htmlFor={emailId}
              className='block text-sm font-medium text-secondary'
            >
              Your email to download my CV
            </label>
            <button
              type='button'
              onClick={close}
              aria-label='Cancel download'
              className='rounded-sm text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            >
              <X className='size-4' />
            </button>
          </div>
          <input
            ref={inputRef}
            id={emailId}
            type='email'
            name='email'
            autoComplete='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!error}
            aria-describedby={`${noteId}${error ? ` ${errorId}` : ''}`}
            className='w-full rounded-md border border-border bg-background px-3 py-2 text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
            placeholder='your@email.com'
          />
          <div ref={widgetRef} className='min-h-[65px]' />
          <p id={noteId} className='text-xs text-secondary'>
            I&apos;ll only use this to know who downloaded my CV.
          </p>
          {error && (
            <p id={errorId} role='alert' className='text-sm text-destructive'>
              {error}
            </p>
          )}
          <Button
            type='submit'
            variant='outline'
            className='gap-2'
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <Loader2 className='size-4 animate-spin' />
            ) : (
              <FileDown className='size-4' />
            )}
            {status === 'submitting' ? 'Preparing…' : 'Download Resume'}
          </Button>
        </form>
      )}
    </div>
  )
}
