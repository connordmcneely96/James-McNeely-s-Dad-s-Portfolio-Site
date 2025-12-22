'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'liquidblu25@gmail.com',
    href: 'mailto:liquidblu25@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '337-356-3218',
    href: 'tel:337-356-3218',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Youngsville, LA 70592',
    subValue: 'Available for Remote Work',
    href: null,
    gradient: 'from-primary-500 to-purple-500',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a frontend-only form. In production, you would integrate with a backend service
    // or a service like Formspree, EmailJS, etc.
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Let&apos;s discuss how I can contribute to your team&apos;s success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Make an Impact
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I&apos;m actively seeking remote opportunities in IT Service Management and Cybersecurity.
                Whether you&apos;re looking for a seasoned service manager or a security-focused analyst,
                I&apos;d love to connect and explore how my experience can benefit your organization.
              </p>
              <div className="inline-block card bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/30">
                <p className="text-emerald-400 font-semibold">
                  🟢 Available for immediate remote opportunities
                </p>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="card group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${contact.gradient} bg-opacity-10`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400 mb-1">{contact.label}</div>
                        <div className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                          {contact.value}
                        </div>
                        {contact.subValue && (
                          <div className="text-xs text-emerald-400 mt-1">{contact.subValue}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );

                return contact.href ? (
                  <a key={contact.label} href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={contact.label}>{content}</div>
                );
              })}
            </div>

            {/* Social links placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card"
            >
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                Connect Online
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-400" />
                  <span className="text-slate-300 text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                  <span className="text-slate-300 text-sm">GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  {/* Note */}
                  <p className="text-xs text-slate-500 text-center">
                    Note: This is a frontend-only demo form. In production, messages would be sent to liquidblu25@gmail.com
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
