"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-[#003c33] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="container-custom">
        <div className="grid gap-12 border-b border-white/20 pb-14 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="DigiNeom home">
              <Image
                src="/Images/QVC9EYR2LA7kyLTy3yqvyEimTI.png"
                alt="DigiNeom Solutions"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              Creating exceptional digital experiences through software development and thoughtful web design.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:gap-16">
            <div>
              <p className="eyebrow mb-4 text-[#a9e8cc]">Explore</p>
              <div className="space-y-3 text-sm"><Link className="block text-white/75 hover:text-white" href="/projects">Projects</Link><Link className="block text-white/75 hover:text-white" href="/about">About</Link></div>
            </div>
            <div>
              <p className="eyebrow mb-4 text-[#a9e8cc]">Connect</p>
              <div className="space-y-3 text-sm"><Link className="block text-white/75 hover:text-white" href="/contact">Contact</Link><a className="block text-white/75 hover:text-white" href="mailto:info@digineom.co">info@digineom.co</a></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/45 md:flex-row">
          <p>© {currentYear} DigiNeom. All rights reserved.</p>
          <p>Strategy · Design · Development</p>
        </div>
      </div>
    </footer>
  );
}
