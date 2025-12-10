'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Timeline } from '@/components/ui/timeline';
import TeamSection from '@/components/TeamSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const timelineData = [
    {
      title: "2020",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">The Inception</h4>
          <p className="text-neutral-400 mb-6">
            DigiNeom was born in a garage. No VC money. Just two laptops and a belief that software could be better.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
              alt="Garage startup setup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">First Major Win</h4>
          <p className="text-neutral-400 mb-6">
            Secured our first Fortune 500 client. Delivered a complete cloud migration in record time.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team celebrating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">Scaling the Team</h4>
          <p className="text-neutral-400 mb-6">
            Expanded to 20 employees. Opened our HQ in the tech district. Launched our internal design system.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">Global Reach</h4>
          <p className="text-neutral-400 mb-6">
            Projects delivered in 15 countries. Revenue hit 8 figures. Became an official AWS partner.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Global map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">The AI Revolution</h4>
          <p className="text-neutral-400 mb-6">
            Pivoted to AI-first development. Integrated LLMs into 80% of client workflows.
          </p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
              alt="AI technology"
              fill
              className="object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] relative">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-20" />

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Obsessed with <span className="gradient-text">Perfection.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto"
          >
            We are a team of 50+ engineers, designers, and thinkers.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline data={timelineData} />

      {/* Team Section */}
      <TeamSection />

      <Footer />
    </main>
  );
}
