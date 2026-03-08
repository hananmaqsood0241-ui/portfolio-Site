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
    desc: 'Began as a freelance email marketer, mastering Mailchimp and campaign fundamentals.',
  },
  {
    year: '2022',
    title: 'Specialized in Klaviyo & eCommerce',
    desc: 'Expanded into eCommerce email marketing, building advanced Klaviyo flows and automation sequences.',
  },
  {
    year: '2023',
    title: 'Scaled to SaaS & Service Brands',
    desc: 'Took on SaaS and service-based clients, implementing lifecycle marketing and CRM integrations.',
  },
  {
    year: '2024–Now',
    title: 'Full-Stack Email Strategy & SMS',
    desc: 'Now delivering end-to-end email strategies, SMS marketing, and multi-channel automation for global clients.',
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #6d28d9, transparent)',
          top: '50%',
          left: '-200px',
          transform: 'translateY(-50%)',
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
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: '#a855f7' }}
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

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="glass rounded-3xl p-8 sm:p-10 mb-8"
              style={{ border: '1px solid rgba(139, 92, 246, 0.2)' }}
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

            {/* Languages */}
            <div className="flex flex-wrap gap-3">
              {[
                { lang: 'English', level: 'Fluent', flag: '🇬🇧' },
                { lang: 'Urdu', level: 'Native', flag: '🇵🇰' },
                { lang: 'Punjabi', level: 'Conversational', flag: '🟡' },
              ].map((l, i) => (
                <motion.div
                  key={l.lang}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl"
                  style={{
                    background: 'rgba(139, 92, 246, 0.06)',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
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
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05 + 0.3, duration: 0.4 }}
                    className="flex items-center gap-2.5 py-2.5 px-4 rounded-xl"
                    style={{
                      background: 'rgba(139, 92, 246, 0.05)',
                      border: '1px solid rgba(139, 92, 246, 0.15)',
                    }}
                  >
                    <FiCheckCircle style={{ color: '#a855f7', flexShrink: 0, fontSize: '16px' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div>
              <h3 className="text-xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                Career Journey
              </h3>
              <div className="relative pl-6">
                {/* Vertical line */}
                <div
                  className="absolute left-[7px] top-2 bottom-0 w-[2px] rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #7c3aed, rgba(139,92,246,0.1))' }}
                />

                <div className="space-y-10">
                  {journey.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                      className="relative"
                    >
                      {/* Dot */}
                      <div
                        className="absolute -left-[30px] top-1.5 w-[14px] h-[14px] rounded-full border-2 border-purple-500 bg-white dark:bg-black"
                        style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}
                      />

                      <div>
                        <span
                          className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-md inline-block mb-3"
                          style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#9333ea' }}
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
