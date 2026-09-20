"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

function Stars({ count = 5, size = 10 }: { count?: number; size?: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-[#1863dc]"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden
        >
          <path d="M6 0.8l1.5 3.2 3.5.4-2.6 2.4.8 3.4L6 8.6 2.8 10.2l.8-3.4L1 4.4l3.5-.4L6 .8z" />
        </svg>
      ))}
    </span>
  );
}

function InitialsMark({
  name,
  size = "md",
  blur = false,
}: {
  name: string;
  size?: "sm" | "md";
  blur?: boolean;
}) {
  const letter = name.trim().slice(0, 1).toUpperCase();
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center border border-[#d9d9dd] bg-[#f1f5ff] font-semibold text-[#1863dc]",
        size === "sm" ? "h-9 w-9 text-sm" : "h-14 w-14 text-lg",
        blur && "select-none blur-[5px]",
      )}
      aria-hidden
    >
      {letter}
    </div>
  );
}

/** Resume-style profile — role first, name can be blurred, optional contact link. */
export function EngineerProfileCard({
  firstName,
  role,
  bio,
  hubCity,
  score,
  skills,
  meta,
  stars = 5,
  sectionLabel,
  blurName = true,
  href = "/contact",
  className,
}: {
  firstName: string;
  role: string;
  bio: string;
  hubCity?: string;
  score?: number;
  skills?: string[];
  meta?: string;
  stars?: number;
  sectionLabel?: string;
  blurName?: boolean;
  href?: string | null;
  className?: string;
}) {
  const body = (
    <article
      className={cn(
        "relative h-full w-full border border-[#d9d9dd] bg-[#fffcf7] p-5 font-sans transition-colors",
        href && "hover:border-[#1863dc]/50 hover:bg-white",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between border-b border-[#d9d9dd] pb-3">
        {sectionLabel ? (
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {sectionLabel}
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
            Engineer
          </span>
        )}
        <Stars count={stars} />
      </div>

      <div className="flex gap-4">
        <InitialsMark name={firstName} blur={blurName} />
        <div className="min-w-0 pt-0.5">
          <p
            className={cn(
              "text-sm font-medium tracking-[-0.02em] text-neutral-500",
              blurName && "select-none blur-[6px]",
            )}
            aria-hidden={blurName}
          >
            {firstName}
          </p>
          <h3 className="mt-1.5 text-xl font-semibold leading-snug tracking-[-0.04em] text-[#1863dc] md:text-2xl">
            {role}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-600">{bio}</p>

      {(hubCity || score != null || meta) && (
        <div className="mt-4 space-y-1 border-t border-[#d9d9dd] pt-4 text-xs text-neutral-500">
          {meta ? <p>{meta}</p> : null}
          {hubCity ? <p className="text-[#1863dc]">{hubCity} hub</p> : null}
          {score != null ? <p>Live coding · {score}</p> : null}
        </div>
      )}

      {skills?.length ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#f1f5ff] px-2.5 py-1 text-[11px] text-[#17171c]"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}

      {href ? (
        <p className="mt-5 text-xs font-semibold text-[#1863dc]">Talk about this role →</p>
      ) : null}
    </article>
  );

  if (!href) return body;

  return (
    <Link
      href={href}
      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#1863dc] focus-visible:ring-offset-2"
      aria-label={`Talk to us about ${role}`}
    >
      {body}
    </Link>
  );
}

/** Stripped profile for hero map — blurred name, role highlighted. */
export function EngineerProfileMini({
  firstName,
  role,
  stars = 5,
  fromLabel,
  toLabel,
  blurName = true,
  className,
}: {
  firstName: string;
  role: string;
  stars?: number;
  fromLabel?: string;
  toLabel?: string;
  blurName?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "w-[13.5rem] border border-[#d9d9dd] bg-white/95 p-3 shadow-[0_10px_30px_rgba(23,23,28,0.08)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <InitialsMark name={firstName} size="sm" blur={blurName} />
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-[11px] text-neutral-500",
              blurName && "select-none blur-[5px]",
            )}
            aria-hidden={blurName}
          >
            {firstName}
          </p>
          <p className="truncate text-[13px] font-semibold tracking-[-0.02em] text-[#1863dc]">
            {role}
          </p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-[#d9d9dd] pt-2">
        <Stars count={stars} size={9} />
        {fromLabel && toLabel ? (
          <p className="truncate text-[10px] text-neutral-500">
            {fromLabel} → {toLabel}
          </p>
        ) : null}
      </div>
    </article>
  );
}
