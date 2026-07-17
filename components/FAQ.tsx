'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'Mujhe kaunsa email platform use karna chahiye?',
    a: 'Main mostly Klaviyo aur Mailchimp recommend karta hoon, kyunki ye eCommerce aur newsletter marketing ke liye industry standards hain. Lekin agar aapke business ki specific requirements hon to hum ActiveCampaign, ConvertKit ya Brevo bhi use kar sakte hain.',
  },
  {
    q: 'Aap kitne din mein deliver karte hain?',
    a: 'Simple deliverables (jaise template design ya single campaigns) 48-72 hours mein deliver ho jate hain. Full email system setup aur automation setup mein business complexity ke mutabik 5-7 days lagte hain.',
  },
  {
    q: 'Agar mera koi existing setup hai to kya hoga?',
    a: 'Main aapke existing setup ko detail mein audit karunga aur deliverability issues, broken automation paths, ya lazy copywriting ko fix karunga bina aapke current campaigns ya customers ko disturb kiye.',
  },
  {
    q: 'Payment kaise hoti hai?',
    a: 'Hum generally milestone-based payment follow karte hain: 50% upfront aur 50% final delivery par. Monthly campaign management ke liye custom monthly retainer model use hota hai jo har month ke start mein bill kiya jata hai.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background orbs */}
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
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: 'var(--accent-cyan)' }}>
            Got Questions?
          </span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Aapke doubts clear karne ke liye kuch common sawalat ke jawabat neeche diye gaye hain.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                background: activeIndex === i ? 'var(--glass-bg-thick)' : 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow), var(--glass-inner-highlight)',
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg focus:outline-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'var(--text-primary)',
                }}
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

              {/* Answer Content */}
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
      </div>
    </section>
  );
}
