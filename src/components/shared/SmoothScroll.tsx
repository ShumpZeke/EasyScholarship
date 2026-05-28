import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Lenis from "lenis"

/** Shared Lenis instance so route changes can reset scroll position. */
let lenis: Lenis | null = null

/**
 * Global smooth-scroll (Lenis) — the weighted, momentum-driven glide that
 * makes scroll-driven sites like igloo.inc feel premium. It eases window
 * scroll, and our frame scrubber reads that eased scrollY → buttery reveal.
 *
 * Mounted once at the app root. Resets to top on each route change so auth
 * pages don't inherit the landing's scroll offset.
 */
export function SmoothScroll() {
  const location = useLocation()

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.09, // glide weight — lower = more float, higher = snappier
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })
    lenis = instance

    let raf = 0
    const loop = (time: number) => {
      instance.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      instance.destroy()
      lenis = null
    }
  }, [])

  // Jump to top instantly on navigation
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [location.pathname])

  return null
}
