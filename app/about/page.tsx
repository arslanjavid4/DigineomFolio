import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Award, Globe, Heart, Target, Zap, Shield, Lightbulb } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Projects Completed' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: Heart, value: '98%', label: 'Client Satisfaction' },
]

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description:
      'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Zap,
    title: 'Quality',
    description:
      'Every line of code and every design element is crafted with precision and attention to detail.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We work closely with our clients as partners, ensuring their vision becomes reality.',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description:
      'Clear communication, honest timelines, and transparent processes throughout the project lifecycle.',
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description:
      'We think outside the box to solve complex problems and create unique digital experiences.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, setting high standards and exceeding expectations.',
  },
]

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Development',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-900">
              About <span className="text-primary-600">DigiNeom</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and strategists
              dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-900">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2020, DigiNeom emerged from a simple belief: that
                  every business deserves access to world-class digital
                  solutions. What started as a small team of passionate
                  developers has grown into a full-service agency serving
                  clients across the globe.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We've helped startups launch their first products, enabled
                  enterprises to transform their digital presence, and
                  everything in between. Our commitment to innovation, quality,
                  and client success has been the driving force behind our
                  growth.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      2020
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900">Founded</h3>
                      <p className="text-gray-600 text-sm">
                        Started with a vision
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      50+
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900">Team Members</h3>
                      <p className="text-gray-600 text-sm">
                        Talented professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      100+
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900">Projects</h3>
                      <p className="text-gray-600 text-sm">
                        Successfully delivered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                      <Icon className="text-3xl text-primary-900" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100"
                  >
                    <div className="bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-primary-900">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
              Meet The Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-primary-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

