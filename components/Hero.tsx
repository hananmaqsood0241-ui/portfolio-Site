'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { FiArrowRight, FiMail, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Animated gradient background — dark blue to near-black */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0d1b2a 0%, #1a1a2e 30%, #16162a 60%, #0a0a1a 100%)',
        }}
      />

      {/* Floating email-themed SVGs — subtle 10% opacity */}
      <motion.div
        className="absolute z-0 pointer-events-none"
        style={{ top: '15%', left: '8%', opacity: 0.06 }}
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--accent-cyan)' }}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13L2 4" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute z-0 pointer-events-none"
        style={{ top: '60%', right: '10%', opacity: 0.05 }}
        animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--accent-lilac)' }}>
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute z-0 pointer-events-none"
        style={{ bottom: '20%', left: '65%', opacity: 0.04 }}
        animate={{ y: [-8, 8, -8], x: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--accent-pink)' }}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </motion.div>

      {/* BG orbs — iridescent multi-color */}
      <div className="orb" style={{ width:'600px', height:'600px', background:'radial-gradient(circle,#00d2d3,#38d9a9)', top:'-200px', right:'-150px', opacity:0.1 }} />
      <div className="orb" style={{ width:'400px', height:'400px', background:'radial-gradient(circle,#b197fc,#f783ac)', bottom:'-80px', left:'-120px', opacity:0.08 }} />
      <div className="orb" style={{ width:'300px', height:'300px', background:'radial-gradient(circle,#f783ac,#00d2d3)', top:'40%', left:'50%', opacity:0.05 }} />

      {/* Subtle grid */}
      <div className="absolute inset-0" style={{ backgroundImage:`linear-gradient(rgba(0,210,211,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,210,211,0.04) 1px,transparent 1px)`, backgroundSize:'60px 60px' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-14">

          {/* ── Left Content ── */}
          <motion.div
            className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity:0, x:-50 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, ease:'easeOut' }}
          >
            {/* Available badge — glass pill */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.15 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background:'var(--glass-bg)',
                backdropFilter:'blur(16px)',
                WebkitBackdropFilter:'blur(16px)',
                border:'1px solid var(--glass-border)',
                color:'var(--accent-cyan)',
                boxShadow:'var(--glass-inner-highlight)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Work &middot; Pakistan
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.25, duration:0.7 }}
              style={{ fontFamily:'Space Grotesk,sans-serif', color:'var(--text-primary)', fontSize:'clamp(2rem,4.5vw,3.6rem)', fontWeight:900, lineHeight:1.15, marginBottom:'16px' }}
            >
              Email Marketing That<br />
              <span className="gradient-text">Converts Subscribers</span><br />
              Into Customers
            </motion.h1>

            {/* Typing — Updated as per spec #18 */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.45 }}
              className="min-h-[60px] md:min-h-[30px]"
              style={{ color:'var(--accent-teal)', fontSize:'1.1rem', fontWeight:600, marginBottom:'18px' }}
            >
              <TypeAnimation
                sequence={[
                  'Email Marketing That Converts...',
                  4000,
                  'Klaviyo Flows That Sell 24/7...',
                  4000,
                  'Automation That Grows Revenue...',
                  4000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </motion.div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.55 }}
              className="text-base leading-relaxed max-w-[520px] mb-8"
              style={{ color:'var(--text-secondary)' }}
            >
              I help eCommerce, SaaS, and service-based businesses grow revenue and
              retain customers through strategic campaigns, smart automation, and
              data-driven optimisation.{' '}
              <strong style={{ color:'var(--text-primary)' }}>Up to 48% open rates — real results.</strong>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-5 w-full"
            >
              <motion.a
                href="#portfolio"
                onClick={e=>{e.preventDefault();document.querySelector('#portfolio')?.scrollIntoView({behavior:'smooth'});}}
                className="btn-primary"
                whileHover={{ scale:1.04 }}
                whileTap={{ scale:0.97 }}
              >
                View My Work <FiArrowRight />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={e=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}
                className="btn-outline"
                whileHover={{ scale:1.04 }}
                whileTap={{ scale:0.97 }}
              >
                <FiMail /> Contact Me
              </motion.a>
            </motion.div>

            {/* Social proof links — LinkedIn + Fiverr (#10) */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.75 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12 w-full"
            >
              <motion.a
                href="https://www.linkedin.com/in/hanan-maqsood-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border)',
                  color: '#0A66C2',
                  boxShadow: 'var(--glass-inner-highlight)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.05, borderColor: '#0A66C2' }}
                whileTap={{ scale: 0.97 }}
              >
                <FiLinkedin size={16} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://www.fiverr.com/s/7YzorX1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border)',
                  color: '#1DBF73',
                  boxShadow: 'var(--glass-inner-highlight)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.05, borderColor: '#1DBF73' }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092V16h-2.037v-3.025h-.85c-.545 0-.838.41-.838 1.092V16h-2.038V11.97h-.85c-.545 0-.838.41-.838 1.093V16H11.83v-4.03h-1.006V16H8.787v-4.03H7.782v3.053c0 .575-.26.978-.768.978h-.162V11.97H4.813v.978h.428c.283 0 .51.238.51.505v2.547H4.223a.469.469 0 0 1-.468-.468v-1.607c0-.545-.293-1.955-1.725-1.955H.992v2.037h.85c.283 0 .51.238.51.504V16H.347v1.015h22.31V16h-.65v-4.117z"/></svg>
                Fiverr
              </motion.a>
            </motion.div>

            {/* Mini stats — glass style with glow effect */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.8 }}
              className="flex flex-wrap gap-x-8 gap-y-6 justify-center lg:justify-start w-full"
            >
              {[
                { value:'48%', label:'Open Rate' },
                { value:'22%', label:'Click-Through' },
                { value:'3+',  label:'Years Exp.' },
                { value:'100+', label:'Campaigns' },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily:'Space Grotesk,sans-serif',
                      fontSize:'1.75rem',
                      fontWeight:900,
                      textShadow: '0 0 20px rgba(0, 210, 211, 0.3)',
                    }}
                    data-target={s.value}
                  >
                    {s.value}
                  </div>
                  <div style={{ color:'var(--text-secondary)', fontSize:'0.75rem', marginTop:'2px' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Photo ── */}
          <motion.div
            className="w-full lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity:0, x:50 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, delay:0.3, ease:'easeOut' }}
          >
            <div className="relative floating w-[280px] sm:w-[320px] lg:w-[350px] aspect-square">

              {/* Animated iridescent gradient ring */}
              <div style={{
                width:'100%', height:'100%', borderRadius:'50%',
                background:'conic-gradient(from 0deg,#00d2d3,#b197fc,#f783ac,#38d9a9,#00d2d3)',
                padding:'4px', position:'relative',
              }} className="neon-border">
                <div style={{ width:'100%', height:'100%', borderRadius:'50%', background:'var(--bg-primary)', padding:'6px' }}>
                  <div style={{ width:'100%', height:'100%', borderRadius:'50%', overflow:'hidden', position:'relative', background:'var(--bg-secondary)' }}>
                    <Image
                      src="/hanan.png"
                      alt="Hanan — Email Marketing Expert"
                      fill
                      style={{ objectFit:'cover', objectPosition:'top center' }}
                      priority
                      sizes="(max-width: 768px) 300px, 350px"
                    />
                  </div>
                </div>
              </div>

              {/* Badge 1 — glass */}
              <motion.div
                animate={{ y:[-6,6,-6] }}
                transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
                className="glass absolute -top-4 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5"
                style={{ color:'var(--text-primary)', whiteSpace:'nowrap' }}
              >
                📧 Klaviyo Expert
              </motion.div>

              {/* Badge 2 — glass */}
              <motion.div
                animate={{ y:[6,-6,6] }}
                transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }}
                className="glass absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5"
                style={{ color:'var(--text-primary)', whiteSpace:'nowrap' }}
              >
                📈 48% Open Rate
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.6 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior:'smooth' })}
      >
        <span style={{ color:'var(--text-secondary)', fontSize:'11px' }}>Scroll</span>
        <motion.div
          animate={{ y:[0,7,0] }}
          transition={{ duration:1.4, repeat:Infinity }}
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border:'1px solid var(--glass-border)' }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background:'var(--accent-cyan)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
