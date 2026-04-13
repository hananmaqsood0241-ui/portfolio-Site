'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle } from 'react-icons/fi';

const skills = [
  'Email Campaign Strategy',
  'Email Automation & Customer Journeys',
  'A/B Testing & Optimization',
  'List Segmentation',
  'Email Deliverability Optimization',
  'Lifecycle Marketing',
  'Performance Analytics & Reporting',
  'SMS Marketing',
  'CRM Systems',
];

const journey = [
  {
    year: '2021',
    title: 'Started Email Marketing Career',
    desc: 'Mastered Mailchimp fundamentals. Delivered first 3 client campaigns with 30%+ open rates as a freelancer.',
  },
  {
    year: '2022',
    title: 'Specialized in Klaviyo & eCommerce',
    desc: 'Built advanced Klaviyo automation flows for fashion and beauty eCommerce brands. Achieved first 40%+ open rate campaign.',
  },
  {
    year: '2023',
    title: 'Expanded to SaaS & Service Brands',
    desc: 'Implemented lifecycle marketing and CRM integrations for SaaS tools. Added HubSpot, Brevo, and ConvertKit to expertise.',
  },
  {
    year: '2024–Now',
    title: 'Full-Stack Email Strategy & SMS',
    desc: 'Delivering end-to-end email + SMS strategies for global clients. 48% open rates, 22% CTR, multi-channel automation.',
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background element */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #00d2d3, transparent)',
          top: '50%',
          left: '-200px',
          transform: 'translateY(-50%)',
          opacity: 0.06,
        }}
      />
      <div
        className="orb"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, #f783ac, transparent)',
          bottom: '-100px',
          right: '-100px',
          opacity: 0.05,
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: 'var(--accent-cyan)' }}
          >
            About Me
          </span>
          <h2 className="section-title">
            The Person Behind the <span className="gradient-text">Campaigns</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate email marketing specialist from Pakistan, dedicated to helping businesses
            turn subscribers into loyal, paying customers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="glass-card p-8 sm:p-10 mb-8"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                Hi, I&apos;m Hanan 👋
              </h3>
              <div className="space-y-4 text-base" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <p>
                  I&apos;m an <strong style={{ color: 'var(--text-primary)' }}>Email Marketing Specialist</strong> with 3+ years of hands-on experience
                  helping businesses of all sizes — from scrappy startups to established brands —
                  grow their revenue through strategic, data-driven email marketing.
                </p>
                <p>
                  My approach combines <strong style={{ color: 'var(--text-primary)' }}>creative storytelling with analytical precision</strong>.
                  I don&apos;t just send emails — I craft experiences that resonate with subscribers
                  at every stage of their journey.
                </p>
                <p>
                  I&apos;ve worked across <strong style={{ color: 'var(--text-primary)' }}>eCommerce, SaaS, and service-based businesses</strong>,
                  consistently delivering measurable results including open rates up to 48% and
                  CTRs up to 22% — well above industry averages.
                </p>
              </div>
            </div>

            {/* Languages — glass pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { lang: 'English', level: 'Fluent', flag: '🇬🇧' },
                { lang: 'Urdu', level: 'Native', flag: '🇵🇰' },
                { lang: 'Punjabi', level: 'Conversational', flag: '🟡' },
              ].map((l, i) => (
                <motion.div
                  key={l.lang}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                  style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-inner-highlight)',
                  }}
                >
                  <span className="text-xl">{l.flag}</span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{l.lang}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{l.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-14"
          >
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.3, duration: 0.4 }}
                    className="flex items-center gap-2.5 py-2.5 px-4 rounded-full"
                    style={{
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--glass-inner-highlight)',
                    }}
                  >
                    <FiCheckCircle style={{ color: 'var(--accent-teal)', flexShrink: 0, fontSize: '16px' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Timeline — Updated with specific achievements (#12) */}
            <div>
              <h3 className="text-xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                Career Journey
              </h3>
              <div className="relative pl-6">
                {/* Vertical line — iridescent */}
                <div
                  className="absolute left-[7px] top-2 bottom-0 w-[2px] rounded-full"
                  style={{ background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-lilac), rgba(177,151,252,0.1))' }}
                />

                <div className="space-y-10">
                  {journey.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                      className="relative"
                    >
                      {/* Dot — iridescent glow */}
                      <div
                        className="absolute -left-[30px] top-1.5 w-[14px] h-[14px] rounded-full"
                        style={{
                          background: 'var(--accent-cyan)',
                          border: '3px solid var(--bg-primary)',
                          boxShadow: '0 0 12px rgba(0, 210, 211, 0.5)',
                        }}
                      />

                      <div>
                        <span
                          className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-full inline-block mb-3"
                          style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--accent-cyan)',
                            boxShadow: 'var(--glass-inner-highlight)',
                          }}
                        >
                          {item.year}
                        </span>
                        <h4 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
