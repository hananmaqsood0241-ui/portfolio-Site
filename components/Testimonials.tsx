'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  initials: string;
  company: string;
  rating: number;
  text: string;
  initialsGradient: string;
  image?: string;
  isVerified?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: 'E-commerce Store Owner',
    initials: 'EO',
    company: 'Verified Client Review',
    rating: 5,
    text: "I'm really happy with the delivery. The seller was professional, responsive, and understood exactly what I needed. The work was delivered on time and matched my expectations perfectly. Communication throughout the process was smooth, and I genuinely appreciate the effort put into the final result. Would love to work together again in the future. Highly recommended 👍",
    initialsGradient: 'linear-gradient(135deg, #00f5ff, #818cf8)',
    image: '/reviews/review-1.png',
    isVerified: true,
  },
  {
    name: 'Agency Client',
    initials: 'AC',
    company: 'Verified Client Review',
    rating: 5,
    text: "Fantastic work! We are pleased with the results, and the service provided. The work was very high in quality and done with professionalism. The communication was really good throughout the whole process, and he was easy to work with. Highly recommended.",
    initialsGradient: 'linear-gradient(135deg, #00e5b0, #00f5ff)',
    image: '/reviews/review-2.png',
    isVerified: true,
  },
  {
    name: 'SaaS Founder',
    initials: 'SF',
    company: 'Verified Client Review',
    rating: 5,
    text: "I had an excellent experience working with Hanan From start to finish, the communication was clear, professional, and friendly. He understood exactly what I needed and delivered high-quality work. The project was delivered right on time. I highly recommend him.",
    initialsGradient: 'linear-gradient(135deg, #fbbf24, #f472b6)',
    image: '/reviews/review-3.png',
    isVerified: true,
  },
  {
    name: 'Repeat Client',
    initials: 'RC',
    company: 'Verified Client Review',
    rating: 5,
    text: "Thank you so very much for your work on my project! It is another time that we have come together on my projects. I hope to use your services again soon! Thank you so very much for your work!",
    initialsGradient: 'linear-gradient(135deg, #f472b6, #c084fc)',
    image: '/reviews/review-4.png',
    isVerified: true,
  },
  {
    name: 'Fashion Brand Founder',
    initials: 'FB',
    company: 'eCommerce Brand, United Kingdom',
    rating: 5,
    text: "Hanan completely transformed our email marketing. Our abandoned cart flow alone generates over $12,000 per month, and our welcome series has a 48% open rate that I never thought was possible. Absolutely worth every penny.",
    initialsGradient: 'linear-gradient(135deg, #00f5ff, #818cf8)',
    isVerified: true,
  },
  {
    name: 'SaaS CEO',
    initials: 'SC',
    company: 'SaaS Startup, United States',
    rating: 5,
    text: "We hired Hanan to fix our onboarding sequence that was bleeding free trial users. Within 60 days, our trial-to-paid conversion rate jumped 34%. The ROI has been extraordinary. Already planning our next project with him.",
    initialsGradient: 'linear-gradient(135deg, #00e5b0, #00f5ff)',
    isVerified: true,
  },
];

const realReviewImages = [
  { src: '/reviews/review-1.png', label: 'E-commerce Delivery Review' },
  { src: '/reviews/review-2.png', label: 'High Quality Service Feedback' },
  { src: '/reviews/review-3.png', label: 'Clear & Professional Work Review' },
  { src: '/reviews/review-4.png', label: 'Repeat Client Satisfaction Review' },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* BG gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(192, 132, 252, 0.06) 50%, transparent)',
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
            Client Testimonials & Proof
          </span>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say About Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real feedback from real clients. Check out the verified review screenshots below or swipe through recent client reviews.
          </p>
        </motion.div>

        {/* Real Review Image Screenshots Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00f5ff] animate-pulse" />
              Verified Client Review Screenshots
            </h3>
            <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-[rgba(0,245,255,0.3)] text-[#00f5ff] bg-[rgba(0,245,255,0.08)]">
              Click to Enlarge
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realReviewImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedImage(img.src)}
                className="group cursor-pointer rounded-2xl p-4 transition-all duration-300 relative overflow-hidden border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,245,255,0.4)]"
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Glowing border indicator on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,245,255,0.1)] to-[rgba(192,132,252,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative rounded-xl overflow-hidden bg-white/95 p-3 flex items-center justify-center min-h-[160px]">
                  {/* eslint-disable-next-next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.label}
                    className="max-h-[220px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full text-xs font-bold text-white bg-black/70 border border-white/20 shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Original Screenshot
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-300 px-1">
                  <span className="font-semibold text-slate-200">{img.label}</span>
                  <span className="text-[#00e5b0] font-medium flex items-center gap-1">
                    ✓ Verified Client Review
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Slider */}
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
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), rgba(192,132,252,0.4), transparent)' }}
                  />

                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <span key={si} className="text-[#fbbf24] text-sm md:text-base">★</span>
                      ))}
                    </div>
                    {t.isVerified && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#00e5b0]/10 border border-[#00e5b0]/30 text-[#00e5b0]">
                        ✓ Verified
                      </span>
                    )}
                  </div>

                  {/* Optional Review Image Preview */}
                  {t.image && (
                    <div
                      onClick={() => setSelectedImage(t.image!)}
                      className="mb-4 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#00f5ff]/50 transition-all bg-white p-2 group relative"
                    >
                      {/* eslint-disable-next-next/no-img-element */}
                      <img
                        src={t.image}
                        alt={`Screenshot of review by ${t.name}`}
                        className="w-full max-h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white font-medium">
                        Click to enlarge proof
                      </div>
                    </div>
                  )}

                  {/* Text */}
                  <blockquote
                    className="text-sm sm:text-base leading-relaxed flex-grow mb-6 italic font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 p-4 sm:p-6 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="bg-white rounded-2xl p-4 overflow-auto max-h-[75vh]">
                {/* eslint-disable-next-next/no-img-element */}
                <img
                  src={selectedImage}
                  alt="Verified Client Review Screenshot Full View"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
              <div className="mt-4 flex justify-between items-center text-xs text-slate-400 px-2">
                <span className="text-[#00f5ff] font-medium">✓ Verified Client Review Screenshot</span>
                <span>Click outside or ✕ to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
