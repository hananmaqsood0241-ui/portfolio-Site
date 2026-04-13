'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiArrowUp } from 'react-icons/fi';

const footerLinks = {
  Services: [
    'Email Campaigns',
    'Email Automation',
    'Template Design',
    'Deliverability',
    'A/B Testing',
    'Strategy Consulting',
  ],
  Platforms: [
    'Klaviyo',
    'Mailchimp',
    'ConvertKit',
    'Brevo',
    'MailerLite',
    'HubSpot',
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 overflow-hidden"
      style={{
        background: 'var(--glass-bg-thick)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      {/* Top separator — iridescent gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-lilac), var(--accent-pink), transparent)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          {/* Brand — Fixed: removed ".dev" (#1) */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="gradient-text">Hanan</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 400, marginLeft: '6px' }}>| Email Marketer</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', maxWidth: '280px' }}>
              Email Marketing Specialist helping brands grow revenue and retention through
              strategic campaigns and intelligent automation.
            </p>
            {/* Social Icons — glass circles */}
            <div className="flex gap-3">
              {[
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/hanan-maqsood-', label: 'LinkedIn' },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092V16h-2.037v-3.025h-.85c-.545 0-.838.41-.838 1.092V16h-2.038V11.97h-.85c-.545 0-.838.41-.838 1.093V16H11.83v-4.03h-1.006V16H8.787v-4.03H7.782v3.053c0 .575-.26.978-.768.978h-.162V11.97H4.813v.978h.428c.283 0 .51.238.51.505v2.547H4.223a.469.469 0 0 1-.468-.468v-1.607c0-.545-.293-1.955-1.725-1.955H.992v2.037h.85c.283 0 .51.238.51.504V16H.347v1.015h22.31V16h-.65v-4.117z"/>
                    </svg>
                  ),
                  href: 'https://www.fiverr.com/s/7YzorX1',
                  label: 'Fiverr',
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)',
                    boxShadow: 'var(--glass-inner-highlight)',
                    textDecoration: 'none',
                  }}
                  whileHover={{ scale: 1.1, borderColor: 'var(--accent-cyan)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide" style={{ color: 'var(--text-primary)' }}>
              SERVICES
            </h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <span className="text-sm transition-colors cursor-default" style={{ color: 'var(--text-secondary)' }}>
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide" style={{ color: 'var(--text-primary)' }}>
              PLATFORMS
            </h4>
            <ul className="space-y-3">
              {footerLinks.Platforms.map((link) => (
                <li key={link}>
                  <span className="text-sm cursor-default" style={{ color: 'var(--text-secondary)' }}>
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide" style={{ color: 'var(--text-primary)' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors cursor-pointer bg-transparent border-none text-left p-0"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Quick Info */}
            <div className="pt-2">
              <a
                href="https://wa.me/923443069241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors mb-2"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <span className="text-lg">📱</span> +92 344 3069241
              </a>
              <a
                href="mailto:hananmaqsood0241@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors mb-2"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <span className="text-lg">📧</span> hananmaqsood0241@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span className="text-lg">🌍</span> Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar — Fixed copyright year to 2026 (#4) */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--glass-border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Hanan. All rights reserved. Built with ❤️ and ☕
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Available for freelance projects
            </span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            {/* Back to top — glass */}
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--accent-cyan)',
                boxShadow: 'var(--glass-inner-highlight)',
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
