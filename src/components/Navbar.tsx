import { useState } from 'react'
import logo from '../data/logo.png'; 
// Or using path alias: import logo from '@/data/logo.png';

const navItems = [
  {
    label: 'Home',
    href: '#',
    dropdown: ['Online Education', 'About Platform', 'Contact'],
  },
  {
    label: 'Pages',
    href: '#',
    dropdown: ['About Us', 'Our Instructors', 'Our Programs', 'Events', 'Pricing', 'FAQ'],
  },
  {
    label: 'Courses',
    href: '#courses',
    dropdown: ['All Courses', 'Course Details'],
  },
  {
    label: 'Blog',
    href: '#blog',
    dropdown: ['Blog Grid', 'Blog Standard', 'Blog Details'],
  },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--primary)' }}>
              {logo ? (
                <img src={logo} alt="Shikhbo Amrao Logo" className="w-full h-full object-cover" />
              ) : null}
            </div>
            <span className="font-bold text-xl" style={{ color: 'var(--primary)' }}>
              Shikhbo <span className="text-gray-800">Amrao</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-500 text-gray-700 hover:text-[var(--primary)] transition-colors font-medium rounded-md"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.dropdown && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((sub) => (
                      <a key={sub} href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a 
              href="#courses" 
              className="theme-btn hidden md:inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full"
            >
              Start Free Trial
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
            
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md border border-gray-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 px-4 py-3 bg-white">
            <div className="max-w-xl mx-auto flex gap-2">
              <input
                type="text"
                placeholder="Search courses, topics..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[var(--primary)]"
                autoFocus
              />
              <button className="theme-btn py-2 px-5 text-sm">Search</button>
            </div>
          </div>
        )}

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full text-left flex items-center justify-between py-2 text-gray-700 font-medium text-sm"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.dropdown && openDropdown === item.label && (
                  <div className="ml-4 space-y-1 pb-2">
                    {item.dropdown.map((sub) => (
                      <a key={sub} href="#" className="block py-1.5 text-sm text-gray-600 hover:text-[var(--primary)]">{sub}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#courses" className="theme-btn w-full justify-center mt-3">
              Start Free Trial
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        )}
      </header>
    </>
  )
}
