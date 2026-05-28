import { Suspense, lazy } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe"
import { useIsMobile } from "@/hooks/useIsMobile"
import { LandscapeFallback } from "@/components/landing/LandscapeFallback"

const LandscapeScene = lazy(
  () => import("@/components/landing/LandscapeScene")
)

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function Landing() {
  const progress = useScrollProgress()
  const reducedMotion = useReducedMotionSafe()
  const isMobile = useIsMobile()

  return (
    <div className="relative">
      {/* ─── Fixed 3D scene behind content ──────────────────── */}
      <div className="fixed inset-0 z-0">
        {isMobile ? (
          <LandscapeFallback />
        ) : (
          <Suspense fallback={<LandscapeFallback />}>
            <LandscapeScene progress={progress} reducedMotion={reducedMotion} />
          </Suspense>
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-auth-bg/20 via-transparent to-auth-bg/80" />
      </div>

      {/* ─── Foreground content ─────────────────────────────── */}
      <main className="relative z-10">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col p-6 md:p-10">
          {/* Top bar */}
          <header className="flex items-start justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-auth-text">
              <span className="text-auth-gold text-xl">✦</span>
              <span className="font-display text-base font-semibold tracking-tight">
                Easy Scholarships
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm text-auth-text/90 hover:text-auth-text transition-colors px-3 py-2"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="text-sm bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-4 py-2 rounded-lg shadow shadow-auth-gold/20 hover:shadow-auth-gold/35 transition-all"
              >
                Get started
              </Link>
            </div>
          </header>

          {/* Hero headline + CTAs — bottom-left anchored, chest fills the right/center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="mt-auto max-w-xl"
          >
            <p className="text-[11px] text-auth-gold uppercase tracking-[0.22em] mb-4">
              Premium scholarship platform
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-auth-text-strong tracking-tight leading-[1.04]">
              Unlock every scholarship
              <br />
              you qualify for.
            </h1>
            <p className="mt-5 text-base md:text-lg text-auth-muted max-w-md leading-relaxed">
              Match, track, and win more money for college — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/signup"
                className="bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-auth-gold/25 hover:shadow-auth-gold/40 hover:scale-[1.02] transition-all text-center"
              >
                Start finding scholarships
              </Link>
              <Link
                to="/login"
                className="auth-glass text-auth-text px-8 py-3.5 rounded-xl hover:bg-auth-glass-strong transition-colors text-center"
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── Reveal ───────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-auth-text-strong tracking-tight leading-[1.06]">
              Your opportunities, organized.
            </h2>
            <p className="mt-5 text-base md:text-lg text-auth-muted max-w-lg mx-auto leading-relaxed">
              Every scholarship you qualify for. Every deadline. Every essay.
              Nothing slips through the cracks.
            </p>
          </motion.div>
        </section>

        {/* ── Features ─────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: EASE }}
            className="w-full flex flex-col items-center"
          >
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
                ["Application progress", "A built-in tracker for every app."],
              ].map(([title, desc], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                  className="auth-glass rounded-2xl p-5 hover:bg-auth-glass-strong transition-colors"
                >
                  <h3 className="text-auth-text-strong text-sm font-semibold mb-1.5">
                    {title}
                  </h3>
                  <p className="text-auth-muted text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-auth-text-strong max-w-3xl leading-[1.1] tracking-tight">
              Ready to make scholarships
              <br />
              feel manageable?
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-auth-gold/25 hover:shadow-auth-gold/40 hover:scale-[1.02] transition-all"
              >
                Create account
              </Link>
              <Link
                to="/login"
                className="auth-glass text-auth-text px-8 py-3.5 rounded-xl hover:bg-auth-glass-strong transition-colors"
              >
                Sign in
              </Link>
            </div>
            <p className="mt-16 text-[10px] text-auth-muted-deep uppercase tracking-[0.22em]">
              © Easy Scholarships · 3D chest by Multipainkiller Studio (CC-BY-4.0)
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
