import { useEffect, useState } from "react"

/**
 * Returns true if the viewport is below `maxWidth` (default 768px).
 * Used to skip the 3D Canvas on mobile and render a static fallback image.
 */
export function useIsMobile(maxWidth = 767): boolean {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`)
    setMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [maxWidth])

  return mobile
}
