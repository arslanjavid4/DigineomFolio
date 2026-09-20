"use client";

import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlacementTicket({
  step,
  label,
  title,
  detail,
  location,
  ticketId,
  className,
}: {
  step: string;
  label: string;
  title: string;
  detail: string;
  location: string;
  ticketId: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-2xl border border-[#d9d9dd] bg-[#f1f5ff]",
        className,
      )}
    >
      <div className="relative flex w-[4.75rem] shrink-0 flex-col items-center justify-center bg-[#1863dc] px-2 py-5 text-white">
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">Step</span>
        <span className="mt-1 text-2xl font-semibold leading-none tracking-[-0.04em]">{step}</span>
      </div>

      <div className="relative flex-1 p-4">
        <div className="absolute top-3 bottom-3 left-0 w-px border-l border-dashed border-[#d9d9dd]" />
        <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-white" />
        <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-white" />

        <span className="font-mono text-[10px] uppercase tracking-widest text-[#1863dc]">
          {label}
        </span>
        <h3 className="mt-1 text-sm font-semibold leading-snug tracking-[-0.02em] text-[#17171c]">
          {title}
        </h3>
        <div className="mt-2 flex items-start gap-1.5 text-[11px] text-neutral-500">
          <Clock size={10} className="mt-0.5 shrink-0" />
          <span>{detail}</span>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-neutral-500">
          <MapPin size={10} className="shrink-0" />
          <span>{location}</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[#d9d9dd] pt-3">
          <span className="font-mono text-[10px] text-neutral-400">{ticketId}</span>
          <span className="text-xs font-semibold text-[#17171c]">Placement</span>
        </div>
      </div>
    </div>
  );
}
