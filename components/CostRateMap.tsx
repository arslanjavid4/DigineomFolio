"use client";

import { useMemo, useState } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type RateRegion = {
  id: string;
  region: string;
  junior: string;
  senior: string;
  note: string;
  ring: [number, number][];
  pin?: { lat: number; lng: number };
};

function project(lat: number, lng: number) {
  return {
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  };
}

function ringPath(ring: [number, number][]) {
  return `${ring
    .map(([lng, lat], index) => {
      const { x, y } = project(lat, lng);
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ")} Z`;
}

export const rateRegions: RateRegion[] = [
  {
    id: "na",
    region: "North America",
    junior: "~$80/hr",
    senior: "up to $200/hr",
    note: "Median US developer wage $133,080/yr, plus roughly 30% in benefits",
    ring: [
      [-168, 63],
      [-141, 69],
      [-95, 72],
      [-56, 60],
      [-53, 47],
      [-68, 44],
      [-82, 24],
      [-97, 25],
      [-117, 32],
      [-125, 48],
      [-153, 58],
      [-168, 63],
    ],
  },
  {
    id: "latam",
    region: "Latin America",
    junior: "$33–$45/hr",
    senior: "$60–$75/hr",
    note: "Timezone premium for US clients",
    ring: [
      [-117, 32],
      [-97, 26],
      [-87, 14],
      [-77, 8],
      [-60, 8],
      [-35, -5],
      [-34, -30],
      [-52, -52],
      [-71, -55],
      [-76, -18],
      [-81, 0],
      [-92, 15],
      [-106, 22],
      [-117, 32],
    ],
  },
  {
    id: "we",
    region: "Western Europe",
    junior: "~$50/hr",
    senior: "~$150/hr",
    note: "Germany, France, and the United Kingdom",
    ring: [
      [-10, 36],
      [-10, 44],
      [-6, 51],
      [-8, 58],
      [5, 61],
      [13, 55],
      [10, 47],
      [16, 41],
      [12, 36],
      [3, 43],
      [-1, 36],
      [-10, 36],
    ],
  },
  {
    id: "cee",
    region: "Central & Eastern Europe",
    junior: "$31–$39/hr",
    senior: "$64–$76/hr",
    note: "The long-standing nearshore favourite for EU clients",
    ring: [
      [12, 54],
      [22, 59],
      [28, 58],
      [30, 45],
      [28, 41],
      [19, 39],
      [13, 42],
      [13, 48],
      [16, 51],
      [12, 54],
    ],
  },
  {
    id: "pk",
    region: "Pakistan",
    junior: "$10–$25/hr",
    senior: "$40–$70/hr",
    note: "Among the strongest cost-to-skill ratios in Asia",
    pin: { lat: 30.4, lng: 69.3 },
    ring: [
      [61, 24],
      [77, 24],
      [77, 37],
      [61, 37],
      [61, 24],
    ],
  },
];

export default function CostRateMap() {
  const [activeId, setActiveId] = useState("pk");
  const active = rateRegions.find((row) => row.id === activeId) ?? rateRegions[4];

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#ffffff3d",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
      <div className="relative">
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="pointer-events-none object-contain select-none [mask-image:linear-gradient(to_bottom,transparent,white_8%,white_92%,transparent)]"
            unoptimized
          />
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 h-full w-full"
            role="group"
            aria-label="Developer rates by region"
          >
            {rateRegions.map((row) => {
              const selected = row.id === activeId;
              return (
                <g key={row.id}>
                  <path
                    d={ringPath(row.ring)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={selected}
                    aria-label={`${row.region}. Junior ${row.junior}. Senior ${row.senior}.`}
                    className={cn(
                      "cursor-pointer stroke-1 outline-none transition-colors duration-300",
                      selected
                        ? "fill-white/40 stroke-white"
                        : "fill-white/10 stroke-white/20 hover:fill-white/25 hover:stroke-white/50 focus-visible:fill-white/25",
                    )}
                    onMouseEnter={() => setActiveId(row.id)}
                    onFocus={() => setActiveId(row.id)}
                    onClick={() => setActiveId(row.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveId(row.id);
                      }
                    }}
                  />
                  {row.pin ? (
                    <circle
                      cx={project(row.pin.lat, row.pin.lng).x}
                      cy={project(row.pin.lat, row.pin.lng).y}
                      r={selected ? 7 : 5}
                      className={cn(
                        "pointer-events-none",
                        selected ? "fill-white" : "fill-[#c7dbff]",
                      )}
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {rateRegions.map((row) => {
            const selected = row.id === activeId;
            return (
              <button
                key={row.id}
                type="button"
                onClick={() => setActiveId(row.id)}
                onMouseEnter={() => setActiveId(row.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
                  selected
                    ? "bg-white text-[#1863dc]"
                    : "border border-white/30 text-white/80 hover:bg-white/10",
                )}
              >
                {row.region}
              </button>
            );
          })}
        </div>
      </div>

      <aside className="rounded-[22px] bg-white p-6 text-[#17171c] sm:p-7">
        <p className="text-xl font-semibold tracking-[-0.03em]">{active.region}</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-neutral-400">Junior</p>
            <p className="mt-1 font-mono text-lg text-[#1863dc]">{active.junior}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400">Senior</p>
            <p className="mt-1 font-mono text-lg text-[#1863dc]">{active.senior}</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-neutral-500">{active.note}</p>
      </aside>

      <table className="sr-only">
        <caption>Advertised developer rates by region</caption>
        <thead>
          <tr>
            <th>Region</th>
            <th>Junior</th>
            <th>Senior</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rateRegions.map((row) => (
            <tr key={row.id}>
              <td>{row.region}</td>
              <td>{row.junior}</td>
              <td>{row.senior}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
