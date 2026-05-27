# ASSET NOTES

## Main files to use first
- `assets/images/generated/01_first_frame_closed_vault_simple.png`
- `assets/images/generated/02_last_frame_open_vault_zoomed.png`
- `assets/video/vault_motion_reference.mp4`

## Best usage
- Use the first frame image as hero look-development anchor.
- Use the last frame image as scroll-end anchor.
- Use the video reference to match timing and movement.
- Use the extracted frames to estimate intermediate motion states.

## Suggested future generated assets
- cleaner lock close-up
- a 4-frame keyframe set with exact matching composition
- transparent particle overlays
- optional grayscale terrain texture
- optional vault-normal-map or metallic textures

## If building a procedural vault
Start with:
- a box geometry shell
- beveled edges
- emissive gold trim material
- inner plane for glow
- 3 to 5 translucent card planes inside

## If replacing with a true GLB later
Recommended limits:
- under 1MB if possible
- baked materials
- few meshes
- simple animation clips only if absolutely needed
