import { useEffect, useRef, useState } from "react"

interface Props {
  /** 0..1 scroll progress → mapped to a frame index */
  progress: number
  frameCount: number
  /** e.g. "/vault-assets/frames/frame_" (frames are 1-indexed, 3-digit, .webp) */
  basePath: string
  /** shown until the first frames decode */
  posterSrc: string
}

/** Draw an image to fully COVER the canvas (center-crop), like object-fit: cover. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number
) {
  const ir = img.naturalWidth / img.naturalHeight
  const cr = cw / ch
  let dw: number, dh: number, dx: number, dy: number
  if (cr > ir) {
    dw = cw
    dh = cw / ir
    dx = 0
    dy = (ch - dh) / 2
  } else {
    dh = ch
    dw = ch * ir
    dx = (cw - dw) / 2
    dy = 0
  }
  ctx.clearRect(0, 0, cw, ch)
  ctx.drawImage(img, dx, dy, dw, dh)
}

/**
 * Frame-accurate scroll-driven image sequence (the "Apple scroll" technique).
 *
 * Preloads every frame as an <img>, then on each animation frame maps the
 * current scroll progress to a frame index and paints it to a <canvas>.
 * Unlike scrubbing a <video> (which snaps to sparse keyframes → jank), every
 * scroll position maps to one exact frame → perfectly fluid.
 *
 * While frames are still decoding, it draws the nearest already-loaded frame
 * (never blank after the first), and shows a thin gold load bar.
 */
export function VaultSequence({
  progress,
  frameCount,
  basePath,
  posterSrc,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const images = useRef<HTMLImageElement[]>([])
  const loaded = useRef<boolean[]>([])
  const progressRef = useRef(progress)
  progressRef.current = progress
  const [loadedCount, setLoadedCount] = useState(0)

  // ── Preload all frames ──────────────────────────────────────
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(frameCount)
    const flags: boolean[] = new Array(frameCount).fill(false)
    let done = 0
    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.decoding = "async"
      // ?v=2 busts the browser cache now that frames are 1080p (was 720p)
      img.src = `${basePath}${String(i + 1).padStart(3, "0")}.webp?v=2`
      const mark = () => {
        if (!flags[i]) {
          flags[i] = true
          done += 1
          setLoadedCount(done)
        }
      }
      img.onload = mark
      img.onerror = mark
      imgs[i] = img
    }
    images.current = imgs
    loaded.current = flags
  }, [frameCount, basePath])

  // ── Draw loop ───────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let lastIdx = -1
    let smooth = progressRef.current

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      lastIdx = -1 // force a redraw at the new size
    }
    resize()
    window.addEventListener("resize", resize)

    const nearestLoaded = (idx: number) => {
      const flags = loaded.current
      if (flags[idx]) return idx
      for (let d = 1; d < frameCount; d++) {
        if (idx - d >= 0 && flags[idx - d]) return idx - d
        if (idx + d < frameCount && flags[idx + d]) return idx + d
      }
      return -1
    }

    const tick = () => {
      // Ease the displayed progress toward the scroll target so a fast scroll
      // plays through frames smoothly instead of snapping/jumping.
      const targetP = progressRef.current
      smooth += (targetP - smooth) * 0.2
      if (Math.abs(targetP - smooth) < 0.0004) smooth = targetP
      const target = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(smooth * (frameCount - 1)))
      )
      const idx = nearestLoaded(target)
      if (idx >= 0 && idx !== lastIdx) {
        const img = images.current[idx]
        if (img && img.complete && img.naturalWidth) {
          ctx.imageSmoothingEnabled = true
          ctx.imageSmoothingQuality = "high"
          drawCover(ctx, img, canvas.width, canvas.height)
          lastIdx = idx
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [frameCount])

  const pct = Math.round((loadedCount / frameCount) * 100)
  const ready = loadedCount >= Math.min(frameCount, 8)

  return (
    <div className="absolute inset-0">
      {!ready && (
        <img
          src={posterSrc}
          alt="Closed vault"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      )}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {pct < 100 && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/30">
          <div
            className="h-full bg-auth-gold/80 transition-[width] duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </div>
  )
}
