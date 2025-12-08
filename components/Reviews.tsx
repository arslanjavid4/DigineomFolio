'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content:
      'DigiNeom transformed our digital presence. Their attention to detail and innovative approach exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, CloudVault',
    content:
      'Working with DigiNeom was a game-changer. They delivered a product that not only looks amazing but performs flawlessly.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandFlow',
    content:
      'The team at DigiNeom understood our vision and brought it to life. Professional, creative, and results-driven.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            What Our <span className="text-primary-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-200 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.content}"
              </p>
              <div>
                <div className="font-bold text-primary-900">{review.name}</div>
                <div className="text-sm text-gray-600">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

