"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import GlobeStudy from "@/components/ui/globe-study";

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function TalentBridgeHero({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [globeLive, setGlobeLive] = useState(true);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const globeScale = useTransform(scrollYProgress, [0, 0.52], [2.2, 2.95]);
  const globeX = useTransform(scrollYProgress, [0, 0.52], ["46vw", "0vw"]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.42, 0.82, 1], [0.82, 0.4, 0.22, 0.08]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setGlobeLive(value < 0.26);
  });

  return (
    <div ref={trackRef} className="relative">
      <div className="pointer-events-none sticky top-0 z-0 h-svh overflow-hidden">
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            style={{
              x: globeX,
              scale: globeScale,
              opacity: globeOpacity,
            }}
            className={`h-[820px] w-[820px] origin-center will-change-transform [transform:translateZ(0)] ${
              globeLive ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <GlobeStudy mode="light" className="h-full w-full" />
          </motion.div>
        </div>
      </div>

      <section className="pointer-events-none relative z-10 -mt-[100svh] min-h-svh px-5 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-28 lg:px-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-white via-white/90 to-transparent lg:w-[40%]"
          aria-hidden="true"
        />
        <div className="container-custom relative grid min-h-[calc(100svh-10rem)] items-center lg:grid-cols-[minmax(0,34rem)_1fr]">
          <motion.div {...reveal} className="pointer-events-auto relative z-10 max-w-lg">
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
              <Link href="#workspace" className="pill border border-[#17171c] hover:bg-[#eeece7]">
                View our culture
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
