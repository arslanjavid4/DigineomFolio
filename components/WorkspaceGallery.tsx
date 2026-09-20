"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Shot = { src: string; alt?: string };

export function WorkspaceGallery({ images }: { images: Shot[] }) {
  const shots = images.slice(0, 6);
  const [active, setActive] = useState(0);
  const current = shots[active] ?? shots[0];

  if (!current) return null;

  return (
    <div className="container-custom px-5 pb-4 sm:px-8 lg:px-12">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#0d47a1] md:aspect-[21/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0.35, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt || "DigiNeom-managed workspace"}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d47a1]/70 to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 max-w-lg text-sm text-white/90 md:bottom-5 md:left-5">
          {current.alt}
        </p>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {shots.map((shot, index) => (
          <button
            key={`${shot.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show workspace photo ${index + 1}`}
            aria-pressed={active === index}
            className={cn(
              "relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition md:h-24 md:w-36",
              active === index
                ? "border-white"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <Image
              src={shot.src}
              alt=""
              fill
              className="object-cover"
              sizes="144px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
