# Performance Checklist

## Video

- Compress the MP4 using H.264.
- Keep a WebM version if browser support is needed.
- Use `preload="auto"` for desktop.
- Use a poster image to prevent blank loading.
- Avoid playing audio unless intentional.
- Use a smaller mobile video if needed.

## Scroll scrubbing

- Use requestAnimationFrame.
- Smooth the target time with lerp.
- Do not set currentTime too aggressively on every scroll event.
- Cache DOM measurements.
- Avoid too many overlay effects on mobile.

## UI

- Use CSS transforms instead of layout changes.
- Animate opacity and transform only when possible.
- Keep heavy blur limited.
- Use `prefers-reduced-motion` fallback.

## Mobile

- Crop the video with `object-fit: cover`.
- Reduce particle overlays.
- Use shorter scroll distance.
- Keep CTA buttons large and easy to tap.
