import React, { useState, useEffect } from 'react'

const categories = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'School Level',
    desc: 'Foundational subjects, creative learning, and mentoring for young students.',
    count: '16 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: 'College Level',
    desc: 'HSC, Board exam preparation, and intermediate academic excellence.',
    count: '24 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5a3.75 3.75 0 01-3.75 3.75H8.75A3.75 3.75 0 015 14.5m14 0V9.75M5 14.5V9.75" />
      </svg>
    ),
    title: 'ICT Courses',
    desc: 'Complete Information & Communication Technology guidelines and practice.',
    count: '18 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'CSE & Coding',
    desc: 'Computer Science fundamentals, programming, web dev, and software tools.',
    count: '32 Courses',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Skill Development',
    desc: 'Spoken English, digital literacy, graphics design, and career readiness.',
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

  // Auto-slide every 2.5 seconds (pauses when hovered or maxIndex is 0)
  useEffect(() => {
    if (isPaused || maxIndex === 0) return

    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 2500)

    return () => clearInterval(interval)
  }, [maxIndex, isPaused])

  // Navigation handlers with seamless wrap-around loop
  const prev = () => setCurrent((c) => (c === 0 ? maxIndex : c - 1))
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1))

  const gap = 20

  return (
    <section
      className="py-14 sm:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1b4d3a 0%, #0f3225 100%)' }}
      id="categories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 float-x pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fff, transparent)' }} 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-yellow-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Explore Categories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Popular Programs & Learning Levels
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="overflow-hidden py-2">
          <div
            className="flex gap-5 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${visible} + ${gap / visible}px)))`,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex-shrink-0 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
                style={{
                  width: `calc((100% - ${(visible - 1) * gap}px) / ${visible})`,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform shadow-md"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    {React.cloneElement(cat.icon, { className: 'w-8 h-8' })}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{cat.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                </div>
                <a
                  href="#courses"
                  className="inline-flex items-center justify-between text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all w-full mt-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
                  }}
                >
                  <span>{cat.count}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Previous categories"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
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
