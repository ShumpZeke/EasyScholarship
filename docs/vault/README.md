# Easy Scholarships Vault Pack

This pack is meant for Claude Code.

Goal:
Build an original premium 3D landing page for Easy Scholarships with a centered scholarship vault, wide landscape composition, simple UI overlays, and scroll-driven interaction where the vault opens as the user scrolls.

Important:
- Use the included Igloo-inspired screenshot only as mood inspiration if you already have it in your working context.
- Do not clone Igloo.
- Do not copy their code, logo, wording, or exact layout.
- Use the included reference video and images as style and motion guidance for an original implementation.

## Included

- `assets/images/generated/01_first_frame_closed_vault_simple.png`
  - Main first-frame reference.
  - Minimal, centered, closed black-and-gold vault in a calm landscape.

- `assets/images/generated/02_last_frame_open_vault_zoomed.png`
  - Main last-frame reference.
  - Zoomed-in open vault with warm glow and floating scholarship cards.

- `assets/images/alternates/*`
  - Alternate atmosphere options.

- `assets/video/vault_motion_reference.mp4`
  - User-provided video reference.

- `assets/video_frames/*`
  - Extracted reference frames from the video.

- `prompts/*`
  - Claude Code master prompt, hyper-detailed prompt, Remotion prompt, image prompts, and motion prompts.

- `docs/*`
  - Research notes, implementation ideas, plugin ideas, and asset workflow notes.

## Recommended Claude Code workflow

1. Read `prompts/MASTER_PROMPT_CLAUDE_CODE.md` first.
2. Review `docs/RESEARCH_AND_STACK.md`.
3. Use the two main reference images as the style anchors.
4. Use the included motion reference video to shape timing and camera behavior.
5. Implement the procedural 3D version first.
6. Add optional Remotion teaser video only after the site hero works.

## Main visual direction

- More simple than dramatic.
- Centered object.
- Wide landscape.
- Minimal overlays.
- Calm luxury.
- Graphite, black, soft gray, muted gold.
- Scroll opens the vault.
- Interior glow reveals floating scholarship cards.

## Build target

- React + TypeScript + Vite
- Tailwind CSS
- React Three Fiber
- Drei
- Framer Motion
- Optional GSAP ScrollTrigger if scroll logic needs stronger timeline control
- Optional Remotion for a teaser video or animation mock
