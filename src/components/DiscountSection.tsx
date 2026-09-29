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

  // WhatsApp pre-formatted links
  const studentMessage = encodeURIComponent(
    'Hello Shikhbo Amrao Team!\n\nI would like to enroll as a Student and know more about your available courses and discounts.'
  )
  const teacherMessage = encodeURIComponent(
    'Hello Shikhbo Amrao Team!\n\nI am interested in joining Shikhbo Amrao as an Instructor/Teacher. Please guide me on the joining process.'
  )

  const studentWhatsappUrl = `https://wa.me/8801707980299?text=${studentMessage}`
  const teacherWhatsappUrl = `https://wa.me/8801707980299?text=${teacherMessage}`

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 40, 25, 0.88)' }} />

      <motion.div
        className="relative max-w-5xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Special 50% Admission Discount<br className="hidden sm:block" /> For The First 50 Batch Learners!
        </motion.h2>

        <motion.p 
          className="text-white/80 text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          variants={itemVariants}
        >
          Start your learning journey today with personalized care, live interactive support, and expert guidance tailored for every student's growth.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5"
          variants={itemVariants}
        >
          <a
            href={studentWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn justify-center text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl"
          >
            Become a Student
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href={teacherWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn style-2 justify-center text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl"
          >
            Become a Teacher
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
