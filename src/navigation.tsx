import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

export const sectionRoutes = [
  { id: "home" },
  { id: "about" },
  { id: "categories" },
  { id: "courses" },
  { id: "why-us" },
  { id: "teachers" },
  { id: "testimonials" },
  { id: "blog" },
  { id: "newsletter" },
  { id: "contact" },
] as const

export type SectionId = (typeof sectionRoutes)[number]["id"]

type NavigateOptions = {
  smooth?: boolean
}

type NavigationContextValue = {
  activeSection: SectionId
  navigateToSection: (sectionId: SectionId, options?: NavigateOptions) => void
}

const NavigationContext = createContext<NavigationContextValue | null>(null)

const basePath = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "")
const cleanPath = basePath || "/"

function scrollToSection(sectionId: SectionId, smooth = true) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0
  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - headerHeight)

  window.scrollTo({
    top,
    behavior: smooth ? "smooth" : "auto",
  })
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("home")

  const navigateToSection = useCallback((sectionId: SectionId, options: NavigateOptions = {}) => {
    setActiveSection(sectionId)
    scrollToSection(sectionId, options.smooth ?? true)
  }, [])

  useEffect(() => {
    if (window.location.pathname !== cleanPath || window.location.hash) {
      window.history.replaceState(null, "", cleanPath)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]

        if (!activeEntry) return

        const sectionId = activeEntry.target.id as SectionId
        setActiveSection(sectionId)
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.1, 0.25],
      },
    )

    sectionRoutes.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const value = useMemo(
    () => ({
      activeSection,
      navigateToSection,
    }),
    [activeSection, navigateToSection],
  )

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export function useSectionNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useSectionNavigation must be used within NavigationProvider")
  }

  return context
}
