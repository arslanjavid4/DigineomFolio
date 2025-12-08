'use client'

import { ProjectsCarousel } from '@/components/ui/projects-carousel'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'permabull',
    title: 'Permabull',
    description: 'A cutting-edge trading platform with real-time analytics and advanced charting capabilities.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    href: '/projects/permabull',
  },
  {
    id: 'smoke-heaven',
    title: 'Smoke Heaven',
    description: 'Elegant e-commerce platform for premium products with seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    href: '/projects/smoke-heaven',
  },
  {
    id: 'atompad',
    title: 'AtomPad',
    description: 'Modern note-taking application with collaborative features and cloud synchronization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/projects/atompad',
  },
  {
    id: 'harmony',
    title: 'Harmony',
    description: 'Music streaming platform with personalized recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    href: '/projects/harmony',
  },
  {
    id: 'synapticflow',
    title: 'SynapticFlow',
    description: 'AI-powered workflow automation tool that streamlines business processes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    href: '/projects/synapticflow',
  },
]

export default function PortfolioPreview() {
  const projectSlides = projects.map((project) => (
    <Link key={project.id} href={project.href}>
      <div className="group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
        <div className="relative h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content overlay - always visible but enhanced on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                View Case Study
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Explore the <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Showcasing our best work and successful client projects
          </p>
        </motion.div>

        <ProjectsCarousel slides={projectSlides} />

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

