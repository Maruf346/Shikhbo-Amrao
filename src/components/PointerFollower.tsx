import { useEffect, useRef, useState } from "react"

type Point = {
  x: number
  y: number
}

const FAST_EASING = 0.28
const SLOW_EASING = 0.14

export default function PointerFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)
  const frontDotRef = useRef<HTMLDivElement | null>(null)
  const backDotRef = useRef<HTMLDivElement | null>(null)
  const isVisibleRef = useRef(false)
  const targetRef = useRef<Point>({ x: 0, y: 0 })
  const frontPositionRef = useRef<Point>({ x: 0, y: 0 })
  const backPositionRef = useRef<Point>({ x: 0, y: 0 })
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia("(pointer: fine)")
    const updatePointerMode = () => {
      setIsFinePointer(mediaQuery.matches)
    }

    updatePointerMode()
    mediaQuery.addEventListener("change", updatePointerMode)

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode)
    }
  }, [])

  useEffect(() => {
    if (!isFinePointer) {
      isVisibleRef.current = false
      setIsVisible(false)
      return
    }

    const animate = () => {
      const frontDot = frontDotRef.current
      const backDot = backDotRef.current

      if (!frontDot || !backDot) {
        frameRef.current = window.requestAnimationFrame(animate)
        return
      }

      frontPositionRef.current.x +=
        (targetRef.current.x - frontPositionRef.current.x) * FAST_EASING
      frontPositionRef.current.y +=
        (targetRef.current.y - frontPositionRef.current.y) * FAST_EASING
      backPositionRef.current.x +=
        (targetRef.current.x - backPositionRef.current.x) * SLOW_EASING
      backPositionRef.current.y +=
        (targetRef.current.y - backPositionRef.current.y) * SLOW_EASING

      frontDot.style.transform = `translate3d(${frontPositionRef.current.x}px, ${frontPositionRef.current.y}px, 0) translate(-50%, -50%)`
      backDot.style.transform = `translate3d(${backPositionRef.current.x}px, ${backPositionRef.current.y}px, 0) translate(-50%, -50%)`

      frameRef.current = window.requestAnimationFrame(animate)
    }

    const syncPositions = (x: number, y: number) => {
      targetRef.current = { x, y }
      frontPositionRef.current = { x, y }
      backPositionRef.current = { x, y }
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!isVisibleRef.current) {
        syncPositions(event.clientX, event.clientY)
        isVisibleRef.current = true
        setIsVisible(true)
        return
      }

      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
      }
    }

    const handlePointerLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    const handlePointerEnter = (event: PointerEvent) => {
      syncPositions(event.clientX, event.clientY)
      isVisibleRef.current = true
      setIsVisible(true)
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerleave", handlePointerLeave)
    window.addEventListener("pointerdown", handlePointerEnter)
    document.addEventListener("pointerenter", handlePointerEnter)

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("pointerdown", handlePointerEnter)
      document.removeEventListener("pointerenter", handlePointerEnter)

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isFinePointer])

  if (!isFinePointer) {
    return null
  }

  return (
    <div
      className={`pointer-follower ${isVisible ? "is-visible" : ""}`}
      aria-hidden="true"
    >
      <div ref={backDotRef} className="pointer-follower__dot pointer-follower__dot--back" />
      <div ref={frontDotRef} className="pointer-follower__dot pointer-follower__dot--front" />
    </div>
  )
}
