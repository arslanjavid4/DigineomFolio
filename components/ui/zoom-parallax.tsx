"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ZoomImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect, max 7 */
  images: ZoomImage[];
}

const frames = [
  "",
  "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]",
  "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]",
  "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]",
  "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]",
  "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]",
  "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]",
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const shots = images.slice(0, 7);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  if (reduceMotion) {
    return (
      <div className="grid gap-3 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12">
        {shots.slice(0, 4).map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative aspect-[4/3] overflow-hidden rounded-[22px]"
          >
            <Image
              src={image.src}
              alt={image.alt || `Workspace ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        {shots.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={`${src}-${index}`}
              style={{ scale }}
              className={cn(
                "absolute top-0 flex h-full w-full items-center justify-center",
                frames[index]
              )}
            >
              <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-[22px] bg-white/10 shadow-[0_24px_80px_rgba(0,15,40,0.35)]">
                <Image
                  src={src}
                  alt={alt || `Parallax image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority={index === 0}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
