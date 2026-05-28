# Claude Code Master Prompt: Scroll-Scrubbed Vault Landing Page

You are Claude Code. Build the project, do not only describe it.

## Core direction
Redo the whole design around the uploaded vault video. Use the video as the main background and make the scroll control the video frame-by-frame. The goal is to make the video feel like a real interactive 3D model even though it is a video background.

The page should feel cinematic, premium, futuristic, and high-detail. Do not make it minimal or basic. The final state must end with the vault open in the center. In the middle of the open vault, place the sign up and login call-to-action.

After the user clicks the main sign up or login action, trigger a fast zoom-out / camera-pull transition, then move into the actual sign up and login page where the user can enter their information.

## Assets to use
Use these provided assets from the ToolBox:

- `assets/video/vault-scroll-background.mp4`
- `assets/video/poster-start.png`
- `assets/video/poster-end.png`
- `assets/reference-images/vault-open-final-reference.png`
- `assets/reference-images/vault-closed-reference.png`
- `assets/extracted-frames/`
- `assets/contact-sheets/vault-video-frame-contact-sheet.jpg`

The font is Pairing. The user provided it separately. Do not replace it with a random font unless the font file is missing. If missing, use `Space Grotesk`, `Sora`, or `Inter` as temporary fallbacks. The final design should still be built so Pairing can be dropped in later.

## Main build requirement
Create a smooth scroll-driven landing page using a video scrubbing technique:

1. The video stays fixed behind the content.
2. Page scroll progress controls `video.currentTime`.
3. The video should not simply autoplay.
4. The video timeline should map to scroll position.
5. Use requestAnimationFrame and a smoothed progress value so it does not feel jumpy.
6. At the final scroll stage, the vault should be open and centered.
7. Sign up and login buttons appear inside or in front of the open vault glow.
8. Clicking sign up or login launches a fast zoom-out transition.
9. After the transition, show the auth page/form.

## Visual direction
Use the reference images for the visual target:

- dark metallic vault
- soft gray desert or moon-like landscape
- gold glowing interior
- premium cinematic lighting
- realistic atmosphere
- floating glowing cards or panels
- centered composition
- wide landscape feel
- high contrast between the gray environment and warm gold vault glow

Do not use a bright colorful SaaS landing page style. Keep it cinematic, dark, premium, and futuristic.

## Page structure
Build this as a landing experience with these stages:

### Stage 1: Closed vault intro
- The video begins with the vault closed.
- Show small premium intro text.
- Keep text minimal so the visual stays important.
- Example copy:
  - `Unlock what is hidden.`
  - `A cinematic gateway to your private workspace.`

### Stage 2: Approach
- As the user scrolls, the video progresses.
- Add subtle overlay text, HUD marks, light particles, and motion depth.
- Do not cover the vault.

### Stage 3: Opening sequence
- The vault opens as the scroll reaches the final portion.
- The gold glow becomes stronger.
- Floating cards and energy should feel like the reward moment.

### Stage 4: Auth call-to-action
- Put `Sign Up` and `Login` in the middle area when the vault is open.
- The buttons should appear as premium glass/gold UI.
- Do not place them as a boring navbar.
- Put them inside the reveal moment.

### Stage 5: Fast zoom-out transition
- When the user clicks Sign Up or Login, apply a fast zoom-out transition.
- The vault scene should scale down and blur slightly.
- Then the auth form page fades/slides in.
- The transition should feel like moving through the vault into the next screen.

## Technical stack
Use a practical modern stack:

- Next.js
- React
- TypeScript
- Framer Motion for auth transition and UI animation
- Lenis or CSS smooth scrolling if needed
- CSS variables for theme
- Canvas/video scrubbing logic for scroll mapping

Do not use Three.js unless you are adding extra foreground particles or depth layers. The video is the main hero asset.

## Font implementation
Use Pairing as the primary display font. Add this CSS pattern:

```css
@font-face {
  font-family: "Pairing";
  src: url("/fonts/Pairing-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

If the font file is not in the project yet, create a placeholder `fonts` folder and a README telling the developer exactly where to place it.

## Required files to produce
Create a real project structure with these kinds of files:

- `package.json`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/ScrollVaultIntro.tsx`
- `src/components/AuthPanel.tsx`
- `src/lib/useVideoScrollScrub.ts`
- `public/assets/video/vault-scroll-background.mp4`
- `public/assets/reference/`
- `README.md`

Use the starter code in this ToolBox if helpful, but improve it if needed.

## Scroll mapping details
The video is 8 seconds long at 24 FPS. Map scroll progress like this:

- Scroll 0.00 to 0.18: closed vault intro
- Scroll 0.18 to 0.55: approach and tension build
- Scroll 0.55 to 0.82: vault opening and glow increase
- Scroll 0.82 to 1.00: final open state with auth CTA visible

Use this logic:

```ts
const targetTime = scrollProgress * video.duration;
video.currentTime = lerp(video.currentTime, targetTime, 0.12);
```

Use requestAnimationFrame for smooth updates.

## UX requirements
- The scroll should feel controlled, not laggy.
- The video should preload enough to scrub correctly.
- Add a poster image so the page does not flash blank.
- Hide the browser default video controls.
- Use accessible buttons and form labels.
- Add reduced-motion fallback.
- On mobile, simplify the effects and keep the video centered/cropped properly.

## Auth page requirements
After the zoom-out transition, show a polished auth interface with:

- Sign up form
- Login form
- toggle between sign up and login
- name field for sign up
- email field
- password field
- continue button
- small legal text
- option to go back to the vault intro

This can be front-end only. Add clear TODO comments where backend auth should be connected later.

## Quality bar
Do not deliver a plain template. The final page should feel like a premium cinematic landing page using the video as the core hero animation.

Prioritize:

- scroll-scrub video precision
- premium typography
- clean layout
- cinematic overlays
- strong final reveal
- smooth auth transition
- practical code that can be continued easily

## Final answer format
When finished, summarize:

1. What files were created
2. How to run the project
3. Where to replace assets
4. Where the scroll-video logic lives
5. What still needs to be connected for production
