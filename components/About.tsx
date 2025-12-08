'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, Heart } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Projects Completed' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: Heart, value: '98%', label: 'Client Satisfaction' },
]

const values = [
  {
    title: 'Innovation',
    description:
      'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    title: 'Quality',
    description:
      'Every line of code and every design element is crafted with precision and attention to detail.',
  },
  {
    title: 'Collaboration',
    description:
      'We work closely with our clients as partners, ensuring their vision becomes reality.',
  },
  {
    title: 'Transparency',
    description:
      'Clear communication, honest timelines, and transparent processes throughout the project lifecycle.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Digineom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and strategists
            dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-3xl text-primary-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Our Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100"
              >
                <h4 className="text-xl font-bold mb-3 text-primary-700">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A diverse group of talented professionals working together to bring
            your ideas to life. From developers to designers, we combine our
            expertise to deliver outstanding results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}

