import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState, type FormEvent } from 'react'

const brandLogo = `${import.meta.env.BASE_URL}assets/logo.png`

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    messageInputRef.current?.focus()

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    const whatsappUrl = new URL('https://wa.me/8801707980299')
    whatsappUrl.searchParams.set('text', trimmedMessage)
    window.open(whatsappUrl.toString(), '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
        right: 'max(1.25rem, env(safe-area-inset-right))',
      }}
      className="fixed z-60 flex flex-col items-end gap-3"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="whatsapp-chat-panel"
            role="dialog"
            aria-labelledby="whatsapp-chat-title"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ maxHeight: 'min(38rem, calc(100dvh - 7rem))' }}
            className="flex w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl bg-[#efeae2] text-slate-900 shadow-2xl shadow-black/20 ring-1 ring-black/10"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 bg-[#075e54] px-4 py-3.5 text-white">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white p-0.5">
                  <img
                    src={brandLogo}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 id="whatsapp-chat-title" className="truncate font-semibold tracking-tight">
                    Shikhbo Amrao
                  </h2>
                  <p className="mt-0.5 truncate text-xs text-white/75">
                    Student support · Mirpur-1, Dhaka
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close WhatsApp chat"
                onClick={() => setIsOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-xl leading-none text-white/90 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div
              className="min-h-36 flex-1 overflow-y-auto px-4 py-5"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(120, 113, 108, 0.07) 1px, transparent 1.5px), radial-gradient(circle at 80% 70%, rgba(120, 113, 108, 0.06) 1px, transparent 1.5px)',
                backgroundSize: '24px 24px, 32px 32px',
              }}
            >
              <div className="mb-5 flex justify-center">
                <span className="rounded-lg bg-[#fcf4cb] px-3 py-1 text-[11px] font-medium tracking-wide text-[#54656f] shadow-sm">
                  WELCOME
                </span>
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 text-sm leading-relaxed text-[#303b40] shadow-sm">
                <p className="font-medium text-[#075e54]">Assalamu alaikum! 👋</p>
                <p className="mt-1.5">
                  Welcome to Shikhbo Amrao. Ask us about our classes, batches, or enrollment—we’re
                  happy to help.
                </p>
                <p className="mt-2 text-right text-[10px] text-[#8a969c]">Shikhbo Amrao</p>
              </div>
            </div>

            <div className="shrink-0 border-t border-black/5 bg-[#f0f2f5] px-3 py-3">
              <form onSubmit={handleSubmit} className="flex items-end gap-2">
                <label className="sr-only" htmlFor="whatsapp-message">
                  Your message
                </label>
                <textarea
                  id="whatsapp-message"
                  ref={messageInputRef}
                  rows={2}
                  maxLength={2000}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Type a message"
                  className="max-h-32 min-h-11 flex-1 resize-y rounded-full border border-transparent bg-white px-4 py-2.5 text-sm leading-relaxed outline-none placeholder:text-[#89959b] focus:border-[#25d366] focus:ring-2 focus:ring-[#25d366]/20"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  aria-label="Continue to WhatsApp with your message"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25d366] text-white transition-colors hover:bg-[#1fbd5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c4a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M2.4 21.6 22 12 2.4 2.4 2 10l14 2-14 2z" />
                  </svg>
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-[#7b878d]">
                Your message opens in WhatsApp for you to send
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat-panel"
        onClick={() => setIsOpen((open) => !open)}
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[#25d366] px-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#1fbd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128c4a] sm:px-5"
      >
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C8.87 3 3.04 8.79 3.04 15.92c0 2.27.6 4.49 1.73 6.45L3 29l6.84-1.78a13.1 13.1 0 0 0 6.2 1.57h.01c7.16 0 13-5.8 13-12.92 0-3.45-1.35-6.69-3.8-9.12A12.9 12.9 0 0 0 16.04 3Zm0 23.6h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.06 1.06 1.08-3.94-.26-.41a10.7 10.7 0 0 1-1.67-5.63c0-5.99 4.9-10.86 10.9-10.86 2.9 0 5.63 1.13 7.68 3.17a10.75 10.75 0 0 1 3.2 7.68c0 5.99-4.9 10.86-10.9 10.86Zm5.98-8.14c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.34 3.39.16.22 2.31 3.52 5.6 4.94.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z" />
        </svg>
        <span>WhatsApp</span>
      </motion.button>
    </div>
  )
}