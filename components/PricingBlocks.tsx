"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/digineom-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CostCalculator() {
  const [localMonthly, setLocalMonthly] = useState(14000);
  const digineomMonthly = 3900;
  const savings = useMemo(
    () => Math.max(0, Math.round(((localMonthly - digineomMonthly) / localMonthly) * 100)),
    [localMonthly]
  );

  return (
    <div className="rounded-[22px] border border-[#d9d9dd] bg-white p-6 sm:p-8">
      <p className="eyebrow text-[#1863dc]">Illustrative ROI</p>
      <h3 className="mt-3 display text-3xl">Local senior vs DigiNeom seat</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
        Drag the local fully-loaded monthly cost. DigiNeom figure is a mid-range illustrative seat —
        final quote depends on stack and seniority.
      </p>

      <label className="mt-8 block">
        <span className="text-xs text-neutral-500">Local monthly cost (USD)</span>
        <input
          type="range"
          min={8000}
          max={22000}
          step={500}
          value={localMonthly}
          onChange={(e) => setLocalMonthly(Number(e.target.value))}
          className="mt-3 w-full accent-[#1863dc]"
        />
      </label>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#f1f5ff] p-4">
          <p className="text-xs text-neutral-500">Local</p>
          <p className="mt-1 font-mono text-xl text-[#17171c]">
            ${localMonthly.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl bg-[#f1f5ff] p-4">
          <p className="text-xs text-neutral-500">DigiNeom seat</p>
          <p className="mt-1 font-mono text-xl text-[#1863dc]">
            ~${digineomMonthly.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl bg-[#1863dc] p-4 text-white">
          <p className="text-xs text-white/70">Approx. savings</p>
          <p className="mt-1 font-mono text-xl">{savings}%</p>
        </div>
      </div>
    </div>
  );
}

export function PricingPlans() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {PRICING_PLANS.map((plan, index) => (
        <motion.article
          key={plan.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: index * 0.06, ease: easeOut }}
          className={
            plan.featured
              ? "rounded-[22px] bg-[#1863dc] p-7 text-white"
              : "rounded-[22px] border border-[#d9d9dd] bg-white p-7"
          }
        >
          {plan.badge ? (
            <p className={plan.featured ? "eyebrow text-[#c7dbff]" : "eyebrow text-[#1863dc]"}>
              {plan.badge}
            </p>
          ) : null}
          <h3 className="mt-3 display text-3xl">{plan.title}</h3>
          <p
            className={
              plan.featured
                ? "mt-3 text-sm leading-relaxed text-white/75"
                : "mt-3 text-sm leading-relaxed text-neutral-600"
            }
          >
            {plan.description}
          </p>
          <p className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{plan.monthlyRange}</p>
          <p
            className={
              plan.featured ? "mt-1 text-xs text-white/60" : "mt-1 text-xs text-neutral-500"
            }
          >
            {plan.frequency}
          </p>
          <ul className="mt-6 space-y-2.5">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className={
                  plan.featured
                    ? "text-sm text-white/85"
                    : "text-sm text-neutral-600"
                }
              >
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={
              plan.featured
                ? "pill mt-8 bg-white text-[#1863dc] hover:bg-[#c7dbff]"
                : "pill mt-8 bg-[#17171c] text-white hover:bg-[#1863dc]"
            }
          >
            Talk to us <ArrowUpRight size={16} />
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
