'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '12px',
    padding: '14px 16px',
    width: '100%',
    color: 'var(--text-primary)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'Inter, sans-serif',
  };

  const contactCards = [
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+92 344 3069241',
      link: 'https://wa.me/923443069241',
      linkText: 'Chat on WhatsApp',
      color: '#22c55e',
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'Available upon request',
      link: 'https://wa.me/923443069241',
      linkText: 'Send a Message',
      color: '#8b5cf6',
    },
    {
      icon: '🌍',
      title: 'Location',
      value: 'Pakistan',
      link: null,
      linkText: null,
      color: '#f59e0b',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* BG orb */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #7c3aed, transparent)',
          top: '50%',
          right: '-200px',
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
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#a855f7' }}>
            Get In Touch
          </span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to grow your business with email marketing? I&apos;d love to hear about your
            goals and create a custom strategy for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
              Ready to get started?
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Whether you need a full email marketing overhaul or just want to improve
              one specific campaign, I&apos;m here to help. Let&apos;s schedule a free
              30-minute consultation to discuss your goals.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${card.color}20`, border: `1px solid ${card.color}30` }}
                  >
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {card.title}
                    </div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {card.value}
                    </div>
                  </div>
                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                      style={{
                        background: `${card.color}20`,
                        color: card.color,
                        border: `1px solid ${card.color}30`,
                      }}
                    >
                      {card.linkText}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/923443069241?text=Hi%20Hanan!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20email%20marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp Now
            </motion.a>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl"
                style={{
                  background: 'rgba(139, 92, 246, 0.08)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                }}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  Looking forward to working with you!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl space-y-5"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(139, 92, 246, 0.18)',
                }}
              >
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
                  Send Me a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--text-secondary)' }}>
                      Your Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)', width: '15px' }} />
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={{ ...inputStyle, paddingLeft: '38px' }}
                        onFocus={(e) => { e.target.style.borderColor = '#8b5cf6'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)'; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--text-secondary)' }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)', width: '15px' }} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        style={{ ...inputStyle, paddingLeft: '38px' }}
                        onFocus={(e) => { e.target.style.borderColor = '#8b5cf6'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)'; }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--text-secondary)' }}>
                    What service are you interested in? *
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    style={{ ...inputStyle }}
                    onFocus={(e) => { e.target.style.borderColor = '#8b5cf6'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)'; }}
                  >
                    <option value="" style={{ background: '#0f0f1a' }}>Select a service...</option>
                    <option value="Email Campaign Management" style={{ background: '#0f0f1a' }}>Email Campaign Management</option>
                    <option value="Email Automation Setup" style={{ background: '#0f0f1a' }}>Email Automation Setup</option>
                    <option value="Email Template Design" style={{ background: '#0f0f1a' }}>Email Template Design</option>
                    <option value="Deliverability Optimization" style={{ background: '#0f0f1a' }}>Deliverability Optimization</option>
                    <option value="A/B Testing" style={{ background: '#0f0f1a' }}>A/B Testing & Optimization</option>
                    <option value="Strategy Consulting" style={{ background: '#0f0f1a' }}>Email Strategy Consulting</option>
                    <option value="Full Package" style={{ background: '#0f0f1a' }}>Full Email Marketing Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--text-secondary)' }}>
                    Tell me about your project *
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-4" style={{ color: 'var(--text-secondary)', width: '15px' }} />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your business, current email setup, and what you'd like to achieve..."
                      style={{ ...inputStyle, paddingLeft: '38px', resize: 'vertical' }}
                      onFocus={(e) => { e.target.style.borderColor = '#8b5cf6'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)'; }}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: loading ? 0.7 : 1 }}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                  I typically respond within 24 hours ✨
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
