'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Send } from 'lucide-react'

const fieldClass =
  'w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#c7dbff]'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnpalwko')

  if (state.succeeded) {
    return (
      <div className="border-t border-white/25 pt-7 md:pt-10">
        <p className="eyebrow text-[#c7dbff]">Message sent</p>
        <p className="mt-4 max-w-md text-xl leading-relaxed text-white">
          Thanks — we received your note and will get back to you at the email you provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/25 pt-7 md:pt-10">
      <div className="space-y-6">
        <div>
          <label htmlFor="inquiryType" className="eyebrow mb-2 block">
            What do you need?
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            defaultValue="Product & design work"
            className={`${fieldClass} [&>option]:text-[#17171c]`}
          >
            <option>Product &amp; design work</option>
            <option>Verified engineering talent</option>
            <option>Both / not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={fieldClass}
            placeholder="Your Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 block text-sm text-[#ffad9b]" />
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
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
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 block text-sm text-[#ffad9b]" />
        </div>

        <div>
          <label htmlFor="company" className="eyebrow mb-2 block">
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className={fieldClass}
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="eyebrow mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`${fieldClass} resize-none`}
            placeholder="Tell us about your project, or the role you're hiring for..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 block text-sm text-[#ffad9b]" />
        </div>

        <input type="hidden" name="_subject" value="New inquiry from DigiNeom" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <ValidationError errors={state.errors} className="block text-sm text-[#ffad9b]" />

        <button
          type="submit"
          disabled={state.submitting}
          className="pill w-full bg-white text-[#1863dc] hover:bg-[#c7dbff] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? 'Sending…' : 'Send Message'}
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}
