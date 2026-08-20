'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Clock3,
  Coffee,
  FileCheck2,
  MonitorSmartphone,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Users,
  Wifi,
  Zap,
} from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

const marketStats = [
  { value: '72%', label: 'of global organizations already augment their engineering teams' },
  { value: '41%', label: 'shorter hiring cycles versus traditional recruitment' },
  { value: '$123.3B', label: 'global IT staffing market in 2025, heading to $152.5B by 2031' },
  { value: '1.9M', label: 'contracted IT specialists working through this model today' },
];

const model = [
  {
    icon: BadgeCheck,
    title: 'Sourcing & verification',
    what: 'We recruit South Asian engineers, then independently verify degrees, test skills through live coding, and assess English and references.',
    why: 'Removes the number one fear of offshore hiring: unverifiable CVs and credentials.',
  },
  {
    icon: Building2,
    title: 'Managed co-working workspace',
    what: 'Every engineer works from a premium co-working space we manage — enterprise internet, power backup, company hardware, meeting rooms, and on-site support.',
    why: 'You get the reliability of an office without leasing one, and none of the risk of an unknown home setup.',
  },
  {
    icon: Briefcase,
    title: 'Placement & account management',
    what: 'We match engineers to your roles, then handle contracts, invoicing, performance reviews, and replacements.',
    why: 'One point of accountability. You manage the work, we manage everything else.',
  },
];

const steps = [
  { step: '01', title: 'Tell us the role', copy: 'Stack, seniority, timezone overlap, and the outcome you need. One call is enough to brief us.' },
  { step: '02', title: 'We vet and verify', copy: 'Degree verification, live coding assessment, English evaluation, and reference checks before any CV reaches you.' },
  { step: '03', title: 'You interview', copy: 'You meet a shortlist of verified engineers and choose. No pressure to accept a match that is not right.' },
  { step: '04', title: 'They start, seated', copy: 'Your engineer begins from a managed co-working floor, on our equipment, on your timezone, from day one.' },
];

const facilities = [
  { icon: Wifi, title: 'Enterprise connectivity', copy: 'Redundant high-speed lines so a dropped standup is never part of the deal.' },
  { icon: Zap, title: 'Uninterrupted power', copy: 'Full backup infrastructure. Local outages stay a local problem, not your delivery risk.' },
  { icon: MonitorSmartphone, title: 'Company hardware', copy: 'Provisioned, secured, and maintained machines with proper multi-monitor setups.' },
  { icon: Users, title: 'Rooms for real collaboration', copy: 'Bookable meeting rooms and call booths, so interviews and reviews are never taken from a kitchen table.' },
  { icon: ShieldCheck, title: 'Access-controlled floors', copy: 'Secured premises with managed entry — a serious answer to the security question.' },
  { icon: Coffee, title: 'A place people want to be', copy: 'Quiet focus zones, breakout areas, and daily amenities. Retention starts with the room.' },
];

const funnel = [
  { stage: 'Applications', value: '1,000' },
  { stage: 'Pass technical testing', value: '120' },
  { stage: 'Reach interview', value: '40' },
  { stage: 'Placed with a client', value: '12' },
];

const rates = [
  { region: 'North America', junior: '~$80/hr', senior: 'up to $200/hr', note: 'Median US developer wage $133,080/yr, plus roughly 30% in benefits' },
  { region: 'Western Europe', junior: '~$50/hr', senior: '~$150/hr', note: 'Germany, France, and the United Kingdom' },
  { region: 'Central & Eastern Europe', junior: '$31–$39/hr', senior: '$64–$76/hr', note: 'The long-standing nearshore favourite for EU clients' },
  { region: 'Latin America', junior: '$33–$45/hr', senior: '$60–$75/hr', note: 'Timezone premium for US clients' },
  { region: 'Pakistan', junior: '$10–$25/hr', senior: '$40–$70/hr', note: 'Among the strongest cost-to-skill ratios in Asia' },
];

const guarantees = [
  { icon: FileCheck2, title: 'Verification as standard', copy: 'Every degree, certificate, and work history is independently checked. Verification is our headline, not our footnote.' },
  { icon: Building2, title: 'A managed seat, always', copy: 'Your engineer is seated in a professional co-working space we run — never working from an unverified home setup.' },
  { icon: Clock3, title: 'Timezone overlap in writing', copy: 'Pakistan sits at UTC+5, giving four to six working hours of daily overlap with Central Europe. We commit to a minimum in the contract.' },
  { icon: Receipt, title: 'Transparent pricing', copy: 'One flat monthly rate per engineer, workspace and facilities included. No hidden margins, no surprise fees.' },
  { icon: Users, title: 'Vetted CVs in 72 hours', copy: 'Speed is contractual, not aspirational. AI-assisted screening lets us move quickly without loosening the standard.' },
  { icon: RefreshCw, title: '30-day replacement', copy: 'If a placement is not working within the first 30 days, we replace the engineer at no cost.' },
];

