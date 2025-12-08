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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
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
              className="glass-card-hover p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed italic">
                "{review.content}"
              </p>
              <div>
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-sm text-neutral-400">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

