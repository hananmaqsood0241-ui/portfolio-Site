'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiExternalLink, FiX, FiZoomIn, FiCheckCircle } from 'react-icons/fi';

const caseStudies = [
  {
    id: 'case-1',
    tag: 'Revenue Scaling',
    tagColor: '#38d9a9',
    title: 'Adding €9k/mo Recurring Revenue via Automated Email Strategy',
    subtitle: 'Klaviyo Performance Dashboard',
    client: 'Client: European E-Commerce Brand',
    image: '/media__1790077204127.jpg',
    imageAlt: '€8,999.11 attributed email revenue dashboard screenshot',
    summary: 'Unlocked an extra €9,000+ monthly revenue in 30 days by building high-converting post-purchase and nurture automation flows.',
    story:
      'This client had solid store traffic but was leaving thousands on the table without structured back-end email marketing. We implemented high-converting automated flows (Welcome, Abandoned Checkout, and Win-back) alongside targeted campaign broadcasts. Within 30 days, attributed email revenue jumped by +105% vs the previous period, driving €8,999.11 in automated revenue (accounting for 34% of total brand sales).',
    results: [
      { label: 'Attributed Revenue', value: '€8,999.11' },
      { label: 'Revenue Growth', value: '+105%' },
      { label: 'Share of Total Sales', value: '34.08%' },
      { label: 'Email Channel Share', value: '96.67%' },
    ],
    tools: ['Klaviyo', 'Shopify', 'Flow Automation'],
    highlights: [
      'Email flows generated €5,318.90 while campaigns added €3,680.21',
      'Over 96% of attributed revenue was driven directly by strategic email automation',
      'Average revenue per recipient boosted to €0.38 per lead',
    ],
  },
  {
    id: 'case-2',
    tag: 'Automated Revenue',
    tagColor: '#00d2d3',
    title: 'Quick-Turnaround $4k Revenue Boost & 91% Email Channel Share',
    subtitle: 'Automated Evergreen Email Flow',
    client: 'Client: Direct-to-Consumer Brand',
    image: '/media__1790077204246.jpg',
    imageAlt: '$4,563.57 revenue from email automation screenshot',
    summary: 'A set-and-forget automated flow setup months ago continues to drive 91% of backend sales effortless revenue.',
    story:
      'The goal was simple: create evergreen automated flows that generate predictable income without needing daily management. We built a streamlined, set-and-forget email automation sequence. Months after launch, the flow continues to auto-convert incoming traffic into loyal buyers — generating $4,563.57 and driving 91.05% of all email-driven conversions effortlessly.',
    results: [
      { label: 'Email Revenue', value: '$4,563.57' },
      { label: 'Automated Flow Share', value: '91.05%' },
      { label: 'One-Time Setup', value: '100% Passive' },
      { label: 'ROI Timeline', value: '< 14 Days' },
    ],
    tools: ['Klaviyo', 'Automated Email Sequences', 'Copywriting'],
    highlights: [
      '$2.5k+ directly generated from automated flows built once months ago',
      '91.05% conversion attribution coming from email automated triggers',
      'Zero ongoing ad spend needed to generate this backend revenue',
    ],
  },
  {
    id: 'case-3',
    tag: 'Back-End Scaling',
    tagColor: '#b197fc',
    title: 'Scaling Back-End Flows to $19.5k & $26.6k Total Attributed Revenue',
    subtitle: 'Klaviyo Back-End Growth Engine',
    client: 'Client: High-Growth E-Commerce Store',
    image: '/media__1790077204389.jpg',
    imageAlt: '$26,643.68 total attributed email revenue screenshot showing $19,524.32 from flows',
    summary: 'Built a massive $19.5k automated flow machine, laying the foundation for scalable promotional campaigns.',
    story:
      'For high-volume online brands, back-end revenue flows are the backbone of profitability. We restructured the client’s entire flow architecture, generating $19,524.32 in revenue (73.28% of total email revenue) purely from automated customer journeys. Combined with campaign sends, total attributed revenue hit $26,643.68, setting up the business to ramp up campaign frequency for even larger gains.',
    results: [
      { label: 'Flow Revenue', value: '$19,524.32' },
      { label: 'Total Attributed', value: '$26,643.68' },
      { label: 'Flow Share', value: '73.28%' },
      { label: 'Campaign Share', value: '95.99%' },
    ],
    tools: ['Klaviyo Flows', 'Segmentation', 'A/B Testing'],
    highlights: [
      '$19,524.32 in revenue generated entirely on autopilot via customer flows',
      'Established a rock-solid foundation to scale campaign volume risk-free',
      'Maximised customer lifetime value (LTV) without rising ad costs',
    ],
  },
  {
    id: 'case-4',
    tag: 'Micro-List Monetization',
    tagColor: '#f783ac',
    title: 'Quick Wins: £800 Revenue from 3 Emails to a Small 600-Recipient List',
    subtitle: 'Micro-List Campaign Strategy',
    client: 'Client: Niche E-Commerce Retailer',
    image: '/media__1790077204414.jpg',
    imageAlt: 'Campaign messages showing high open rates and AED revenue screenshot',
    summary: 'Proved list size isn’t everything by generating immediate cash flow from a fresh, 600-subscriber segment.',
    story:
      'Proof that you do not need a massive list to make money. We created a high-urgency 3-email micro-campaign targeted at a brand-new segment of only 600 subscribers. Achieving open rates as high as 75.84% and strong click-through rates, the short sequence generated £800 (AED 3,900+) in instant revenue — laying a clear blueprint: 10x the list size, 10x the revenue.',
    results: [
      { label: 'Peak Open Rate', value: '75.84%' },
      { label: 'Emails Sent', value: '3 Campaigns' },
      { label: 'Audience Size', value: '600 Leads' },
      { label: 'Revenue ROI', value: '10x Potential' },
    ],
    tools: ['Klaviyo Campaigns', 'Hyper-Segmentation', 'Offer Structuring'],
    highlights: [
      'Over 75% open rates achieved through compelling subject line angles',
      'Generated immediate cash flow from a tiny brand-new audience of 600 people',
      'Proved scalable campaign template ready for list expansion',
    ],
  },
];

