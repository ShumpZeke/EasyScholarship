import { useEffect, useState } from "react"

/**
 * Returns the page's normalized scroll progress (0 = top, 1 = bottom).
 * Updates on every scroll event (passive listener for perf).
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(max > 0 ? Math.min(1, Math.max(0, current / max)) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return progress
}
