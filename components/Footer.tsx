"use client";

import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/#services" },
      { name: "Portfolio", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-neutral-400">
      <FooterBackgroundGradient />

      <div className="relative z-10 container-custom py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Images/QVC9EYR2LA7kyLTy3yqvyEimTI.png"
                alt="DigiNeom"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 leading-relaxed text-sm text-neutral-400">
              Creating exceptional digital experiences through innovative software
              development and cutting-edge web design.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-neutral-400 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-center">
            <a
              href="mailto:info@digineom.solutions"
              className="flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>info@digineom.solutions</span>
            </a>
          </div>
        </div>

        {/* Large Text Effect */}
        <div className="w-full h-auto mt-10">
          <TextHoverEffect text="DIGINEOM" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            © {currentYear} DigiNeom. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs">
            Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
