'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tools = [
  { name: 'Klaviyo', emoji: '📧', color: '#3b82f6', tooltip: 'Advanced eCommerce email automation' },
  { name: 'Mailchimp', emoji: '🐵', color: '#f59e0b', tooltip: 'Campaign management & list building' },
  { name: 'ConvertKit', emoji: '✉️', color: '#f97316', tooltip: 'Creator-focused email marketing' },
  { name: 'MailerLite', emoji: '🟢', color: '#22c55e', tooltip: 'Affordable automation for small business' },
  { name: 'Brevo', emoji: '🔵', color: '#0ea5e9', tooltip: 'Multi-channel email + SMS platform' },
  { name: 'HubSpot', emoji: '🔶', color: '#f97316', tooltip: 'CRM + email marketing integration' },
  { name: 'Zapier', emoji: '⚡', color: '#f59e0b', tooltip: 'No-code workflow automation' },
  { name: 'Canva', emoji: '🎨', color: '#00c4cc', tooltip: 'Email template design' },
  { name: 'Google Analytics', emoji: '📊', color: '#f59e0b', tooltip: 'Campaign performance tracking' },
  { name: 'Google Sheets', emoji: '📗', color: '#22c55e', tooltip: 'Data management & reporting' },
  { name: 'Notion', emoji: '⬛', color: '#a1a1aa', tooltip: 'Project & workflow management' },
  { name: 'ActiveCampaign', emoji: '🔴', color: '#ef4444', tooltip: 'Marketing automation & CRM' },
];

export default function Tools() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  return (
    <section id="tools" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Separator line — iridescent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-lilac), var(--accent-pink), transparent)' }}
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
              className="tool-badge flex flex-col items-center text-center justify-center cursor-pointer relative"
              style={{ padding: '24px 16px' }}
              onMouseEnter={() => setHoveredTool(i)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <span className="text-4xl mb-3 block" role="img" aria-label={tool.name}>{tool.emoji}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{tool.name}</span>

              {/* Tooltip on hover (#13) */}
              <AnimatePresence>
                {hoveredTool === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-2 rounded-xl text-xs font-medium z-50 pointer-events-none"
                    style={{
                      background: 'var(--glass-bg-thick)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      boxShadow: 'var(--glass-shadow)',
                    }}
                  >
                    {tool.tooltip}
                    {/* Arrow */}
                    <div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                      style={{
                        background: 'var(--glass-bg-thick)',
                        borderTop: '1px solid var(--glass-border)',
                        borderLeft: '1px solid var(--glass-border)',
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional platforms text — Fixed: removed duplicate ActiveCampaign (#7) */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            + Drip, Omnisend, n8n, and other major platforms
          </p>
        </motion.div>
      </div>

      {/* Bottom separator — iridescent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-pink), var(--accent-lilac), var(--accent-cyan), transparent)' }}
      />
    </section>
  );
}
