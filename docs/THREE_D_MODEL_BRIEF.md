# 3D Model Brief

Purpose: This document describes the generated 3D placeholder models and how to use or replace them.

## Files

| File | Description |
|---|---|
| `public/auth-assets/3d/scholarship-core.glb` | Smoked-glass sphere with muted gold inner core, orbiting cards, and orbit ring |
| `public/auth-assets/3d/scholarship-core-draco.glb` | Placeholder copy using the production expected filename. Not actually Draco compressed. |
| `public/auth-assets/3d/opportunity-capsule.glb` | Closed gold capsule concept for opportunity reveal animation |
| `public/auth-assets/3d/floating-scholarship-card.glb` | Floating abstract scholarship card with gold chip and bars |
| `public/auth-assets/3d/*.obj` | OBJ fallback exports for broad 3D tool compatibility |

## Intended Three.js behavior
- Lazy-load the 3D scene.
- Cap devicePixelRatio at 1.5.
- Pause motion when tab is hidden.
- Respect `prefers-reduced-motion`.
- Keep the form interactive while the scene loads.
- Use CSS placeholder until GLB is loaded.

## Replacement guidance
A final model should keep this same concept:
- One central glass/gold opportunity core.
- Two or three subtle orbiting scholarship cards.
- Muted gold accents, not bright yellow.
- No readable text inside the model.
- Under 1 MB preferred.
- Textures no larger than 512×512.

## Suggested names inside final GLB
- `smoked_glass_outer_core`
- `gold_opportunity_core`
- `thin_gold_orbit_ring`
- `floating_match_card_1`
- `floating_match_card_2`
- `floating_match_card_3`
