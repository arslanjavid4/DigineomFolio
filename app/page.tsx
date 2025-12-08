import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ClientsStats from '@/components/ClientsStats'
import Services from '@/components/Services'
import Process from '@/components/Process'
import PortfolioPreview from '@/components/PortfolioPreview'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative">
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
      <Process />
      <PortfolioPreview />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
