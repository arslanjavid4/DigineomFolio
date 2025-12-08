'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Projects Completed' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
]

export default function ClientsStats() {
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-3xl text-primary-900" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

