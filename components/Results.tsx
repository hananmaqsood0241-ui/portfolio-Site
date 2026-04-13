'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    value: 48,
    suffix: '%',
    label: 'Email Open Rate',
    desc: 'Achieved on targeted eCommerce campaigns — nearly 3x the industry average.',
    icon: '📬',
  },
  {
    value: 22,
    suffix: '%',
    label: 'Click-Through Rate',
    desc: 'Consistent CTRs through compelling copy, design, and smart segmentation.',
    icon: '🖱️',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    desc: 'Building and scaling email programs across multiple industries and platforms.',
    icon: '⏱️',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Campaigns Delivered',
    desc: 'Successful email campaigns across eCommerce, SaaS, and services sectors.',
    icon: '🚀',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Revenue Uplift',
    desc: 'Average revenue increase clients see within 90 days of optimizing their email programs.',
    icon: '📈',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    desc: 'Clients return and refer because results speak louder than promises.',
    icon: '⭐',
  },
];

export default function Results() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="results" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(0, 210, 211, 0.03) 50%, transparent)',
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
            Results & Achievements
          </span>
          <h2 className="section-title">
            Numbers That <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real results from real campaigns. These aren&apos;t industry averages — they&apos;re metrics
            I&apos;ve actually achieved for clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="stat-card group flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              {/* Counter with static fallback (#5) — data-target attr + noscript fallback */}
              <div
                className="text-4xl xl:text-5xl font-black mb-3 gradient-text"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                data-target={`${stat.value}${stat.suffix}`}
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={i * 0.1}
                    suffix={stat.suffix}
                  />
                ) : (
                  /* Static fallback: show final value immediately if JS is slow */
                  `${stat.value}${stat.suffix}`
                )}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {stat.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight — glass-card */}
        <motion.div
          className="mt-16 glass-card p-8 sm:p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
            🏆 Experienced with <span className="gradient-text font-bold">eCommerce, SaaS, and Service-Based Businesses</span>
          </p>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
            Also experienced in SMS Marketing and CRM systems for multi-channel revenue growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}
