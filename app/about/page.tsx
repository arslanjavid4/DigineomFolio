'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Timeline } from '@/components/ui/timeline';
import TeamSection from '@/components/TeamSection';
import AboutHero from '@/components/AboutHero';
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
            Expanded the team and launched our internal design system.
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
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="section-padding">
        <div className="container-custom grid gap-8 border-b pb-14 lg:grid-cols-[1fr_2fr] lg:items-end">
          <p className="eyebrow text-[#003c33]">About DigiNeom</p>
          <div>
            <h1 className="display text-7xl md:text-9xl">Small studio.<br />Expansive thinking.</h1>
            <p className="mt-9 max-w-3xl text-xl leading-relaxed text-neutral-600 md:text-2xl">We create exceptional digital experiences through innovative software development and cutting-edge web design.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#edfce9]">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-[#003c33]">Our story / 2020—24</p>
          <div>
            {[
              ['2020', 'The Inception', 'DigiNeom was born in a garage. No VC money. Just two laptops and a belief that software could be better.'],
              ['2021', 'First Major Win', 'Secured our first Fortune 500 client. Delivered a complete cloud migration in record time.'],
              ['2022', 'Scaling the Team', 'Expanded the team and launched our internal design system.'],
              ['2023', 'Global Reach', 'Projects delivered in 15 countries. Revenue hit 8 figures. Became an official AWS partner.'],
              ['2024', 'The AI Revolution', 'Pivoted to AI-first development. Integrated LLMs into 80% of client workflows.'],
            ].map(([year, title, copy]) => (
              <article key={year} className="grid gap-5 border-t border-[#003c33]/30 py-8 md:grid-cols-[100px_1fr]">
                <span className="font-mono text-sm text-[#003c33]">{year}</span>
                <div><h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2><p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
