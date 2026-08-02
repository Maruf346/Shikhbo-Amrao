import { useState, useEffect } from 'react'

const categories = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Development',
    desc: 'Our platform is built on the principles of innovation and inclusivity.',
    count: '12 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Arts & Design',
    desc: 'Our platform is built on the principles of innovation and inclusivity.',
    count: '21 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Computer Science',
    desc: 'Our platform is built on the principles of innovation and inclusivity.',
    count: '14 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Video & Audio',
    desc: 'Our platform is built on the principles of innovation and inclusivity.',
    count: '27 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
    title: 'Business & Finance',
    desc: 'Our platform is built on the principles of innovation and inclusivity.',
    count: '18 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    title: 'Marketing & Sales',
    desc: 'Our platform is built on the principles of innovation and inclusivity.',
    count: '15 Courses',
  },
]

export default function TopCategorySection() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(4)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1)
      } else if (window.innerWidth < 1024) {
        setVisible(2)
      } else {
        setVisible(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, categories.length - visible)

  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex)
    }
  }, [visible, maxIndex, current])

  // Auto-slide every 2 seconds (pauses when hovered or maxIndex is 0)
  useEffect(() => {
    if (isPaused || maxIndex === 0) return

    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [maxIndex, isPaused])

  // Navigation handlers with seamless wrap-around loop
  const prev = () => setCurrent((c) => (c === 0 ? maxIndex : c - 1))
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1))

  const gap = 24

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1b4d3a 0%, #0f3225 100%)' }}
      id="categories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 float-x pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fff, transparent)' }} 
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Top Category</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Next-Gen Education &<br />Teaching Courses
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="overflow-hidden py-4">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${visible} + ${gap / visible}px)))`,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex-shrink-0 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                style={{
                  width: `calc((100% - ${(visible - 1) * gap}px) / ${visible})`,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{cat.title}</h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">{cat.desc}</p>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
                  }}
                >
                  {cat.count}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Previous categories"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Next categories"
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