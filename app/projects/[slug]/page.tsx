'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ZoomParallax } from '@/components/ui/zoom-parallax'
import { getProjectById } from '@/lib/projects-data'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

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

      {/* Project Title Section */}
      <section className="pt-32 pb-10 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="gradient-text">{project.title}</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      {/* Hero Parallax */}
      <ZoomParallax mainImage={project.image} />

      {/* Project Details & Content */}
      <div className="pb-24 pt-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-24">

            {/* Main Content - Left Side for better reading flow on large screens, or kept on right? 
                User asked for sidebar. Usually sidebar is on right for editorial or left. 
                Original was Left Sidebar. Let's keep Left Sidebar pattern or swap? 
                Let's stick to the grid layout but improve the visual weight.
            */}
            <div className="lg:col-start-2 lg:row-start-1 h-fit lg:sticky lg:top-32">
              <aside className="relative">
                {/* Decorative background blur for sidebar */}
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 rounded-full" />

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-10 border-l border-white/10 pl-8 md:pl-10"
                >
                  {/* Client Info Group */}
                  {(project.client || project.industry || project.timeline) && (
                    <div className="space-y-6">
                      <h4 className="text-sm font-medium text-white/40 uppercase tracking-widest">
                        Project Info
                      </h4>
                      <div className="space-y-4">
                        {project.client && (
                          <div className="group">
                            <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1 group-hover:text-blue-400 transition-colors">Client</span>
                            <span className="text-lg md:text-xl font-light text-white">{project.client}</span>
                          </div>
                        )}
                        {project.industry && (
                          <div className="group">
                            <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1 group-hover:text-blue-400 transition-colors">Industry</span>
                            <span className="text-lg md:text-xl font-light text-white">{project.industry}</span>
                          </div>
                        )}
                        {project.timeline && (
                          <div className="group">
                            <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1 group-hover:text-blue-400 transition-colors">Timeline</span>
                            <span className="text-lg md:text-xl font-light text-white">{project.timeline}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-medium text-white/40 uppercase tracking-widest">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-neutral-900/50 border border-white/5 text-neutral-300 rounded text-xs font-mono hover:border-white/20 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics - if available */}
                  {project.data && project.data.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-sm font-medium text-white/40 uppercase tracking-widest">
                        Impact
                      </h4>
                      <div className="grid grid-cols-1 gap-6">
                        {project.data.map((stat, index) => (
                          <div key={index} className="relative pl-4 border-l-2 border-white/10 hover:border-blue-500/50 transition-colors">
                            <div className="text-3xl font-light text-white mb-1 leading-none">{stat.value}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wide">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Optional Link Buttons could go here */}

                </motion.div>
              </aside>
            </div>

            {/* Main Narrative Content */}
            <div className="lg:col-start-1 lg:row-start-1 space-y-24">

              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-blue-500 text-sm">01</span>
                  <h2 className="text-2xl md:text-3xl font-light text-white">The Overview</h2>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed">
                  <p className="text-xl text-white/90 mb-6 font-normal">
                    {project.description}
                  </p>
                  <p>
                    This project represented a pivotal moment for {project.client || 'the client'}, requiring a complete reimagining of their digital presence.
                    We approached the challenge not just as a visual update, but as a strategic transformation designed to position them as leaders in the {project.industry || 'industry'}.
                  </p>
                  <p>
                    Our team engaged in deep discovery sessions to uncover the core value propositions that needed to be communicated, ensuring that every pixel served a purpose.
                  </p>
                </div>
              </motion.section>

              {/* The Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-blue-500 text-sm">02</span>
                  <h2 className="text-2xl md:text-3xl font-light text-white">The Challenge</h2>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed">
                  <p>
                    The primary hurdle was reconciling complex technical requirements with the need for a seamless, intuitive user experience.
                    Legacy systems posed significant integration challenges, and the performance targets were ambitious.
                  </p>
                  <ul className="list-none space-y-4 pl-0 my-8">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Achieving sub-second load times while handling large datasets.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Creating a unified design system that could scale across web and mobile.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>Ensuring accessibility standards were met without compromising the visual flair.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* The Solution */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-blue-500 text-sm">03</span>
                  <h2 className="text-2xl md:text-3xl font-light text-white">The Solution</h2>
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed">
                  <p>
                    We engineered a bespoke solution leveraging the power of modern web technologies. By adopting a headless architecture, we decoupled the frontend performance from backend complexity, allowing for rapid iteration and deployment.
                  </p>
                  <p>
                    Visually, we established a design language that balanced sophistication with clarity. Use of whitespace, typographic hierarchy, and subtle motion cues guided users naturally through the experience.
                  </p>
                </div>
              </motion.section>

              {/* Quote / Highlight */}
              <motion.blockquote
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-4 border-blue-500 pl-8 py-4 my-12"
              >
                <p className="text-xl md:text-2xl italic text-white font-light">
                  "The results exceeded our expectations. Not only did we see an immediate uptick in engagement, but the internal feedback has been overwhelmingly positive."
                </p>
                <footer className="mt-4 text-sm text-neutral-500 uppercase tracking-widest">— Project Lead</footer>
              </motion.blockquote>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
