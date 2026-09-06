'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TalentBridgeHero from '@/components/TalentBridgeHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SmoothHashLink from '@/components/SmoothHashLink';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { ScrollChoreography } from '@/components/ui/scroll-choreography';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

const steps = [
  { title: 'Tell us the role', copy: 'Stack, seniority, timezone overlap, and the outcome you need. One call is enough to brief us.' },
  { title: 'We vet and verify', copy: 'Degree verification, live coding assessment, English evaluation, and reference checks before any CV reaches you.' },
  { title: 'You interview', copy: 'You meet a shortlist of verified engineers and choose. No pressure to accept a match that is not right.' },
  { title: 'They start, seated', copy: 'Your engineer begins from a managed co-working floor, on our equipment, on your timezone, from day one.' },
];

const workspaceShots = [
  {
    src: '/workspace/floor-02.webp',
    alt: 'Managed DigiNeom co-working floor with open-plan engineer desks',
  },
  {
    src: '/workspace/floor-04.webp',
    alt: 'DigiNeom engineer working at a provisioned desk in a managed workspace',
  },
  {
    src: '/workspace/floor-01.webp',
    alt: 'Quiet focus area on a DigiNeom-managed co-working floor',
  },
  {
    src: '/workspace/floor-03.webp',
    alt: 'Collaboration area inside a DigiNeom-managed co-working space',
  },
  {
    src: '/workspace/floor-05.jpg',
    alt: 'Engineers working together at desks in a managed co-working space',
  },
  {
    src: '/workspace/floor-06.webp',
    alt: 'People working in a premium co-working space DigiNeom manages',
  },
];

const facilities = [
  { title: 'Enterprise connectivity', copy: 'Redundant high-speed lines so a dropped standup is never part of the deal.' },
  { title: 'Uninterrupted power', copy: 'Full backup infrastructure. Local outages stay a local problem, not your delivery risk.' },
  { title: 'Company hardware', copy: 'Provisioned, secured, and maintained machines with proper multi-monitor setups.' },
  { title: 'Rooms for real collaboration', copy: 'Bookable meeting rooms and call booths, so interviews and reviews are never taken from a kitchen table.' },
  { title: 'Access-controlled floors', copy: 'Secured premises with managed entry — a serious answer to the security question.' },
  { title: 'A place people want to be', copy: 'Quiet focus zones, breakout areas, and daily amenities. Retention starts with the room.' },
];

const funnel = [
  { stage: 'Applications', short: 'Applications', value: '1,000', count: 1000, rate: '100%', of: 'inbound CVs' },
  { stage: 'Pass technical testing', short: 'Technical', value: '120', count: 120, rate: '12%', of: 'pass live testing' },
  { stage: 'Reach interview', short: 'Interview', value: '40', count: 40, rate: '4%', of: 'reach interview' },
  { stage: 'Placed with a client', short: 'Placed', value: '12', count: 12, rate: '1.2%', of: 'seated with a client' },
];

const marketMetrics = [
  {
    value: '72%',
    detail: 'of global organizations already augment their engineering teams',
  },
  {
    value: '$123.3B',
    detail: 'global IT staffing market in 2025, heading to $152.5B by 2031',
  },
  {
    value: '41%',
    detail: 'shorter hiring cycles versus traditional recruitment',
  },
  {
    value: '1.9M',
    detail: 'contracted IT specialists working through this model today',
  },
];

const RIBBON_W = 1200;
const RIBBON_H = 320;
const RIBBON_PAD = 90;
const RIBBON_CY = RIBBON_H / 2;

function funnelHeightAt(t: number, heights: number[]) {
  const segs = heights.length - 1;
  const x = Math.min(Math.max(t, 0), 0.9999) * segs;
  const i = Math.floor(x);
  const local = x - i;
  const k = Math.max(0, (local - 0.58) / 0.42);
  const e = k * k * (3 - 2 * k);
  return heights[i] * (1 - e) + heights[i + 1] * e;
}

