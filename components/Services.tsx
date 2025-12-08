'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Database, Cloud } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, fast, and secure solutions.',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that drive engagement.',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description:
      'Robust server-side solutions with RESTful APIs, microservices architecture, and cloud-native applications.',
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'AWS, Azure, and GCP expertise. We help you migrate, scale, and optimize your infrastructure in the cloud.',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1',
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
]

export default function Services() {
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.spanClass} glass-card-hover p-8 relative overflow-hidden group`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {service.description}
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
