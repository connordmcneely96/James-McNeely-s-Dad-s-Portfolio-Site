'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Shield as ShieldIcon } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Service Manager',
    organization: 'Copyfax of Louisiana',
    location: 'Youngsville, LA',
    period: 'October 2002 – Present',
    duration: '20+ Years',
    description: 'Leading daily service desk operations and managing technical support teams across southern Louisiana.',
    highlights: [
      'Lead daily service desk operations; manage technicians and support staff',
      'Recruit, onboard, and train new technicians on technical and security protocols',
      'Schedule and dispatch technicians across southern Louisiana',
      'Configure network devices (copiers, printers, scanners) for clients',
      'Resolve issues remotely and on-site using TeamViewer, LogMeIn',
      'Compile KPIs: first-call resolution, MTTR, customer satisfaction',
      'Handle escalations and maintain client relationships',
      'Identify and mitigate security vulnerabilities on networked devices',
      'Train staff on secure data handling and security awareness',
      'Proficient in troubleshooting hardware, software, and networking issues',
      'Experience with Windows, macOS, Active Directory, Office 365, and cloud services',
      'Strong understanding of networking fundamentals (TCP/IP, DNS, DHCP, VPN)',
      'Familiar with ticketing systems and helpdesk management tools',
      'Clear communicator with non-technical users; strong customer service focus',
    ],
    gradient: 'from-primary-500 to-cyan-500',
  },
  {
    type: 'military',
    icon: ShieldIcon,
    title: 'Aircraft Electrical & Environmental Systems',
    organization: 'United States Air Force Reserve',
    location: 'Military Service',
    period: '2004 – 2007',
    duration: '3 Years',
    description: 'Maintained critical aircraft electrical and environmental systems with a focus on reliability and safety.',
    highlights: [
      'Maintained aircraft electrical and environmental systems',
      'Performed diagnostics and troubleshooting on complex technical systems',
      'Ensured compliance with strict safety and security protocols',
      'Developed discipline and attention to detail in high-stakes environment',
      'Eligible for security clearance based on military service',
    ],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Account Associate',
    organization: 'Xerox Business Services',
    location: 'Louisiana',
    period: 'July 1998 – September 2002',
    duration: '4 Years',
    description: 'Provided technical support for extensive network of copiers and printers, establishing foundation for service management career.',
    highlights: [
      'Technical support for 100+ networked copiers and printers',
      'Logged service calls and ensured timely follow-up',
      'Analyzed customer feedback to improve service processes',
      'Trained end-users on equipment operation and best practices',
      'Built strong foundation in network device management',
    ],
    gradient: 'from-blue-500 to-primary-500',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Computer & Information Sciences',
    organization: 'Tarrant County College',
    location: 'Texas',
    period: 'Some College',
    duration: '',
    description: 'Studied computer and information sciences, building technical foundation.',
    highlights: [
      'Computer science coursework',
      'Information technology fundamentals',
      'Technical problem-solving skills',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
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
          <h2 className="section-heading">Professional Journey</h2>
          <p className="section-subheading">
            Two decades of technical excellence, leadership, and service
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-emerald-500 to-primary-500 opacity-20" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.organization}-${item.period}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative md:w-1/2 ${isLeft ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute top-6 ${isLeft ? 'right-0' : 'left-0'} transform ${isLeft ? 'translate-x-1/2' : '-translate-x-1/2'} w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg`} />

                  {/* Card */}
                  <div className="card group hover:scale-105 transition-transform duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="text-primary-400 font-semibold mb-1">
                          {item.organization}
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                          <span>{item.period}</span>
                          {item.duration && (
                            <>
                              <span>•</span>
                              <span className="text-emerald-400 font-semibold">{item.duration}</span>
                            </>
                          )}
                        </div>
                        <div className="text-sm text-slate-500">{item.location}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="card bg-gradient-to-r from-primary-500/10 to-emerald-500/10 border-primary-500/30 text-center">
            <p className="text-lg text-slate-300">
              <span className="text-primary-400 font-bold">20+ years</span> of proven technical leadership combined with
              <span className="text-emerald-400 font-bold"> cutting-edge certifications</span> and a
              <span className="text-primary-400 font-bold"> security-first mindset</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
