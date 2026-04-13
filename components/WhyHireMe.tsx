'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiTool, FiClock } from 'react-icons/fi';

const reasons = [
  {
    icon: <FiTarget size={32} />,
    title: 'Results-First Approach',
    desc: "I don't just send emails, I track revenue impact. Every campaign is measured against real business KPIs — open rates, CTR, conversion, and actual revenue generated.",
    gradient: 'linear-gradient(135deg, #00d2d3, #38d9a9)',
  },
  {
    icon: <FiTool size={32} />,
    title: 'Platform Agnostic',
    desc: 'I work with your existing tools, no forced migrations. Whether you use Klaviyo, Mailchimp, HubSpot, or any other platform — I adapt to your tech stack seamlessly.',
    gradient: 'linear-gradient(135deg, #b197fc, #f783ac)',
  },
  {
    icon: <FiClock size={32} />,
    title: 'Fast Turnaround',
    desc: 'Campaign setup in 48 hours, automation flows in 72 hours. I respect your timelines and deliver quality work fast — without cutting corners on strategy or design.',
    gradient: 'linear-gradient(135deg, #f783ac, #f59e0b)',
  },
];

export default function WhyHireMe() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* BG elements */}
      <div
        className="orb"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, #38d9a9, transparent)',
          top: '30%',
          left: '-180px',
          opacity: 0.05,
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
            Why Choose Me
          </span>
          <h2 className="section-title">
            Why Work <span className="gradient-text">With Me?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I bring a unique combination of speed, expertise, and results-driven thinking
            to every project I take on.
          </p>
        </motion.div>

        {/* 3-column cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group rounded-3xl p-8 text-center flex flex-col items-center transition-all duration-400"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'var(--glass-shadow), var(--glass-inner-highlight)',
              }}
            >
              {/* Top highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: reason.gradient,
                  color: '#fff',
                  boxShadow: `0 8px 24px ${reason.gradient.includes('#00d2d3') ? 'rgba(0,210,211,0.3)' : reason.gradient.includes('#b197fc') ? 'rgba(177,151,252,0.3)' : 'rgba(247,131,172,0.3)'}`,
                }}
              >
                {reason.icon}
              </div>

              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {reason.desc}
              </p>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
