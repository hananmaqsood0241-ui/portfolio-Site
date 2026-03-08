'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiMail, FiZap, FiLayout, FiShield, FiTrendingUp, FiMessageSquare
} from 'react-icons/fi';

const services = [
    {
        icon: <FiMail size={28} />,
        title: 'Email Campaign Management',
        desc: 'End-to-end management of your email campaigns — from strategy and copywriting to design, scheduling, and performance reporting.',
        highlight: 'Most Popular',
    },
    {
        icon: <FiZap size={28} />,
        title: 'Email Automation Setup',
        desc: 'Build powerful automated customer journeys — welcome series, abandoned cart, win-back flows, and post-purchase sequences that convert 24/7.',
    },
    {
        icon: <FiLayout size={28} />,
        title: 'Email Template Design',
        desc: 'Stunning, mobile-optimized email templates that align with your brand and drive clicks. Designed in Klaviyo, Mailchimp, and more.',
    },
    {
        icon: <FiShield size={28} />,
        title: 'Deliverability Optimization',
        desc: 'Improve sender reputation, reduce spam rates, and ensure your emails land in the inbox — not the junk folder.',
    },
    {
        icon: <FiTrendingUp size={28} />,
        title: 'A/B Testing & Optimization',
        desc: 'Data-driven experimentation on subject lines, send times, CTAs, and content to continuously improve your key metrics.',
    },
    {
        icon: <FiMessageSquare size={28} />,
        title: 'Email Strategy Consulting',
        desc: 'Comprehensive strategy sessions to audit your current setup, identify growth opportunities, and create a 90-day email roadmap.',
    },
];

export default function Services() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* BG */}
            <div
                className="orb"
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, #7c3aed, transparent)',
                    top: '20%',
                    right: '-200px',
                    opacity: 0.07,
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
                        What I Do
                    </span>
                    <h2 className="section-title">
                        Services That Drive <span className="gradient-text">Real Revenue</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        From campaign management to full automation setup — I provide comprehensive
                        email marketing services tailored to your business goals.
                    </p>
                </motion.div>

                {/* Cards */}
                <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="service-card group flex flex-col items-start text-left"
                        >
                            <div className="flex items-center justify-between w-full mb-6">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(168, 85, 247, 0.1))',
                                        border: '1px solid rgba(139, 92, 246, 0.25)',
                                        color: '#a855f7',
                                    }}
                                >
                                    {service.icon}
                                </div>

                                {service.highlight && (
                                    <div
                                        className="px-3 py-1 rounded-full text-xs font-bold"
                                        style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}
                                    >
                                        ⭐ {service.highlight}
                                    </div>
                                )}
                            </div>

                            <h3
                                className="text-xl font-bold mb-3 leading-tight"
                                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
                            >
                                {service.title}
                            </h3>
                            <p className="text-base leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                                {service.desc}
                            </p>

                            {/* Hover arrow */}
                            <div
                                className="mt-6 flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{ color: '#a855f7' }}
                            >
                                Learn more
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="btn-primary"
                    >
                        Get a Free Consultation →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
