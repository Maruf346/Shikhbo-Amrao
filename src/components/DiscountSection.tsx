'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function DiscountSection() {
  // Stagger container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: 0.18,
      },
    },
  }

  // Child element fade-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 40, 25, 0.85)' }} />

      <motion.div
        className="relative max-w-4xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
          variants={itemVariants}
        >
          Act Fast: 50% Off For The<br className="hidden sm:block" />First 50 Students!
        </motion.h2>

        <motion.p 
          className="text-white/70 text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          The ability to learn at my own pace was a game-changer for me. The flexible schedule allowed me to balance my studies with work and personal life, making it possible.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <a href="#courses" className="theme-btn justify-center text-base">
            Become a Student
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a href="#" className="theme-btn style-2 justify-center text-base">
            Become a Teacher
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
