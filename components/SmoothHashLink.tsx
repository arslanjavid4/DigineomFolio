"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function SmoothHashLink({
  href,
  className,
  children,
}: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
}) {
  const lenis = useLenis();

  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        const target = document.getElementById(href.slice(1));
        if (!target || !lenis) return;
        event.preventDefault();
        lenis.scrollTo(target, {
          offset: 0,
          duration: 1.6,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        history.pushState(null, "", href);
      }}
    >
      {children}
    </Link>
  );
}
