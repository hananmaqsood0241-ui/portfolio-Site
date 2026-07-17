'use client';

import { motion } from 'framer-motion';

const options = [
  {
    icon: '🌱',
    title: 'New to email marketing?',
    desc: 'Main aapke liye poora email system set up karunga — from scratch.',
    badge: 'Setup from Scratch',
    badgeColor: 'var(--accent-teal)',
    gradient: 'radial-gradient(circle at top left, rgba(56, 217, 169, 0.15), transparent 60%)',
  },
  {
    icon: '📈',
    title: 'Already have email marketing but results kam hain?',
    desc: 'Main audit karke fix karunga — automation, deliverability, ya copy jo bhi weak hai.',
    badge: 'Audit & Optimization',
    badgeColor: 'var(--accent-cyan)',
    gradient: 'radial-gradient(circle at top left, rgba(0, 210, 211, 0.15), transparent 60%)',
  },
  {
    icon: '⚡',
    title: 'Bas ek specific cheez chahiye?',
    subtitle: '(jaise ek flow, ek template)',
    desc: 'Standalone service, fast turnaround.',
    badge: 'Quick Turnaround',
    badgeColor: 'var(--accent-pink)',
    gradient: 'radial-gradient(circle at top left, rgba(247, 131, 172, 0.15), transparent 60%)',
  },
];

export default function WhatIOffer() {
  return (
    <section id="what-i-offer" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, #00d2d3, transparent)',
          top: '-10%',
          left: '-10%',
          opacity: 0.05,
        }}
      />
      <div
        className="orb"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, #f783ac, transparent)',
          bottom: '10%',
          right: '-10%',
          opacity: 0.04,
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: 'var(--accent-cyan)' }}>
            Identify Your Situation
          </span>
          <h2 className="section-title">
            What <span className="gradient-text">I Offer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Aapki requirement jo bhi ho, client onboarding se lekar campaigns optimize karne tak — I have a solution for you.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-400 group overflow-hidden"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow), var(--glass-inner-highlight)',
              }}
              whileHover={{
                y: -6,
                borderColor: 'var(--glass-border-hover)',
                boxShadow: 'var(--glass-shadow-hover), var(--glass-inner-highlight)',
              }}
            >
              {/* Highlight background radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: opt.gradient }}
              />

              {/* Glass Top Highlight Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
              />

              <div>
                {/* Header Container */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'var(--glass-bg-thick)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--glass-inner-highlight)',
                    }}
                  >
                    {opt.icon}
                  </div>

                  {/* Badge */}
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      background: 'var(--glass-bg-thick)',
                      border: '1px solid var(--glass-border)',
                      color: opt.badgeColor,
                    }}
                  >
                    {opt.badge}
                  </span>
                </div>

                {/* Situation text */}
                <h3
                  className="text-xl font-bold leading-tight mb-4 group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
                >
                  {opt.title}
                  {opt.subtitle && (
                    <span className="block text-sm font-medium mt-1 opacity-70" style={{ color: 'var(--text-secondary)' }}>
                      {opt.subtitle}
                    </span>
                  )}
                </h3>

                {/* Solution text */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {opt.desc}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="mt-4 flex items-center gap-1 text-xs font-bold transition-all duration-300" style={{ color: 'var(--accent-cyan)' }}>
                <span>Aapke Liye Solution</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