function ribbonFill(heights: number[], scale: number) {
  const samples = 112;
  const inner = RIBBON_W - RIBBON_PAD * 2;
  const top: string[] = [];
  const bot: string[] = [];

  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    const x = RIBBON_PAD + inner * t;
    const h = funnelHeightAt(t, heights) * scale;
    top.push(`${x.toFixed(2)},${(RIBBON_CY - h / 2).toFixed(2)}`);
    bot.push(`${x.toFixed(2)},${(RIBBON_CY + h / 2).toFixed(2)}`);
  }

  const hStart = funnelHeightAt(0, heights) * scale;
  const hEnd = funnelHeightAt(1, heights) * scale;
  const [xLast] = top[top.length - 1].split(',');
  const [xFirst] = top[0].split(',');

  return [
    `M ${top[0]}`,
    `L ${top.slice(1).join(' L ')}`,
    `A 14 ${Math.max(8, hEnd / 2).toFixed(2)} 0 0 1 ${xLast},${(RIBBON_CY + hEnd / 2).toFixed(2)}`,
    `L ${bot
      .slice()
      .reverse()
      .join(' L ')}`,
    `A 14 ${Math.max(8, hStart / 2).toFixed(2)} 0 0 1 ${xFirst},${(RIBBON_CY - hStart / 2).toFixed(2)}`,
    'Z',
  ].join(' ');
}

const rates = [
  { region: 'North America', junior: '~$80/hr', senior: 'up to $200/hr', note: 'Median US developer wage $133,080/yr, plus roughly 30% in benefits' },
  { region: 'Western Europe', junior: '~$50/hr', senior: '~$150/hr', note: 'Germany, France, and the United Kingdom' },
  { region: 'Central & Eastern Europe', junior: '$31–$39/hr', senior: '$64–$76/hr', note: 'The long-standing nearshore favourite for EU clients' },
  { region: 'Latin America', junior: '$33–$45/hr', senior: '$60–$75/hr', note: 'Timezone premium for US clients' },
  { region: 'Pakistan', junior: '$10–$25/hr', senior: '$40–$70/hr', note: 'Among the strongest cost-to-skill ratios in Asia' },
];

const processPills = ['One briefing call', 'You interview', 'Seated from day one'];

const modelCards = {
  topLeft: {
    title: 'Sourcing & verification',
    copy: 'Degrees, live coding, English — checked before a CV reaches you.',
  },
  bottomLeft: {
    title: 'Managed co-working',
    copy: 'A desk we run. Power, line, hardware, rooms.',
  },
  bottomRight: {
    title: 'Placement & account',
    copy: 'One contract. One person accountable for the hire.',
  },
  topRight: {
    title: 'Offshore engineering, with the infrastructure included.',
    copy: 'Verified talent, a desk we manage, and one team that owns the outcome.',
    featured: true,
  },
};

