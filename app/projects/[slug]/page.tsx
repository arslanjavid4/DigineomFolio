'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { getProjectById } from '@/lib/projects-data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { use } from 'react'

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = getProjectById(slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] relative">
        <Navigation />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-neutral-400">The project you're looking for doesn't exist.</p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] relative">
      <Navigation />
      
      {/* Main Content with Sticky Sidebar */}
      <div className="pt-24 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-16">
            {/* Sticky Left Sidebar - Metadata */}
            <aside className="lg:sticky lg:top-24 h-fit lg:max-h-[calc(100vh-8rem)] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 space-y-8"
              >
                {/* Data/Stats */}
                {project.data && project.data.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                      Data
                    </h3>
                    <div className="space-y-4">
                      {project.data.map((stat, index) => (
                        <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-sm text-neutral-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client */}
                {project.client && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                      Client
                    </h3>
                    <p className="text-white text-lg font-medium">{project.client}</p>
                  </div>
                )}

                {/* Industry */}
                {project.industry && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                      Industry
                    </h3>
                    <p className="text-white text-lg font-medium">{project.industry}</p>
                  </div>
                )}

                {/* Timeline */}
                {project.timeline && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                      Timeline
                    </h3>
                    <p className="text-white text-lg font-medium">{project.timeline}</p>
                  </div>
                )}

                {/* Category */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                    Category
                  </h3>
                  <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </aside>

            {/* Scrollable Right Content */}
            <div className="min-h-screen">
              {/* Scroll Animation Hero */}
              <div className="flex flex-col overflow-hidden mb-20">
                <ContainerScroll
                  titleComponent={
                    <>
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        <span className="gradient-text">{project.title}</span>
                      </h1>
                      <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        {project.description}
                      </p>
                    </>
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-center"
                    draggable={false}
                  />
                </ContainerScroll>
              </div>

              {/* Project Content Sections */}
              <div className="space-y-20">
                {/* Overview Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Project Overview</h2>
                  <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                      {project.description}
                    </p>
                    <p>
                      This project represents a comprehensive solution designed to address the unique challenges
                      faced by our client. Through careful planning, innovative design, and cutting-edge technology,
                      we delivered a platform that not only meets but exceeds expectations.
                    </p>
                    <p>
                      The implementation involved close collaboration with stakeholders, iterative development cycles,
                      and a focus on user experience that resulted in measurable improvements across key performance
                      indicators.
                    </p>
                  </div>
                </motion.section>

                {/* Challenge Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">The Challenge</h2>
                  <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                      Our client approached us with a complex set of requirements that demanded both technical
                      excellence and creative problem-solving. The primary challenges included scalability concerns,
                      integration with existing systems, and the need for a seamless user experience across multiple
                      platforms.
                    </p>
                    <p>
                      Additionally, tight deadlines and evolving requirements throughout the development process
                      required a flexible approach and constant communication to ensure alignment with business goals.
                    </p>
                  </div>
                </motion.section>

                {/* Solution Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Our Solution</h2>
                  <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                      We developed a robust, scalable solution leveraging modern technologies and best practices.
                      The architecture was designed with future growth in mind, ensuring the platform can evolve
                      alongside the client's business needs.
                    </p>
                    <p>
                      Key features include real-time data processing, intuitive user interfaces, comprehensive
                      analytics, and seamless third-party integrations. The solution was built with performance
                      and security as top priorities, resulting in a platform that users trust and enjoy using.
                    </p>
                  </div>
                </motion.section>

                {/* Results Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-4xl mb-20"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Results & Impact</h2>
                  <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                      The project has delivered significant value to our client, with measurable improvements
                      across multiple metrics. User engagement has increased substantially, and the platform has
                      become an integral part of their daily operations.
                    </p>
                    <p>
                      The success of this project has also opened doors for future collaborations and has
                      established a strong foundation for continued innovation and growth.
                    </p>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
