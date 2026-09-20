"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function FolderTabCard({
  eyebrow,
  title,
  subtitle,
  primaryValue,
  primaryLabel,
  secondaryValue,
  secondaryLabel,
  imageSrc,
  imageAlt,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryValue: string;
  primaryLabel: string;
  secondaryValue?: string;
  secondaryLabel?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-[28px] border-[6px] border-[#17171c] bg-[#17171c]",
        className,
      )}
    >
      <div className="absolute inset-x-1 top-1 h-[42%] overflow-hidden rounded-t-[22px]">
        <Image src={imageSrc} alt={imageAlt} fill sizes="320px" className="object-cover object-top" />
        {eyebrow ? (
          <div className="absolute top-3 right-3 z-20 text-right">
            <p className="text-xs font-medium text-[#17171c]/70 drop-shadow-sm">{eyebrow}</p>
          </div>
        ) : null}
      </div>

      <div
        className="absolute inset-x-1 top-[28%] bottom-1 z-10 overflow-hidden"
        style={{
          borderBottomLeftRadius: "1.35rem",
          borderBottomRightRadius: "1.35rem",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-x-0 top-[10%] bottom-0 bg-[#1863dc]"
            style={{
              borderBottomLeftRadius: "1.35rem",
              borderBottomRightRadius: "1.35rem",
              borderTopRightRadius: "1rem",
            }}
          />
          <div className="absolute top-0 left-0 h-[22%] w-[42%] rounded-tl-[1rem] rounded-tr-[0.9rem] bg-[#1863dc]" />
          <svg
            className="absolute top-0 left-[36%] h-[22%] w-[22%] text-[#1863dc]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 0H20C30 0 36 6 42 18L80 82C86 94 92 100 100 100V100H0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative z-30 flex h-full flex-col justify-between px-5 pt-[18%] pb-6 text-white">
          <div>
            <h3 className="text-lg font-semibold leading-tight tracking-[-0.03em]">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{subtitle}</p>
          </div>
          <div className="flex items-end justify-between gap-3">
            <p className="flex items-baseline gap-2">
              <span className="text-xl font-bold leading-none">{primaryValue}</span>
              <span className="text-sm">{primaryLabel}</span>
            </p>
            {secondaryValue ? (
              <p className="pb-0.5 text-sm text-white/65">
                {secondaryValue} {secondaryLabel}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
