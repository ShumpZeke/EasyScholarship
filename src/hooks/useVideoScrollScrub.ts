import { useEffect, useRef, useState } from "react"
import type { RefObject } from "react"

interface Options {
  /** Total page height in vh — more = slower, more controlled scrub. */
  pageHeightVh?: number
  /** Lerp factor toward the target frame (lower = smoother/laggier). */
  smoothing?: number
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

/**
 * Binds page scroll to a <video>'s currentTime so the video behaves like an
 * interactive, scroll-controlled 3D object (the "Apple product page" technique).
 *
 * - Pauses the video; never autoplays.
 * - Each frame: targetTime = scrollProgress * duration, eased via lerp.
 * - requestAnimationFrame drives smooth seeking.
 * - Returns the 0..1 scroll progress for driving overlay opacities.
 */
export function useVideoScrollScrub(
  videoRef: RefObject<HTMLVideoElement | null>,
  options: Options = {}
): number {
  const { pageHeightVh = 520, smoothing = 0.14 } = options
  const [progress, setProgress] = useState(0)
  const target = useRef(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    video.preload = "auto"
    video.muted = true
    video.playsInline = true
    // Force the browser to start fetching so seeking works promptly
    if (video.readyState < 1) video.load()

    const updateTarget = () => {
      const scrollable = Math.max(
        1,
        window.innerHeight * (pageHeightVh / 100 - 1)
      )
      target.current = clamp(window.scrollY / scrollable, 0, 1)
    }

    const tick = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        const targetTime = target.current * video.duration
        const next = lerp(video.currentTime || 0, targetTime, smoothing)
        // Skip micro-seeks (avoids decoder thrash)
        if (Math.abs(video.currentTime - next) > 0.012) {
          video.currentTime = next
        }
        setProgress(target.current)
      }
      raf.current = requestAnimationFrame(tick)
    }

    const onLoaded = () => {
      video.pause()
      updateTarget()
      if (raf.current === null) raf.current = requestAnimationFrame(tick)
    }

    updateTarget()
    window.addEventListener("scroll", updateTarget, { passive: true })
    window.addEventListener("resize", updateTarget)
    video.addEventListener("loadedmetadata", onLoaded)
    if (video.readyState >= 1) onLoaded()

    return () => {
      window.removeEventListener("scroll", updateTarget)
      window.removeEventListener("resize", updateTarget)
      video.removeEventListener("loadedmetadata", onLoaded)
      if (raf.current !== null) cancelAnimationFrame(raf.current)
    }
  }, [pageHeightVh, smoothing, videoRef])

  return progress
}
