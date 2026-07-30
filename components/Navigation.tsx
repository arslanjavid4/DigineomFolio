'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Work', href: '/projects' },
    { name: 'Capabilities', href: '/#services' },
    { name: 'Studio', href: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#d9d9dd] bg-white/95 backdrop-blur">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-2 items-center px-5 sm:px-8 md:grid-cols-3 lg:px-12"
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

          <div className="hidden items-center justify-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[#1863dc]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="pill ml-auto hidden bg-[#17171c] text-white hover:bg-[#003c33] md:inline-flex">
            Start a project <ArrowUpRight size={15} />
          </Link>

          <button
            className="ml-auto md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute left-0 top-[72px] w-full border-b bg-white px-5 py-6 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block border-t py-4 text-2xl font-semibold tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="pill mt-5 w-full bg-[#17171c] text-white">
                Start a project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}
