"use client";

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section-padding bg-[#1863dc] text-white">
      <div className="container-custom">
        <div className="grid gap-10 border-t border-white/25 pt-7 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-[#c7dbff]">Have a project?</p>
          <div>
            <h2 className="display max-w-5xl text-6xl md:text-8xl lg:text-9xl">
              Ready to transform your digital presence?
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Let&apos;s discuss how thoughtful strategy, design, and development can move your business forward.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="pill bg-white text-[#1863dc] hover:bg-[#c7dbff]">
                Get solutions
              </Link>
              <Link href="/projects" className="pill border border-white/40 text-white hover:bg-white hover:text-[#1863dc]">
                View our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
