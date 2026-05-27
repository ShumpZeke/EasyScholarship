/**
 * CSS-only placeholder shown while the 3D Canvas lazy-loads,
 * and also rendered on mobile in place of the live Canvas.
 * Uses the generated closed-vault reference image as the static hero.
 */
export function LandscapeFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#a8aeb6]">
      <img
        src="/landing-assets/images/generated/01_first_frame_closed_vault_simple.png"
        alt="Easy Scholarships vault on a foggy gray landscape"
        className="w-full h-full object-cover"
        draggable={false}
      />
      {/* Dark vignette so text overlays stay readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 pointer-events-none" />
    </div>
  )
}
