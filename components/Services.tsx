'use client';

import { motion } from 'framer-motion';
import {
  FiMail, FiZap, FiLayout, FiShield, FiTrendingUp, FiMessageSquare
} from 'react-icons/fi';

const services = [
  {
    icon: <FiMail size={28} />,
    title: 'Email Campaign Management',
    desc: 'End-to-end management of your email campaigns — from strategy and copywriting to design, scheduling, and performance reporting.',
    meta: 'Starting at $299/mo • Delivery: Monthly',
    highlight: 'Most Popular',
  },
  {
    icon: <FiZap size={28} />,
    title: 'Email Automation Setup',
    desc: 'Build powerful automated customer journeys — welcome series, abandoned cart, win-back flows, and post-purchase sequences that convert 24/7.',
    meta: 'Starting at $499 • Delivery: 3-5 days',
  },
  {
    icon: <FiLayout size={28} />,
    title: 'Email Template Design',
    desc: 'Stunning, mobile-optimized email templates that align with your brand and drive clicks. Designed in Klaviyo, Mailchimp, and more.',
    meta: 'Starting at $99 • Delivery: 48-72 hours',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Deliverability Optimization',
    desc: 'Improve sender reputation, reduce spam rates, and ensure your emails land in the inbox — not the junk folder.',
    meta: 'Starting at $199 • Delivery: 48-72 hours',
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: 'A/B Testing & Optimization',
    desc: 'Data-driven experimentation on subject lines, send times, CTAs, and content to continuously improve your key metrics.',
    meta: 'Starting at $149/mo • Delivery: Ongoing',
  },
  {
    icon: <FiMessageSquare size={28} />,
    title: 'Email Strategy Consulting',
    desc: 'Comprehensive strategy sessions to audit your current setup, identify growth opportunities, and create a 90-day email roadmap.',
    meta: 'Starting at $150 • Delivery: 48 hours',
  },
];

export default function Services() {
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
              className="service-card group flex flex-col items-start text-left"
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
              <p className="text-base leading-relaxed flex-grow mb-6" style={{ color: 'var(--text-secondary)' }}>
                {service.desc}
              </p>

              {/* Price / Delivery line */}
              <div
                className="w-full mt-auto pt-4 flex items-center justify-between text-xs font-semibold"
                style={{
                  borderTop: '1px solid var(--glass-border)',
                  color: 'var(--accent-cyan)',
                }}
              >
                <span>{service.meta}</span>
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
