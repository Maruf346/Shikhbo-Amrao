'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const features = [
  {
    color: '#E0EFEA',
    iconColor: '#2B7A68',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Early Learning',
    desc: 'At the heart of our online community stands.',
  },
  {
    color: '#FEF3E2',
    iconColor: '#E08B2D',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Art And Craft',
    desc: 'At the heart of our online community stands.',
  },
  {
    color: '#FDF0E6',
    iconColor: '#DF8344',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
      </svg>
    ),
    title: 'Brain Train',
    desc: 'At the heart of our online community stands.',
  },
  {
    color: '#E0EFEA',
    iconColor: '#2B7A68',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: 'Music Area',
    desc: 'At the heart of our online community stands.',
  },
]

// Animated Counter Sub-Component
function CounterNumber({ target = 92, duration = 2 }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => setCount(Math.floor(value)),
      })
      return () => controls.stop()
    }
  }, [isInView, target, duration])

  return <span ref={nodeRef}>{count}+</span>
}

export default function WhyChooseUsSection() {
  // Stagger animation variants for Left Header Elements
  const headerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  // Stagger animation variants for Feature Cards (Top 2 then Bottom 2)
  const featureGridVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2, // Items 0 & 1 animate first, then items 2 & 3
      },
    },
  }

  const featureCardVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-white overflow-hidden" id="why-us">
      {/* Floating Keyframe Animations */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        @keyframes floatX {
          0%, 100% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
        }
        .animate-float-y {
          animation: floatY 4s ease-in-out infinite;
        }
        .animate-float-x {
          animation: floatX 4.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:ml-auto max-w-lg">
            {/* Header Text Smooth Scroll Entrance */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headerContainerVariants}
            >
              <motion.span
                variants={fadeInVariant}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#E2EFEB] text-[#2B7A68] mb-4"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInVariant}
                className="text-3xl lg:text-4xl font-semibold text-[#111827] leading-tight mb-4"
              >
                Learning That Aligns With<br className="hidden sm:inline" /> Your Personal Goals.
              </motion.h2>
              <motion.p
                variants={fadeInVariant}
                className="text-gray-500 text-sm mb-10 leading-relaxed"
              >
                Unlock your full potential with education tailored to your personal aspirations. Learn, grow, and achieve success.
              </motion.p>
            </motion.div>

            {/* Features Staggered Grid (Top 2 first, then Bottom 2) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={featureGridVariants}
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={featureCardVariant}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: f.color, color: f.iconColor }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-[#111827] mb-1">{f.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating Images & Yellow Card */}
          <div className="relative flex justify-center lg:justify-end items-center py-10 lg:ml-auto min-h-[390px] sm:min-h-[560px]">
            {/* Background Outer Ring */}
            <div className="absolute w-[290px] h-[290px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#EAF3F0] -z-10" />

            {/* Main Center Circular Image */}
            <div className="w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] rounded-full overflow-hidden shadow-lg border-8 border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop"
                alt="Student listening with headphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Left Floating Circle Image */}
            <div className="absolute top-4 left-0 sm:top-0 sm:left-2 lg:-left-6 w-24 h-24 sm:w-44 sm:h-44 rounded-full border-4 sm:border-8 border-gray-200 shadow-xl overflow-hidden animate-float-y">
              <img
                src="https://images.unsplash.com/photo-1719245307966-1d0b89921af4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student studying at table"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Left Floating Circle Image */}
            <div className="absolute bottom-5 left-1 sm:-bottom-4 sm:left-4 lg:-left-4 w-28 h-28 sm:w-48 sm:h-48 rounded-full border-4 sm:border-8 border-gray-200 shadow-xl overflow-hidden animate-float-x">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Group studying together"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Yellow Badge Card with Smooth Number Counter */}
            <div className="absolute bottom-6 right-1 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 sm:-right-12 lg:-right-36 bg-[#FFA826] text-black px-5 sm:px-9 py-4 sm:py-6 rounded-xl shadow-xl flex items-center gap-3 animate-float-x">
              <span className="font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                <CounterNumber target={92} duration={2} />
              </span>
              <span className="text-xs font-normal leading-snug">
                Customizable<br />Courses.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
