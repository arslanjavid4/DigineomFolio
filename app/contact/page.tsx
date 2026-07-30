'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-[#003c33] text-white">
      <Navigation />
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 grid gap-8 border-b border-white/25 pb-12 lg:mb-20 lg:grid-cols-[1fr_2fr] lg:items-end"
          >
            <p className="eyebrow text-[#a9e8cc]">Contact / New business</p>
            <div><h1 className="display text-7xl md:text-9xl">Let’s make something useful.</h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/75">
              Ready to start your next project? Let&apos;s discuss how we can help
              bring your vision to life.
            </p></div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            {/* Contact Info */}
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
                  Tell us what you&apos;re building, what needs to change, or where you need a clearer path forward.
                </p>
              </div>

              <a
                href="mailto:info@digineom.co"
                className="group flex items-center gap-4 border-t border-white/25 py-6"
              >
                <div className="rounded-full border border-white/25 p-3 text-[#a9e8cc]">
                  <Mail aria-hidden="true" />
                </div>
                <div>
                  <span className="eyebrow block text-[#a9e8cc]">Email</span>
                  <span className="mt-1 block text-lg text-white/80 transition-colors group-hover:text-white">info@digineom.co</span>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="border-t border-white/25 pt-7 md:pt-10"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="eyebrow mb-2 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#a9e8cc]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="eyebrow mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#a9e8cc]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="eyebrow mb-2 block"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#a9e8cc]"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="eyebrow mb-2 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#a9e8cc]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="pill w-full bg-[#a9e8cc] text-[#003c33] hover:bg-white"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

