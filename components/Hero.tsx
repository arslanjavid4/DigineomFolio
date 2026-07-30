'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-padding overflow-hidden pb-16 md:pb-24">
      <div className="container-custom">
        <div className="mb-12 grid gap-8 border-b pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow text-[#003c33]">
            Independent digital product studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="display max-w-5xl text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.4rem]"
          >
            We make digital ideas matter.
          </motion.h1>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <p className="max-w-xl text-xl leading-relaxed md:text-2xl">
            Big ideas, smart strategies, and endless creativity—translated into useful products, platforms, and brands.
          </p>
          <div className="flex items-start gap-3 lg:justify-end">
            <Link href="/contact" className="pill bg-[#1863dc] text-white hover:bg-[#003c33]">
              Get solutions <ArrowUpRight size={17} />
            </Link>
            <Link href="/projects" className="pill border border-[#17171c] hover:bg-[#eeece7]">
              View work <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
