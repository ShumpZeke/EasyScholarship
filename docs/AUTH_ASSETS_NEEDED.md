# Auth Assets Needed

Purpose: This document tells a developer or designer exactly where to place assets for the Easy Scholarships auth screens.

## Folder path

`/public/auth-assets/`

## Expected files

| Filename | Recommended size | Format | Use |
|---|---:|---|---|
| `logo-light.svg` | vector | SVG | Wordmark on dark auth background |
| `logo-dark.svg` | vector | SVG | Wordmark on light contexts |
| `logo-mark.svg` | vector | SVG | App mark and icon button |
| `student-hero.jpg` or `.webp` | 1920×1080 | JPG/WebP | Desktop visual stage background |
| `student-hero-mobile.webp` | 1080×1920 | WebP | Mobile hero crop |
| `campus-bg.jpg` | 1920×1080 | JPG/WebP | Optional background |
| `dashboard-preview.png` | 1200×760 | PNG/WebP | Glass dashboard preview behind auth stage |
| `resume-preview.png` | 1200×760 | PNG/WebP | Resume-scan preview card |
| `profile-1.jpg` to `profile-3.jpg` | 512×512 | JPG/WebP | Avatar placeholders |
| `gold-texture.png` | 1024×1024 | PNG | Gold material texture |
| `noise-texture.png` | 512×512 | PNG | Subtle noise tile |
| `grain-overlay.png` | 512×512 | PNG transparent | Film grain overlay |
| `gold-particle-overlay.png` | 1024×1024 | PNG transparent | Particle overlay |
| `auth-loop.webm` | 1920×1080 | WebM VP9 | Optional premium background loop |
| `auth-loop.mp4` | 1920×1080 | MP4 H.264 | Fallback video |
| `auth-loop-poster.jpg` | 1920×1080 | JPG | Poster for video fallback |
| `3d/scholarship-core.glb` | under 1 MB preferred | GLB | Lazy-loaded Three.js model |
| `3d/scholarship-core-draco.glb` | under 1 MB preferred | GLB | Compressed production model |

## How to replace placeholders
1. Keep the same filenames.
2. Replace files inside `/public/auth-assets/`.
3. Use sRGB color profile.
4. Compress large images before shipping.
5. Keep the 3D model under 1 MB if possible.

## Performance switches
- Disable 3D with a query string like `?no-3d`.
- Disable video by removing `auth-loop.webm` and `auth-loop.mp4`.
- Use `auth-loop-poster.jpg` or `student-hero.jpg` as the fallback.

## Graceful fallback behavior
- Missing video should fall back to poster image.
- Missing poster should fall back to generated CSS gradients and particle overlays.
- Missing 3D model should fall back to `ScholarshipCore3D.placeholder.tsx`.
- Missing logo should fall back to text wordmark: `Easy Scholarships`.

## Suggested CSS fallback classes
- `.auth-noise-layer` for `noise-texture.png`
- `.auth-grain-layer` for `grain-overlay.png`
- `.auth-particle-layer` for `gold-particle-overlay.png`
- `.auth-stage-fallback` for CSS-only visual stage

## Color profile
Use sRGB for all web images. Avoid HDR export for auth backgrounds because it can shift gold tones on standard displays.

See `prompts/IMAGE_AND_VIDEO_GENERATION_PROMPTS.md` for generation prompts.
