'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import GlassFractalVisual from './glass-fractal/GlassFractalVisual'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[185svh] bg-white md:min-h-[205svh]"
    >
      <div className="sticky top-[72px] h-[calc(100svh-72px)] min-h-[34rem] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_95%_0%,#eeeeef_0%,#f6f6f6_45%,#fafafa_78%)]" />
        <GlassFractalVisual sectionRef={sectionRef} />

        <div className="container-custom relative z-10 flex h-full flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="border-b border-[#17171c]/15 pb-7">
            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.7 }}
              className="display max-w-[11ch] text-[13.5vw] sm:text-7xl md:text-[clamp(4.75rem,8vw,8.6rem)]"
            >
              We make digital ideas matter.
            </motion.h1>
          </div>

          <div className="grid gap-6 border-t border-[#17171c]/15 bg-white/75 pt-7 backdrop-blur-[2px] lg:grid-cols-2 lg:bg-transparent lg:backdrop-blur-none">
            <p className="max-w-xl text-lg leading-relaxed sm:text-xl md:text-2xl">
              Big ideas, smart strategies, and endless creativity—translated into useful products, platforms, and brands.
            </p>
            <div className="flex flex-wrap items-start gap-3 lg:justify-end">
              <Link href="/contact" className="pill bg-[#1863dc] text-white hover:bg-[#0d47a1]">
                Get solutions <ArrowUpRight size={17} />
              </Link>
              <Link href="/projects" className="pill border border-[#17171c] bg-white/60 hover:bg-white">
                View work <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
