'use client'

import { motion } from 'framer-motion'
import { SparklesCore } from '@/components/ui/sparkles'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Balancer } from 'react-wrap-balancer'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <Balancer>
              Big ideas, smart strategies, and endless creativity to supercharge your brand!
            </Balancer>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            <Balancer>
              Transforming businesses through innovative software development and cutting-edge web design.
            </Balancer>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <ShimmerButton className="px-8 py-4 text-lg">
                Get Solutions
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
