"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export type ResourceItem = {
  name: string;
  description: string;
  href: string;
  letter?: string;
};

export function ResourceLinks({
  title = "Explore",
  items,
  className,
}: {
  title?: string;
  items: ResourceItem[];
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <h3 className="text-sm font-semibold text-[#17171c]">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href} className="min-w-0">
            <Link
              href={item.href}
              className="group flex min-w-0 items-center gap-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f1f5ff] text-xs font-semibold text-[#1863dc]">
                {item.letter ?? item.name.slice(0, 1)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm">
                  <span className="font-semibold text-[#17171c] group-hover:text-[#1863dc]">
                    {item.name}
                  </span>
                  <span className="text-neutral-300"> / </span>
                  <span className="text-neutral-500">{item.description}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
