'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Rocket, BarChart3 } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Discover & Strategize',
    description:
      'We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Design & Visualize',
    description:
      'Our creative team shapes the visual identity, creating stunning mockups and prototypes that bring the strategy to life.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Build & Launch',
    description:
      'Our creative team gets to work, blending innovation with strategy to design visuals, content, and assets that resonate with your brand. Every detail is refined to perfection.',
    icon: Rocket,
  },
]

export default function Process() {
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
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        {/* Step-based Timeline Layout */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-white/20 via-white/10 to-white/20" />
          
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl font-bold">
                      {step.step}
                    </div>
                    {/* Connecting dot */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-white/20 border-2 border-white/10" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{step.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

