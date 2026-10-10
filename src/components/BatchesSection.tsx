import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSectionNavigation } from '../navigation'
import { batchCount, batchGroups } from '../data/batches'

const filters = [{ id: 'all', label: 'All Classes' }, ...batchGroups.map(({ id, label }) => ({ id, label }))]

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

const groupsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
}

const groupVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
}

const optionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: 'easeOut' },
  },
}

const subjectsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045 },
  },
}

export default function BatchesSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleGroups = activeFilter === 'all'
    ? batchGroups
    : batchGroups.filter((group) => group.id === activeFilter)
  const visibleBatchCount = visibleGroups.reduce((total, group) => total + group.subjects.length + 1, 0)

  return (
    <section className="bg-white py-20 sm:py-24" id="courses">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={headerVariants}
        >
          <div>
            <motion.span variants={headerItemVariants} className="section-badge">Batch Enrollment</motion.span>
            <motion.h2 variants={headerItemVariants} className="mt-2 text-3xl font-semibold text-(--text-dark) sm:text-4xl">
              Find Your Class Batch
            </motion.h2>
            <motion.p variants={headerItemVariants} className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              All-subject and individual-subject batches for Classes 6-10 and HSC.
            </motion.p>
          </div>
          <motion.div variants={headerItemVariants} className="flex flex-wrap gap-2" role="group" aria-label="Filter batches by class">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id
              return (
                <motion.button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? 'border-(--primary) bg-(--primary) text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-(--primary) hover:text-(--primary)'
                  }`}
                >
                  {filter.label}
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>

        <p className="mb-5 text-sm font-medium text-gray-500">
          {visibleGroups.length} class groups <span className="px-1.5 text-gray-300">/</span> {visibleBatchCount} batch options
        </p>

        <motion.div
          key={activeFilter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={groupsContainerVariants}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleGroups.map((group) => (
            <motion.article
              key={group.id}
              variants={groupVariants}
              className="rounded-lg border border-gray-200 bg-[#f7f9f8] p-5 sm:p-6"
            >
              <motion.h3 variants={optionVariants} className="mb-4 text-lg font-bold text-[#17251e]">
                {group.label}
              </motion.h3>
              <BatchOption name={group.fullBatchName} featured />
              <motion.div variants={optionVariants} className="my-5 flex items-center gap-3 text-[11px] font-semibold uppercase text-gray-400">
                <span className="h-px flex-1 bg-gray-200" />
                Individual subjects
                <span className="h-px flex-1 bg-gray-200" />
              </motion.div>
              <motion.div variants={subjectsContainerVariants} className="grid grid-cols-1 gap-2">
                {group.subjects.map((subject) => {
                  const prefix = group.id === 'hsc'
                    ? 'HSC'
                    : group.id.includes('science')
                      ? group.label.replace(' (Science Group)', ' Science')
                      : group.label

                  return <BatchOption key={subject} name={`${prefix} - ${subject}`} />
                })}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BatchOption({ name, featured = false }: { name: string; featured?: boolean }) {
  const { navigateToSection } = useSectionNavigation()

  return (
    <motion.button
      type="button"
      onClick={() => navigateToSection('newsletter')}
      variants={optionVariants}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
        featured
          ? 'bg-[#0b4935] text-white hover:bg-[#073a2a]'
          : 'border border-gray-200 bg-white text-gray-700 hover:border-[#0b4935] hover:text-[#0b4935]'
      }`}
      aria-label={`Ask about ${name}`}
    >
      <span className="text-sm font-medium leading-snug">{name}</span>
      <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
      </svg>
    </motion.button>
  )
}