'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-[#17171c]">
      <Navigation />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 border-b border-[#17171c]/15 pb-12 lg:grid-cols-[1fr_2fr] lg:items-end"
          >
            <p className="eyebrow text-[#1863dc]">Contact</p>
            <div>
              <h1 className="display text-6xl sm:text-7xl md:text-8xl">Talk to us about a role.</h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#17171c]/70">
                Degree-verified engineers for Europe and North America, working from co-working
                spaces we manage. Brief the stack, seniority, and timezone — one conversation is
                enough to start.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                  Start with one engineer
                </h2>
                <p className="mb-8 max-w-md text-white/70">
                  Tell us the role you need to fill. We vet, verify, and seat the engineer. You
                  manage the work.
                </p>
              </div>

              <div className="space-y-6 border-t border-white/25 pt-8">
                <div>
                  <p className="eyebrow mb-2 text-[#c7dbff]">What to include</p>
                  <p className="max-w-md text-sm leading-relaxed text-white/70">
                    Stack, seniority, timezone overlap, and the outcome you need. A few sentences is
                    enough — we will ask if we need more.
                  </p>
                </div>
              </div>

              <a
                href="mailto:info@digineom.co"
                className="group flex items-center gap-4 border-t border-white/25 py-6"
              >
                <div className="rounded-full border border-white/25 p-3 text-[#c7dbff]">
                  <Mail aria-hidden="true" />
                </div>
                <div>
                  <span className="eyebrow block text-[#c7dbff]">Email</span>
                  <span className="mt-1 block text-lg text-white/80 transition-colors group-hover:text-white">info@digineom.co</span>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[#d9d9dd] bg-white">
        <div className="container-custom grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold tracking-[-0.02em] text-[#17171c]">Vision</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              A world where a company’s ambition is never limited by the price of talent — where
              every brilliant engineer, wherever they were born, works on the world stage with
              their skill proven and their degree verified.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-[-0.02em] text-[#17171c]">Mission</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              To deliver Western-standard engineering output at up to 70% lower cost — from a desk
              we manage, with full transparency from CV to code.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
