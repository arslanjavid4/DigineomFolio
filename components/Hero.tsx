'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Balancer } from 'react-wrap-balancer'
import { WebGLShader } from '@/components/ui/web-gl-shader'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4">
      {/* WebGL Shader Background */}
      <WebGLShader />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            <span className="gradient-text block">
              <Balancer>
                Big ideas, smart strategies, and endless creativity to supercharge your brand!
              </Balancer>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <Balancer>
              Transforming businesses through innovative software development and cutting-edge web design.
            </Balancer>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/projects">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all gap-2">
                View Our Work
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Element - Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
            <div className="relative bg-neutral-900 rounded-2xl overflow-hidden aspect-video">
              {/* Mock dashboard grid */}
              <div className="absolute inset-0 p-8 grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl border border-white/10 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-3xl blur-xl opacity-50 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
