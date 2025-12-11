'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientsStats from '@/components/ClientsStats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import PortfolioPreview from '@/components/PortfolioPreview';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Preloader } from '@/components/ui/preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] relative">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100]"
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle radial gradient glow at top center */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)'
          }}
        />
      </div>
      <Navigation />
      <Hero />
      <ClientsStats />
      <Services />
      <PortfolioPreview />
      <Process />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