function ProcessSteps() {
  return (
    <Accordion type="single" collapsible defaultValue="0" className="w-full">
      {steps.map((step, index) => (
          <AccordionItem key={step.title} value={String(index)} className="border-[#d9d9dd] first:border-t">
          <AccordionTrigger className="items-center py-5 text-left hover:no-underline [&>svg]:text-[#1863dc] [&>svg]:duration-500">
            <span className="display pr-4 text-xl leading-[1.1] text-[#17171c] sm:text-2xl">
              {step.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base">
            <p className="max-w-md text-[15px] leading-relaxed text-neutral-600 sm:text-base">
              {step.copy}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function VettingFunnel() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const max = funnel[0].count;
  const heights = funnel.map((item) => 24 + 196 * Math.pow(item.count / max, 0.48));
  const inner = RIBBON_W - RIBBON_PAD * 2;

  const layers = [
    { scale: 1, fill: '#d7e6ff' },
    { scale: 0.78, fill: '#9ec2ff' },
    { scale: 0.58, fill: '#4f89f0' },
    { scale: 0.38, fill: '#1863dc' },
    { scale: 0.2, fill: '#0d47a1' },
  ];

  return (
    <div>
      <div className="relative px-2 pb-6 pt-4 sm:px-4 md:px-6 md:pb-8 md:pt-6">
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reduceMotion ? 0 : 1.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <svg
              viewBox={`0 0 ${RIBBON_W} ${RIBBON_H}`}
              className="h-[220px] w-full sm:h-[280px] md:h-[320px]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="vetting-sheen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="46%" stopColor="#ffffff" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  {!reduceMotion && (
                    <>
                      <animate
                        attributeName="x1"
                        values="-80%;20%"
                        dur="4.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="x2"
                        values="20%;120%"
                        dur="4.8s"
                        repeatCount="indefinite"
                      />
                    </>
                  )}
                </linearGradient>
                <filter id="vetting-glow" x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur stdDeviation="18" />
                </filter>
              </defs>

              <path
                d={ribbonFill(heights, 1.08)}
                fill="#1863dc"
                opacity="0.18"
                filter="url(#vetting-glow)"
              />

              {layers.map((layer) => (
                <path key={layer.scale} d={ribbonFill(heights, layer.scale)} fill={layer.fill} />
              ))}

              <path d={ribbonFill(heights, 0.38)} fill="url(#vetting-sheen)" />

              {funnel.map((item, index) => {
                const t = index / (funnel.length - 1);
                const x = RIBBON_PAD + inner * t;
                const h = funnelHeightAt(t, heights);
                const lit = active === null || active === index;
                return (
                  <line
                    key={item.stage}
                    x1={x}
                    y1={RIBBON_CY - h / 2 - 10}
                    x2={x}
                    y2={RIBBON_CY + h / 2 + 10}
                    stroke="white"
                    strokeWidth={lit ? 2.4 : 1.4}
                    strokeOpacity={lit ? 1 : 0.55}
                  />
                );
              })}
            </svg>
          </motion.div>

          <ul className="pointer-events-none absolute inset-x-0 top-0 hidden h-[220px] sm:block sm:h-[280px] md:h-[320px]">
            {funnel.map((item, index) => {
              const t = index / (funnel.length - 1);
              const x = ((RIBBON_PAD + inner * t) / RIBBON_W) * 100;
              const h = funnelHeightAt(t, heights);
              const top = ((RIBBON_CY - h / 2) / RIBBON_H) * 100;
              const bottom = ((RIBBON_CY + h / 2) / RIBBON_H) * 100;
              const lit = active === null || active === index;

              return (
                <li
                  key={item.stage}
                  className="absolute"
                  style={{ left: `${x}%` }}
                >
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ececef] bg-white px-3 py-1 text-[13px] font-semibold tracking-[-0.03em] text-[#17171c] shadow-[0_8px_24px_rgba(23,23,28,0.08)]"
                    style={{ top: `${top}%`, opacity: lit ? 1 : 0.45 }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap rounded-full border border-[#ececef] bg-white px-3 py-1 text-[12px] text-neutral-500 shadow-[0_8px_24px_rgba(23,23,28,0.08)]"
                    style={{ top: `${bottom}%`, opacity: lit ? 1 : 0.45 }}
                  >
                    {item.short} · {item.rate}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="absolute inset-x-0 top-0 z-10 hidden h-[220px] sm:block sm:h-[280px] md:h-[320px]">
            {funnel.map((item, index) => {
              const t = index / (funnel.length - 1);
              const x = ((RIBBON_PAD + inner * t) / RIBBON_W) * 100;
              return (
                <button
                  key={item.stage}
                  type="button"
                  aria-label={`${item.value} ${item.of}`}
                  aria-pressed={active === index}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  className="absolute top-0 h-full w-[22%] -translate-x-1/2 cursor-pointer"
                  style={{ left: `${x}%` }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 px-3 sm:hidden">
          {funnel.map((item) => (
            <div key={item.stage} className="rounded-2xl bg-white px-3 py-3">
              <p className="display text-2xl leading-none">{item.value}</p>
              <p className="mt-1 text-xs text-neutral-500">
                {item.short} · {item.rate}
              </p>
            </div>
          ))}
        </div>

        <p className="sr-only">
          {funnel.map((item) => `${item.value} ${item.of}`).join('. ')}
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {marketMetrics.map((metric) => (
          <motion.article key={metric.value} {...reveal}>
            <p className="display text-3xl leading-none text-neutral-400 md:text-4xl">{metric.value}</p>
            <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-neutral-400">
              {metric.detail}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default function TalentBridgeHome() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation variant="overlay" />

      <TalentBridgeHero />

      <section id="model" className="bg-white">
        <ScrollChoreography cards={modelCards} />
      </section>

      {/* The workspace */}
      <section id="workspace" className="relative scroll-mt-24 bg-[#1863dc] text-white">
        <div className="container-custom px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
          <motion.div {...reveal} className="border-t border-white/25 pt-6">
            <h2 className="display text-4xl md:text-6xl">
              Nobody codes for you from a kitchen table.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
              We place every engineer in a premium co-working space and manage it on their behalf.
              It is the part of the model competitors talk around, because most of them cannot
              show you a room.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-8 md:mt-12">
          <ZoomParallax images={workspaceShots} />
        </div>

        <div className="container-custom px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
          <div className="grid gap-x-10 gap-y-10 border-t border-white/20 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="bg-white">
        <div className="grid lg:min-h-[40rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:pl-[max(3rem,calc((100vw-1440px)/2+3rem))] xl:pr-16">
            <motion.div {...reveal} className="max-w-xl">
              <h2 className="display text-4xl md:text-6xl">Four steps to a working engineer.</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
                From a briefing call to an engineer at a desk we manage. You stay in control of the
                hire; we handle everything that happens before they sit down.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {processPills.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#d9d9dd] bg-[#f1f5ff] px-3.5 py-1.5 text-sm text-[#17171c]"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-10">
                <ProcessSteps />
              </div>
            </motion.div>
          </div>

          <div className="h-full px-5 pb-16 pt-4 sm:px-8 lg:py-16 lg:pl-8 lg:pr-12 xl:pr-[max(3rem,calc((100vw-1440px)/2+3rem))]">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[22px] sm:min-h-[24rem] lg:h-full lg:min-h-[32rem]">
              <Image
                src="/process/abstract.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vetting funnel */}
      <section id="vetting" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-10 border-t border-[#d9d9dd] pt-6">
            <div>
              <h2 className="display text-4xl md:text-6xl">Under 3% make it through.</h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600">
                Most agencies describe their vetting in adjectives. We describe ours in numbers, and
                we publish the acceptance rate as we place.
              </p>
            </div>
          </motion.div>

          <VettingFunnel />
        </div>
      </section>

      {/* Cost argument */}
      <section id="cost" className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 border-t border-white/25 pt-6">
            <div>
              <h2 className="display text-4xl md:text-6xl">Same standard. 60–75% less.</h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                Advertised developer rates by region. The gap is the engine of the model — and the
                reason a verified, seated engineer is not the same purchase as a cheap one.
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal} className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="eyebrow py-4 pr-6 font-semibold text-[#c7dbff]">Region</th>
                  <th className="eyebrow py-4 pr-6 font-semibold text-[#c7dbff]">Junior</th>
                  <th className="eyebrow py-4 pr-6 font-semibold text-[#c7dbff]">Senior</th>
                  <th className="eyebrow py-4 font-semibold text-[#c7dbff]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((row) => (
                  <tr key={row.region} className="border-b border-white/15">
                    <td className="py-6 pr-6 text-xl font-semibold tracking-[-0.02em]">{row.region}</td>
                    <td className="py-6 pr-6 font-mono text-base text-white/80">{row.junior}</td>
                    <td className="py-6 pr-6 font-mono text-base text-white/80">{row.senior}</td>
                    <td className="py-6 text-sm leading-relaxed text-white/65">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="mt-8 text-sm text-white/55">
            Rate benchmarks compiled from Accelerance, nCube, Upwork, Arc.dev, Glassdoor, and US BLS
            data, 2025–2026.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom border-t border-white/25 pt-7">
          <div>
            <h2 className="display max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              Start with one engineer and judge us on the work.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              Most partnerships here begin with a single role and a short conversation about what
              your team is missing. If the fit is wrong, we will tell you before you sign anything.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="pill bg-white text-[#1863dc] hover:bg-[#c7dbff]">
                Talk to us about a role <ArrowUpRight size={17} />
              </Link>
              <SmoothHashLink
                href="#workspace"
                className="pill border border-white/40 text-white hover:bg-white hover:text-[#1863dc]"
              >
                See the workspace
              </SmoothHashLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
