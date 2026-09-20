"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CLIENT_STORIES } from "@/lib/digineom-content";
import {
  ClientPlacard,
  ClientQuoteCard,
  PlacementRouteCard,
} from "@/components/illustrative/ClientStoryCards";
import { ResourceLinks } from "@/components/illustrative/ResourceLinks";
import { InkStampDocument } from "@/components/illustrative/InkStampDocument";

const easeOut = [0.22, 1, 0.36, 1] as const;

const ROUTES = [
  { fromCode: "LHE", fromCity: "Lahore", toCode: "LON", toCity: "London", metric: "FinTech squad" },
  { fromCode: "KHI", fromCity: "Karachi", toCode: "NYC", toCity: "New York", metric: "Platform pod" },
  { fromCode: "ISB", fromCity: "Islamabad", toCode: "BER", toCity: "Berlin", metric: "ML bench" },
  { fromCode: "LHE", fromCity: "Lahore", toCode: "DUB", toCity: "Dublin", metric: "SRE pair" },
];

function regionCode(region: string) {
  if (region.includes("London")) return "LON";
  if (region.includes("New York")) return "NYC";
  if (region.includes("Berlin")) return "BER";
  if (region.includes("Chicago")) return "CHI";
  if (region.includes("Dublin")) return "DUB";
  if (region.includes("Toronto")) return "YYZ";
  return "EU";
}

export default function ClientsView() {
  const industries = useMemo(() => {
    const set = new Set(CLIENT_STORIES.map((c) => c.industry.split(" & ")[0]));
    return ["All", ...Array.from(set)];
  }, []);
  const [filter, setFilter] = useState("All");

  const stories = CLIENT_STORIES.filter(
    (story) => filter === "All" || story.industry.startsWith(filter),
  );
  const featured = stories[0] ?? CLIENT_STORIES[0];

  return (
    <main className="min-h-screen bg-white text-[#17171c]">
      <Navigation />

      <section className="section-padding pb-10">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#1863dc]">50–100 staff product teams</p>
            <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">
              Case files from the mid-market.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              Anonymized engagements — industry, region, and outcomes. Flip a placard for the
              quote. No invented company names or logos.
            </p>
            <div className="mt-8">
              <ResourceLinks
                title="Related files"
                items={[
                  { name: "Talent", description: "Open roles", href: "/talent", letter: "T" },
                  { name: "Hubs", description: "Where they sit", href: "/hubs", letter: "H" },
                  { name: "Pricing", description: "How we engage", href: "/pricing", letter: "P" },
                ]}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <ClientQuoteCard
              issue={`Case ${featured.id.toUpperCase()} · ${featured.industry.split(" & ")[0]}`}
              quote={featured.quote}
              attribution={featured.attribution}
              accentWord="managed hub"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#d9d9dd] bg-[#f1f5ff] py-10">
        <div className="container-custom px-5 sm:px-8 lg:px-12">
          <p className="eyebrow mb-5 text-[#1863dc]">Placement routes</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTES.map((route, index) => (
              <motion.div
                key={`${route.fromCode}-${route.toCode}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: easeOut }}
              >
                <PlacementRouteCard {...route} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex flex-col gap-6 border-t border-[#d9d9dd] pt-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="display text-3xl md:text-4xl">Exhibition wall</h2>
              <p className="mt-3 max-w-md text-sm text-neutral-600">
                Each placard is a filed engagement. Tap to read the client note on the reverse.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={
                    filter === item
                      ? "rounded-full bg-[#1863dc] px-3.5 py-1.5 text-sm text-white"
                      : "rounded-full border border-[#d9d9dd] px-3.5 py-1.5 text-sm hover:bg-[#f1f5ff]"
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: easeOut }}
              >
                <ClientPlacard
                  catalogRef={`DN.${story.id.toUpperCase()}.${regionCode(story.region)}`}
                  industry={story.industry}
                  impact={story.impact}
                  region={story.region}
                  teamSize={story.teamSize}
                  squad={story.squad}
                  summary={story.summary}
                  quote={story.quote}
                  attribution={story.attribution}
                  stack={story.stack}
                />
              </motion.div>
            ))}
          </div>

          {stories.length === 0 ? (
            <p className="mt-10 text-neutral-600">No case files in that industry yet.</p>
          ) : null}

          <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <InkStampDocument
              reference="DN-CLIENT-INDEX"
              title="Engagement archive"
              meta={[
                "Audience · 50–100 staff product companies",
                "Markets · Europe & North America",
              ]}
              status="Stories anonymized · outcomes real-pattern"
              stampLabel="Confidential"
              stampTone="ink"
            />
            <div className="rounded-[22px] bg-[#1863dc] p-8 text-white md:p-10">
              <h2 className="display text-3xl md:text-4xl">Need a similar seating?</h2>
              <p className="mt-4 max-w-md text-white/75">
                Brief the role and region. We return a verified shortlist — you interview and
                choose.
              </p>
              <Link
                href="/contact"
                className="pill mt-8 bg-white text-[#1863dc] hover:bg-[#c7dbff]"
              >
                Talk about your team <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
