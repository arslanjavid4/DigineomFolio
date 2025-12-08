'use client'

import { Gallery4 } from '@/components/ui/gallery4'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 'permabull',
    title: 'Permabull',
    description: 'A cutting-edge trading platform with real-time analytics and advanced charting capabilities.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    href: '/projects#permabull',
  },
  {
    id: 'smoke-heaven',
    title: 'Smoke Heaven',
    description: 'Elegant e-commerce platform for premium products with seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    href: '/projects#smoke-heaven',
  },
  {
    id: 'atompad',
    title: 'AtomPad',
    description: 'Modern note-taking application with collaborative features and cloud synchronization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/projects#atompad',
  },
  {
    id: 'harmony',
    title: 'Harmony',
    description: 'Music streaming platform with personalized recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    href: '/projects#harmony',
  },
  {
    id: 'synapticflow',
    title: 'SynapticFlow',
    description: 'AI-powered workflow automation tool that streamlines business processes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    href: '/projects#synapticflow',
  },
]

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <Gallery4
          title="Explore the Projects"
          description="Showcasing our best work and successful client projects"
          items={projects}
        />

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

