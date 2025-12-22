'use client';

import { Shield, Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary-500" />
              <span className="font-bold text-xl font-heading">
                James <span className="gradient-text">McNeely</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              IT Service Manager and Cybersecurity Professional with 20+ years of experience.
              Google Certified. Security Focused. Leadership Proven.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">
                Open to Remote Opportunities
              </span>
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:liquidblu25@gmail.com"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  liquidblu25@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:337-356-3218"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  337-356-3218
                </a>
              </li>
              <li className="text-slate-400">
                Youngsville, LA 70592
              </li>
              <li className="text-emerald-400 text-xs">
                Available for Remote Work
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <p>
              © {currentYear} James McNeely. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary-500 hover:bg-primary-600 rounded-full shadow-lg shadow-primary-500/30 text-white transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
