'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const caseStudies = [
  {
    tag: 'eCommerce',
    tagColor: '#3b82f6',
    title: 'Fashion Brand Welcome Series',
    subtitle: 'Klaviyo Automation Flow',
    description:
      'Designed a 7-email welcome series for a fashion eCommerce brand that introduced new subscribers to the brand story, product categories, and social proof — with a personalized discount on email 3.',
    results: [
      { label: 'Open Rate', value: '48%' },
      { label: 'CTR', value: '18%' },
      { label: 'Revenue Attributed', value: '$12K/mo' },
    ],
    tools: ['Klaviyo', 'Canva'],
    icon: '👗',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1))',
  },
  {
    tag: 'SaaS',
    tagColor: '#22c55e',
    title: 'SaaS Onboarding Automation',
    subtitle: 'ConvertKit Email Journey',
    description:
      'Built an 8-step onboarding email sequence for a project management SaaS tool, guiding trial users through key features and driving conversions from free to paid subscriptions.',
    results: [
      { label: 'Trial-to-Paid', value: '+34%' },
      { label: 'Open Rate', value: '42%' },
      { label: 'Churn Reduction', value: '22%' },
    ],
    tools: ['ConvertKit', 'HubSpot'],
    icon: '💻',
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(139, 92, 246, 0.1))',
  },
  {
    tag: 'Service Business',
    tagColor: '#f59e0b',
    title: 'Coaching Business Newsletter',
    subtitle: 'MailerLite Campaign Strategy',
    description:
      'Developed a weekly value-driven newsletter strategy for a business coach, growing the email list by 200% and positioning them as an industry authority that converts readers into high-ticket clients.',
    results: [
      { label: 'List Growth', value: '+200%' },
      { label: 'Open Rate', value: '44%' },
      { label: 'CTR', value: '22%' },
    ],
    tools: ['MailerLite', 'Zapier'],
    icon: '🎯',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(139, 92, 246, 0.1))',
  },
  {
    tag: 'eCommerce',
    tagColor: '#ec4899',
    title: 'Abandoned Cart Recovery',
    subtitle: 'Klaviyo Flow Optimization',
    description:
      'Rebuilt an abandoned cart recovery flow for a beauty brand using 3-email sequences with urgency triggers, social proof, and a time-limited offer, dramatically improving cart recovery rates.',
    results: [
      { label: 'Recovery Rate', value: '+38%' },
      { label: 'Revenue/Flow', value: '$8K/mo' },
      { label: 'Email Open Rate', value: '51%' },
    ],
    tools: ['Klaviyo', 'Google Analytics'],
    icon: '🛒',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.1))',
  },
  {
    tag: 'SaaS',
    tagColor: '#8b5cf6',
    title: 'Re-engagement Campaign',
    subtitle: 'A/B Testing & Win-Back Flows',
    description:
      'Created a win-back automation for a SaaS product targeting inactive subscribers with personalized subject lines tested via A/B methodology, successfully re-engaging over 1,800 dormant users.',
    results: [
      { label: 'Re-engaged Users', value: '1,800+' },
      { label: 'Open Rate', value: '36%' },
      { label: 'Conversions', value: '+28%' },
    ],
    tools: ['Brevo', 'Google Sheets'],
    icon: '🔄',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.1))',
  },
  {
    tag: 'Multi-Channel',
    tagColor: '#06b6d4',
    title: 'SMS + Email Campaign',
    subtitle: 'Multi-Channel Revenue Drive',
    description:
      'Orchestrated a combined SMS and email flash sale campaign for an online retailer, coordinating timing and messaging across both channels to maximize reach and conversion during a 48-hour sale window.',
    results: [
      { label: 'Sale Revenue', value: '+65%' },
      { label: 'SMS CTR', value: '19%' },
      { label: 'Email CTR', value: '22%' },
    ],
    tools: ['Klaviyo', 'Notion'],
    icon: '📱',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.1))',
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-16 lg:py-24 relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #4c1d95, transparent)',
          bottom: '0',
          left: '-150px',
          opacity: 0.08,
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
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#a855f7' }}>
            Portfolio
          </span>
          <h2 className="section-title">
            Case Studies & <span className="gradient-text">Campaign Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real campaigns. Real results. Here&apos;s a look at some of the email marketing
            work I&apos;ve done across various industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-400"
              style={{
                background: hovered === i ? study.gradient : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${hovered === i ? study.tagColor + '40' : 'rgba(139, 92, 246, 0.15)'}`,
                transform: hovered === i ? 'translateY(-6px)' : 'none',
                boxShadow: hovered === i ? `0 25px 50px ${study.tagColor}20` : 'none',
              }}
            >
              {/* Tag */}
              <div
                className="self-start mb-5 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: `${study.tagColor}15`, color: study.tagColor }}
              >
                {study.tag}
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{study.icon}</span>
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                    {study.title}
                  </h3>
                  <p className="text-xs font-medium" style={{ color: study.tagColor }}>
                    {study.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                {study.description}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                {study.results.map((r) => (
                  <div
                    key={r.label}
                    className="text-center rounded-xl py-3 px-2 flex flex-col justify-center"
                    style={{ background: `${study.tagColor}10`, border: `1px solid ${study.tagColor}25` }}
                  >
                    <div className="font-bold text-sm sm:text-base mb-1" style={{ color: study.tagColor }}>
                      {r.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] leading-tight font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-2 mt-auto">
                {study.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-lg"
                    style={{
                      background: 'rgba(139, 92, 246, 0.08)',
                      border: '1px solid rgba(139, 92, 246, 0.15)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <motion.div
                animate={hovered === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1 mt-4 text-sm font-semibold"
                style={{ color: study.tagColor }}
              >
                View Details <FiArrowRight size={16} className="ml-0.5" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-5 text-base" style={{ color: 'var(--text-secondary)' }}>
            Want a full case study or custom campaign strategy?
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
          >
            Let&apos;s Work Together <FiExternalLink className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
