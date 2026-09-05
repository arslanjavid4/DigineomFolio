'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ZoomParallax } from '@/components/ui/zoom-parallax'
import { getProjectById } from '@/lib/projects-data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = getProjectById(slug)
  const nextProject = project?.nextProjectId
    ? getProjectById(project.nextProjectId)
    : undefined

  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-neutral-600">The project you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="section-padding pb-12">
        <div className="container-custom grid gap-8 border-b pb-12 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#1863dc]">{project.category} / {project.year}</p>
          </div>
          <div>
          <h1 className="display text-7xl md:text-9xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-600 md:text-2xl">
            {project.description}
          </p>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1863dc]"
            >
              View live website
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}</div>
        </div>
      </section>

      <ZoomParallax
        images={[
          { src: project.image, alt: project.title },
          ...project.gallery.map((src) => ({ src, alt: project.title })),
        ]}
      />

      <div className="pb-24 pt-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-24">
            <div className="lg:col-start-2 lg:row-start-1 h-fit lg:sticky lg:top-32">
              <aside className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-10 border-l pl-8 md:pl-10"
                >
                  <div className="space-y-6">
                    <h4 className="eyebrow text-neutral-500">
                      Project Info
                    </h4>
                    <div className="space-y-4">
                      {project.client && (
                        <div className="group">
                          <span className="eyebrow mb-1 block text-neutral-500">
                            Client
                          </span>
                          <span className="text-lg md:text-xl">
                            {project.client}
                          </span>
                        </div>
                      )}
                      {project.role && (
                        <div className="group">
                          <span className="eyebrow mb-1 block text-neutral-500">
                            My Role
                          </span>
                          <span className="text-lg md:text-xl">
                            {project.role}
                          </span>
                        </div>
                      )}
                      {project.year && (
                        <div className="group">
                          <span className="eyebrow mb-1 block text-neutral-500">
                            Year
                          </span>
                          <span className="text-lg md:text-xl">
                            {project.year}
                          </span>
                        </div>
                      )}
                      {project.services && (
                        <div className="group">
                          <span className="eyebrow mb-1 block text-neutral-500">
                            Service Provided
                          </span>
                          <span className="text-lg md:text-xl">
                            {project.services}
                          </span>
                        </div>
                      )}
                      {project.industry && (
                        <div className="group">
                          <span className="eyebrow mb-1 block text-neutral-500">
                            Industry
                          </span>
                          <span className="text-lg md:text-xl">
                            {project.industry}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="eyebrow text-neutral-500">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1.5 font-mono text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.data && project.data.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="eyebrow text-neutral-500">
                        Snapshot
                      </h4>
                      <div className="grid grid-cols-1 gap-6">
                        {project.data.map((stat, index) => (
                          <div
                            key={index}
                            className="relative border-l-2 pl-4"
                          >
                            <div className="mb-1 text-3xl leading-none">
                              {stat.value}
                            </div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </aside>
            </div>

            <div className="lg:col-start-1 lg:row-start-1 space-y-24">
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-sm text-[#1863dc]">01</span>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">The Overview</h2>
                </div>
                <div className="max-w-none text-lg leading-relaxed text-neutral-600">
                  <p className="mb-6 text-xl font-medium text-[#17171c]">
                    {project.description}
                  </p>
                  <p>{project.overview}</p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-sm text-[#1863dc]">02</span>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">The Challenge</h2>
                </div>
                <div className="max-w-none text-lg leading-relaxed text-neutral-600">
                  <p>{project.challenge}</p>
                </div>
              </motion.section>

              {project.gallery.length > 1 && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {project.gallery.slice(1, 5).map((src, index) => (
                    <div
                      key={src}
                      className={`relative overflow-hidden rounded-2xl border bg-[#eeece7] ${
                        index === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.section>
              )}

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-sm text-[#1863dc]">03</span>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    Challenges & Solutions
                  </h2>
                </div>
                <div className="space-y-10">
                  {project.solutions.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-4 text-2xl font-semibold">{group.title}</h3>
                      <ul className="list-none space-y-4 pl-0">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-neutral-600">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ff7759]" />
                            <span className="font-light leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>

      {nextProject && (
        <section className="border-t border-white/10 bg-[#1863dc] px-5 py-20 text-white sm:px-8 lg:px-12">
          <div className="container-custom">
            <p className="mb-4 text-sm uppercase tracking-widest text-[#c7dbff]">
              Next Project
            </p>
            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col justify-between gap-6 md:flex-row md:items-center"
            >
              <div>
                <h3 className="text-4xl font-semibold tracking-[-0.05em] transition-colors group-hover:text-[#c7dbff] md:text-6xl">
                  {nextProject.title}
                </h3>
                <p className="mt-3 max-w-xl text-white/75">{nextProject.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
                  {nextProject.category}
                </span>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 md:w-64">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <ArrowRight className="hidden h-8 w-8 text-white transition-all group-hover:translate-x-1 lg:block" />
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
