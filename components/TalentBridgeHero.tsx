"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import SmoothHashLink from "@/components/SmoothHashLink";
import { HERO_PLACEMENTS } from "@/lib/digineom-content";

const routes = HERO_PLACEMENTS.map((placement) => ({
  start: placement.origin,
  end: placement.destination,
  engineer: {
    firstName: placement.firstName,
    role: placement.role,
    stars: placement.stars,
  },
}));

export default function TalentBridgeHero({ children }: { children?: ReactNode }) {
  return (
    <div className="relative">
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12">
        <div className="container-custom relative z-10 w-full">
          <div className="max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[2.6rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-[4rem]"
            >
              A second engineering team. Not a second payroll.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-[46ch] text-base leading-relaxed text-neutral-500 md:text-lg"
            >
              Degree-verified Pakistani engineers for Europe and North America, working from
              co-working spaces we manage — not from home.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/contact" className="pill bg-[#1863dc] text-white hover:bg-[#0d47a1]">
                Talk to us about a role <ArrowUpRight size={17} />
              </Link>
              <SmoothHashLink href="#workspace" className="pill border border-[#17171c] hover:border-[#1863dc]">
                View our culture
              </SmoothHashLink>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none relative mt-10 w-[calc(100%+2.5rem)] -translate-x-5 sm:mt-14 sm:w-[calc(100%+4rem)] sm:-translate-x-8 lg:absolute lg:left-auto lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[70%] lg:translate-x-[8%] lg:-translate-y-1/2">
          <WorldMap dots={routes} lineColor="#1863dc" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28%] bg-gradient-to-r from-white to-transparent lg:block"
            aria-hidden="true"
          />
        </div>
      </section>

      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
