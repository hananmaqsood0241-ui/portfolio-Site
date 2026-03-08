'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub, FiArrowUp } from 'react-icons/fi';

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
        background: 'rgba(5, 5, 12, 0.95)',
        borderTop: '1px solid rgba(139, 92, 246, 0.15)',
      }}
    >
      {/* Top separator gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="gradient-text">Hanan</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 400 }}>.dev</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', maxWidth: '280px' }}>
              Email Marketing Specialist helping brands grow revenue and retention through
              strategic campaigns and intelligent automation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <FiLinkedin size={18} />, href: '#', label: 'LinkedIn' },
                { icon: <FiTwitter size={18} />, href: '#', label: 'Twitter' },
                { icon: <FiInstagram size={18} />, href: '#', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-purple-500/10 border border-purple-500/20 text-gray-400 hover:text-purple-400"
                  whileHover={{ scale: 1.1 }}
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
                  <span className="text-sm transition-colors hover:text-purple-400 cursor-default" style={{ color: 'var(--text-secondary)' }}>
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
                    className="text-sm transition-colors hover:text-purple-400 cursor-pointer bg-transparent border-none text-left p-0"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Quick Info */}
            <div className="pt-2 border-t border-purple-500/10 lg:border-none lg:pt-0">
              <a
                href="https://wa.me/923443069241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-green-400 mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="text-lg">📱</span> +92 344 3069241
              </a>
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span className="text-lg">🌍</span> Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(139, 92, 246, 0.1)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2025 Hanan. All rights reserved. Built with ❤️ and ☕
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Available for freelance projects
            </span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#a855f7',
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
