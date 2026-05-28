# Developer Full Workflow

Use this workflow from start to finish.

## Phase 0 — Audit first
Before coding, inspect:
- package.json
- current routes
- current landing scene files
- current auth pages
- existing asset folders
- installed 3D libraries
- installed animation libraries
- Supabase/auth setup
- build scripts

Return a short audit before changing files.

## Phase 1 — Treasure chest concept migration
Replace all vault-centered language, component names where appropriate, and visual behavior with treasure-chest-centered design.

Target concept:
The user scrolls through a cinematic landscape toward a treasure chest. The chest opens and reveals gold, gems, scholarship cards, and valuable items.

## Phase 2 — GLB integration
Use the uploaded GLB:
`assets/models/treasure_chest_source.glb`

Copy into the app public folder and load it with React Three Fiber / Drei.

The model contains animations named:
- `Armature|A_Open`
- `Armature|A_Close`

Use these if they load correctly through `useAnimations`. If they do not, animate the lid manually by targeting the lid/top node if accessible.

## Phase 3 — Treasure contents
Inside the chest, add procedural or model-based contents:
- gold coins
- gem clusters
- crystals
- pearls
- scholarship cards
- glowing scrolls/documents
- soft rays or volumetric-looking planes
- sparkle particles

The contents should appear as the chest opens.

## Phase 4 — Scroll choreography
Create scroll sections:
1. Approach
2. Unlock
3. Open
4. Treasure reveal
5. Begin application journey

Camera should zoom into different parts of the chest and environment as the user scrolls.

## Phase 5 — Page transitions
Add animated transitions between:
- `/`
- `/login`
- `/signup`
- `/forgot-password`
- `/dashboard`

Do not hard-cut between pages. Use Framer Motion AnimatePresence or View Transitions API.

## Phase 6 — Auth pages in same world
Login/signup/forgot-password should feel like connected areas of the same 3D world.

## Phase 7 — Optimization
Optimize GLB and textures. Keep quality high but web-safe.

## Phase 8 — QA
Run build/lint if available. Test desktop, mobile, reduced motion, route transitions, and scroll.
