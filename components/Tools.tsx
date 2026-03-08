'use client';

import { motion } from 'framer-motion';

const tools = [
  { name: 'Klaviyo', emoji: '📧', color: '#3b82f6' },
  { name: 'Mailchimp', emoji: '🐵', color: '#f59e0b' },
  { name: 'ConvertKit', emoji: '✉️', color: '#f97316' },
  { name: 'MailerLite', emoji: '🟢', color: '#22c55e' },
  { name: 'Brevo', emoji: '🔵', color: '#0ea5e9' },
  { name: 'HubSpot', emoji: '🔶', color: '#f97316' },
  { name: 'Zapier', emoji: '⚡', color: '#f59e0b' },
  { name: 'Canva', emoji: '🎨', color: '#00c4cc' },
  { name: 'Google Analytics', emoji: '📊', color: '#f59e0b' },
  { name: 'Google Sheets', emoji: '📗', color: '#22c55e' },
  { name: 'Notion', emoji: '⬛', color: '#a1a1aa' },
  { name: 'ActiveCampaign', emoji: '🔴', color: '#ef4444' },
];

export default function Tools() {
  return (
    <section id="tools" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)' }}
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
            Tools & Platforms
          </span>
          <h2 className="section-title">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle mx-auto text-center" style={{ maxWidth: '600px' }}>
            I&apos;m proficient in the industry&apos;s leading email marketing platforms, automation tools,
            and analytics solutions.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="tool-badge flex flex-col items-center text-center justify-center cursor-pointer"
              style={{ padding: '24px 16px' }}
            >
              <span className="text-4xl mb-3 block" role="img" aria-label={tool.name}>{tool.emoji}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{tool.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional platforms text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            + ActiveCampaign, Drip, Omnisend, and other major platforms
          </p>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)' }}
      />
    </section>
  );
}
