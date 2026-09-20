"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { EngineerProfileCard } from "@/components/illustrative/EngineerProfile";
import { TALENT_PROFILES, type TalentProfile } from "@/lib/digineom-content";
import { contactHrefForRole } from "@/lib/contact-prefills";

const domains = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "devops", label: "DevOps" },
  { id: "mobile", label: "Mobile" },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function TalentView() {
  const [domain, setDomain] = useState<(typeof domains)[number]["id"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return TALENT_PROFILES.filter((profile) => {
      const domainOk = domain === "all" || profile.domain === domain;
      const q = query.trim().toLowerCase();
      const queryOk =
        !q ||
        profile.role.toLowerCase().includes(q) ||
        profile.primarySkills.some((s) => s.toLowerCase().includes(q));
      return domainOk && queryOk;
    });
  }, [domain, query]);

  return (
    <main className="min-h-screen bg-white text-[#17171c]">
      <Navigation />

      <section className="section-padding">
        <div className="container-custom">
          <p className="eyebrow text-[#1863dc]">Talent directory</p>
          <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">
            Engineers for your stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Names stay private until you brief a role. Click any profile to talk to us about that
            seat — we prefill the inquiry for you.
          </p>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {domains.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDomain(item.id)}
                  className={
                    domain === item.id
                      ? "rounded-full bg-[#1863dc] px-3.5 py-1.5 text-sm text-white"
                      : "rounded-full border border-[#d9d9dd] px-3.5 py-1.5 text-sm text-[#17171c] hover:border-[#1863dc]"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by role or skill"
              className="w-full max-w-xs rounded-full border border-[#d9d9dd] px-4 py-2.5 text-sm outline-none focus:border-[#1863dc] lg:w-64"
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((profile, index) => (
              <TalentCard key={profile.id} profile={profile} index={index} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-neutral-600">No profiles match that filter.</p>
          ) : null}

          <div className="mt-14">
            <Link href="/contact" className="pill bg-[#17171c] text-white hover:bg-[#1863dc]">
              Brief a role <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TalentCard({ profile, index }: { profile: TalentProfile; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: easeOut }}
    >
      <EngineerProfileCard
        firstName={profile.firstName}
        role={profile.role}
        bio={profile.summary}
        hubCity={profile.hubCity}
        score={profile.liveCodingScore}
        skills={profile.primarySkills}
        meta={`${profile.experienceYears} yrs · ${profile.seniority} · English ${profile.englishCefr} · ${profile.availability}`}
        blurName
        href={contactHrefForRole(profile.role)}
      />
    </motion.div>
  );
}
