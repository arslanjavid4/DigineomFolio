'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navigation({
  variant = 'default',
}: {
  variant?: 'default' | 'overlay'
}) {
  const overlay = variant === 'overlay'

  return (
    <nav
      className={
        overlay
          ? 'absolute inset-x-0 top-0 z-30 w-full'
          : 'sticky top-0 z-50 w-full border-b border-[#d9d9dd] bg-white/95 backdrop-blur'
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8 lg:px-12"
      >
        <Link href="/" className="inline-flex min-w-0 shrink items-center" aria-label="DigiNeom home">
          <Image
            src="/brand/logo.png"
            alt="DigiNeom — hire vetted remote software talent from Pakistan"
            width={160}
            height={48}
            className="h-7 w-auto max-w-full sm:h-8"
            priority
            sizes="160px"
          />
        </Link>

        <Link
          href="/contact"
          aria-label="Talk to us about a role"
          className="pill shrink-0 bg-[#17171c] px-3.5 py-2 text-xs text-white hover:bg-[#1863dc] sm:px-6 sm:py-3 sm:text-sm"
        >
          <span className="sm:hidden">Talk to us</span>
          <span className="hidden sm:inline">Talk to us about a role</span>
          <ArrowUpRight className="h-3.5 w-3.5 sm:h-[15px] sm:w-[15px]" />
        </Link>
      </motion.div>
    </nav>
  )
}
