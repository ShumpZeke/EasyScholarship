# MASTER PROMPT FOR CLAUDE CODE

You are Claude Code acting as a senior frontend engineer, creative technologist, 3D/WebGL designer, motion designer, UI designer, performance engineer, and QA lead.

You are building an original premium landing website for an app called Easy Scholarships.

## High-level goal
Create a cinematic 3D website experience with a wide landscape environment and a centered scholarship vault.

The hero should feel like:
- calm
- premium
- minimal
- interactive
- original
- landscape-first
- polished
- quiet luxury

The experience should now be simpler than the original mood reference.

## Primary visual references
Use these files as the main visual anchors:
- `assets/images/generated/01_first_frame_closed_vault_simple.png`
- `assets/images/generated/02_last_frame_open_vault_zoomed.png`

Use these as motion reference:
- `assets/video/vault_motion_reference.mp4`
- `assets/video_frames/`

## Copyright rules
Do not clone any brand that inspired the mood.
Do not copy logos.
Do not copy source code.
Do not copy exact wording.
Do not reproduce the exact layout pixel-for-pixel.
Build an original Easy Scholarships website.

## Core concept
A full-screen 3D landscape hero.
A centered black-and-gold scholarship vault sits on a round pedestal in a simple desaturated landscape.
As the user scrolls, the scene progresses from closed vault to glowing seams to rotating lock motion to opening vault to floating scholarship cards.

## Key style changes from earlier direction
Keep the environment simpler:
- smoother terrain
- fewer props
- less visual noise
- softer fog
- cleaner horizon
- less dramatic moonlit complexity
- more centered composition
- stronger negative space

## Core interaction
At page load:
- show the closed centered vault
- minimal top-left brand
- minimal top-right manifesto text or compact UI label block
- bottom-left scroll prompt
- CTA buttons

As user scrolls:
1. camera pushes forward slowly
2. gold seams brighten
3. lock/rings animate subtly
4. vault doors open
5. warm light and fog emerge
6. floating scholarship cards appear
7. feature copy transitions in

## Routes
Build:
- `/`
- `/login`
- `/signup`
- `/forgot-password`
- `/dashboard` only as minimal placeholder if missing

## Tech stack
Prefer:
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- @react-three/fiber
- @react-three/drei

Optional only if needed:
- GSAP ScrollTrigger
- Lenis
- Remotion

## First action
Before coding, audit the project.
Inspect:
- package.json
- src/
- public/
- route structure
- existing CSS
- existing auth
- Supabase setup
- existing assets
- existing 3D or animation libraries

Return:
- framework found
- package manager found
- styling system found
- routes found
- auth found
- 3D libraries found
- animation libraries found
- proposed files to create
- proposed files to update
- implementation phases
- risks
- questions

Do not start coding until after the audit response.

## Homepage structure
### Section 1 Hero
- full viewport scene
- centered closed vault
- small Easy Scholarships wordmark top-left
- understated meta text under it
- compact manifesto text at top-right
- bottom-left scroll prompt
- CTA buttons: Start finding scholarships / Sign in
- very low text density

### Section 2 Reveal
- on scroll the vault opens
- floating scholarship cards reveal
- heading: Your opportunities, organized.
- short supporting copy

### Section 3 Features
Show these as floating in-world panels or minimal anchored overlays:
- Smart scholarship matching
- Deadline tracking
- Essay planning
- Resume-based recommendations
- Saved opportunities
- Application progress

### Section 4 CTA
- Ready to make scholarships feel manageable?
- Create account
- Sign in

## 3D requirements
Use React Three Fiber.
Build these components or equivalent:
- LandscapeScene
- ScholarshipVault
n- Terrain
- FloatingScholarshipCards
- GoldParticles
- CameraRig
- LandscapeFallback

Use a procedural vault first if no external model is ready.

Vault design:
- matte black panels
- thin gold trim
- centered circular locking detail
- symmetric double doors
- warm internal glow
- few floating translucent scholarship cards

Environment:
- smooth desaturated terrain
- soft hills
- soft haze and fog
- neutral sky
- minimal noise

Lighting:
- subtle ambient
- soft skylight
- warm interior glow
- elegant reflections

## Performance
- cap DPR around 1.5
- lazy-load the 3D scene
- CSS fallback while loading
- pause heavy animation if tab hidden
- no huge textures
- no heavy physics
- reduced-motion support

## Accessibility
- semantic buttons and links
- visible focus rings
- form labels
- reduced motion support
- high contrast text

## Auth pages
Make login, signup, and forgot-password match the same world.
Use:
- dark premium form card
- soft glass or luxury card look
- same landscape world in background or side panel
- no generic plain white auth card

## QA
Run build and lint if available.
Check desktop and mobile.
Test no horizontal overflow.
Test reduced motion.
Test keyboard access.

## Deliverables
- working 3D landing page
- original design
- centered minimal scholarship vault hero
- scroll opening interaction
- matching auth pages
- docs explaining assets and future replacement
- no copied brand code or branding
