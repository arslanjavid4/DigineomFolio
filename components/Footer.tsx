"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_EMAIL, SITE_LINKEDIN } from "@/lib/site";

const explore = [
  { href: "/talent", label: "Talent" },
  { href: "/clients", label: "Clients" },
  { href: "/hubs", label: "Hubs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#17171c]/15 bg-white px-5 py-12 text-[#17171c] sm:px-8 lg:px-12">
      <div className="container-custom">
        <div className="grid gap-12 border-b border-[#17171c]/15 pb-14 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="DigiNeom home">
              <Image
                src="/brand/logo.png"
                alt="DigiNeom — hire vetted remote software talent from Pakistan"
                width={160}
                height={48}
                className="h-10 w-auto"
                sizes="160px"
              />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-[#17171c]/70">
              Hire vetted Pakistani software engineers for Europe and North America. They work from
              co-working spaces we manage.
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className="eyebrow mb-4 text-[#1863dc]">Explore</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {explore.map((item) => (
                <Link
                  key={item.href}
                  className="block text-[#17171c]/75 hover:text-[#17171c]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <a className="block text-[#17171c]/75 hover:text-[#17171c]" href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
              <a
                className="block text-[#17171c]/75 hover:text-[#17171c]"
                rel="noopener noreferrer"
                href={SITE_LINKEDIN}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#17171c]/45 md:flex-row">
          <p>© {currentYear} DigiNeom. All rights reserved.</p>
          <p>Verified talent · Managed workspace</p>
        </div>
      </div>
    </footer>
  );
}
