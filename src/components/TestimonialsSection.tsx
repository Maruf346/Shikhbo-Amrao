'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: '"Shikhbo Amrao made ICT and Science concepts so clear for my HSC preparation. The instructors explain every topic step-by-step!"',
    name: 'Arafat Rahman',
    role: 'HSC Candidate (Science)',
    img: 'https://images.unsplash.com/photo-1545123892-371649521e2a?w=120&h=120&fit=crop&crop=face',
  },
  {
    quote: '"As a guardian, I am very satisfied with their progress tracking and structured guidance. My daughter has built genuine interest in learning."',
    name: 'Nusrat Jahan',
    role: 'Guardian of Class 8 Student',
    img: 'https://images.unsplash.com/flagged/photo-1553489470-ad2885ef5fc7?w=120&h=120&fit=crop&crop=face',
  },
  {
    quote: '"The CSE programming & web development lessons are practical and easy to follow. Perfect platform for acquiring real skills early on."',
    name: 'Tanvir Hossain',
    role: 'CSE Undergraduate Student',
    img: 'https://images.unsplash.com/photo-1566482385965-a65e38b67395?w=120&h=120&fit=crop&crop=face',
  },
  {
    quote: '"Their live doubt-solving sessions helped me clear all my difficult topics before board exams. Highly recommended for every student!"',
    name: 'Farhana Yeasmin',
    role: 'SSC Examinee',
    img: 'https://images.unsplash.com/photo-1700680056842-20d9acc36e91?w=120&h=120&fit=crop&crop=face',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(1)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  // Auto sliding interval (pauses when user hovers over the cards)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      next()
    }, 4000)
    return () => clearInterval(timer)
  }, [isPaused, current])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Continuous infinite circular loop items display
  const getVisible = () => {
    const items = []
    for (let i = 0; i < visibleCount; i++) {
      items.push({
        ...testimonials[(current + i) % testimonials.length],
        uniqueKey: `${(current + i) % testimonials.length}-${i}`,
      })
    }
    return items
  }

  // Motion variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.15 },
    },
  }

  const childFade = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div>
            <motion.span variants={childFade} className="section-badge inline-block">
              Students Reviews
            </motion.span>
            <motion.h2
              variants={childFade}
              className="text-3xl lg:text-4xl font-semibold mt-2"
              style={{ color: 'var(--text-dark)' }}
            >
              What Students Say About<br />Our Platform.
            </motion.h2>
          </div>

          <motion.div variants={childFade} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e8f4f0]">
                {/* Google Logo Icon */}
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="Google Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-2xl" style={{ color: 'var(--text-dark)' }}>
                  5.0
                </div>
                <div className="text-xs text-gray-500">Google Reviews</div>
              </div>
            </div>
            <a href="#" className="theme-btn justify-center w-full sm:w-auto">
              All Testimonials
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Testimonial Cards Carousel */}
        <div
          className="grid md:grid-cols-3 gap-6 mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout">
            {getVisible().map((t) => (
              <motion.div
                key={t.uniqueKey}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="group rounded-2xl p-7 border border-gray-100 shadow-sm bg-white hover:bg-[var(--primary)] transition-colors duration-300 cursor-pointer"
              >
                {/* Quote icon */}
                <div className="text-4xl font-serif mb-4 text-[var(--primary)] group-hover:text-white/40 transition-colors duration-300">
                  &#8220;
                </div>

                <p className="text-sm leading-relaxed mb-6 text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {t.quote}
                </p>

                {/* Stars */}
                <div className="stars text-sm mb-4 text-[#ffc107]">
                  ★★★★★
                </div>

                {/* Client info */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <div className="font-bold text-sm text-[var(--text-dark)] group-hover:text-white transition-colors duration-300">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <div className="flex justify-center sm:justify-start gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all border"
            style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--primary)'
              ;(e.currentTarget as HTMLElement).style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = ''
              ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
