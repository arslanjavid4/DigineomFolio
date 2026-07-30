import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientsStats from '@/components/ClientsStats';
import Services from '@/components/Services';
import PortfolioPreview from '@/components/PortfolioPreview';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ClientsStats />
      <Services />
      <section className="section-padding bg-[#003c33] text-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-[#a9e8cc]">How we work</p>
          <div>
            <h2 className="display max-w-5xl text-6xl md:text-8xl">Clarity before complexity.</h2>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/75">
              We move from discovery and strategy through product design, agile development, quality assurance, and launch—keeping every decision tied to the people it serves.
            </p>
          </div>
        </div>
      </section>
      <PortfolioPreview />
      <CTA />
      <Footer />
    </main>
  );
}
