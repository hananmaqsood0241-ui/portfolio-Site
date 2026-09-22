'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';

/** Coordinates page-level motion without coupling individual sections to one animation API. */
export default function MotionOrchestrator() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section')).slice(1);
    sections.forEach((section) => section.classList.add('motion-section'));
    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-section--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
      sections.forEach((section) => section.classList.remove('motion-section', 'motion-section--visible'));
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: progress }}
    />
  );
}
