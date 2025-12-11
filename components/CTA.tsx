"use client";

import Link from 'next/link';

export default function CTA() {
  return (
    <div className="min-h-screen text-foreground flex items-center justify-center px-6 py-12 overflow-hidden">
      <div className="w-full max-w-4xl animate-fade-in-up text-center">
        <div className="space-y-8 mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-foreground animate-fade-in-up [animation-delay:200ms]">
            Ready to Transform Your Digital Presence?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:400ms] max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life and drive real results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Link href="/contact" className="group relative px-6 py-3 bg-foreground text-background rounded-md font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block text-center">
              <span className="relative z-10">Get Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
            <Link href="/projects" className="group relative px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border border-border inline-block text-center">
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
