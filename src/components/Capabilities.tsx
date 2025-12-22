'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Wrench, Shield, Users } from 'lucide-react';

const capabilities = [
  {
    icon: Server,
    title: 'IT Service Management Excellence',
    description: 'Help desk leadership, ITIL best practices, SLA management, team training, and KPI-driven operations.',
    skills: ['ITSM & Ticketing Systems', 'SLA & KPI Management', 'Process Optimization', 'ITIL Framework'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Technical Support Mastery',
    description: 'Remote and on-site support, hardware/software diagnostics, network troubleshooting, and customer-focused solutions.',
    skills: ['Remote Support Tools', 'Hardware Diagnostics', 'Network Troubleshooting', 'Client Relations'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Operations',
    description: 'Incident response, threat detection, SIEM tools, vulnerability assessment, and security framework compliance.',
    skills: ['Incident Response', 'SIEM Tools', 'Threat Detection', 'Security Frameworks'],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: Users,
    title: 'Leadership & Team Development',
    description: 'Recruiting, training, and mentoring technicians; optimizing workflows; building high-performing service teams.',
    skills: ['Team Leadership', 'Training & Development', 'Workflow Optimization', 'Performance Management'],
    gradient: 'from-primary-500 to-blue-500',
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden bg-slate-900/50">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Core Capabilities</h2>
          <p className="section-subheading">
            Comprehensive expertise spanning IT service management and cybersecurity
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                {/* Card content */}
                <div className="relative h-full card p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${capability.gradient} bg-opacity-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50 group-hover:border-primary-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${capability.gradient} opacity-5 rounded-bl-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block card">
            <p className="text-slate-300 mb-4">
              Ready to bring this comprehensive skill set to your team
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Let&apos;s Connect
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
