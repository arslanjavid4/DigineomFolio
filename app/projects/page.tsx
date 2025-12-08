import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const allProjects = [
  {
    title: 'Permabull',
    description: 'A cutting-edge trading platform with real-time analytics and advanced charting capabilities.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Trading', 'WebSocket'],
    category: 'Web Development',
    link: '#',
    github: '#',
  },
  {
    title: 'Smoke Heaven',
    description: 'Elegant e-commerce platform for premium products with seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'CMS'],
    category: 'E-Commerce',
    link: '#',
    github: '#',
  },
  {
    title: 'AtomPad',
    description: 'Modern note-taking application with collaborative features and cloud synchronization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'Firebase', 'Real-time', 'PWA'],
    category: 'Productivity',
    link: '#',
    github: '#',
  },
  {
    title: 'Harmony',
    description: 'Music streaming platform with personalized recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'Audio', 'ML'],
    category: 'Entertainment',
    link: '#',
    github: '#',
  },
  {
    title: 'SynapticFlow',
    description: 'AI-powered workflow automation tool that streamlines business processes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['AI/ML', 'Python', 'Automation', 'API'],
    category: 'SaaS',
    link: '#',
    github: '#',
  },
  {
    title: 'HealthCare Portal',
    description: 'Patient management system with appointment scheduling and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'AWS', 'HIPAA'],
    category: 'Healthcare',
    link: '#',
    github: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search filters and virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'MongoDB', '3D'],
    category: 'Real Estate',
    link: '#',
    github: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Comprehensive fitness app with workout plans and progress tracking.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Flutter', 'Firebase', 'GraphQL', 'Wearables'],
    category: 'Mobile',
    link: '#',
    github: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Modern analytics dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'TypeScript', 'Microservices'],
    category: 'SaaS',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
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
              Our <span className="text-primary-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of successful projects and case studies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <a
                        href={project.link}
                        className="flex-1 bg-white text-primary-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 bg-primary-900 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-primary-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary-600 font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 text-primary-900">
                    {project.title}
                  </h3>
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
      <Footer />
    </main>
  )
}

