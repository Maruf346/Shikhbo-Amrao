import { useState } from 'react'
import { motion } from 'framer-motion'
import { courses } from '../data/courses'

const tabs = [
  { id: 'all', label: 'All Courses' },
  { id: 'design', label: 'Design' },
  { id: 'business', label: 'Business' },
  { id: 'marketing', label: 'Marketing' },
]

// Container variant controls staggering for cards within that row
const rowContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Delays each card in the row so they appear one by one
    },
  },
}

// Slower, smooth card entrance (1.2s duration)
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Smooth ease-out curve matching About Us reveals
    },
  },
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered = courses.filter((c) => c.tab.includes(activeTab))

  // Helper function to divide filtered courses into rows of 3
  const chunkArray = (arr: typeof courses, size: number) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }

  const courseRows = chunkArray(filtered, 3)

  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-badge">Popular Courses</span>
            <h2 className="text-3xl lg:text-4xl font-semibold mt-2" style={{ color: 'var(--text-dark)' }}>
              Explore Featured Courses
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2 rounded-full text-sm font-normal transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: activeTab === tab.id ? 'var(--primary)' : '#f0f2f5',
                  color: activeTab === tab.id ? '#fff' : '#555',
                  border: `2px solid ${activeTab === tab.id ? 'var(--primary)' : 'transparent'}`,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rows of Course Cards */}
        <div key={activeTab} className="space-y-7">
          {courseRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              variants={rowContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-7"
            >
              {row.map((course) => (
                <motion.div key={course.id} variants={cardVariants} className="h-full">
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#F0F4F5] border border-gray-200/60 flex flex-col h-full hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full object-cover hover:scale-105 transition-transform duration-500"
          style={{ height: '210px' }}
        />
        <span
          className="absolute top-4 left-4 text-xs font-normal px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Stars */}
        <div className="stars mb-2 text-yellow-400 text-sm">{'★'.repeat(course.stars)}</div>

        <h3
          className="font-semibold text-base leading-snug mb-3 hover:text-[var(--primary)] transition-colors cursor-pointer"
          style={{ color: 'var(--text-dark)' }}
        >
          {course.title}
        </h3>

        {/* Meta */}
        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.lessons}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Students {course.students}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/80 my-3" />

        {/* Instructor + price */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          <div className="flex items-center gap-2">
            <img
              src={course.instructorImg}
              alt={course.instructor}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600 font-medium">{course.instructor}</span>
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--primary)' }}>
            {course.price}
          </span>
        </div>

        <a
          href="#"
          className="theme-btn justify-center text-sm py-2.5"
          style={{ display: 'flex' }}
        >
          Enroll Now
        </a>
      </div>
    </div>
  )
}