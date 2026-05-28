import { Suspense, lazy, useCallback, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe"
import { useIsMobile } from "@/hooks/useIsMobile"
import { LandscapeFallback } from "@/components/landing/LandscapeFallback"
import { SectionTabs } from "@/components/landing/SectionTabs"

const LandscapeScene = lazy(
  () => import("@/components/landing/LandscapeScene")
)

const SECTIONS = [
  { id: "hero", label: "Open" },
  { id: "reveal", label: "Reveal" },
  { id: "features", label: "Inside" },
  { id: "cta", label: "Begin" },
] as const

// Framer-motion presets reused for every section's content
const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const sectionTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
}

export default function Landing() {
  const progress = useScrollProgress()
  const reducedMotion = useReducedMotionSafe()
  const isMobile = useIsMobile()

  // Active section: 0..3 derived from scroll
  const activeIdx = Math.min(
    SECTIONS.length - 1,
    Math.floor(progress * SECTIONS.length + 0.0001)
  )

  // Smooth-scroll to a section's start
  const scrollToSection = useCallback((idx: number) => {
    const y = idx * window.innerHeight
    window.scrollTo({ top: y, behavior: "smooth" })
  }, [])

  const tabSections = useMemo(
    () => SECTIONS.map((s) => ({ id: s.id, label: s.label })),
    []
  )

  return (
    <div className="relative">
      {/* ─── Fixed 3D scene behind all content ──────────────── */}
      <div className="fixed inset-0 z-0">
        {isMobile ? (
          <LandscapeFallback />
        ) : (
          <Suspense fallback={<LandscapeFallback />}>
            <LandscapeScene progress={progress} reducedMotion={reducedMotion} />
          </Suspense>
        )}
        {/* Vignette for overlay readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-auth-bg/30 via-transparent to-auth-bg/85" />
      </div>

      {/* ─── Floating top-center section tabs ───────────────── */}
      <SectionTabs
        sections={tabSections}
        activeIdx={activeIdx}
        onSelect={scrollToSection}
      />

      {/* ─── Scroll sections ────────────────────────────────── */}
      <main className="relative z-10">
        {/* ── Section 1 — Hero ─────────────────────────────── */}
        <section
          id="hero"
          className="h-screen flex flex-col p-6 md:p-10 snap-start"
        >
          <header className="flex items-start justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-auth-text"
            >
              <span className="text-auth-gold text-xl">✦</span>
              <span className="font-display text-base font-semibold tracking-tight">
                Easy Scholarships
              </span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: sectionTransition.ease }}
              className="text-right max-w-xs"
            >
              <p className="text-[10px] text-auth-muted-deep uppercase tracking-[0.2em] mb-1">
                Premium scholarship platform
              </p>
              <p className="text-sm text-auth-text/90 leading-relaxed">
                Find every scholarship you qualify for.
                <br />
                Track every deadline. In one place.
              </p>
            </motion.div>
          </header>

          {/* Bottom-left scroll prompt — fades on first scroll */}
          <div
            className={`mt-auto transition-opacity duration-500 ${
              progress > 0.04 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="inline-flex items-center gap-3 text-auth-muted text-[11px] uppercase tracking-[0.22em]">
              <span>Scroll to open the chest</span>
              <span className="inline-block w-px h-8 bg-auth-gold/50 animate-pulse" />
            </div>
          </div>
        </section>

        {/* ── Section 2 — Reveal ───────────────────────────── */}
        <section
          id="reveal"
          className="h-screen flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={sectionVariants}
            transition={sectionTransition}
            className="max-w-4xl"
          >
            <p className="text-[10px] text-auth-muted-deep uppercase tracking-[0.22em] mb-4">
              02 — The reveal
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-auth-text-strong tracking-tight leading-[1.05]">
              Your opportunities,
              <br />
              organized.
            </h1>
            <p className="mt-6 text-base md:text-lg text-auth-muted max-w-lg mx-auto leading-relaxed">
              One chest. Every scholarship you qualify for. Every deadline.
              Every essay. Nothing slips through.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-7 py-3 rounded-xl shadow-lg shadow-auth-gold/20 hover:shadow-auth-gold/35 hover:scale-[1.02] transition-all"
              >
                Start finding scholarships
              </Link>
              <Link
                to="/login"
                className="auth-glass text-auth-text px-7 py-3 rounded-xl hover:bg-auth-glass-strong transition-colors"
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── Section 3 — Features ─────────────────────────── */}
        <section
          id="features"
          className="h-screen flex flex-col items-center justify-center px-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={sectionVariants}
            transition={sectionTransition}
            className="w-full flex flex-col items-center"
          >
            <p className="text-[10px] text-auth-muted-deep uppercase tracking-[0.22em] mb-4">
              03 — Inside the chest
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-auth-text-strong text-center mb-12 tracking-tight">
              Everything in one place.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl w-full">
              {[
                ["Smart matching", "Scholarships you actually qualify for."],
                ["Deadline tracker", "Never miss another opportunity."],
                ["Essay planning", "AI drafts in your voice."],
                ["Resume scanning", "Auto-fill from your background."],
                ["Saved opportunities", "Your shortlist, always synced."],
                ["Application progress", "Kanban tracker built in."],
              ].map(([title, desc], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: sectionTransition.ease,
                  }}
                  className="auth-glass rounded-2xl p-5 hover:bg-auth-glass-strong transition-colors"
                >
                  <h3 className="text-auth-text-strong text-sm font-semibold mb-1.5">
                    {title}
                  </h3>
                  <p className="text-auth-muted text-xs leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Section 4 — CTA ──────────────────────────────── */}
        <section
          id="cta"
          className="h-screen flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={sectionVariants}
            transition={sectionTransition}
          >
            <p className="text-[10px] text-auth-muted-deep uppercase tracking-[0.22em] mb-4">
              04 — Get started
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-auth-text-strong max-w-3xl leading-[1.1] tracking-tight">
              Ready to make scholarships
              <br />
              feel manageable?
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-7 py-3 rounded-xl shadow-lg shadow-auth-gold/20 hover:shadow-auth-gold/35 hover:scale-[1.02] transition-all"
              >
                Create account
              </Link>
              <Link
                to="/login"
                className="auth-glass text-auth-text px-7 py-3 rounded-xl hover:bg-auth-glass-strong transition-colors"
              >
                Sign in
              </Link>
            </div>
            <p className="mt-16 text-[10px] text-auth-muted-deep uppercase tracking-[0.22em]">
              © Easy Scholarships
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
