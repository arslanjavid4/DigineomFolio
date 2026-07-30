'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { allProjects } from '@/lib/projects-data'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 grid gap-8 border-b pb-12 lg:grid-cols-[1fr_2fr] lg:items-end"
          >
            <p className="eyebrow text-[#003c33]">Work / 2022—2024</p>
            <div><h1 className="display text-7xl md:text-9xl">Selected projects.</h1><p className="mt-8 max-w-2xl text-xl text-neutral-600">Product stories spanning fintech, commerce, DeFi, and AI-powered platforms.</p></div>
          </motion.div>

          <div>
            {allProjects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group block border-t py-8 md:py-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid gap-6 md:grid-cols-[1fr_1fr_32px] md:items-center"
                >
                  <div><h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">{project.title}</h2><p className="eyebrow mt-3 text-[#1863dc]">{project.category} / {project.year}</p></div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#eeece7]"><Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

