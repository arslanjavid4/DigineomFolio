"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface ChoreographyCard {
  title: string;
  copy?: string;
  featured?: boolean;
}

export interface ScrollChoreographyProps {
  className?: string;
  cards: {
    topLeft: ChoreographyCard;
    topRight: ChoreographyCard;
    bottomLeft: ChoreographyCard;
    bottomRight: ChoreographyCard;
  };
}

function CardFace({
  card,
  heading,
}: {
  card: ChoreographyCard;
  heading: "h2" | "h3" | "p";
}) {
  const Tag = heading;
  const featured = Boolean(card.featured);

  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col justify-end p-6 sm:p-7",
        featured && "justify-center p-8 sm:p-12 lg:p-16",
      )}
    >
      <Tag
        className={cn(
          "display text-2xl leading-[0.95] sm:text-3xl",
          featured &&
            "text-[clamp(1.6rem,4.2vw,4.75rem)] max-w-[18ch]",
        )}
      >
        {card.title}
      </Tag>
      {card.copy ? (
        <p
          className={cn(
            "mt-3 max-w-[36ch] text-sm leading-relaxed sm:text-base",
            featured ? "mt-6 text-white/75 sm:text-lg" : "text-neutral-500",
          )}
        >
          {card.copy}
        </p>
      ) : null}
    </div>
  );
}

function StaticCards({ cards }: { cards: ScrollChoreographyProps["cards"] }) {
  const rest = [cards.topLeft, cards.bottomLeft, cards.bottomRight];

  return (
    <div className="container-custom px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <article className="min-h-[18rem] rounded-[22px] bg-[#1863dc] text-white md:min-h-[22rem]">
        <CardFace card={{ ...cards.topRight, featured: true }} heading="h2" />
      </article>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {rest.map((card) => (
          <article
            key={card.title}
            className="rounded-[22px] bg-[#f1f5ff] md:min-h-[14rem]"
          >
            <CardFace card={card} heading="h3" />
          </article>
        ))}
      </div>
    </div>
  );
}

export function ScrollChoreography({ className, cards }: ScrollChoreographyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    mass: 1.2,
    restDelta: 0.001,
  });

  const xLeft = "-20vw";
  const xRight = "20vw";
  const yTop = "-14vh";
  const yBottom = "14vh";

  const tlX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const tlY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yBottom, yBottom, "0vh", "0vh"]);

  const brX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const brY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yTop, yTop, "0vh", "0vh"]);

  const blX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const blY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yBottom, yBottom, "0vh", "0vh"]);

  const trX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const trY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yTop, yTop, "0vh", "0vh"]);

  const heroWidth = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["36vw", "36vw", "100vw", "100vw"]);
  const heroHeight = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["24vh", "24vh", "100vh", "100vh"]);
  const heroRadius = useTransform(smoothProgress, [0.7, 0.9], [22, 0]);
  const underImagesOpacity = useTransform(smoothProgress, [0.75, 0.85], [1, 0]);

  const baseCardClasses =
    "h-[24vh] w-[36vw] overflow-hidden rounded-[22px] -translate-x-1/2 -translate-y-1/2";

  const fallback = <StaticCards cards={cards} />;

  if (reduceMotion) {
    return <div className={cn("bg-white", className)}>{fallback}</div>;
  }

  return (
    <div className={cn("bg-white", className)}>
      <div className="lg:hidden">{fallback}</div>

      <div ref={containerRef} className="relative hidden h-[300vh] w-full lg:block">
        <div className="sticky top-0 h-svh w-full overflow-hidden bg-white">
          <div className="absolute inset-0">
            <motion.div
              style={{ x: tlX, y: tlY, opacity: underImagesOpacity }}
              className="absolute left-1/2 top-1/2 z-10 will-change-transform"
            >
              <div className={cn(baseCardClasses, "bg-[#f1f5ff]")}>
                <CardFace card={cards.topLeft} heading="h3" />
              </div>
            </motion.div>

            <motion.div
              style={{ x: brX, y: brY, opacity: underImagesOpacity }}
              className="absolute left-1/2 top-1/2 z-20 will-change-transform"
            >
              <div className={cn(baseCardClasses, "bg-[#f1f5ff]")}>
                <CardFace card={cards.bottomRight} heading="h3" />
              </div>
            </motion.div>

            <motion.div
              style={{ x: blX, y: blY, opacity: underImagesOpacity }}
              className="absolute left-1/2 top-1/2 z-30 will-change-transform"
            >
              <div className={cn(baseCardClasses, "bg-[#f1f5ff]")}>
                <CardFace card={cards.bottomLeft} heading="h3" />
              </div>
            </motion.div>

            <motion.div
              style={{ x: trX, y: trY }}
              className="absolute left-1/2 top-1/2 z-40 will-change-transform"
            >
              <motion.div
                style={{
                  width: heroWidth,
                  height: heroHeight,
                  borderRadius: heroRadius,
                }}
                className={cn(baseCardClasses, "origin-center bg-[#1863dc] text-white")}
              >
                <CardFace card={{ ...cards.topRight, featured: true }} heading="p" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollChoreography;
