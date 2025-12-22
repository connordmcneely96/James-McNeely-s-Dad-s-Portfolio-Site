'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Shield } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: 20, label: 'Years IT Experience', suffix: '+' },
  { value: 22, label: 'Years Technical Support', suffix: '+' },
  { value: 100, label: 'Devices Managed', suffix: '+' },
  { value: 2, label: 'Google Certifications', suffix: '' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [showResumes, setShowResumes] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold">
                Open to Remote Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading"
            >
              James <span className="gradient-text">McNeely</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4"
            >
              IT Service Manager | Cybersecurity Professional
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transforming <span className="text-primary-400 font-semibold">20+ years</span> of IT service excellence into cutting-edge cybersecurity operations.
              <span className="text-emerald-400 font-semibold"> Google Certified</span>. Security Focused. Leadership Proven.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <div className="relative">
                <button
                  onClick={() => setShowResumes(!showResumes)}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                  <ChevronDown className={`w-4 h-4 transition-transform ${showResumes ? 'rotate-180' : ''}`} />
                </button>

                {/* Resume dropdown */}
                {showResumes && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 w-full sm:w-80 glass-effect rounded-lg shadow-xl z-10 overflow-hidden"
                  >
                    <a
                      href="/James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf"
                      download
                      className="block px-4 py-3 hover:bg-slate-700/50 transition-colors border-b border-slate-700/50"
                    >
                      <div className="font-semibold text-white">IT Service Manager Resume</div>
                      <div className="text-sm text-slate-400">Focus: Leadership & ITSM</div>
                    </a>
                    <a
                      href="/James_McNeely_Cybersecurity_Resume_ATS.pdf"
                      download
                      className="block px-4 py-3 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="font-semibold text-white">Cybersecurity Analyst Resume</div>
                      <div className="text-sm text-slate-400">Focus: Security & SOC</div>
                    </a>
                  </motion.div>
                )}
              </div>

              <button
                onClick={() => handleScroll('#contact')}
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl blur-2xl opacity-20 animate-pulse-slow" />

              {/* Photo container */}
              <div className="relative glass-effect rounded-2xl p-2 overflow-hidden">
                <div className="aspect-square relative rounded-xl overflow-hidden bg-slate-800">
                  {photoError && (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                      <div className="text-center">
                        <Shield className="w-24 h-24 mx-auto mb-4 opacity-30" />
                        <p className="text-sm">Professional Photo</p>
                        <p className="text-xs mt-2">james-mcneely-photo.png</p>
                      </div>
                    </div>
                  )}
                  {!photoError && (
                    <Image
                      src="/james-mcneely-photo.png"
                      alt="James McNeely servicing a networked copier"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                      onError={() => setPhotoError(true)}
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <button
            onClick={() => handleScroll('#about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
