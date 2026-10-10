import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+8801707980299"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      title="Message us on WhatsApp"
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
        right: 'max(1.25rem, env(safe-area-inset-right))',
        minHeight: '3.5rem',
      }}
      className="fixed bottom-5 right-5 z-60 inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[#25d366] px-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#1fbd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128c4a] sm:bottom-6 sm:right-6 sm:px-5"
    >
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.87 3 3.04 8.79 3.04 15.92c0 2.27.6 4.49 1.73 6.45L3 29l6.84-1.78a13.1 13.1 0 0 0 6.2 1.57h.01c7.16 0 13-5.8 13-12.92 0-3.45-1.35-6.69-3.8-9.12A12.9 12.9 0 0 0 16.04 3Zm0 23.6h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.06 1.06 1.08-3.94-.26-.41a10.7 10.7 0 0 1-1.67-5.63c0-5.99 4.9-10.86 10.9-10.86 2.9 0 5.63 1.13 7.68 3.17a10.75 10.75 0 0 1 3.2 7.68c0 5.99-4.9 10.86-10.9 10.86Zm5.98-8.14c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.34 3.39.16.22 2.31 3.52 5.6 4.94.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z" />
      </svg>
      <span>WhatsApp</span>
    </motion.a>
  )
}