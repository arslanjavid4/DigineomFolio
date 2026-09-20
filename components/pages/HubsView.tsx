"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HUB_ADVANTAGES } from "@/lib/digineom-content";

const easeOut = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: easeOut },
};

const hubs = [
  {
    city: "Lahore",
    copy: "Open-plan engineering floors with provisioned desks and call booths for EU and US overlap.",
    image: "/workspace/floor-01.webp",
  },
  {
    city: "Karachi",
    copy: "Focus zones and collaboration rooms for squads shipping to North American hours.",
    image: "/workspace/floor-03.webp",
  },
  {
    city: "Islamabad",
    copy: "Quiet delivery floors with enterprise connectivity and access control.",
    image: "/workspace/floor-02.webp",
  },
];

export default function HubsView() {
  return (
    <main className="min-h-screen bg-white text-[#17171c]">
      <Navigation />

      <section className="section-padding">
        <div className="container-custom">
          <p className="eyebrow text-[#1863dc]">Managed hubs</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">
            Nobody codes for you from a kitchen table.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Every DigiNeom engineer works from a co-working floor we manage — power, line, hardware,
            and rooms included. Illustrative facility story below; not a telemetry console.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-custom px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-3">
            {hubs.map((hub, index) => (
              <motion.article
                key={hub.city}
                {...reveal}
                transition={{ duration: 0.6, delay: index * 0.06, ease: easeOut }}
                className="overflow-hidden rounded-[22px] border border-[#d9d9dd]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={hub.image}
                    alt={`DigiNeom-managed co-working floor in ${hub.city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em]">{hub.city}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{hub.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f1f5ff]">
        <div className="container-custom">
          <motion.h2 {...reveal} className="display mb-10 text-3xl md:text-5xl">
            What the floor includes
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HUB_ADVANTAGES.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ duration: 0.55, delay: index * 0.04, ease: easeOut }}
                className="rounded-[22px] bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1863dc]">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/contact" className="pill bg-[#17171c] text-white hover:bg-[#1863dc]">
              See how seating works <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
