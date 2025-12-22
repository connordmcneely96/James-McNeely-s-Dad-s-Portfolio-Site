'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Shield, Briefcase } from 'lucide-react';

const resumes = [
  {
    title: 'IT Service Manager Resume',
    filename: 'James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf',
    icon: Briefcase,
    focus: 'Leadership & ITSM',
    description: 'Optimized for IT Service Manager, Help Desk Manager, and technical leadership positions.',
    highlights: [
      '20+ years service management experience',
      'Team leadership and training',
      'ITIL and ITSM best practices',
      'KPI-driven operations',
      'Remote and on-site support excellence',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    color: 'primary',
  },
  {
    title: 'Cybersecurity Analyst Resume',
    filename: 'James_McNeely_Cybersecurity_Resume_ATS.pdf',
    icon: Shield,
    focus: 'Security & SOC Operations',
    description: 'Tailored for Cybersecurity Analyst, SOC Analyst, and security operations roles.',
    highlights: [
      'Google Cybersecurity certified',
      'SIEM tools and incident response',
      'Security frameworks (NIST, ISO 27001)',
      'Threat detection and analysis',
      'Python, SQL, and Linux fundamentals',
    ],
    gradient: 'from-emerald-500 to-green-500',
    color: 'emerald',
  },
];

export default function ResumeDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="relative py-24 overflow-hidden bg-slate-900/50">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Download Resume</h2>
          <p className="section-subheading">
            Choose the resume that best matches your hiring needs
          </p>
        </motion.div>

        {/* Resume Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {resumes.map((resume, index) => {
            const Icon = resume.icon;
            return (
              <motion.div
                key={resume.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${resume.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative h-full card p-8 hover:scale-105 transition-transform duration-300">
                  {/* Icon and badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${resume.gradient} bg-opacity-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-${resume.color}-500/10 border border-${resume.color}-500/30 text-${resume.color}-400 text-xs font-semibold`}>
                      ATS Optimized
                    </div>
                  </div>

                  {/* Title and focus */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {resume.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-4">
                    Focus: {resume.focus}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 mb-6">
                    {resume.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {resume.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-primary-400 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download button */}
                  <a
                    href={`/${resume.filename}`}
                    download
                    className={`btn-primary w-full flex items-center justify-center gap-2 bg-gradient-to-r ${resume.gradient} hover:shadow-lg transition-all duration-300`}
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>

                  {/* File info */}
                  <div className="mt-4 text-center text-xs text-slate-500">
                    <FileText className="w-3 h-3 inline mr-1" />
                    {resume.filename}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card bg-gradient-to-r from-primary-500/10 to-emerald-500/10 border-primary-500/30"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Both Resumes Available for Your Review
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Each resume is carefully tailored and ATS-optimized to highlight relevant experience for specific roles.
              Feel free to download both to see the full scope of my qualifications. For additional information or
              questions, please don&apos;t hesitate to reach out.
            </p>
          </div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'Years Experience', value: '20+' },
            { label: 'Google Certs', value: '2' },
            { label: 'Remote Ready', value: '✓' },
            { label: 'Clearance Eligible', value: '✓' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="card text-center"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
