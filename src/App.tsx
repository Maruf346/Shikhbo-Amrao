import PointerFollower from "./components/PointerFollower"

import FloatingWhatsApp from "./components/FloatingWhatsApp"

import { NavigationProvider } from "./navigation"

import HomePage from "./pages/HomePage"

import BlogPage from "./pages/BlogPage"

export default function App() {
  const blogMatch = window.location.pathname.match(/^\/blog(?:\/([^/]+))?\/?$/)

  if (blogMatch) {
    return <BlogPage slug={blogMatch[1]} />
  }

  return (
    <NavigationProvider>
      <PointerFollower />
      <HomePage />
      <FloatingWhatsApp />
    </NavigationProvider>
  )
}
