'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail, FiZap, FiLayout, FiShield, FiTrendingUp, FiMessageSquare, FiChevronDown
} from 'react-icons/fi';

const services = [
  {
    icon: <FiMail size={28} />,
    title: 'Email Campaign Management',
    desc: 'End-to-end management of your email campaigns — from strategy and copywriting to design, scheduling, and performance reporting.',
    details: 'I handle everything from audience segmentation and content calendar planning to A/B testing subject lines and optimizing send times. Each campaign is tracked with detailed analytics to ensure continuous improvement and maximum ROI for your business.',
    highlight: 'Most Popular',
  },
  {
    icon: <FiZap size={28} />,
    title: 'Email Automation Setup',
    desc: 'Build powerful automated customer journeys — welcome series, abandoned cart, win-back flows, and post-purchase sequences that convert 24/7.',
    details: 'I design and implement multi-step automation flows tailored to your customer lifecycle. From welcome sequences that nurture new subscribers, to abandoned cart flows that recover lost revenue, to win-back campaigns that re-engage dormant users — all running on autopilot.',
  },
  {
    icon: <FiLayout size={28} />,
    title: 'Email Template Design',
    desc: 'Stunning, mobile-optimized email templates that align with your brand and drive clicks. Designed in Klaviyo, Mailchimp, and more.',
    details: 'Every template is hand-crafted for mobile-first rendering, dark mode compatibility, and cross-client consistency. I use modular design systems so your team can easily swap content while maintaining brand integrity across every send.',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Deliverability Optimization',
    desc: 'Improve sender reputation, reduce spam rates, and ensure your emails land in the inbox — not the junk folder.',
    details: 'I audit your DNS records (SPF, DKIM, DMARC), clean your email lists, implement proper warm-up strategies, and set up engagement-based segmentation to protect your sender reputation and maximize inbox placement rates.',
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: 'A/B Testing & Optimization',
    desc: 'Data-driven experimentation on subject lines, send times, CTAs, and content to continuously improve your key metrics.',
    details: 'I run structured A/B and multivariate tests across subject lines, preview text, content layout, CTA placement, and send timing. Each test follows a hypothesis-driven approach with statistical significance checks before implementing winners.',
  },
  {
    icon: <FiMessageSquare size={28} />,
    title: 'Email Strategy Consulting',
    desc: 'Comprehensive strategy sessions to audit your current setup, identify growth opportunities, and create a 90-day email roadmap.',
    details: 'Get a complete audit of your current email program including deliverability health, automation gaps, list hygiene, and content strategy. I deliver a prioritized 90-day roadmap with specific KPIs, recommended flows, and campaign calendar to accelerate your growth.',
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
      {/* BG */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #b197fc, transparent)',
          top: '20%',
          right: '-200px',
          opacity: 0.06,
        }}
      />
      <div
        className="orb"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, #00d2d3, transparent)',
          bottom: '10%',
          left: '-150px',
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
            What I Do
          </span>
          <h2 className="section-title">
            Services That Drive <span className="gradient-text">Real Revenue</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From campaign management to full automation setup — I provide comprehensive
            email marketing services tailored to your business goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="service-card group flex flex-col items-start text-left cursor-pointer"
              onClick={() => toggleExpand(i)}
            >
              <div className="flex items-center justify-between w-full mb-6">
                {/* Icon — glass container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--accent-cyan)',
                    boxShadow: 'var(--glass-inner-highlight)',
                  }}
                >
                  {service.icon}
                </div>

                {service.highlight && (
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--accent-teal)',
                      boxShadow: 'var(--glass-inner-highlight)',
                    }}
                  >
                    ⭐ {service.highlight}
                  </div>
                )}
              </div>

              <h3
                className="text-xl font-bold mb-3 leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>
              <p className="text-base leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                {service.desc}
              </p>

              {/* Accordion expand/collapse (#6) */}
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden w-full"
                  >
                    <div
                      className="mt-4 pt-4 text-sm leading-relaxed"
                      style={{
                        color: 'var(--text-secondary)',
                        borderTop: '1px solid var(--glass-border)',
                      }}
                    >
                      {service.details}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Learn more toggle */}
              <div
                className="mt-6 flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
                style={{ color: 'var(--accent-cyan)' }}
              >
                {expandedIndex === i ? 'Show less' : 'Learn more'}
                <motion.span
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={16} />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
          >
            Get a Free Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
