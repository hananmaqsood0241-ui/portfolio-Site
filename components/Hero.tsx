'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { FiArrowRight, FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* BG orbs */}
      <div className="orb" style={{ width:'600px', height:'600px', background:'radial-gradient(circle,#7c3aed,#4c1d95)', top:'-200px', right:'-150px', opacity:0.12 }} />
      <div className="orb" style={{ width:'400px', height:'400px', background:'radial-gradient(circle,#a855f7,#6d28d9)', bottom:'-80px', left:'-120px', opacity:0.09 }} />

      {/* Subtle grid */}
      <div className="absolute inset-0" style={{ backgroundImage:`linear-gradient(rgba(139,92,246,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.07) 1px,transparent 1px)`, backgroundSize:'60px 60px' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-14">

          {/* ── Left Content ── */}
          <motion.div
            className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity:0, x:-50 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, ease:'easeOut' }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.15 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background:'rgba(139,92,246,0.14)', border:'1px solid rgba(139,92,246,0.35)', color:'#a855f7' }}
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

            {/* Typing */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.45 }}
              className="min-h-[60px] md:min-h-[30px]"
              style={{ color:'#a855f7', fontSize:'1.1rem', fontWeight:600, marginBottom:'18px' }}
            >
              <TypeAnimation
                sequence={['Email Campaign Strategist 📧',2000,'Klaviyo & Mailchimp Expert 🚀',2000,'Automation Flow Designer ⚡',2000,'Revenue Growth Partner 📈',2000]}
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
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12 w-full"
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

            {/* Mini stats */}
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
                { value:'50+', label:'Campaigns' },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="gradient-text" style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:'1.75rem', fontWeight:900 }}>{s.value}</div>
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

              {/* Animated conic gradient ring */}
              <div style={{
                width:'100%', height:'100%', borderRadius:'50%',
                background:'conic-gradient(from 0deg,#7c3aed,#a855f7,#ec4899,#7c3aed)',
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

              {/* Badge 1 */}
              <motion.div
                animate={{ y:[-6,6,-6] }}
                transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
                className="glass absolute -top-4 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xl"
                style={{ color:'var(--text-primary)', whiteSpace:'nowrap', borderColor:'rgba(139, 92, 246, 0.3)' }}
              >
                📧 Klaviyo Expert
              </motion.div>

              {/* Badge 2 */}
              <motion.div
                animate={{ y:[6,-6,6] }}
                transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }}
                className="glass absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xl"
                style={{ color:'var(--text-primary)', whiteSpace:'nowrap', borderColor:'rgba(139, 92, 246, 0.3)' }}
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
          style={{ border:'2px solid rgba(139,92,246,0.4)' }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background:'#a855f7' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
