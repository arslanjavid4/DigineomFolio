'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Overview' },
  { href: '/talent', label: 'Talent' },
  { href: '/clients', label: 'Clients' },
  { href: '/hubs', label: 'Hubs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

export default function Navigation({
  variant = 'default',
}: {
  variant?: 'default' | 'overlay'
}) {
  const overlay = variant === 'overlay'
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? 'rounded-full px-3.5 py-2 text-sm font-semibold text-[#1863dc]'
                    : 'rounded-full px-3.5 py-2 text-sm text-[#17171c]/70 transition-colors hover:text-[#17171c]'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            aria-label="Talk to us about a role"
            className="pill shrink-0 bg-[#17171c] px-3.5 py-2 text-xs text-white hover:bg-[#1863dc] sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">Talk to us</span>
            <span className="hidden sm:inline">Talk to us about a role</span>
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-[15px] sm:w-[15px]" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9dd] text-[#17171c] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#d9d9dd] bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-[#17171c] hover:bg-[#f1f5ff]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}
