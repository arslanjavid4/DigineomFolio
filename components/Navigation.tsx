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
        className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link href="/" className="inline-flex items-center" aria-label="DigiNeom home">
          <Image
            src="/Images/QVC9EYR2LA7kyLTy3yqvyEimTI.png"
            alt="DigiNeom Solutions"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <Link
          href="/contact"
          className="pill bg-[#17171c] text-white hover:bg-[#1863dc]"
        >
          Talk to us about a role <ArrowUpRight size={15} />
        </Link>
      </motion.div>
    </nav>
  )
}
