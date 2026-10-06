'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const balloon = `${import.meta.env.BASE_URL}assets/airballoon1.png`

export default function NewsletterSection() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      const message = encodeURIComponent(`*Quick Query - Shikhbo Amrao*\n\n*Query:* ${query.trim()}`)
      window.open(`https://wa.me/8801707980299?text=${message}`, '_blank', 'noopener,noreferrer')
      setSubmitted(true)
      setQuery('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  // Scroll Entrance Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  // Floating idle animations for decorative graphics
  const floatAnimSlow = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const floatAnimFast = {
    animate: {
      y: [0, 10, 0],
      rotate: [0, -4, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="py-20 bg-white overflow-hidden" id="newsletter">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="relative rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#014738] py-16 sm:py-20 px-4 sm:px-12 text-center overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Subtle Background Overlay Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          {/* FLOATING DECORATIVE ELEMENTS */}

          {/* 1. Air Balloon (Top Left) */}
          <motion.div
            variants={fadeInUp}
            className="absolute top-6 left-6 md:top-10 md:left-14 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-10"
          >
            <motion.div {...floatAnimSlow} className="w-full h-full relative">
              
              <img
                src={balloon}
                alt="Air Balloon"
                className="w-full h-full object-contain rotate-[-8deg]"
              />
            </motion.div>
          </motion.div>

          {/* 2. Boy / Student Cutout Card (Bottom Left) */}
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-6 left-8 md:bottom-10 md:left-16 w-20 h-20 md:w-28 md:h-28 pointer-events-none hidden sm:block z-10"
          >
            <motion.div {...floatAnimFast} className="w-full h-full relative">
              <img
                src="https://images.unsplash.com/photo-1545123892-371649521e2a?w=300&auto=format&fit=crop&q=80"
                alt="Student Boy"
                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white/30"
              />
              <span className="absolute -bottom-1 right-1 bg-[#f3a833] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Learner
              </span>
            </motion.div>
          </motion.div>

          {/* 3. Girl / Student Cutout Card (Top Right) */}
          <motion.div
            variants={fadeInUp}
            className="absolute top-8 right-8 md:top-12 md:right-16 w-20 h-20 md:w-28 md:h-28 pointer-events-none hidden sm:block z-10"
          >
            <motion.div {...floatAnimSlow} className="w-full h-full relative">
              <img
                src="https://images.unsplash.com/photo-1700680056842-20d9acc36e91?w=300&auto=format&fit=crop&q=80"
                alt="Student Girl"
                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white/30"
              />
              <span className="absolute -top-1 left-1 bg-white text-[#014738] text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Pro
              </span>
            </motion.div>
          </motion.div>

          {/* 4. Secondary Floating Badge (Bottom Right) */}
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-8 right-10 md:bottom-12 md:right-20 pointer-events-none z-10 hidden md:block"
          >
            <motion.div
              {...floatAnimFast}
              className="w-14 h-14 rounded-2xl bg-[#f3a833] flex items-center justify-center text-black shadow-lg rotate-12"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* MAIN CONTENT AREA */}
          <div className="relative z-20 max-w-2xl mx-auto">
            {/* Header Badge */}
            <motion.div variants={fadeInUp} className="inline-block mb-3">
              <span className="bg-white/10 text-white border border-white/20 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-md">
                Quick Query
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight"
            >
              Quick Query - <br></br> Shikhbo Amrao
            </motion.h2>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-white/80 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Send your admission questions directly to our team on WhatsApp.
            </motion.p>

            {/* Animated Form / Search Box */}
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="relative flex flex-col sm:flex-row items-center bg-white p-2 rounded-3xl sm:rounded-full shadow-2xl max-w-xl mx-auto gap-2"
            >
              {/* Mail Icon Inside Input */}
              <div className="pl-4 text-gray-400 hidden sm:block">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Query Input Field */}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Send your admission query here..."
                required
                className="w-full flex-1 px-4 py-3 sm:py-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent rounded-full focus:outline-none"
              />

              {/* Query Button (Matches Design Palette) */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#014738] text-white font-semibold text-sm hover:bg-[#023525] transition-colors group shrink-0"
              >
                <span>{submitted ? 'Opening WhatsApp...' : 'Send'}</span>
                <span className="w-8 h-8 rounded-full bg-[#f3a833] text-black flex items-center justify-center transition-transform group-hover:rotate-45">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
