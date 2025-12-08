'use client'

import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { HighlightGroup, HighlighterItem } from '@/components/ui/highlighter'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/#services' },
      { name: 'Portfolio', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  }

  const contactInfo = [
    { icon: Mail, text: 'hello@digineom.com', href: 'mailto:hello@digineom.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Tech Street, Digital City', href: '#' },
  ]

  return (
    <footer className="bg-black text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">DigiNeom</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating exceptional digital experiences through innovative
              software development and cutting-edge web design.
            </p>
            <HighlightGroup>
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <HighlighterItem key={index} className="rounded-lg">
                      <a
                        href={info.href}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{info.text}</span>
                      </a>
                    </HighlighterItem>
                  )
                })}
              </div>
            </HighlightGroup>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DigiNeom. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ by the DigiNeom team
          </p>
        </div>
      </div>
    </footer>
  )
}
