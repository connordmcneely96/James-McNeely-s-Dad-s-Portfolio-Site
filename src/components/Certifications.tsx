'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google via Coursera',
    status: 'Completed',
    date: '2024',
    image: '/googleitsupportprofessionalcertificatev2.png',
    skills: [
      'Help Desk Support',
      'Network Troubleshooting',
      'Operating Systems',
      'System Administration',
      'Customer Service',
    ],
    description: 'Comprehensive IT support training covering troubleshooting, customer service, networking, operating systems, system administration, and security.',
    gradient: 'from-blue-500 to-cyan-500',
    verified: true,
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google via Coursera',
    status: 'Completed',
    date: '2024',
    image: '/googlecybersecurityprofessionalcertificatev2.png',
    skills: [
      'SIEM Tools',
      'Incident Response',
      'Linux',
      'SQL',
      'Python',
      'Security Frameworks',
    ],
    description: 'Advanced cybersecurity training covering threat detection, incident response, SIEM tools, Python automation, and security frameworks (NIST, ISO 27001).',
    gradient: 'from-emerald-500 to-green-500',
    verified: true,
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'In Progress',
    date: 'Expected 2025',
    image: null,
    skills: [
      'Network Security',
      'Compliance',
      'Operational Security',
      'Threats & Vulnerabilities',
      'Application Security',
    ],
    description: 'Industry-standard certification covering security concepts, risk management, cryptography, and security architecture.',
    gradient: 'from-purple-500 to-pink-500',
    verified: false,
  },
];

function CertificationImage({ image, title }: { image: string | null; title: string }) {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  if (!image || showPlaceholder) {
    return (
      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-slate-800 border border-slate-700/50 flex items-center justify-center">
        <div className="text-center">
          <Award className="w-16 h-16 mx-auto mb-2 text-slate-600" />
          <p className="text-xs text-slate-500">Certificate Image</p>
          {image && <p className="text-xs text-slate-600 mt-1">{image}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-slate-800 border border-slate-700/50">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-4"
        sizes="(max-width: 1024px) 100vw, 560px"
        onError={() => setShowPlaceholder(true)}
      />
    </div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden bg-slate-900/50">
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
          <h2 className="section-heading">Certifications & Credentials</h2>
          <p className="section-subheading">
            Committed to continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full card p-6">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    cert.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  }`}>
                    {cert.status === 'Completed' ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {cert.status}
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-xs text-primary-400">
                      <Award className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                {/* Certificate image */}
                {cert.image ? (
                  <CertificationImage image={cert.image} title={cert.title} />
                ) : (
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center">
                    <div className="text-center">
                      <Clock className="w-16 h-16 mx-auto mb-2 text-slate-600" />
                      <p className="text-sm text-slate-400 font-semibold">In Progress</p>
                    </div>
                  </div>
                )}

                {/* Title and issuer */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary-400 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-sm text-slate-500 mb-4">{cert.date}</p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card bg-gradient-to-r from-primary-500/10 to-emerald-500/10 border-primary-500/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-emerald-500 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Continuous Professional Development
              </h3>
              <p className="text-slate-300">
                Actively pursuing additional certifications and staying current with the latest security frameworks,
                tools, and best practices. Committed to lifelong learning in the ever-evolving fields of IT service
                management and cybersecurity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
