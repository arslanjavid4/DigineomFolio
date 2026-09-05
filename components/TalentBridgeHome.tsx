'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TalentBridgeHero from '@/components/TalentBridgeHero';
import { Waves } from '@/components/ui/wave-background';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SmoothHashLink from '@/components/SmoothHashLink';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

const smoothEase = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

const model = [
  {
    title: 'Sourcing & verification',
    what: 'We recruit South Asian engineers, then independently verify degrees, test skills through live coding, and assess English and references.',
    why: 'Removes the number one fear of offshore hiring: unverifiable CVs and credentials.',
  },
  {
    title: 'Managed co-working workspace',
    what: 'Every engineer works from a premium co-working space we manage — enterprise internet, power backup, company hardware, meeting rooms, and on-site support.',
    why: 'You get the reliability of an office without leasing one, and none of the risk of an unknown home setup.',
  },
  {
    title: 'Placement & account management',
    what: 'We match engineers to your roles, then handle contracts, invoicing, performance reviews, and replacements.',
    why: 'One point of accountability. You manage the work, we manage everything else.',
  },
];

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
    src: '/workspace/floor-02.webp',
    alt: 'Open-plan desks with company hardware on the managed floor',
  },
  {
    src: '/workspace/floor-01.webp',
    alt: 'Premium co-working interior DigiNeom manages for placed engineers',
  },
  {
    src: '/workspace/floor-04.webp',
    alt: 'An engineer seated at a multi-monitor setup in the workspace',
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
  { stage: 'Applications', value: '1,000', count: 1000 },
  { stage: 'Pass technical testing', value: '120', count: 120 },
  { stage: 'Reach interview', value: '40', count: 40 },
  { stage: 'Placed with a client', value: '12', count: 12 },
];

const rates = [
  { region: 'North America', junior: '~$80/hr', senior: 'up to $200/hr', note: 'Median US developer wage $133,080/yr, plus roughly 30% in benefits' },
  { region: 'Western Europe', junior: '~$50/hr', senior: '~$150/hr', note: 'Germany, France, and the United Kingdom' },
  { region: 'Central & Eastern Europe', junior: '$31–$39/hr', senior: '$64–$76/hr', note: 'The long-standing nearshore favourite for EU clients' },
  { region: 'Latin America', junior: '$33–$45/hr', senior: '$60–$75/hr', note: 'Timezone premium for US clients' },
  { region: 'Pakistan', junior: '$10–$25/hr', senior: '$40–$70/hr', note: 'Among the strongest cost-to-skill ratios in Asia' },
];

