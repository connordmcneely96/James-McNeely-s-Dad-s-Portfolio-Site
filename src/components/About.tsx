'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, Target, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Implementing security best practices and vulnerability mitigation in service operations',
  },
  {
    icon: Users,
    title: 'Leadership Excellence',
    description: 'Building and mentoring high-performing technical teams for over two decades',
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'Delivering exceptional service quality with a proven track record of client satisfaction',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Committed to professional development and staying current with industry trends',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            A Journey of Technical Excellence and Security Innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Transforming Experience into Expertise
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  With over <span className="text-primary-400 font-semibold">two decades</span> of hands-on IT service management experience,
                  I&apos;ve built and led high-performing technical support teams while maintaining exceptional customer satisfaction.
                  My journey has taken me from managing complex network infrastructures to leading service operations that impact
                  organizations across southern Louisiana.
                </p>

                <p>
                  Currently, I&apos;m channeling my extensive expertise in incident management, network troubleshooting, and
                  security-conscious operations into a focused career in <span className="text-emerald-400 font-semibold">cybersecurity</span>.
                  This transition reflects my commitment to continuous growth and my passion for protecting organizational assets
                  in an increasingly complex threat landscape.
                </p>

                <p>
                  My unique combination of <span className="text-primary-400 font-semibold">technical depth</span>,
                  <span className="text-emerald-400 font-semibold"> leadership experience</span>, and a
                  <span className="text-primary-400 font-semibold"> security-first mindset</span> enables me to approach every challenge
                  with a comprehensive perspective. From managing over 100 networked devices to pursuing advanced security certifications,
                  I bring both practical experience and theoretical knowledge to every role.
                </p>

                <p>
                  As a <span className="text-emerald-400 font-semibold">U.S. Air Force Reserve veteran</span> with experience in
                  aircraft electrical and environmental systems, I understand the critical importance of discipline, reliability,
                  and maintaining secure operations in high-stakes environments.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">20+</div>
                <div className="text-sm text-slate-400">Years at Current Company</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">2</div>
                <div className="text-sm text-slate-400">Google Certifications</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Key Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Strengths</h3>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="card group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Clearance Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="card bg-gradient-to-r from-primary-500/10 to-emerald-500/10 border-primary-500/30"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="font-semibold text-white">Security Clearance Eligible</div>
                  <div className="text-sm text-slate-400">U.S. Citizen • Available for Background Check</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
