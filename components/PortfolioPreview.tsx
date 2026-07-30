'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { allProjects } from '@/lib/projects-data'

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-[#eeece7]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-5 border-t border-[#17171c] pt-6 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow mb-5 text-[#003c33]">Selected work</p>
            <h2 className="display text-6xl md:text-8xl">Four products.<br />Four real problems.</h2>
          </div>
          <Link href="/projects" className="pill border border-[#17171c] hover:bg-white">All projects <ArrowRight size={16} /></Link>
        </motion.div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {allProjects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`} className={`group ${index % 2 ? 'md:mt-20' : ''}`}>
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[18px] bg-white">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="grid grid-cols-[1fr_auto] border-t border-[#17171c] pt-4">
                <div>
                  <p className="eyebrow mb-2 text-neutral-500">0{index + 1} / {project.category}</p>
                  <h3 className="text-4xl font-semibold tracking-[-0.05em]">{project.title}</h3>
                </div>
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