const processPills = ['One briefing call', 'You interview', 'Seated from day one'];

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
  const max = funnel[0].count;

  return (
    <div className="space-y-3 sm:space-y-4">
      {funnel.map((item) => {
        const width = Math.max(14, Math.pow(item.count / max, 0.42) * 100);
        return (
          <div
            key={item.stage}
            className="flex min-h-[4.75rem] w-full items-center justify-between gap-6 rounded-2xl bg-[#1863dc] px-6 py-4 text-white sm:mx-auto sm:w-[var(--bar-width)]"
            style={{ ['--bar-width' as string]: `${width}%` } as React.CSSProperties}
          >
            <span className="display text-3xl leading-none md:text-5xl">{item.value}</span>
            <span className="max-w-[11rem] text-right text-sm leading-snug text-white/80 sm:max-w-[14rem]">
              {item.stage}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ModelExplainer() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : 1.15;

  return (
    <>
      <Accordion type="single" defaultValue="0" className="model-accordion lg:hidden">
        {model.map((entry, index) => (
          <AccordionItem key={entry.title} value={String(index)} className="border-[#d9d9dd]">
            <AccordionTrigger className="items-start py-7 text-left hover:no-underline [&>svg]:mt-2 [&>svg]:text-[#1863dc] [&>svg]:duration-700">
              <span className="display pr-4 text-2xl leading-[1.05] sm:text-3xl">{entry.title}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-8 text-base">
              <p className="text-lg leading-relaxed text-[#17171c]">{entry.why}</p>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">{entry.what}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="hidden h-[32rem] gap-3 lg:flex">
        {model.map((entry, index) => {
          const selected = index === active;
          return (
            <motion.button
              key={entry.title}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(index)}
              initial={false}
              animate={{
                flexGrow: selected ? 2.45 : 0.82,
                backgroundColor: selected ? '#1863dc' : '#f1f5ff',
                color: selected ? '#ffffff' : '#17171c',
              }}
              whileHover={
                selected || reduceMotion ? undefined : { backgroundColor: '#e4ecfb' }
              }
              transition={{ duration, ease: smoothEase }}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] p-8 text-left"
              style={{ flexBasis: 0, flexShrink: 1 }}
            >
              <span className="display text-2xl leading-[1.1] xl:text-3xl">{entry.title}</span>
              <AnimatePresence initial={false}>
                {selected && (
                  <motion.span
                    key={`${entry.title}-copy`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.75,
                      delay: reduceMotion ? 0 : 0.28,
                      ease: smoothEase,
                    }}
                    className="block"
                  >
                    <span className="mt-8 block max-w-lg text-2xl leading-[1.2] tracking-[-0.03em] text-white xl:text-3xl">
                      {entry.why}
                    </span>
                    <span className="mt-6 block max-w-lg text-base leading-relaxed text-white/75 xl:text-lg">
                      {entry.what}
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}

export default function TalentBridgeHome() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation variant="overlay" />

      <TalentBridgeHero>
        <section className="relative min-h-svh overflow-hidden px-5 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[#f1f5ff]/58" aria-hidden="true" />
          <div className="container-custom relative">
            <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-[minmax(200px,1fr)_minmax(180px,auto)]">
              <motion.article
                {...reveal}
                className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-white px-7 py-8 lg:row-span-2 lg:min-h-[440px] lg:px-9 lg:py-10"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(-32deg, rgba(24,99,220,0.09) 0 1px, transparent 1px 14px)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative" aria-hidden="true" />
                <div className="relative">
                  <p className="display text-7xl text-[#1863dc] sm:text-8xl lg:text-[7.5rem]">72%</p>
                  <p className="mt-5 max-w-sm text-base leading-relaxed text-neutral-600 md:text-lg">
                    of global organizations already augment their engineering teams
                  </p>
                </div>
              </motion.article>

              <motion.article
                {...reveal}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="flex min-h-[200px] flex-col justify-between rounded-[22px] border border-[#d9d9dd] bg-[#f8f9fb] px-7 py-7"
              >
                <div aria-hidden="true" />
                <div>
                <p className="display text-5xl text-[#17171c] md:text-6xl lg:text-7xl">$123.3B</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
                  global IT staffing market in 2025, heading to $152.5B by 2031
                </p>
                </div>
              </motion.article>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.article
                  {...reveal}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex min-h-[180px] flex-col justify-between rounded-[22px] border border-[#d9d9dd] bg-white px-6 py-6"
                >
                  <div aria-hidden="true" />
                  <div>
                  <p className="display text-5xl text-[#17171c] md:text-6xl">41%</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    shorter hiring cycles versus traditional recruitment
                  </p>
                  </div>
                </motion.article>

                <motion.article
                  {...reveal}
                  transition={{ duration: 0.5, delay: 0.14 }}
                  className="flex min-h-[180px] flex-col justify-between rounded-[22px] bg-[#1863dc] px-6 py-6 text-white"
                >
                  <div aria-hidden="true" />
                  <div>
                  <p className="display text-5xl md:text-6xl">1.9M</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    contracted IT specialists working through this model today
                  </p>
                  </div>
                </motion.article>
              </div>
            </div>
          </div>
        </section>
      </TalentBridgeHero>

      {/* Vision & mission */}
      <section id="vision" className="relative overflow-hidden section-padding bg-[#1863dc] text-white">
        <Waves />
        <div className="container-custom relative z-10 grid gap-14 lg:grid-cols-[1fr_2fr]">
          <motion.h2 {...reveal} className="display text-3xl md:text-4xl">
            Vision & mission
          </motion.h2>
          <div className="space-y-16">
            <motion.blockquote {...reveal}>
              <p className="display text-3xl leading-[1.08] md:text-5xl">
                A world where a company’s ambition is never limited by the price of talent — where
                every brilliant engineer, wherever they were born, works on the world stage with
                their skill proven and their degree verified.
              </p>
            </motion.blockquote>

            <motion.blockquote {...reveal} className="border-t border-white/25 pt-12">
              <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
                To deliver Western-standard engineering output at up to 70% lower cost — from a desk
                we manage, with full transparency from CV to code.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* The model */}
      <section id="model" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-12 border-t pt-6 lg:mb-6">
            <h2 className="display max-w-4xl text-4xl md:text-6xl">
              Offshore engineering, with the infrastructure included.
            </h2>
          </motion.div>

          <ModelExplainer />
        </div>
      </section>

      {/* The workspace */}
      <section id="workspace" className="relative scroll-mt-24 bg-[#1863dc] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <Waves />
        </div>
        <div className="container-custom relative z-10 px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
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

        <div className="relative z-10 mt-8 md:mt-12">
          <ZoomParallax images={workspaceShots} />
        </div>

        <div className="container-custom relative z-10 px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
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

          <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-full">
            <Image
              src="/process/abstract.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vetting funnel */}
      <section id="vetting" className="section-padding">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-12 border-t pt-6">
            <div>
              <h2 className="display text-4xl md:text-6xl">Under 3% make it through.</h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600">
                Most agencies describe their vetting in adjectives. We describe ours in numbers, and
                we publish the acceptance rate as we place.
              </p>
            </div>
          </motion.div>

          <VettingFunnel />
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-neutral-500">
            Funnel shape shown at our target standard. Live figures are published as placements are
            made, rather than estimated after the fact.
          </p>
        </div>
      </section>

      {/* Cost argument */}
      <section id="cost" className="relative overflow-hidden section-padding bg-[#1863dc] text-white">
        <Waves />
        <div className="container-custom relative z-10">
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
      <section className="relative overflow-hidden section-padding bg-[#1863dc] text-white">
        <Waves />
        <div className="container-custom relative z-10 border-t border-white/25 pt-7">
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
