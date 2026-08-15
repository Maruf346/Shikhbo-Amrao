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
    { target: 25, suffix: '+', label: 'Year of Experience' },
    { target: 500, suffix: '+', label: 'Class Completed' },
    { target: 100, suffix: '+', label: 'Experts Instructors' },
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
    <section className="py-16 sm:py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Circular Image Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6 min-h-[360px] sm:min-h-[560px]">
            {/* Large Background Soft Circle */}
            <div className="absolute w-[270px] h-[270px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#e2f4ed] -z-10" />

            {/* Main Large Circular Image */}
            <div className="w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full overflow-hidden border-8 border-gray-200 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student studying with headphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Right Small Circular Image (Floating) */}
            <div className="absolute top-2 right-3 sm:right-8 w-24 h-24 sm:w-42 sm:h-42 rounded-full overflow-hidden border-4 sm:border-8 border-gray-200 shadow-2xl float-y">
              <img
                src="https://plus.unsplash.com/premium_photo-1691962725086-d1590e379139?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Right Small Circular Image (Floating) */}
            <div className="absolute bottom-4 right-5 sm:bottom-0 sm:right-12 w-32 h-32 sm:w-46 sm:h-46 rounded-full overflow-hidden border-4 sm:border-8 border-gray-200 shadow-2xl float-x">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop"
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
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[#dbe8e3] text-[#2c5246]"
            >
              About Us
            </motion.span>

            {/* Heading */}
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-[1.15] mb-5 tracking-tight"
            >
              Transforming Learning Into Lasting Impact
            </motion.h3>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed font-normal"
            >
              At Amrao Shikhbo, we believe in the power of education to transform lives. Our platform combines expert instructors with innovative methods, empowering students with the knowledge and skills they need to thrive in the modern world.
            </motion.p>

            {/* Stats Row with Animated Counter */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-6 border-b border-gray-100"
            >
              {stats.map((s, i) => (
                <div key={s.label} className={i < stats.length - 1 ? 'sm:border-r border-gray-200 pr-2' : ''}>
                  <div className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-1">
                    <Counter value={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA + Author Row (Appears sequentially last) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 flex-wrap"
            >
              <a
                href="#courses"
                className="inline-flex items-center gap-4 bg-[#003d2b] hover:bg-[#002b1f] text-white pl-7 pr-2 py-2 rounded-full font-semibold text-sm transition-all shadow-md group"
              >
                <span className="text-white">Explore More</span>
                <span className="w-8 h-8 rounded-full bg-[#f3ab27] flex items-center justify-center text-[#003d2b] group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>

              <div className="flex items-center gap-3">
                <img
                  src={cofounderLogo}
                  alt="Selim Reza Ripon"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#003d2b]"
                />
                <div>
                  <div className="font-bold text-sm text-[#111827]">Selim Reza Ripon</div>
                  <div className="text-xs text-gray-500 font-medium">Co-Founder</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
