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
    <main className="min-h-screen">
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
