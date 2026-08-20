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
            <p className="eyebrow text-[#1863dc]">Contact / New business</p>
            <div>
              <h1 className="display text-6xl sm:text-7xl md:text-8xl">Let’s make something useful.</h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#17171c]/70">
                Whether you need a product designed and built, or verified engineers to extend the
                team you already have, start here and we&apos;ll point you to the right person.
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
                <h3 className="mb-6 text-3xl font-semibold tracking-tight">
                  Start a conversation
                </h3>
                <p className="mb-8 max-w-md text-white/70">
                  Tell us what you&apos;re building, what needs to change, or which role you&apos;re
                  trying to fill. One message reaches both sides of the business.
                </p>
              </div>

              <div className="space-y-6 border-t border-white/25 pt-8">
                <div>
                  <p className="eyebrow mb-2 text-[#c7dbff]">Product & design work</p>
                  <p className="max-w-md text-sm leading-relaxed text-white/70">
                    Strategy, design, and development for teams shipping something new.
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-[#c7dbff]">Verified engineering talent</p>
                  <p className="max-w-md text-sm leading-relaxed text-white/70">
                    Degree-verified engineers in managed co-working spaces, on your timezone.
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

      <Footer />
    </main>
  )
}
