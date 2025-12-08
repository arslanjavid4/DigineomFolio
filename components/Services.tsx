'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Database, Cloud, TrendingUp } from 'lucide-react'
import { WavePath } from '@/components/ui/wave-path'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, fast, and secure solutions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that drive engagement.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description:
      'Robust server-side solutions with RESTful APIs, microservices architecture, and cloud-native applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'AWS, Azure, and GCP expertise. We help you migrate, scale, and optimize your infrastructure in the cloud.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy',
    description:
      'Data-driven strategies to grow your digital presence, improve conversions, and achieve your business goals.',
  },
]

export default function Services() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
              Our <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-primary-50/50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-primary-100"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-3xl text-primary-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <WavePath className="text-white" />
      </div>
    </>
  )
}
