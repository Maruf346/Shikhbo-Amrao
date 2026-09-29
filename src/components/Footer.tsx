import { motion } from 'framer-motion'

const logo = `${import.meta.env.BASE_URL}assets/logo.png`
const qoderLabsLogo = `${import.meta.env.BASE_URL}assets/qoderlabs.png`

const socialLinks = [
  { label: 'Facebook', url: 'https://www.facebook.com/ShikhboAmrao/', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'YouTube', url: 'https://www.youtube.com/@ShikhboAmrao', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'Twitter', url: '#', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', url: '#', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]

const platformLinks = [
  { label: 'Learning Levels', href: '#categories' },
  { label: 'Featured Courses', href: '#courses' },
  { label: 'Expert Teachers', href: '#teachers' },
  { label: 'Student Reviews', href: '#testimonials' },
  { label: 'Quick Query', href: '#newsletter' },
]

const quickLinks = [
  { label: 'About Shikhbo Amrao', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Programs', href: '#categories' },
  { label: 'Latest Articles', href: '#blog' },
  { label: 'Contact Details', href: '#contact' },
]

// Motion Variants for Staggered List Entrance (Bottom to Top)
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Motion Variants for Letter-by-Letter Large Text Animation
const letterContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, x: -15, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

export default function Footer() {
  const bigTitleText = "Shikhbo Amrao".split("");

  return (
    <footer style={{ backgroundColor: '#0d1f16' }} id="contact">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md flex-shrink-0">
                <img
                  src={logo}
                  alt="Shikhbo Amrao Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white">
                Shikhbo <span className="text-green-400">Amrao</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Education is the foundation of personal and societal growth, empowering individuals with knowledge and skills.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url !== '#' ? '_blank' : undefined}
                  rel={s.url !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#9ca3af' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#9ca3af'
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Online Platform */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Online Platform</h3>
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {platformLinks.map((item) => (
                <motion.li key={item.label} variants={listItemVariants}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Quick Link</h3>
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {quickLinks.map((item) => (
                <motion.li key={item.label} variants={listItemVariants}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Contact Us</h3>
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.li variants={listItemVariants} className="flex gap-3 text-gray-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Dhaka, Bangladesh
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="mailto:info@shikhboamrao.com" className="flex gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  info@shikhboamrao.com
                </a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="tel:+8801707980299" className="flex gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +880 170 798 0299
                </a>
              </motion.li>
            </motion.ul>
            <div className="mt-6 border-t border-white/10 pt-5">
              <a
                href="http://qoderlabs.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <span className="w-9 h-9 rounded-full bg-white p-2 flex items-center justify-center shadow-md flex-shrink-0">
                  <img
                    src={qoderLabsLogo}
                    alt="QoderLabs"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span>
                  Made with care by{' '}
                  <span className="font-semibold text-white">QoderLabs</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-gray-500 text-sm">Copyright © 2026 Shikhbo Amrao. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#newsletter" className="text-gray-500 text-sm hover:text-white transition-colors">Send Query</a>
            <a href="#contact" className="text-gray-500 text-sm hover:text-white transition-colors">Contact Details</a>
          </div>
        </div>
      </div>

      {/* Large footer name - Letter-by-Letter Animation from Left to Right */}
      <div className="overflow-hidden">
        <motion.h2
          variants={letterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-extrabold select-none leading-none flex justify-center flex-wrap"
          style={{
            fontSize: 'clamp(60px, 12vw, 160px)',
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-0.02em',
          }}
        >
          {bigTitleText.map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </footer>
  )
}
