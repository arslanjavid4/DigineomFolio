"use client";

import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function InkStampDocument({
  title,
  reference,
  meta,
  status,
  stampLabel = "Verified",
  stampTone = "blue",
  className,
  children,
}: {
  title: string;
  reference?: string;
  meta?: string[];
  status?: string;
  stampLabel?: string;
  stampTone?: "blue" | "ink";
  className?: string;
  children?: React.ReactNode;
}) {
  const stamp =
    stampTone === "ink"
      ? "border-[#17171c] text-[#17171c]"
      : "border-[#1863dc] text-[#1863dc]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[18px] border border-[#d9d9dd] bg-[#fffcf7] p-5",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {reference ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              {reference}
            </p>
          ) : null}
          <h3 className="mt-2 text-base font-semibold tracking-[-0.02em] text-[#17171c]">
            {title}
          </h3>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f1f5ff] text-[#1863dc]">
          <FileText size={16} aria-hidden />
        </div>
      </div>

      {meta?.length ? (
        <div className="mt-4 space-y-1.5 text-xs text-neutral-600">
          {meta.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}

      {children ? <div className="mt-4 text-sm leading-relaxed text-neutral-600">{children}</div> : null}

      {status ? <p className="mt-5 text-xs text-neutral-500">{status}</p> : null}

      <div
        className={cn(
          "pointer-events-none absolute right-4 bottom-4 -rotate-12 rounded-md border-2 px-3 py-1.5",
          stamp,
        )}
        aria-hidden
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.22em]">{stampLabel}</p>
      </div>
    </div>
  );
}
