'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { HighlightGroup, HighlighterItem } from '@/components/ui/highlighter'
import { ShimmerButton } from '@/components/ui/shimmer-button'

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@digineom.com',
      link: 'mailto:hello@digineom.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Tech Street, Digital City',
      link: '#',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-900">
              Get In <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help
              bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary-900">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8">
                  We're here to help! Reach out to us through any of these
                  channels.
                </p>
              </div>

              <HighlightGroup>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <HighlighterItem key={info.title} className="rounded-xl">
                        <a
                          href={info.link}
                          className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition-all"
                        >
                          <div className="bg-primary-900 p-3 rounded-lg">
                            <Icon className="text-2xl text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1 text-primary-900">
                              {info.title}
                            </h4>
                            <p className="text-gray-600">{info.content}</p>
                          </div>
                        </a>
                      </HighlighterItem>
                    )
                  })}
                </div>
              </HighlightGroup>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <ShimmerButton
                  type="submit"
                  className="w-full px-8 py-4 text-lg"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </ShimmerButton>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

