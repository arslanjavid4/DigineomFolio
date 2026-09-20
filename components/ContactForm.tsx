'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm, ValidationError } from '@formspree/react'
import { Send } from 'lucide-react'
import {
  CONTACT_ROLE_OPTIONS,
  sampleMessageForRole,
} from '@/lib/contact-prefills'

const fieldClass =
  'w-full rounded-lg border border-[#d9d9dd] bg-white px-3.5 py-3 text-[#17171c] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#1863dc] focus:ring-2 focus:ring-[#1863dc]/15'

function resolveRole(roleParam: string | null) {
  if (!roleParam) return 'Other engineering role'
  if ((CONTACT_ROLE_OPTIONS as readonly string[]).includes(roleParam)) return roleParam
  return roleParam
}

function ContactFormFields() {
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role')
  const messageParam = searchParams.get('message')

  const [inquiryType, setInquiryType] = useState(() => resolveRole(roleParam))
  const [message, setMessage] = useState(() => {
    if (messageParam) return messageParam
    if (roleParam) return sampleMessageForRole(roleParam)
    return ''
  })

  const [state, handleSubmit] = useForm('mnpalwko')

  useEffect(() => {
    if (!roleParam && !messageParam) return
    setInquiryType(resolveRole(roleParam))
    setMessage(messageParam || (roleParam ? sampleMessageForRole(roleParam) : ''))
  }, [roleParam, messageParam])

  const roleOptions =
    roleParam && !(CONTACT_ROLE_OPTIONS as readonly string[]).includes(roleParam)
      ? [roleParam, ...CONTACT_ROLE_OPTIONS]
      : [...CONTACT_ROLE_OPTIONS]

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-[#d9d9dd] bg-[#fffcf7] p-7 shadow-[0_24px_60px_rgba(23,23,28,0.18)] md:p-9">
        <p className="eyebrow text-[#1863dc]">Message sent</p>
        <p className="mt-4 max-w-md text-xl leading-relaxed text-[#17171c]">
          Thanks — we received your note and will get back to you at the email you provided.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#d9d9dd] bg-[#fffcf7] p-7 shadow-[0_24px_60px_rgba(23,23,28,0.18)] md:p-9"
    >
      <div className="mb-7 border-b border-[#d9d9dd] pb-5">
        <p className="eyebrow text-[#1863dc]">Inquiry</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#17171c]">
          Brief the role
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Prefills carry over from talent profiles — edit anything before you send.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="inquiryType" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            What are you hiring for?
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={inquiryType}
            onChange={(e) => {
              const next = e.target.value
              setInquiryType(next)
              if (
                !message.trim() ||
                (roleParam && message === sampleMessageForRole(roleParam)) ||
                CONTACT_ROLE_OPTIONS.some((role) => message === sampleMessageForRole(role))
              ) {
                if (next !== 'Not sure yet' && next !== 'Other engineering role') {
                  setMessage(sampleMessageForRole(next))
                }
              }
            }}
            className={fieldClass}
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={fieldClass}
            placeholder="Your name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 block text-sm text-[#b42318]" />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={fieldClass}
            placeholder="your.email@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 block text-sm text-[#b42318]" />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className={fieldClass}
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${fieldClass} resize-none`}
            placeholder="Tell us about the role you're hiring for..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 block text-sm text-[#b42318]" />
        </div>

        <input type="hidden" name="_subject" value="Role inquiry from DigiNeom" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <ValidationError errors={state.errors} className="block text-sm text-[#b42318]" />

        <button
          type="submit"
          disabled={state.submitting}
          className="pill mt-1 w-full bg-[#1863dc] text-white hover:bg-[#0d47a1] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? 'Sending…' : 'Send message'}
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-[#d9d9dd] bg-[#fffcf7] p-7 text-neutral-500 md:p-9">
          Loading form…
        </div>
      }
    >
      <ContactFormFields />
    </Suspense>
  )
}
