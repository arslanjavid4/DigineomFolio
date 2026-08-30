"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const OPTIONS = {
  lerp: 0.065,
  duration: 1.45,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 0.8,
  anchors: {
    duration: 1.55,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
  autoRaf: true,
  respectReducedMotion: true,
  stopInertiaOnNavigate: true,
};

function SyncLenisOnRoute() {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (!lenis) return;
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    lenis.resize();
    lenis.scrollTo(window.scrollY, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={OPTIONS}>
      <SyncLenisOnRoute />
      {children}
    </ReactLenis>
  );
}
