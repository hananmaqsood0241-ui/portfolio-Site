'use client';

import { motion } from 'framer-motion';

export default function AvailabilityBadge() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full cursor-pointer"
      style={{
        background: 'rgba(15, 15, 30, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        color: '#fff',
        fontSize: '13px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)' }}
      whileTap={{ scale: 0.97 }}
      aria-label="Available for projects — scroll to contact"
    >
      {/* Pulsing green dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#22c55e' }}
        />
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ background: '#22c55e' }}
        />
      </span>
      Available for Projects
    </motion.button>
  );
}
