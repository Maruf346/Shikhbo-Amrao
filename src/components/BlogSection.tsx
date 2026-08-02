'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    category: 'Education',
    date: '09 May, 2025',
    comments: '0 Comments',
    title: 'Repurpose Mission Critical Action Life Items Rather Total',
  },
  {
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
    category: 'Technology',
    date: '15 Jun, 2025',
    comments: '03 Comments',
    title: 'The Importance of Integrating Arts into Science and Technology',
  },
  {
    img: 'https://images.unsplash.com/photo-1674027215032-f0c4292318ee?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'AI & Data',
    date: '22 Jul, 2025',
    comments: '05 Comments',
    title: 'How AI is Transforming the Future of Online Education',
  },
  {
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    category: 'Learning',
    date: '10 Aug, 2025',
    comments: '02 Comments',
    title: 'Strategies for Effective Self-Directed Distance Learning',
  },
  {
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    category: 'Education',
    date: '01 Sep, 2025',
    comments: '04 Comments',
    title: 'Navigating Modern Careers with Continuous Skill Upgrading',
  },
]

export default function BlogSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  // Duplicated post array to enable seamless infinite slide animation
  const extendedPosts = [...posts, ...posts]

  const next = () => {
    if (isResetting) return
    setCurrent((c) => c + 1)
  }

  const prev = () => {
    if (isResetting) return
    if (current === 0) {
      // Instantly position track at the clone set before sliding backward
      setIsResetting(true)
      setCurrent(posts.length)
      setTimeout(() => {
        setIsResetting(false)
        setCurrent(posts.length - 1)
      }, 50)
    } else {
      setCurrent((c) => c - 1)
    }
  }

  // Auto-sliding interval (4.5s)
  useEffect(() => {
    if (isPaused || isResetting) return
    const interval = setInterval(() => {
      next()
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused, isResetting, current])

  // Reset flag handler for loop cleanup
  useEffect(() => {
    if (isResetting) {
      const timer = setTimeout(() => setIsResetting(false), 50)
      return () => clearTimeout(timer)
    }
  }, [isResetting])

  // Seamless infinite loop check upon completing animation step
  const handleAnimationComplete = () => {
    if (current >= posts.length) {
      setIsResetting(true)
      setCurrent(0)
    }
  }

  // Scroll Reveal Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="py-20 bg-[#f7f9fa] overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-5 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Side: Section Intro */}
          <div className="lg:col-span-2">
            <motion.span variants={fadeInUp} className="section-badge inline-block mb-2">
              Our Blogs
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-semibold mt-2 mb-5 leading-tight text-gray-900"
            >
              Read Our Blog
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8 text-sm leading-relaxed">
              Whether you are a lifelong learner or a professional looking to upskill, our carefully curated courses
              cater to all levels and interests.
            </motion.p>

            {/* Carousel Controls */}
            <motion.div variants={fadeInUp} className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all border border-[#014738] text-[#014738] hover:bg-[#014738] hover:text-white"
                aria-label="Previous Post"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[#014738] text-white hover:bg-[#023525]"
                aria-label="Next Post"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Blog Cards Track Carousel */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 overflow-hidden [--shift-step:calc(100%+24px)] sm:[--shift-step:calc(50%+12px)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current} * var(--shift-step))` }}
              transition={
                isResetting
                  ? { duration: 0 }
                  : { duration: 0.9, ease: [0.25, 1, 0.5, 1] }
              }
              onAnimationComplete={handleAnimationComplete}
            >
              {extendedPosts.map((post, idx) => (
                <div
                  key={`${post.title}-${idx}`}
                  className="w-full sm:w-[calc(50%-12px)] flex-shrink-0 rounded-2xl overflow-hidden bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                >
                  {/* Image & Category Pill */}
                  <div className="relative overflow-hidden rounded-xl mb-4 group">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      style={{ height: '220px' }}
                    />
                    <span className="absolute top-3 right-3 text-xs font-normal px-3.5 py-1.5 rounded-full bg-[#f3a833] text-black shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="px-1 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta information */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-gray-700 mb-3">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          {post.comments}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h3 className="font-semibold text-lg leading-snug text-gray-900 mb-6 line-clamp-2 hover:text-[#014738] transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </div>

                    {/* Styled Pill Button */}
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#014738] text-white font-semibold text-sm hover:bg-[#023525] transition-colors group"
                      >
                        <span className="text-white">View Details</span>
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
