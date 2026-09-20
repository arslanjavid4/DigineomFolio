"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { COMPARISON_ROWS, TALENT_PROFILES } from "@/lib/digineom-content";
import { faqs } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResourceLinks } from "@/components/illustrative/ResourceLinks";
import { InkStampDocument } from "@/components/illustrative/InkStampDocument";
import { EngineerProfileCard } from "@/components/illustrative/EngineerProfile";
import { contactHrefForRole } from "@/lib/contact-prefills";

const easeOut = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: easeOut },
};

const revealCopy = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay: 0.08, ease: easeOut },
};

export function MidMarketStrip() {
  return (
    <section className="border-y border-[#d9d9dd] bg-[#f1f5ff]">
      <div className="container-custom flex flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <motion.div {...reveal} className="max-w-xl">
          <p className="eyebrow text-[#1863dc]">Built for mid-market product teams</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Teams of 50–100 that need engineers, not a marketplace.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            DigiNeom seats verified Pakistani engineers with EU and US scaleups — degree-checked,
            interview-ready, and working from floors we manage.
          </p>
        </motion.div>
        <motion.div {...revealCopy}>
          <Link href="/clients" className="pill bg-[#17171c] text-white hover:bg-[#1863dc]">
            See client stories <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function TalentTeaser() {
  const sample = TALENT_PROFILES.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-6 border-t border-[#d9d9dd] pt-6 md:flex-row md:items-end md:justify-between">
          <motion.div {...reveal} className="max-w-xl">
            <h2 className="display text-4xl md:text-5xl">Engineers for your stack.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600">
              Degree-verified engineers seated in hubs we manage. Pick a role and brief us — we send
              the shortlist.
            </p>
          </motion.div>
          <motion.div {...revealCopy}>
            <Link href="/talent" className="pill border border-[#17171c] hover:bg-[#eeece7]">
              Browse talent <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sample.map((profile, index) => (
            <motion.div
              key={profile.id}
              {...reveal}
              transition={{ duration: 0.7, delay: index * 0.06, ease: easeOut }}
            >
              <EngineerProfileCard
                firstName={profile.firstName}
                role={profile.role}
                bio={profile.summary}
                hubCity={profile.hubCity}
                score={profile.liveCodingScore}
                skills={profile.primarySkills.slice(0, 3)}
                blurName
                href={contactHrefForRole(profile.role)}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonStrip() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div {...reveal} className="mb-10 max-w-xl border-t border-[#d9d9dd] pt-6">
          <h2 className="display text-4xl md:text-5xl">Not a job board. Not kitchen-table remote.</h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            DigiNeom sits between freelance marketplaces and full local hire — verified people,
            managed desks, one accountable partner.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { title: "DigiNeom", key: "digineom" as const, accent: true },
            { title: "Freelance marketplace", key: "freelance" as const, accent: false },
            { title: "Local in-house hire", key: "inhouse" as const, accent: false },
          ].map((col) => (
            <motion.div
              key={col.title}
              {...revealCopy}
              className={
                col.accent
                  ? "rounded-[22px] bg-[#1863dc] p-6 text-white"
                  : "rounded-[22px] border border-[#d9d9dd] bg-[#f1f5ff] p-6"
              }
            >
              <p
                className={
                  col.accent
                    ? "eyebrow text-[#c7dbff]"
                    : "eyebrow text-[#1863dc]"
                }
              >
                {col.title}
              </p>
              <ul className="mt-6 space-y-5">
                {COMPARISON_ROWS.map((row) => (
                  <li key={row.feature}>
                    <p
                      className={
                        col.accent
                          ? "text-xs text-white/60"
                          : "text-xs text-neutral-500"
                      }
                    >
                      {row.feature}
                    </p>
                    <p
                      className={
                        col.accent
                          ? "mt-1 text-sm leading-snug text-white"
                          : "mt-1 text-sm leading-snug text-[#17171c]"
                      }
                    >
                      {row[col.key]}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return (
    <section id="faq" className="section-padding bg-[#f1f5ff]">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <motion.div {...reveal} className="border-t border-[#d9d9dd] pt-6">
              <h2 className="display text-4xl md:text-5xl">Hiring questions, answered.</h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                Think of each answer as a filed note from the DigiNeom dossier — not a generic FAQ
                wall.
              </p>
            </motion.div>

            <motion.div {...revealCopy} className="mt-10">
              <ResourceLinks
                title="Related resources"
                items={[
                  { name: "Talent", description: "Open roles", href: "/talent", letter: "T" },
                  { name: "Hubs", description: "Managed floors", href: "/hubs", letter: "H" },
                  { name: "Pricing", description: "Engagement models", href: "/pricing", letter: "P" },
                  { name: "About", description: "Why DigiNeom", href: "/about", letter: "A" },
                  { name: "Contact", description: "Brief a role", href: "/contact", letter: "C" },
                ]}
              />
            </motion.div>

            <motion.div {...revealCopy} className="mt-8 hidden lg:block">
              <InkStampDocument
                reference="DN-FAQ-INDEX"
                title="Placement dossier"
                meta={[
                  "Submitted by · DigiNeom ops",
                  "Scope · EU & North America hiring",
                ]}
                status="Degree · coding · English · hub seat"
                stampLabel="Filed"
              />
            </motion.div>
          </div>

          <motion.div {...revealCopy}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={String(index)}
                  className="overflow-hidden rounded-[18px] border border-[#d9d9dd] bg-[#fffcf7] px-5 data-[state=open]:border-[#1863dc]/40"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-semibold tracking-[-0.02em] text-[#17171c] hover:no-underline [&>svg]:text-[#1863dc]">
                    <span className="pr-4">
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                        Q-{String(index + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="relative pb-6 text-[15px] leading-relaxed text-neutral-600">
                    {item.answer}
                    <span
                      className="pointer-events-none absolute right-0 bottom-2 -rotate-12 rounded border-2 border-[#1863dc]/50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1863dc]/70"
                      aria-hidden
                    >
                      Answered
                    </span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ScoreRing({ score, size = 44 }: { score: number; size?: number }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-label={`Live coding score ${score}`}
    >
      <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
        <circle cx="20" cy="20" r={r} fill="none" stroke="#e8eef9" strokeWidth="3" />
        <circle
          cx="20"
          cy="20"
          r={r}
          fill="none"
          stroke="#1863dc"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-[#17171c]">
        {score}
      </span>
    </div>
  );
}
