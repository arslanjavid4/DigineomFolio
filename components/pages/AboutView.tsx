"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ABOUT_BELIEFS } from "@/lib/digineom-content";
import { FolderTabCard } from "@/components/illustrative/FolderTabCard";
import { PlacementTicket } from "@/components/illustrative/PlacementTicket";
import { StackedFolders } from "@/components/illustrative/StackedFolders";

const easeOut = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: easeOut },
};

const beliefVisuals = [
  {
    ...ABOUT_BELIEFS[0],
    image: "/workspace/floor-02.webp",
    primaryValue: "<3%",
    primaryLabel: "placed",
    secondaryValue: "Degree",
    secondaryLabel: "verified",
  },
  {
    ...ABOUT_BELIEFS[1],
    image: "/workspace/floor-04.webp",
    primaryValue: "100%",
    primaryLabel: "seated",
    secondaryValue: "Managed",
    secondaryLabel: "floors",
  },
  {
    ...ABOUT_BELIEFS[2],
    image: "/workspace/floor-01.webp",
    primaryValue: "1",
    primaryLabel: "partner",
    secondaryValue: "You",
    secondaryLabel: "manage work",
  },
];

const tickets = [
  {
    step: "01",
    label: "Brief",
    title: "Tell us the role",
    detail: "Stack, seniority, timezone overlap",
    location: "Anywhere you hire from",
    ticketId: "#DN-BRIEF",
  },
  {
    step: "02",
    label: "Vet",
    title: "Degree & live coding",
    detail: "Independent checks before any CV",
    location: "Pakistan delivery hubs",
    ticketId: "#DN-VET",
  },
  {
    step: "03",
    label: "Choose",
    title: "You interview",
    detail: "Shortlist only — you pick",
    location: "Your process",
    ticketId: "#DN-INT",
  },
  {
    step: "04",
    label: "Seat",
    title: "They start seated",
    detail: "Managed desk from day one",
    location: "Lahore · Karachi · Islamabad",
    ticketId: "#DN-SEAT",
  },
];

export default function AboutView() {
  return (
    <main className="min-h-screen bg-white text-[#17171c]">
      <Navigation />

      <section className="section-padding">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p {...reveal} className="eyebrow text-[#1863dc]">
              About DigiNeom
            </motion.p>
            <motion.h1 {...reveal} className="display mt-4 text-5xl md:text-7xl">
              The managed engineering model built for scale.
            </motion.h1>
            <motion.p
              {...reveal}
              className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600"
            >
              We built DigiNeom because companies were tired of open freelance marketplaces —
              ghosting, unverified claims, dropped calls — and because local hiring in London,
              Berlin, or New York had become prohibitively slow and expensive.
            </motion.p>
            <motion.div {...reveal} className="mt-8 flex flex-wrap gap-3">
              <Link href="/talent" className="pill border border-[#17171c] hover:border-[#1863dc]">
                Browse talent <ArrowUpRight size={16} />
              </Link>
              <Link href="/clients" className="pill bg-[#17171c] text-white hover:bg-[#1863dc]">
                Client stories <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div {...reveal} className="flex justify-center lg:justify-end">
            <StackedFolders
              images={[
                {
                  src: "/workspace/floor-01.webp",
                  alt: "DigiNeom-managed co-working floor",
                },
                {
                  src: "/workspace/floor-03.webp",
                  alt: "Collaboration area in a DigiNeom hub",
                },
                {
                  src: "/workspace/floor-05.jpg",
                  alt: "Engineers at desks in a managed workspace",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 {...reveal} className="display mb-4 text-3xl md:text-5xl">
            Why we exist
          </motion.h2>
          <motion.p {...reveal} className="mb-10 max-w-2xl text-base leading-relaxed text-neutral-600">
            Marketplace freelancers hide real risk. DigiNeom is the hybrid: Pakistan cost efficiency
            with degree authentication, managed infrastructure, and Western-facing governance.
          </motion.p>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Degree verification",
                copy: "Independent checks before a CV reaches you — not self-reported claims.",
              },
              {
                title: "Live coding audit",
                copy: "Timed problem sets scored before any client interview is booked.",
              },
              {
                title: "Hub seating",
                copy: "Desk ready on the managed floor by start date — power, line, and hardware included.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#d9d9dd] bg-white p-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#17171c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.h2 {...reveal} className="display mb-10 text-3xl md:text-5xl">
            What we believe
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {beliefVisuals.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ duration: 0.6, delay: index * 0.06, ease: easeOut }}
              >
                <FolderTabCard
                  eyebrow="DigiNeom"
                  title={item.title}
                  subtitle={item.copy}
                  primaryValue={item.primaryValue}
                  primaryLabel={item.primaryLabel}
                  secondaryValue={item.secondaryValue}
                  secondaryLabel={item.secondaryLabel}
                  imageSrc={item.image}
                  imageAlt={`${item.title} — DigiNeom belief`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 {...reveal} className="display mb-3 text-3xl md:text-5xl">
            Four tickets to a working engineer.
          </motion.h2>
          <motion.p {...reveal} className="mb-10 max-w-xl text-neutral-600">
            Placement as a boarding pass — brief, vet, interview, seat. Not a resume marketplace.
          </motion.p>
          <div className="grid gap-4 md:grid-cols-2">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.ticketId}
                {...reveal}
                transition={{ duration: 0.55, delay: index * 0.05, ease: easeOut }}
              >
                <PlacementTicket {...ticket} className="w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="display text-4xl md:text-5xl">Start with one engineer.</h2>
            <p className="mt-4 text-white/75">
              Brief a role. We vet and seat. You judge us on the work.
            </p>
          </div>
          <Link href="/contact" className="pill bg-white text-[#1863dc] hover:bg-[#c7dbff]">
            Talk to us about a role <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
