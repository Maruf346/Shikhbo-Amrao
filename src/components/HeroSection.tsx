import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const airb = `${import.meta.env.BASE_URL}assets/airb.png`

// Framer Motion Variants & Helpers
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const floatAnimSlow = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Custom Animated Counter Sub-Component
function CountUp({ target, duration = 2000, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const startTimeRef = useRef(null)

  useEffect(() => {
    let animationFrameId

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic formula for a smooth slowing-down finish
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(target) // Ensure exact final count
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [target, duration])

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 lg:min-h-[820px] flex items-center"
      style={{
        background: 'radial-gradient(circle at 80% 20%, #e2f4ed 0%, #fdf8f0 50%, #fdf1e4 100%)',
      }}
    >
      {/* ================= DECORATIVE DOODLES ================= */}

      {/* 1. Top Right: Hot Air Balloon */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-12 lg:left-24 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 pointer-events-none z-10"
      >
        <motion.div {...floatAnimSlow} className="w-full h-full relative">
          <img
            src={airb}
            alt="Hot Air Balloon"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* 2. Bottom Left: Orange Hollow Ring */}
      <div className="absolute bottom-24 left-12 lg:left-28 pointer-events-none float-y hidden sm:block">
        <div className="w-14 h-14 rounded-full border-[5px] border-[#f3ab27]" />
      </div>

      {/* 3. Center Bottom: Star & Swirl Doodle */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block float-y">
        <svg
          className="w-20 h-40"
          viewBox="0 0 60 110"
          fill="none"
          stroke="#f3ab27"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 31 6 L 35 15 L 45 16 L 37 23 L 40 33 L 31 27 L 22 33 L 25 23 L 17 16 L 27 15 Z" />
          <path d="M 42 28 C 46 42, 35 60, 20 78 C 12 88, 18 100, 32 98 C 44 96, 42 80, 26 80 C 14 80, 10 92, 10 106" />
        </svg>
      </div>

      {/* 4. Top Right: Book Icon & Dot */}
      <div className="absolute top-10 right-8 lg:right-20 hidden sm:flex flex-col items-center gap-3 pointer-events-none float-y">
        <div className="w-4.5 h-4.5 rounded-full bg-[#003d2b] opacity-80" />
        <svg
          className="w-18 h-18 text-[#003d2b] -rotate-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      {/* 5. Bottom Right: Dark Green Triangle */}
      <div className="absolute bottom-12 right-10 lg:right-16 pointer-events-none float-x hidden sm:block">
        <svg className="w-22 h-22 text-[#003d2b] fill-current rotate-[215deg]" viewBox="0 0 24 24">
          <path d="M3 3 L22 12 L10 22 Z" />
        </svg>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-20 lg:pr-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: TEXT & CTA */}
          <div className="lg:col-span-6 text-center sm:text-left">
            <div className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-5 bg-[#dbe8e3] text-[#2c5246]">
              Welcome to "Shikhbo Amrao"
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-[#111827] leading-[1.12] mb-7 tracking-tight">
              Learn Better,
              <br />
              Grow Together,
              <br />
              Succeed Everyday
            </h1>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-10 leading-relaxed max-w-lg mx-auto sm:mx-0 font-normal">
              Empowering students with quality education, interactive lessons, and dedicated guidance. Building a brighter future for every learner.
            </p>

            <a
              href="#courses"
              className="inline-flex items-center gap-4 bg-[#003d2b] hover:bg-[#002b1f] !text-white pl-8 pr-3 py-3 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="text-white">Get Started</span>
              <span className="w-10 h-10 rounded-full bg-[#f3ab27] flex items-center justify-center text-[#003d2b] group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>

          {/* RIGHT COLUMN: ARCH IMAGES & FLOATING CARDS */}
          <div className="lg:col-span-6 relative flex justify-center items-center pt-8 sm:pt-10 lg:pt-0 w-full max-w-[460px] sm:max-w-none mx-auto">
            {/* FLOATING CARD 1: STUDENT COUNTER */}
            <div className="absolute -top-4 left-0 sm:left-2 z-20 bg-white rounded-full shadow-xl px-5 sm:px-7 py-4 sm:py-5 flex items-center gap-4 sm:gap-5 float-x border border-gray-100">
              <div className="pl-1">
                <div className="font-bold text-xl sm:text-2xl leading-none text-[#f3ab27]">
                  <CountUp target={5436} duration={2200} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Student</div>
              </div>
              <div className="hidden min-[420px]:flex items-center -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
                  alt=""
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt=""
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                  alt=""
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
                  alt=""
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
                <div className="w-11 h-11 rounded-full bg-[#003d2b] border-2 border-white flex items-center justify-center text-white text-base font-bold">
                  +
                </div>
              </div>
            </div>

            {/* FLOATING CARD 2: SUCCESS COURSES */}
            <div className="absolute -bottom-2 right-0 sm:right-2 z-20 bg-white rounded-full shadow-xl px-5 sm:px-7 py-3.5 float-y border border-gray-100 text-center">
              <div className="font-bold text-xl sm:text-2xl leading-tight text-[#003d2b]">
                <CountUp target={450} duration={2000} />
              </div>
              <div className="text-xs text-gray-500 font-medium whitespace-nowrap mt-0.5">
                Success Courses
              </div>
            </div>

            {/* ARCH IMAGES */}
            <div className="flex items-end justify-center gap-4 sm:gap-10 pt-16 sm:pt-6 pl-2 sm:pl-4 w-full">
              {/* Left Arch Image */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 -translate-x-4 translate-y-3 rounded-t-full rounded-b-full border-2 border-[#003d2b] pointer-events-none z-0" />
                <div className="relative z-10 w-[42vw] max-w-48 sm:w-56 lg:w-64 h-[68vw] max-h-76 sm:h-96 lg:h-[430px] rounded-t-full rounded-b-full overflow-hidden bg-[#f2a123] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
                    alt="Student with glasses"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Arch Image */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 -translate-x-4 translate-y-3 rounded-t-full rounded-b-full border-2 border-[#003d2b] pointer-events-none z-0" />
                <div className="relative z-10 w-[48vw] max-w-56 sm:w-72 lg:w-80 h-[78vw] max-h-96 sm:h-[460px] lg:h-[520px] rounded-t-full rounded-b-full overflow-hidden bg-[#48c5cd] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
                    alt="Student with headphones"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
