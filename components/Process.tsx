"use client";

import { motion } from 'framer-motion'
import Accordion05 from '@/components/ui/accordion-05'

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-8">
              A proven methodology that delivers exceptional results. We break down complex challenges into manageable steps, ensuring transparency and collaboration at every stage.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion05 />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

