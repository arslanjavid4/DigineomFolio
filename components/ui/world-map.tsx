"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  className?: string;
}

const DRAW_MS = 2200;
const HOLD_MS = 520;
const FADE_S = 0.4;

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

function createCurvedPath(
  start: { x: number; y: number },
  end: { x: number; y: number }
) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const dist = Math.hypot(dx, dy);
  const lift = Math.min(90, Math.max(36, dist * 0.22));
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - lift;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

export function WorldMap({
  dots = [],
  lineColor = "#1863dc",
  className,
}: MapProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#17171c28",
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map]
  );

  const routes = useMemo(
    () =>
      dots.map((dot) => {
        const start = projectPoint(dot.start.lat, dot.start.lng);
        const end = projectPoint(dot.end.lat, dot.end.lng);
        return { start, end, d: createCurvedPath(start, end) };
      }),
    [dots]
  );

  const cities = useMemo(() => {
    const seen = new Set<string>();
    const list: { x: number; y: number }[] = [];
    for (const route of routes) {
      for (const point of [route.start, route.end]) {
        const key = `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        list.push(point);
      }
    }
    return list;
  }, [routes]);

  useEffect(() => {
    if (reduceMotion || routes.length < 2) return;
    const id = window.setTimeout(() => {
      setActive((index) => (index + 1) % routes.length);
    }, DRAW_MS + HOLD_MS);
    return () => window.clearTimeout(id);
  }, [active, reduceMotion, routes.length]);

  const current = routes[active];

  return (
    <div className={cn("relative aspect-[2/1] w-full font-sans", className)}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none object-contain select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="World map of engineer placements"
        fill
        sizes="100vw"
        draggable={false}
        unoptimized
      />
      <svg
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {cities.map((city) => (
          <circle
            key={`${city.x}-${city.y}`}
            cx={city.x}
            cy={city.y}
            r="2"
            fill={lineColor}
          />
        ))}

        {reduceMotion
          ? routes.map((route, index) => (
              <path
                key={`static-${index}`}
                d={route.d}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
              />
            ))
          : current && (
              <AnimatePresence mode="wait">
                <motion.g
                  key={active}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: FADE_S } }}
                >
                  <motion.path
                    d={current.d}
                    fill="none"
                    stroke="url(#path-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: DRAW_MS / 1000, ease: "easeInOut" }}
                  />
                  <circle r="3" fill={lineColor}>
                    <animateMotion
                      dur={`${DRAW_MS}ms`}
                      fill="freeze"
                      rotate="auto"
                      path={current.d}
                      calcMode="spline"
                      keySplines="0.42 0 0.58 1"
                      keyTimes="0;1"
                    />
                  </circle>
                  {[current.start, current.end].map((point, index) => (
                    <motion.circle
                      key={index}
                      cx={point.x}
                      cy={point.y}
                      fill={lineColor}
                      initial={{ r: 2, opacity: 0.45 }}
                      animate={{ r: [2, 8], opacity: [0.45, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.g>
              </AnimatePresence>
            )}
      </svg>
    </div>
  );
}
