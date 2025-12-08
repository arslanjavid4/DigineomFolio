'use client'

import { motion } from 'framer-motion'

// Mock company logos - using text placeholders, replace with actual logos
const companies = [
  'TechCorp', 'CloudVault', 'BrandFlow', 'DataSync', 'InnovateLab', 'DigitalEdge'
]

export default function ClientsStats() {
  return (
    <section className="section-padding border-b border-white/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        {/* Ticker/Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-neutral-500 opacity-50 hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                {company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

