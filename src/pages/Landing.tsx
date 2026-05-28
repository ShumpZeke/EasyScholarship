import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useVideoScrollScrub } from "@/hooks/useVideoScrollScrub"
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe"
import { useIsMobile } from "@/hooks/useIsMobile"

const VIDEO = "/vault-assets/vault-scroll-background.mp4"
const POSTER_CLOSED = "/vault-assets/vault-closed.png"
const POSTER_OPEN = "/vault-assets/vault-open.png"
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}
/** Map a value from one range to another, clamped to 0..1 of the input range. */
function mapRange(v: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const t = clamp((v - inMin) / (inMax - inMin), 0, 1)
  return outMin + (outMax - outMin) * t
}

export default function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotionSafe()
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const [leaving, setLeaving] = useState<string | null>(null)

  // Static mode = MOBILE ONLY (iOS can't scrub video reliably). Reduced-motion
  // desktop users still get the scrub — it's user-driven, not auto-playing.
  const staticMode = isMobile
  const progress = useVideoScrollScrub(videoRef, {
    pageHeightVh: staticMode ? 100 : 520,
    smoothing: 0.14,
  })
  const p = staticMode ? 1 : progress

  // Overlay opacities driven by scroll progress
  const introOpacity = 1 - mapRange(p, 0.06, 0.26, 0, 1)
  const ctaOpacity = staticMode ? 1 : mapRange(p, 0.78, 0.94, 0, 1)
  const ctaInteractive = ctaOpacity > 0.85

  /** Zoom out of the vault, then navigate into the real auth route. */
  const enterAuth = (path: string) => {
    if (leaving) return
    setLeaving(path)
    window.setTimeout(() => navigate(path), 420)
  }

  return (
    <div className="relative bg-auth-bg">
      {/* ─── Fixed vault stage (video scrubs with scroll) ────── */}
      <motion.div
        className="fixed inset-0 z-0 origin-center"
        animate={
          leaving
            ? { scale: 0.8, filter: "blur(12px) brightness(0.45)" }
            : { scale: 1, filter: "blur(0px) brightness(1)" }
        }
        transition={{ duration: 0.42, ease: EASE }}
      >
        {staticMode ? (
          <img
            src={POSTER_OPEN}
            alt="Open vault revealing a warm gold glow"
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={VIDEO}
            poster={POSTER_CLOSED}
            muted
            playsInline
            preload="auto"
          />
        )}
        {/* Cinematic shade — darkens edges, keeps center vault readable */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,rgba(5,5,5,0.55)_100%)]" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-auth-bg/40 via-transparent to-auth-bg/70" />
      </motion.div>

      {/* ─── Top bar ─────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-30 flex items-center justify-between p-6 md:p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-auth-text">
          <span className="text-auth-gold text-xl">✦</span>
          <span className="font-display text-base font-semibold tracking-tight">
            Easy Scholarships
          </span>
        </Link>
        <button
          onClick={() => enterAuth("/login")}
          className="text-sm text-auth-text/90 hover:text-auth-text transition-colors"
        >
          Sign in
        </button>
      </header>

      {/* ─── Intro copy (fades OUT as you scroll in) ─────────── */}
      <div
        className="fixed inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: introOpacity, pointerEvents: "none" }}
      >
        <p className="text-[11px] text-auth-gold uppercase tracking-[0.3em] mb-5">
          Scroll to unlock
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-auth-text-strong tracking-tight leading-[1.05] max-w-3xl">
          Your scholarships,
          <br />
          locked inside.
        </h1>
        <p className="mt-5 text-base md:text-lg text-auth-muted max-w-md leading-relaxed">
          Scroll to open the vault and claim what's yours.
        </p>
        {!staticMode && !reducedMotion && (
          <div className="mt-12 flex flex-col items-center gap-2 text-auth-muted-deep">
            <span className="text-[10px] uppercase tracking-[0.25em]">Scroll down</span>
            <span className="block w-px h-10 bg-gradient-to-b from-auth-gold/60 to-transparent animate-pulse" />
          </div>
        )}
      </div>

      {/* ─── Vault-open CTA (fades IN at the reveal) ─────────── */}
      <div
        className="fixed inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
        style={{
          opacity: ctaOpacity,
          pointerEvents: ctaInteractive ? "auto" : "none",
        }}
      >
        <motion.div
          animate={{ opacity: leaving ? 0 : 1, y: leaving ? -12 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex flex-col items-center"
        >
          <p className="text-[11px] text-auth-gold uppercase tracking-[0.3em] mb-4">
            Vault open
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-auth-text-strong tracking-tight leading-[1.08] max-w-3xl">
            Claim your scholarships.
          </h2>
          <p className="mt-4 text-base text-auth-muted max-w-sm leading-relaxed">
            Create your account or sign in to start matching, tracking, and winning.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => enterAuth("/signup")}
              className="bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-9 py-3.5 rounded-xl shadow-lg shadow-auth-gold/30 hover:shadow-auth-gold/50 hover:scale-[1.03] transition-all"
            >
              Sign up
            </button>
            <button
              onClick={() => enterAuth("/login")}
              className="auth-glass-strong text-auth-text px-9 py-3.5 rounded-xl border border-auth-border hover:bg-auth-glass-strong transition-colors"
            >
              Sign in
            </button>
          </div>
        </motion.div>
      </div>

      {/* ─── Scroll spacer — creates the scroll distance for the scrub ─ */}
      <div style={{ height: staticMode ? "100vh" : "520vh" }} aria-hidden="true" />
    </div>
  )
}
