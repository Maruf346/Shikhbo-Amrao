import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
const cofounderLogo = `${import.meta.env.BASE_URL}assets/selim.jpg`

// Count-up Component for Stats
function Counter({ value, suffix = '+' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export default function AboutSection() {
  const stats = [
    { target: 9, suffix: '+', label: 'Year of Experience' },
    { target: 500, suffix: '+', label: 'Class Completed' },
    { target: 20, suffix: '+', label: 'Experts Instructors' },
  ]

  // Parent container stagger animation rules
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // Time delay between each element appearing
      },
    },
  }

  // Individual element smooth fade & slide-up rules
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom smooth cubic-bezier curve
      },
    },
  }

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* Left: Circular Image Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 min-h-[420px] sm:min-h-[640px]">
            {/* Large Background Soft Circle */}
            <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#e2f4ed] -z-10" />

            {/* Main Large Circular Image */}
            <div className="w-[300px] h-[300px] sm:w-[560px] sm:h-[560px] rounded-full overflow-hidden border-8 sm:border-[12px] border-gray-200 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student studying with headphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Right Small Circular Image (Floating) */}
            <div className="absolute top-0 right-1 sm:right-2 w-28 h-28 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 sm:border-8 border-gray-200 shadow-2xl float-y">
              <img
                src="https://plus.unsplash.com/premium_photo-1691962725086-d1590e379139?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Right Small Circular Image (Floating) */}
            <div className="absolute bottom-2 right-2 sm:bottom-0 sm:right-6 w-36 h-36 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 sm:border-8 border-gray-200 shadow-2xl float-x">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                alt="Group studying around laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content with Staggered Scroll Animations */}
          <motion.div
            className="lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-[#dbe8e3] text-[#2c5246]"
            >
              About Us
            </motion.span>

            {/* Heading */}
            <motion.h3
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111827] leading-[1.12] mb-6 tracking-tight"
            >
              Making Learning Easy, Effective & Enjoyable
            </motion.h3>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg lg:text-xl mb-10 leading-relaxed font-normal"
            >
              At Shikhbo Amrao, we connect students with passionate teachers and structured courses. We help young learners build confidence, master core subjects, and achieve academic goals step by step.
            </motion.p>

            {/* Stats Row with Animated Counter */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pb-8 border-b border-gray-100"
            >
              {stats.map((s, i) => (
                <div key={s.label} className={i < stats.length - 1 ? 'sm:border-r border-gray-200 pr-3' : ''}>
                  <div className="text-3xl sm:text-4xl font-bold text-[#111827] mb-1.5">
                    <Counter value={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA + Author Row (Appears sequentially last) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 flex-wrap"
            >
              <a
                href="#courses"
                className="inline-flex items-center gap-4 bg-[#003d2b] hover:bg-[#002b1f] text-white pl-8 pr-3 py-3 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl group"
              >
                <span className="text-white">Explore More</span>
                <span className="w-10 h-10 rounded-full bg-[#f3ab27] flex items-center justify-center text-[#003d2b] group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <img
                  src={cofounderLogo}
                  alt="Selim Reza Ripon"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#003d2b] shadow-sm"
                />
                <div>
                  <div className="font-bold text-base sm:text-lg text-[#111827]">Selim Reza Ripon</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">Co-Founder</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
