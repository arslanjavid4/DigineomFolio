'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ArrowRight } from 'lucide-react'
import { Balancer } from 'react-wrap-balancer'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <Balancer>
              Ready to Transform Your Digital Presence?
            </Balancer>
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            <Balancer>
              Let's discuss how we can help bring your vision to life and drive real results for your business.
            </Balancer>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <ShimmerButton
                className="px-8 py-4 text-lg"
                background="rgba(255, 255, 255, 0.2)"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </ShimmerButton>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

