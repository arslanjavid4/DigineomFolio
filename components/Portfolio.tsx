'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description:
      'Modern analytics dashboard with real-time data visualization and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Figma', 'React', 'TypeScript'],
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description:
      'Secure mobile banking application with biometric authentication and transaction management.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Stripe'],
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Development',
    description:
      'Patient management system with appointment scheduling, medical records, and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Real Estate Platform',
    category: 'UI/UX Design',
    description:
      'Property listing platform with advanced search filters, virtual tours, and mortgage calculator.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description:
      'Comprehensive fitness app with workout plans, progress tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Flutter', 'Firebase', 'GraphQL'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our best work and successful client projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href="#"
                      className="flex-1 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-primary-50 transition-colors"
                    >
                      <ExternalLink className="inline mr-2" />
                      View
                    </a>
                    <a
                      href="#"
                      className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
                    >
                      <Github className="inline mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

