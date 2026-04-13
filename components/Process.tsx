'use client';

import { motion } from 'framer-motion';
import { FiPhoneCall, FiMap, FiPlay, FiBarChart2 } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: <FiPhoneCall size={28} />,
    title: 'Discovery Call',
    desc: 'We discuss your goals, current setup, and target audience to identify opportunities and align on expectations.',
    gradient: 'linear-gradient(135deg, #00d2d3, #38d9a9)',
  },
  {
    number: '02',
    icon: <FiMap size={28} />,
    title: 'Strategy & Plan',
    desc: 'I build a custom 30-day email plan with flow mapping, content calendar, and KPI targets tailored to your business.',
    gradient: 'linear-gradient(135deg, #b197fc, #00d2d3)',
  },
  {
    number: '03',
    icon: <FiPlay size={28} />,
    title: 'Build & Launch',
    desc: 'I set up campaigns, automation flows, and email templates — then launch with precision timing and quality assurance.',
    gradient: 'linear-gradient(135deg, #f783ac, #b197fc)',
  },
  {
    number: '04',
    icon: <FiBarChart2 size={28} />,
    title: 'Track & Optimize',
    desc: 'Weekly reports, A/B test results, and ongoing improvements to continuously grow your email marketing ROI.',
    gradient: 'linear-gradient(135deg, #f59e0b, #f783ac)',
  },
];

export default function Process() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* BG elements */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #00d2d3, transparent)',
          top: '40%',
          right: '-200px',
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
            My Process
          </span>
          <h2 className="section-title">
            How We <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven 4-step process that takes you from strategy to measurable results
            — with full transparency at every stage.
          </p>
        </motion.div>

        {/* Horizontal timeline — 4 steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line — visible on lg+ */}
          <div
            className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-[2px]"
            style={{
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-lilac), var(--accent-pink), var(--accent-mint))',
              opacity: 0.3,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Large muted step number behind card */}
              <div
                className="absolute -top-6 -left-2 text-8xl font-black pointer-events-none select-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'var(--text-primary)',
                  opacity: 0.04,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div
                className="relative rounded-3xl p-8 text-center flex flex-col items-center transition-all duration-400 h-full"
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

                {/* Step number badge */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: step.gradient,
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 800,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
