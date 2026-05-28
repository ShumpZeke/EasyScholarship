# Animation Plan

## Goal
Make the provided vault video feel like an interactive 3D object by binding scroll progress to the video timeline.

## Timeline map

| Scroll progress | Video state | UI state |
|---|---|---|
| 0.00 - 0.18 | vault closed | intro copy visible |
| 0.18 - 0.55 | approach / tension | subtle HUD and status text |
| 0.55 - 0.82 | vault opening | glow strengthens, UI fades down |
| 0.82 - 1.00 | vault fully open | sign up and login CTA appear centered |

## Interaction

- The video is fixed full-screen.
- The page height creates enough scroll room.
- JavaScript reads scroll progress.
- Scroll progress maps to `video.currentTime`.
- The UI layers fade in and out based on progress.
- Final CTA appears only near the open state.

## Click transition

When Sign Up or Login is clicked:

1. Freeze the video near the final open state.
2. Scale the whole vault scene down quickly.
3. Add blur and slight brightness drop.
4. Fade in the auth panel.
5. Keep the background softly visible behind the form.

## Motion feel

- intro: slow, premium, quiet
- approach: controlled tension
- reveal: warm, glowing, satisfying
- auth transition: fast and sharp
