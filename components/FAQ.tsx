'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'Which email platform do you recommend?',
    a: 'I primarily recommend Klaviyo and Mailchimp, as they are industry standards for eCommerce and newsletter marketing. However, if your business has specific requirements, we can also work with ActiveCampaign, ConvertKit, Brevo, HubSpot, or any platform you already use.',
  },
  {
    q: 'How quickly can you deliver results?',
    a: 'Simple deliverables such as template design or a single campaign are typically delivered within 48–72 hours. Full email system setup and automation flows generally take 5–7 days depending on the complexity of your business and the number of flows required.',
  },
  {
    q: 'What if I already have an existing email setup?',
    a: "No problem at all. I'll conduct a thorough audit of your existing setup and identify deliverability issues, broken automation paths, or underperforming copy — then fix everything without disrupting your active campaigns or subscriber experience.",
  },
  {
    q: 'How does payment work?',
    a: 'For project-based work, I follow a milestone payment structure: 50% upfront and 50% upon final delivery. For ongoing monthly campaign management, I use a custom monthly retainer billed at the start of each month.',
  },
  {
    q: 'Do you offer a free consultation?',
    a: "Yes — I offer a free 30-minute strategy call where we discuss your goals, current setup, and target audience. By the end of the call, you'll have a clear picture of what's possible and a custom action plan delivered within 48 hours.",
  },
  {
    q: 'Can you work with my existing tools and tech stack?',
    a: "Absolutely. I'm platform-agnostic and experienced with all major email marketing tools. I adapt to your existing workflow and tech stack — no forced migrations or unnecessary tool changes.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background orb */}
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #b197fc, transparent)',
          top: '30%',
          left: '-150px',
          opacity: 0.04,
        }}
      />

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
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
            style={{ color: 'var(--accent-cyan)' }}
          >
            Got Questions?
          </span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know before we work together — answered clearly and honestly.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                background: activeIndex === i ? 'var(--glass-bg-thick)' : 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow), var(--glass-inner-highlight)',
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg focus:outline-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'var(--text-primary)',
                }}
                aria-expanded={activeIndex === i}
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'var(--glass-bg-thick)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <FiChevronDown size={18} />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div
                      className="pb-6 pt-1 px-6 sm:px-8 text-sm sm:text-base leading-relaxed"
                      style={{
                        color: 'var(--text-secondary)',
                        borderTop: '1px solid var(--glass-border)',
                      }}
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-5 text-base" style={{ color: 'var(--text-secondary)' }}>
            Still have questions? I&apos;d love to hear from you.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