export default function Portfolio() {
  const [selectedCase, setSelectedCase] = useState<(typeof caseStudies)[0] | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #b197fc, transparent)',
          bottom: '0',
          left: '-150px',
          opacity: 0.06,
        }}
      />
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #f783ac, transparent)',
          top: '10%',
          right: '-100px',
          opacity: 0.04,
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
            style={{ color: 'var(--accent-cyan)' }}
          >
            Verified Real Results & Proof
          </span>
          <h2 className="section-title">
            Client Success Stories & <span className="gradient-text">Real Dashboard Proof</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Clear, honest proof from real client accounts. Click any case study to read the full story and view authentic revenue screenshots.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-400 group"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow), var(--glass-inner-highlight)',
              }}
            >
              {/* Image Preview Box with Hover Zoom */}
              <div
                className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 cursor-pointer border border-white/10 group-hover:border-cyan-400/40 transition-all"
                onClick={() => setActiveImage(study.image)}
              >
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-300 flex items-center gap-1.5 border border-white/20">
                  <FiZoomIn size={14} /> Click to Enlarge Proof
                </div>
              </div>

              {/* Tag */}
              <div
                className="self-start mb-3 px-3.5 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--glass-border)',
                  color: study.tagColor,
                }}
              >
                {study.tag}
              </div>

              {/* Title & Subtitle */}
              <h3
                className="font-bold text-xl leading-snug mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
              >
                {study.title}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent-teal)' }}>
                {study.client} &bull; {study.subtitle}
              </p>

              <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                {study.summary}
              </p>

              {/* Key Results Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {study.results.slice(0, 2).map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl p-3 text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                    }}
                  >
                    <div className="font-bold text-base sm:text-lg" style={{ color: study.tagColor }}>
                      {r.value}
                    </div>
                    <div className="text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCase(study)}
                className="w-full py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,210,211,0.15), rgba(56,217,169,0.15))',
                  border: '1px solid rgba(0,210,211,0.3)',
                  color: 'var(--accent-cyan)',
                }}
              >
                Read Full Client Story <FiArrowRight size={16} />
              </button>
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
            Want results like these for your store or business?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get Your Free Strategy Call <FiExternalLink className="ml-1" />
          </a>
        </motion.div>
      </div>

      {/* Modal 1: Full Client Story Details */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-3xl rounded-3xl p-6 sm:p-8 overflow-hidden my-8"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border-hover)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>

              <div className="mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold inline-block mb-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: selectedCase.tagColor,
                  }}
                >
                  {selectedCase.tag}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
                >
                  {selectedCase.title}
                </h3>
                <p className="text-sm text-cyan-400 font-semibold">{selectedCase.client}</p>
              </div>

              {/* Real Dashboard Image Banner */}
              <div
                className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 cursor-pointer"
                onClick={() => setActiveImage(selectedCase.image)}
              >
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.imageAlt}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                  <FiZoomIn /> Click to expand image
                </div>
              </div>

              {/* Story */}
              <div className="mb-6">
                <h4 className="text-base font-bold mb-2 text-white">The Client Story & Solution:</h4>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">{selectedCase.story}</p>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-base font-bold mb-3 text-white">Key Breakdown:</h4>
                <ul className="space-y-2">
                  {selectedCase.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <FiCheckCircle className="text-teal-400 shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {selectedCase.results.map((r) => (
                  <div
                    key={r.label}
                    className="p-3 rounded-2xl text-center bg-white/5 border border-white/10"
                  >
                    <div className="font-extrabold text-lg text-cyan-300">{r.value}</div>
                    <div className="text-[11px] text-gray-400 font-medium">{r.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCase(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary py-2.5 px-6 text-sm w-full sm:w-auto text-center"
                >
                  Book Your Campaign Setup
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal 2: Full Screen Image Proof Zoom */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white z-50 transition-colors"
              aria-label="Close image zoom"
            >
              <FiX size={24} />
            </button>
            <div className="relative w-full max-w-4xl max-h-[85vh] h-[80vh]">
              <Image
                src={activeImage}
                alt="Client Dashboard Proof"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

