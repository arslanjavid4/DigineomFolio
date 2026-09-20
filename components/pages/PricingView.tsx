"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CostCalculator, PricingPlans } from "@/components/PricingBlocks";

export default function PricingView() {
  return (
    <main className="min-h-screen bg-white text-[#17171c]">
      <Navigation />

      <section className="section-padding">
        <div className="container-custom">
          <p className="eyebrow text-[#1863dc]">Pricing & pods</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">
            Same standard. A clearer cost base.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Engagements are scoped after a briefing call. Figures below are directional — stack and
            seniority set the final seat.
          </p>

          <div className="mt-14">
            <PricingPlans />
          </div>

          <div className="mt-16">
            <CostCalculator />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
