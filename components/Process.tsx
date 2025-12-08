'use client'

import FeatureCarousel from '@/components/ui/feature-carousel'
import { Search, Palette, Rocket, BarChart3 } from 'lucide-react'

const processSteps = [
  {
    title: 'Discover & Strategize',
    description:
      'We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.',
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: 'Design & Visualize',
    description:
      'Our creative team shapes the visual identity, creating stunning mockups and prototypes that bring the strategy to life.',
    icon: <Palette className="w-8 h-8" />,
  },
  {
    title: 'Build & Launch',
    description:
      'Our creative team gets to work, blending innovation with strategy to design visuals, content, and assets that resonate with your brand. Every detail is refined to perfection.',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: 'Refine & Grow',
    description:
      'We don\'t stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand keeps evolving and thriving in the digital landscape.',
    icon: <BarChart3 className="w-8 h-8" />,
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            Our Work <span className="text-primary-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        <FeatureCarousel features={processSteps} />
      </div>
    </section>
  )
}

