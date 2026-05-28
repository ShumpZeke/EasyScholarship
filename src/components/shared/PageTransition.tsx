import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe"

interface Props {
  children: ReactNode
  /**
   * cinematic = true  → opacity + blur + scale (rich; for auth/dashboard)
   * cinematic = false → opacity only (SAFE for pages with position:fixed
   *                     children, e.g. Landing's 3D canvas — a `filter` or
   *                     `transform` on an ancestor would break fixed
   *                     positioning, so Landing must use opacity-only)
   */
  cinematic?: boolean
}

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

/**
 * Wraps a routed page so it animates in/out via AnimatePresence.
 * Respects prefers-reduced-motion (drops to a quick opacity fade).
 */
export function PageTransition({ children, cinematic = true }: Props) {
  const reduced = useReducedMotionSafe()

  if (reduced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    )
  }

  if (!cinematic) {
    // Opacity-only — preserves position:fixed descendants
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.985 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.015 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
