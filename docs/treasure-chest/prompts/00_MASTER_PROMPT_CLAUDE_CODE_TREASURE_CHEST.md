# MASTER PROMPT FOR CLAUDE CODE — TREASURE CHEST VERSION

You are Claude Code acting as a senior frontend engineer, 3D/WebGL engineer, creative technologist, motion designer, environment artist, technical artist, UI designer, performance engineer, and QA lead.

You are continuing an existing Easy Scholarships interactive 3D website.

## Main instruction
Proceed using the full workflow provided in this ToolBox ZIP and complete the remaining work properly.

Do not stop at installing packages.
Do not only swap a model.
Do not leave route transitions as hard cuts.
Do not leave the old vault concept in the final experience.

## Updated concept
The experience is now about going to a treasure chest, not a vault.

The hero object must be a detailed treasure chest GLB.
When the user scrolls, the camera travels toward the treasure chest. The chest unlocks and opens. Inside, the user sees gold, coins, gems, crystals, scholarship cards, and valuable objects. This should feel rich, realistic, cinematic, exciting, and premium.

## Use included GLB
Use:
`assets/models/treasure_chest_source.glb`

Place it in the app public assets folder, for example:
`public/landing-assets/3d/treasure_chest_source.glb`

Load it with `useGLTF` from `@react-three/drei`.
Use `useAnimations` for the clips if possible.
The model inspection report shows animations:
- `Armature|A_Open`
- `Armature|A_Close`

## Visual direction
The old vault visuals are only timing and mood references. The final object must be a treasure chest.

Style:
- rich cinematic treasure reveal
- realistic wood and metal
- warm gold interior glow
- layered coins and gems
- floating scholarship cards
- premium dark landscape
- atmospheric fog
- particles and dust
- smooth camera motion
- exciting but not childish

Avoid:
- plain box model
- minimal empty scene
- flat SaaS landing page
- hard route cuts
- cheap cartoon treasure
- over-bright neon fantasy
- copied brand design

## Important pages
Build or update:
- `/`
- `/login`
- `/signup`
- `/forgot-password`
- `/dashboard`

## Major requirements
1. Replace the vault concept with the treasure chest concept.
2. Use the uploaded treasure chest GLB.
3. Add realistic treasure inside the chest.
4. Add scroll-driven camera choreography.
5. Add animated transitions between routes.
6. Make auth pages feel like part of the same cinematic world.
7. Maintain performance and mobile support.
8. Run QA and report the final status.

## First action
Before editing code, audit the project and report:
- framework
- package manager
- routes
- current 3D components
- current animation libraries
- current auth state
- asset folders
- what files need updates
- risks
- plan

Only then implement.

## Homepage scroll sequence
0% to 15% — Approach
- wide landscape
- treasure chest visible in distance
- low fog
- subtle gold glints around chest

15% to 35% — Discovery
- camera pushes closer
- chest details become visible
- metal bands reflect light
- small dust particles float

35% to 55% — Unlock
- chest vibrates subtly
- lock or latch glows
- gold light leaks from the seam
- small coin sounds could be implied visually with sparks

55% to 75% — Opening
- lid opens using GLB animation if possible
- warm gold light blooms
- fog and dust spill outward
- first coins and gems become visible

75% to 100% — Treasure reveal
- camera zooms into the open chest
- coins, gems, crystals, and scholarship cards are clearly visible
- CTA and feature text appear
- scene feels rich and exciting

## Treasure contents
Add inside the chest:
- piles of gold coins
- red, blue, green, purple gems
- crystal clusters
- pearls or bright small valuables
- scholarship cards / documents
- warm light planes
- sparkle particles
- subtle floating dust

Contents should use instancing when possible for performance.

## Route transitions
Use Framer Motion AnimatePresence or View Transitions API.
Routes should transition with:
- fade
- scale
- blur
- camera-move feeling
- shared background atmosphere
- no white flash
- no instant hard cut

Clicking sign in should feel like moving to another part of the same treasure landscape.
Clicking create account should feel like entering a premium application chamber.
Returning home should feel like moving back to the treasure chest.

## Auth pages
Auth pages must not be generic white cards.
Use:
- dark glass card
- gold highlights
- same background environment
- subtle particles
- premium inputs
- smooth entry motion

## Performance
- lazy-load heavy 3D only where needed
- cap DPR
- reduce effects on mobile
- use optimized GLB
- use KTX2 or WebP textures when possible
- support reduced motion

## Final deliverable
A working interactive Easy Scholarships website where the user travels toward a realistic treasure chest, opens it through scroll, sees rich treasure inside, and moves through pages with cinematic transitions.
