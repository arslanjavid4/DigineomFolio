"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** Museum placard adapted for anonymized client case studies — flip for quote. */
export function ClientPlacard({
  catalogRef,
  industry,
  impact,
  region,
  teamSize,
  squad,
  summary,
  quote,
  attribution,
  stack,
  className,
}: {
  catalogRef: string;
  industry: string;
  impact: string;
  region: string;
  teamSize: string;
  squad: string;
  summary: string;
  quote: string;
  attribution: string;
  stack: string[];
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={cn("w-full perspective-[1200px]", className)}>
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-label={flipped ? "Show case summary" : "Show client quote"}
        className="group relative h-[17.5rem] w-full cursor-pointer border-0 bg-transparent p-0 text-left"
      >
        <div
          className={cn(
            "relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]",
            flipped && "[transform:rotateY(180deg)]",
          )}
        >
          {/* Front — case label */}
          <div className="absolute inset-0 rounded-sm border border-[#d9d9dd] bg-[#fffcf7] px-5 py-4 shadow-[0_8px_24px_rgba(23,23,28,0.04)] [backface-visibility:hidden]">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-400">
              {catalogRef}
            </p>
            <p className="mt-3 text-sm font-medium text-[#1863dc]">{industry}</p>
            <p className="mt-2 text-lg font-semibold leading-snug tracking-[-0.03em] text-[#17171c]">
              {impact}
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              {region} · {teamSize}
            </p>

            <div className="mt-4 space-y-1 border-t border-[#d9d9dd] pt-3">
              <p className="text-[11px] leading-relaxed text-neutral-600">{summary}</p>
              <p className="text-[11px] text-neutral-500">{squad}</p>
            </div>

            <p className="absolute right-4 bottom-3 font-mono text-[8px] uppercase tracking-wider text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
              Flip for quote
            </p>
          </div>

          {/* Back — quote */}
          <div className="absolute inset-0 [transform:rotateY(180deg)] rounded-sm border border-[#1863dc]/25 bg-[#f1f5ff] px-5 py-4 shadow-[0_8px_24px_rgba(23,23,28,0.04)] [backface-visibility:hidden]">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#1863dc]">
              Client note
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#17171c]">“{quote}”</p>
            <p className="mt-4 border-t border-[#d9d9dd] pt-3 text-[10px] leading-relaxed text-neutral-600">
              {attribution}
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              {stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-2 py-0.5 text-[10px] text-[#17171c]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="absolute right-4 bottom-3 font-mono text-[8px] uppercase tracking-wider text-neutral-400">
              Flip back
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export function ClientQuoteCard({
  quote,
  attribution,
  issue,
  accentWord,
  className,
}: {
  quote: string;
  attribution: string;
  issue: string;
  accentWord?: string;
  className?: string;
}) {
  const word = accentWord ?? "";
  const parts = word ? quote.split(new RegExp(`(${word})`, "i")) : [quote];

  return (
    <div
      className={cn(
        "border border-[#d9d9dd] bg-[#fffcf7] p-6 md:p-8",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between border-b border-[#d9d9dd] pb-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
          {issue}
        </span>
        <span className="font-serif text-2xl leading-none text-[#1863dc]">“</span>
      </div>

      <blockquote className="text-xl font-semibold leading-snug tracking-[-0.03em] text-[#17171c] md:text-2xl">
        {parts.map((part, i) =>
          word && part.toLowerCase() === word.toLowerCase() ? (
            <span key={i} className="rounded-sm bg-[#c7dbff]/70 px-1 text-[#0d47a1]">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </blockquote>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#d9d9dd]" />
        <p className="text-right text-sm text-neutral-600">{attribution}</p>
      </div>
    </div>
  );
}

/** Placement route chip — Pakistan hub → client market. */
export function PlacementRouteCard({
  fromCode,
  fromCity,
  toCode,
  toCity,
  metric,
  className,
}: {
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  metric: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-40 flex-col justify-between rounded-[22px] bg-[#1863dc] p-4 text-white",
        className,
      )}
    >
      <div>
        <p className="text-[11px] text-white/60">Engagement</p>
        <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">{metric}</p>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-[11px]">
          <div>
            <p className="font-semibold">{fromCode}</p>
            <p className="text-white/60">{fromCity}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{toCode}</p>
            <p className="text-white/60">{toCity}</p>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="h-1 flex-1 rounded-full bg-white" />
          <div className="mx-1 h-2 w-2 rounded-full bg-[#c7dbff]" />
          <div className="h-1 flex-1 rounded-full border border-dashed border-white/40 bg-transparent" />
        </div>
      </div>
    </div>
  );
}
