'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server,
  Shield,
  Network,
  Monitor,
  Terminal,
  Database,
  FileText,
  Laptop,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Server,
    title: 'IT Service Management',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'ServiceNow', level: 85 },
      { name: 'Zendesk', level: 85 },
      { name: 'Freshdesk', level: 80 },
      { name: 'Jira', level: 80 },
      { name: 'ITIL Framework', level: 90 },
      { name: 'SLA Management', level: 95 },
    ],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    gradient: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'Splunk', level: 75 },
      { name: 'IBM QRadar', level: 70 },
      { name: 'Azure Sentinel', level: 70 },
      { name: 'Incident Response', level: 80 },
      { name: 'NIST Framework', level: 85 },
      { name: 'MITRE ATT&CK', level: 75 },
    ],
  },
  {
    icon: Network,
    title: 'Networking',
    gradient: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'TCP/IP', level: 90 },
      { name: 'DNS/DHCP', level: 90 },
      { name: 'Firewalls', level: 80 },
      { name: 'VPN', level: 75 },
      { name: 'SNMP', level: 85 },
      { name: 'Network Troubleshooting', level: 95 },
    ],
  },
  {
    icon: Monitor,
    title: 'Remote Support',
    gradient: 'from-primary-500 to-blue-500',
    skills: [
      { name: 'TeamViewer', level: 95 },
      { name: 'LogMeIn', level: 95 },
      { name: 'Remote Desktop (RDP)', level: 90 },
      { name: 'AnyDesk', level: 85 },
      { name: 'Remote Troubleshooting', level: 95 },
    ],
  },
  {
    icon: Terminal,
    title: 'Operating Systems',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Windows', level: 95 },
      { name: 'macOS', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'System Administration', level: 85 },
    ],
  },
  {
    icon: Database,
    title: 'Security Tools & Languages',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'SQL', level: 75 },
      { name: 'Bash/Shell', level: 70 },
      { name: 'Log Analysis', level: 85 },
    ],
  },
  {
    icon: FileText,
    title: 'Documentation & Reporting',
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Technical Documentation', level: 90 },
      { name: 'KPI Reporting', level: 95 },
      { name: 'Incident Reports', level: 90 },
      { name: 'Process Documentation', level: 85 },
    ],
  },
  {
    icon: Laptop,
    title: 'Productivity & Collaboration',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Microsoft 365', level: 90 },
      { name: 'Google Workspace', level: 85 },
      { name: 'Microsoft Teams', level: 85 },
      { name: 'Slack', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden">
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
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            Comprehensive technical expertise across IT service management and cybersecurity
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
                className="card group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.05 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block card bg-gradient-to-r from-primary-500/10 to-emerald-500/10 border-primary-500/30">
            <p className="text-slate-300">
              <span className="text-primary-400 font-semibold">Constantly learning</span> and expanding skills to stay ahead in the rapidly evolving tech landscape
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
