"use client";

import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

import type { GlassFractalRenderer } from "./renderer";

interface GlassFractalVisualProps {
  sectionRef: RefObject<HTMLElement>;
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (start: number, end: number, value: number) => {
  const progress = clamp01((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
};

export default function GlassFractalVisual({
  sectionRef,
}: GlassFractalVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<GlassFractalRenderer | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const visual = visualRef.current;
    const section = sectionRef.current;
    if (!canvas || !visual || !section) return;

    let cancelled = false;
    let animationFrame = 0;
    let targetProgress = 0;
    let displayedProgress = 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const applyProgress = (progress: number) => {
      const morphProgress = smoothstep(0.04, 0.82, progress);
      rendererRef.current?.setProgress(reducedMotion ? 0 : morphProgress);
    };

    const animateProgress = () => {
      animationFrame = 0;
      displayedProgress += (targetProgress - displayedProgress) * 0.12;
      if (Math.abs(targetProgress - displayedProgress) < 0.0005) {
        displayedProgress = targetProgress;
      }
      applyProgress(displayedProgress);
      if (displayedProgress !== targetProgress) {
        animationFrame = requestAnimationFrame(animateProgress);
      }
    };

    const readScrollProgress = () => {
      const rect = section.getBoundingClientRect();
      const stickyHeight = Math.max(1, window.innerHeight - 72);
      const travel = Math.max(1, section.offsetHeight - stickyHeight);
      targetProgress = clamp01((72 - rect.top) / travel);
      if (reducedMotion) {
        displayedProgress = targetProgress;
        applyProgress(displayedProgress);
      } else if (!animationFrame) {
        animationFrame = requestAnimationFrame(animateProgress);
      }
    };

    const initialize = async () => {
      if (!("gpu" in navigator)) return;
      try {
        const { createRenderer } = await import("./renderer");
        if (cancelled) return;
        const renderer = createRenderer({
          canvas,
          reducedMotion,
          onError: () => {
            if (!cancelled) setIsReady(false);
          },
        });
        rendererRef.current = renderer;
        await renderer.ready;
        if (!cancelled) {
          renderer.setProgress(
            reducedMotion
              ? 0
              : smoothstep(0.04, 0.82, displayedProgress)
          );
          setIsReady(true);
        }
      } catch {
        if (!cancelled) setIsReady(false);
      }
    };

    readScrollProgress();
    window.addEventListener("scroll", readScrollProgress, { passive: true });
    window.addEventListener("resize", readScrollProgress, { passive: true });
    void initialize();

    return () => {
      cancelled = true;
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", readScrollProgress);
      window.removeEventListener("resize", readScrollProgress);
      rendererRef.current?.dispose();
      rendererRef.current = null;
    };
  }, [sectionRef]);

  return (
    <div
      ref={visualRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] md:inset-y-0 md:left-auto md:h-full md:w-[62%]"
    >
      {!isReady && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[13%] rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(24,99,220,0.18),rgba(199,219,255,0.08)_46%,transparent_72%)] blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-[min(58vw,23rem)] w-[min(58vw,23rem)] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[28%] border border-[#1863dc]/20 bg-white/20 shadow-[inset_0_0_70px_rgba(24,99,220,0.1)] backdrop-blur-sm md:h-[min(32vw,31rem)] md:w-[min(32vw,31rem)]" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 block h-full w-full touch-none transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white to-transparent md:w-1/4" />
    </div>
  );
}
