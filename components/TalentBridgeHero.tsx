"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import SmoothHashLink from "@/components/SmoothHashLink";

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const routes = [
  {
    start: { lat: 31.5204, lng: 74.3587 },
    end: { lat: 51.5074, lng: -0.1278 },
  },
  {
    start: { lat: 31.5204, lng: 74.3587 },
    end: { lat: 40.7128, lng: -74.006 },
  },
  {
    start: { lat: 24.8607, lng: 67.0011 },
    end: { lat: 52.52, lng: 13.405 },
  },
  {
    start: { lat: 31.5204, lng: 74.3587 },
    end: { lat: 43.6532, lng: -79.3832 },
  },
  {
    start: { lat: 24.8607, lng: 67.0011 },
    end: { lat: 37.7749, lng: -122.4194 },
  },
  {
    start: { lat: 31.5204, lng: 74.3587 },
    end: { lat: 52.3676, lng: 4.9041 },
  },
];

export default function TalentBridgeHero({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white px-5 pb-10 pt-24 sm:px-8 md:pb-14 md:pt-28 lg:min-h-svh lg:px-12">
        <div className="container-custom relative z-10">
          <motion.div {...reveal} className="max-w-lg">
            <h1 className="display text-[2.6rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-[4rem]">
              A second engineering team. Not a second payroll.
            </h1>
            <p className="mt-10 max-w-[46ch] text-base leading-relaxed text-neutral-500 md:text-lg">
              Degree-verified engineers for Europe and North America, working from co-working spaces we manage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="pill bg-[#1863dc] text-white hover:bg-[#0d47a1]">
                Talk to us about a role <ArrowUpRight size={17} />
              </Link>
              <SmoothHashLink href="#workspace" className="pill border border-[#17171c] hover:bg-[#eeece7]">
                View our culture
              </SmoothHashLink>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none relative mt-10 w-[calc(100%+2.5rem)] -translate-x-5 sm:mt-14 sm:w-[calc(100%+4rem)] sm:-translate-x-8 lg:absolute lg:left-auto lg:right-0 lg:top-[48%] lg:mt-0 lg:w-[70%] lg:translate-x-[8%] lg:-translate-y-1/2">
          <WorldMap dots={routes} lineColor="#1863dc" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28%] bg-gradient-to-r from-white to-transparent lg:block"
            aria-hidden="true"
          />
        </div>
      </section>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
