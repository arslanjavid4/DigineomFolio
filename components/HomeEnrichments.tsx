"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TALENT_PROFILES } from "@/lib/digineom-content";
import { faqs } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          <motion.div {...revealCopy} className="flex flex-wrap gap-3">
            <Link href="/talent" className="pill border border-[#17171c] hover:bg-white hover:border-[#1863dc]">
              Browse talent <ArrowUpRight size={16} />
            </Link>
            <Link href="/clients" className="pill bg-[#17171c] text-white hover:bg-[#1863dc]">
              See client stories <ArrowUpRight size={16} />
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

export function HomeFaq() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <motion.div {...reveal} className="border-t border-[#d9d9dd] pt-6">
            <h2 className="display text-4xl md:text-5xl">Hiring questions, answered.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600">
              Straight answers on how DigiNeom sources, verifies, and seats engineers for EU and US
              teams.
            </p>
          </motion.div>

          <motion.div {...revealCopy}>
            <Accordion type="single" collapsible className="border-t border-[#d9d9dd]">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={String(index)}
                  className="border-[#d9d9dd]"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-semibold tracking-[-0.02em] text-[#17171c] hover:no-underline [&>svg]:text-[#1863dc]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15px] leading-relaxed text-neutral-600">
                    {item.answer}
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
