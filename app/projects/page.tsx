'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allProjects } from '@/lib/projects-data'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { FeaturedSpotlight } from '@/components/ui/featured-spotlight'

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#050505] relative">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white tracking-tight">
              Our
            </h1>
            <div className="h-40 flex items-center justify-center w-full">
              <TextHoverEffect text="PROJECTS" />
            </div>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto -mt-4">
              Explore our collection of successful projects and case studies
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-24">
            {allProjects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FeaturedSpotlight
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    index={index + 1}
                  />
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

