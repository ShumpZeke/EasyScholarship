/**
 * Persistent atmosphere that stays mounted across ALL route changes.
 *
 * Mounted once at the App level (outside AnimatePresence), so navigating
 * between pages never resets the background — only the foreground content
 * transitions. This is what makes the whole site feel like one continuous
 * treasure world instead of separate pages.
 *
 * Pure CSS (gradients + tiled texture overlays) = effectively 0 runtime cost.
 * On the Landing route, the heavy 3D <LandscapeScene> renders ON TOP of this
 * (at a higher z-index); on auth routes, this is the whole backdrop.
 */
export function CinematicBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-auth-bg pointer-events-none"
    >
      {/* Warm gold halo from the top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-5%,rgba(216,180,90,0.10),transparent_60%)]" />
      {/* Deep warm glow rising from the bottom (the "chest light") */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_108%,rgba(155,118,46,0.10),transparent_55%)]" />
      {/* Subtle vertical depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-auth-bg-deep/40 via-transparent to-auth-bg-deep/60" />
      {/* Drifting gold particles (transparent PNG) */}
      <div className="auth-particle-layer absolute inset-0" />
      {/* Film grain for warmth */}
      <div className="auth-grain-layer absolute inset-0" />
    </div>
  )
}
