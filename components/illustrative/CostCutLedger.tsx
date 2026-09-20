"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type LedgerLine = {
  id: string;
  label: string;
  detail: string;
  amount: number;
};

const EXPENSES: LedgerLine[] = [
  {
    id: "e1",
    label: "Local senior salary",
    detail: "US / Western EU base",
    amount: -14200,
  },
  {
    id: "e2",
    label: "Benefits & payroll tax",
    detail: "~30% load",
    amount: -4260,
  },
  {
    id: "e3",
    label: "Recruiter search fee",
    detail: "One-time amortized",
    amount: -2800,
  },
  {
    id: "e4",
    label: "Office desk & amenities",
    detail: "Commercial lease share",
    amount: -850,
  },
  {
    id: "e5",
    label: "Equipment & tooling",
    detail: "Hardware + licenses",
    amount: -420,
  },
];

const DIGINEOM_SEAT: LedgerLine = {
  id: "dn",
  label: "DigiNeom engineer seat",
  detail: "Verified · managed hub · all-in",
  amount: -3900,
};

function formatAmount(n: number) {
  const abs = Math.abs(n).toLocaleString("en-US");
  return n >= 0 ? `+$${abs}` : `−$${abs}`;
}

/**
 * Transactions-style ledger that slowly “cuts” local hiring costs
 * as DigiNeom takes each line over.
 */
export default function CostCutLedger({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [handled, setHandled] = useState<Set<string>>(new Set());
  const [showSeat, setShowSeat] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setHandled(new Set(EXPENSES.map((e) => e.id)));
      setShowSeat(true);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];

    EXPENSES.forEach((expense, index) => {
      const startAt = 600 + index * 1600;
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setActiveId(expense.id);
        }, startAt),
      );
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setHandled((prev) => new Set(prev).add(expense.id));
          setActiveId(null);
        }, startAt + 900),
      );
    });

    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setShowSeat(true);
      }, 600 + EXPENSES.length * 1600 + 400),
    );

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [inView, reduceMotion]);

  const cutTotal = EXPENSES.reduce((sum, e) => sum + Math.abs(e.amount), 0);
  const handledCount = handled.size;
  const remainingLocal = EXPENSES.filter((e) => !handled.has(e.id)).reduce(
    (sum, e) => sum + Math.abs(e.amount),
    0,
  );

  return (
    <div
      ref={ref}
      className={cn(
        "w-full overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-white text-[#17171c]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-[#d9d9dd] px-5 py-4">
        <div>
          <p className="text-sm font-semibold tracking-[-0.02em]">Cost ledger</p>
          <p className="mt-0.5 text-xs text-neutral-500">
            Local hire load · DigiNeom takes each line
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
            Cut so far
          </p>
          <p className="mt-1 font-mono text-sm text-[#1863dc]">
            {handledCount}/{EXPENSES.length}
          </p>
        </div>
      </div>

      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="text-xs text-neutral-500">
            <th className="px-5 py-2.5 font-medium">Description</th>
            <th className="hidden px-3 py-2.5 font-medium sm:table-cell">Status</th>
            <th className="px-5 py-2.5 text-right font-medium">Monthly</th>
          </tr>
        </thead>
        <tbody>
          {EXPENSES.map((tx) => {
            const isHandled = handled.has(tx.id);
            const isActive = activeId === tx.id;

            return (
              <motion.tr
                key={tx.id}
                layout
                className={cn(
                  "border-t border-[#d9d9dd]/80 transition-colors",
                  isActive && "bg-[#f1f5ff]",
                  isHandled && "bg-[#fffcf7]",
                )}
              >
                <td className="px-5 py-3.5">
                  <p
                    className={cn(
                      "font-medium transition-all duration-700",
                      isHandled && "text-neutral-400 line-through decoration-[#1863dc]/50",
                    )}
                  >
                    {tx.label}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">{tx.detail}</p>
                </td>
                <td className="hidden px-3 py-3.5 sm:table-cell">
                  <AnimatePresence mode="wait">
                    {isHandled ? (
                      <motion.span
                        key="handled"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex rounded-full border border-[#1863dc]/30 bg-[#f1f5ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1863dc]"
                      >
                        Handled by DigiNeom
                      </motion.span>
                    ) : isActive ? (
                      <motion.span
                        key="cutting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0d47a1]"
                      >
                        Cutting…
                      </motion.span>
                    ) : (
                      <span key="open" className="text-[10px] uppercase tracking-[0.12em] text-neutral-400">
                        Open
                      </span>
                    )}
                  </AnimatePresence>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <motion.span
                    className={cn(
                      "inline-block tabular-nums transition-all duration-700",
                      isHandled
                        ? "text-neutral-300 line-through decoration-[#1863dc]/60"
                        : "text-[#17171c]",
                    )}
                    animate={
                      isActive
                        ? { scale: [1, 1.04, 1], opacity: [1, 0.7, 1] }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {formatAmount(tx.amount)}
                  </motion.span>
                  {isHandled ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-1 text-[10px] font-semibold text-[#1863dc]"
                    >
                      Cut
                    </motion.p>
                  ) : null}
                </td>
              </motion.tr>
            );
          })}

          <AnimatePresence>
            {showSeat ? (
              <motion.tr
                key="digineom-seat"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-[#1863dc]/30 bg-[#1863dc]"
              >
                <td className="px-5 py-4 text-white">
                  <p className="font-semibold">{DIGINEOM_SEAT.label}</p>
                  <p className="mt-0.5 text-xs text-white/65">{DIGINEOM_SEAT.detail}</p>
                </td>
                <td className="hidden px-3 py-4 sm:table-cell">
                  <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Active seat
                  </span>
                </td>
                <td className="px-5 py-4 text-right font-mono tabular-nums text-white">
                  {formatAmount(DIGINEOM_SEAT.amount)}
                </td>
              </motion.tr>
            ) : null}
          </AnimatePresence>
        </tbody>
      </table>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#d9d9dd] bg-[#f1f5ff] px-5 py-3.5">
        <p className="text-xs text-neutral-600">
          {showSeat
            ? `Local load ~$${cutTotal.toLocaleString()} → DigiNeom seat ~$3,900`
            : remainingLocal > 0
              ? `Still on books · $${remainingLocal.toLocaleString()}/mo`
              : "Ledger clearing…"}
        </p>
        {showSeat ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold text-[#1863dc]"
          >
            ~{Math.round((1 - 3900 / cutTotal) * 100)}% less than full local load
          </motion.p>
        ) : null}
      </div>
    </div>
  );
}