const objections = [
  {
    concern: 'Data security and compliance',
    stat: '37%',
    statNote: 'of enterprises name this the main brake on offshore work',
    answer: 'GDPR-ready contracts, a standard data-processing agreement, clear IP assignment, and managed devices on access-controlled floors rather than unknown home machines.',
  },
  {
    concern: 'Timezone and cultural fit',
    stat: '33%',
    statNote: 'of augmented engagements hit friction here',
    answer: 'A written daily overlap commitment, English assessed before placement, and account management that absorbs the coordination overhead instead of passing it to you.',
  },
];

const values = [
  { title: 'Verified, not claimed', copy: 'Every credential is independently checked before a CV ever reaches a client.' },
  { title: 'Seated, not scattered', copy: 'Engineers work from managed co-working floors with the highest level of facilities — never an improvised home desk.' },
  { title: 'Transparent pricing', copy: 'One flat monthly rate per engineer, workspace included. No hidden margins.' },
  { title: 'Partnership over placement', copy: 'We succeed only when the engineer stays, performs, and grows with the client.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="px-5 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20 lg:px-12">
        <div className="container-custom">
          <motion.div {...reveal} className="grid gap-6 border-b pb-10 lg:grid-cols-[1fr_1.9fr] lg:items-end">
            <p className="eyebrow text-[#1863dc]">Talent bridge / Verified engineering teams</p>
            <div>
              <h1 className="display text-[13vw] leading-[0.9] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                Talent without borders.<br />Trust without doubt.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
                We give European and North American companies a second engineering team without a
                second payroll — degree-verified engineers, working from co-working spaces we manage
                to a standard most offshore hires never see.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="pill bg-[#1863dc] text-white hover:bg-[#0d47a1]">
                  Talk to us about a role <ArrowUpRight size={17} />
                </Link>
                <Link href="#workspace" className="pill border border-[#17171c] hover:bg-[#eeece7]">
                  View our culture
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-[22px] bg-neutral-100"
          >
            <Image
              src="/workspace/floor-01.webp"
              alt="Engineers at work on our managed co-working floor"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Market proof strip */}
      <section className="section-padding bg-[#f1f5ff] py-16 md:py-20">
        <div className="container-custom">
          <motion.p {...reveal} className="eyebrow mb-10 text-[#1863dc]">
            A mainstream, validated model
          </motion.p>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.value}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-t border-[#1863dc]/25 pt-5"
              >
                <p className="display text-5xl text-[#1863dc] md:text-6xl">{stat.value}</p>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom grid gap-14 lg:grid-cols-[1fr_2fr]">
          <motion.p {...reveal} className="eyebrow text-[#c7dbff]">
            Vision & mission
          </motion.p>
          <div className="space-y-16">
            <motion.blockquote {...reveal}>
              <p className="eyebrow mb-6 text-[#c7dbff]">Vision</p>
              <p className="display text-3xl leading-[1.08] md:text-5xl">
                A world where a company’s ambition is never limited by the price of talent — where
                every brilliant engineer, wherever they were born, works on the world stage with
                their skill proven and their degree verified.
              </p>
            </motion.blockquote>

            <motion.blockquote {...reveal} className="border-t border-white/25 pt-12">
              <p className="eyebrow mb-6 text-[#c7dbff]">Mission</p>
              <p className="text-xl leading-relaxed text-white/85 md:text-2xl">
                To deliver Western-standard engineering output at up to 70% lower cost — from a desk
                we manage, with full transparency from CV to code.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 grid gap-6 border-t pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#1863dc]">The model / 01—03</p>
            <h2 className="display text-4xl md:text-6xl">
              Offshore engineering, with the infrastructure included.
            </h2>
          </motion.div>

          <div>
            {model.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...reveal}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="grid gap-5 border-t py-8 md:grid-cols-[90px_1fr_1fr] md:items-start md:py-12"
                >
                  <span className="flex items-center gap-3 font-mono text-xs text-[#1863dc]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-[-0.045em] md:text-4xl">
                    {item.title}
                  </h3>
                  <div className="max-w-xl space-y-4">
                    <p className="text-lg leading-relaxed text-neutral-600">{item.what}</p>
                    <p className="border-l-2 border-[#1863dc] pl-4 text-base leading-relaxed text-[#17171c]">
                      {item.why}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* The workspace */}
      <section id="workspace" className="scroll-mt-24 bg-[#17171c] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-12 grid gap-6 border-t border-white/25 pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#c7dbff]">The workspace</p>
            <div>
              <h2 className="display text-4xl md:text-6xl">
                Nobody codes for you from a kitchen table.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                We place every engineer in a premium co-working space and manage it on their behalf.
                It is the part of the model competitors talk around, because most of them cannot
                show you a room.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-12">
            <motion.div
              {...reveal}
              className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-white/5 md:col-span-7 md:aspect-[16/11]"
            >
              <Image
                src="/workspace/floor-02.webp"
                alt="Open-plan desks on our managed co-working floor"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-white/5 md:col-span-5 md:aspect-[16/11]"
            >
              <Image
                src="/workspace/floor-04.webp"
                alt="An engineer working at a fully equipped desk"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-white/5 md:col-span-12 md:aspect-[21/8]"
            >
              <Image
                src="/workspace/floor-03.webp"
                alt="Collaboration and breakout areas in the workspace"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-white/20 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...reveal}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Icon className="h-5 w-5 text-[#c7dbff]" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-[#f1f5ff]">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 grid gap-6 border-t border-[#1863dc]/25 pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#1863dc]">How it works</p>
            <h2 className="display text-4xl md:text-6xl">Four steps to a working engineer.</h2>
          </motion.div>

          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-t border-[#1863dc]/30 pt-5"
              >
                <span className="font-mono text-xs text-[#1863dc]">{item.step}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting funnel */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 grid gap-6 border-t pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#1863dc]">The vetting funnel</p>
            <div>
              <h2 className="display text-4xl md:text-6xl">Under 3% make it through.</h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600">
                Most agencies describe their vetting in adjectives. We describe ours in numbers, and
                we publish the acceptance rate as we place.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {funnel.map((item, index) => (
              <motion.div
                key={item.stage}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-t border-[#17171c] pt-5"
              >
                <p className="display text-5xl md:text-6xl">{item.value}</p>
                <p className="eyebrow mt-4 text-neutral-500">{item.stage}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-neutral-500">
            Funnel shape shown at our target standard. Live figures are published as placements are
            made, rather than estimated after the fact.
          </p>
        </div>
      </section>

      {/* Cost argument */}
      <section className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 grid gap-6 border-t border-white/25 pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#c7dbff]">The cost argument</p>
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

      {/* Guarantees */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 grid gap-6 border-t pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#1863dc]">What we commit to</p>
            <h2 className="display text-4xl md:text-6xl">Promises we put in the contract.</h2>
          </motion.div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...reveal}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="border-t pt-6"
                >
                  <Icon className="h-5 w-5 text-[#1863dc]" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="section-padding bg-[#f1f5ff]">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-14 grid gap-6 border-t border-[#1863dc]/25 pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#1863dc]">The hard questions</p>
            <h2 className="display text-4xl md:text-6xl">Answered before you ask.</h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {objections.map((item, index) => (
              <motion.div
                key={item.concern}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-t border-[#1863dc]/30 pt-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="display text-5xl text-[#1863dc]">{item.stat}</span>
                  <span className="max-w-xs text-sm leading-relaxed text-neutral-500">
                    {item.statNote}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.concern}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-neutral-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we operate */}
      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_2fr]">
          <motion.p {...reveal} className="eyebrow text-[#1863dc]">
            Where we operate
          </motion.p>
          <div>
            <motion.h2 {...reveal} className="display text-4xl md:text-6xl">
              Europe first. Deliberately.
            </motion.h2>
            <motion.p {...reveal} className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              Germany, the Netherlands, the United Kingdom, and the Nordics are our beachhead —
              strong SME demand, and four to six hours of daily overlap with our engineering floor.
              North America follows, on the same standard rather than a diluted one.
            </motion.p>

            <div className="mt-12 grid gap-8 border-t pt-8 sm:grid-cols-3">
              {[
                ['~30%', 'of global augmentation demand comes from Europe'],
                ['~39%', 'comes from North America, our second market'],
                ['65%+', 'of the world’s augmented developers are supplied from Asia-Pacific'],
              ].map(([value, label]) => (
                <motion.div key={value} {...reveal}>
                  <p className="display text-4xl text-[#1863dc] md:text-5xl">{value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div {...reveal} className="mb-12 grid gap-6 border-t pt-6 md:grid-cols-2">
            <p className="eyebrow text-[#1863dc]">Core values</p>
            <h2 className="display text-3xl md:text-5xl">How we hold ourselves to it.</h2>
          </motion.div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="border-t pt-5"
              >
                <ShieldCheck className="h-4 w-4 text-[#1863dc]" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1863dc] text-white">
        <div className="container-custom grid gap-10 border-t border-white/25 pt-7 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-[#c7dbff]">No pitch required</p>
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
              <Link
                href="#workspace"
                className="pill border border-white/40 text-white hover:bg-white hover:text-[#1863dc]"
              >
                See the workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
