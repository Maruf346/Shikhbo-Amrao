'use client'

import React from 'react'
import { motion } from 'framer-motion'

const teachers = [
  {
    name: 'Sanjeeda Yesmin',
    role: 'Instructor',
    img: `${import.meta.env.BASE_URL}assets/teacher-1.jpg`,
  },
  {
    name: 'Selim Reza Ripon',
    role: 'Instructor',
    img: `${import.meta.env.BASE_URL}assets/selim.png`,
  },
  {
    name: 'Maruf Hossain',
    role: 'Instructor',
    img: `${import.meta.env.BASE_URL}assets/Maruf.jpg`,
  },
  {
    name: 'Otrina Nusaiba Orthi',
    role: 'Instructor',
    img: `${import.meta.env.BASE_URL}assets/tanvi.jpg`,
  },
] 

export default function TeachersSection() {
  // Container variant for header text staggered entrance
  const headerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  // Fade-up variant for header badge and title
  const textFadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  // Stagger container variant for cards so they reveal one by one
  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  // Individual card animation variant
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1615715757462-9ce10a340052?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f7f9fc',
      }}
      id="teachers"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerContainerVariants}
        >
          <motion.span variants={textFadeVariant} className="section-badge inline-block">
            Teacher
          </motion.span>
          <motion.h2
            variants={textFadeVariant}
            className="text-3xl lg:text-4xl font-semibold mt-2"
            style={{ color: 'var(--text-dark)' }}
          >
            Greatest Teachers Inspire
          </motion.h2>
        </motion.div>

        {/* Animated Cards Grid (Sequential One-by-One Reveal) */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainerVariants}
        >
          {teachers.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariant}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ height: 'min(320px, 78vw)' }}
              />
              {/* Name overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                style={{ background: 'linear-gradient(to top, rgba(15,50,37,0.95) 0%, transparent 100%)' }}
              >
                <h4 className="font-bold text-base">{t.name}</h4>
                <p className="text-sm text-white/70">{t.role}</p>
              </div>
              {/* Social hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(27, 77, 58, 0.3)' }}
              >
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors"
                  style={{ color: 'var(--primary)' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors"
                  style={{ color: 'var(--primary)' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
