'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Fashion Brand Founder',
    initials: 'FB',
    company: 'eCommerce Brand, United Kingdom',
    rating: 5,
    text: "Hanan completely transformed our email marketing. Our abandoned cart flow alone generates over $12,000 per month, and our welcome series has a 48% open rate that I never thought was possible. Absolutely worth every penny.",
    initialsGradient: 'linear-gradient(135deg, #3b82f6, #00d2d3)',
  },
  {
    name: 'SaaS CEO',
    initials: 'SC',
    company: 'SaaS Startup, United States',
    rating: 5,
    text: "We hired Hanan to fix our onboarding sequence that was bleeding free trial users. Within 60 days, our trial-to-paid conversion rate jumped 34%. The ROI has been extraordinary. Already planning our next project with him.",
    initialsGradient: 'linear-gradient(135deg, #22c55e, #38d9a9)',
  },
  {
    name: 'Business Coach',
    initials: 'BC',
    company: 'Service Business, Australia',
    rating: 5,
    text: "My email list went from 1,200 to nearly 4,000 subscribers in 4 months, and my newsletter open rate is consistently above 44%. Hanan's strategy turned my email into my #1 client acquisition channel. Game-changer!",
    initialsGradient: 'linear-gradient(135deg, #f59e0b, #f783ac)',
  },
  {
    name: 'Marketing Director',
    initials: 'MD',
    company: 'Beauty eCommerce Brand, United States',
    rating: 5,
    text: "The abandoned cart flow Hanan built recovered 38% more revenue than our old setup. His understanding of Klaviyo is exceptional, and his copy is genuinely compelling. Hanan doesn't just set things up — he makes them convert.",
    initialsGradient: 'linear-gradient(135deg, #ec4899, #b197fc)',
  },
  {
    name: 'Head of Growth',
    initials: 'HG',
    company: 'FinTech SaaS, Canada',
    rating: 5,
    text: "Hanan re-engaged over 1,800 dormant users with a masterfully crafted win-back sequence. His A/B testing methodology is rigorous and results-driven. If you need email marketing that actually works, Hanan is your person.",
    initialsGradient: 'linear-gradient(135deg, #8b5cf6, #00d2d3)',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* BG gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(177, 151, 252, 0.03) 50%, transparent)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 overflow-hidden">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: 'var(--accent-cyan)' }}>
            Client Testimonials
          </span>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say About Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what business owners and marketing
            leaders say about working with me.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full relative"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            style={{ paddingBottom: '60px' }}
            className="testimonial-swiper w-full"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div
                  className="rounded-3xl p-8 h-full flex flex-col transition-all duration-400 relative overflow-hidden"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    boxShadow: 'var(--glass-shadow), var(--glass-inner-highlight)',
                  }}
                >
                  {/* Top highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px]"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} className="text-[#fbbf24] text-sm md:text-base">★</span>
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote
                    className="text-sm sm:text-base leading-relaxed flex-grow mb-6 italic font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {/* Author — Anonymized with initials circle (#8) */}
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Initials circle instead of emoji avatar */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: t.initialsGradient,
                        color: '#fff',
                        boxShadow: `0 4px 12px rgba(0,0,0,0.2)`,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                        {t.name}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
