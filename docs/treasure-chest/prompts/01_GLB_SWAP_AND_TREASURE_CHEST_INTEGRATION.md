# GLB Swap and Treasure Chest Integration Prompt

Replace the procedural vault with the uploaded treasure chest GLB.

## Asset
Use:
`assets/models/treasure_chest_source.glb`

Copy to:
`public/landing-assets/3d/treasure_chest_source.glb`

## R3F implementation
Use:
- `useGLTF`
- `useAnimations`
- `<primitive object={scene} />` or cloned scene instances if needed
- shadow setup
- material tuning
- environment reflections

## Animation clips
The GLB inspection found:
- `Armature|A_Open`
- `Armature|A_Close`

Use the open animation based on scroll progress. If clip actions are difficult to scrub directly, use one of these approaches:

### Option A — clip scrubbing
Load the open clip, pause it, and set action time based on scroll progress.

### Option B — manual lid transform
Find the node named `top_01` or any lid/top node and rotate it open manually based on scroll progress.

### Option C — hybrid
Use the GLB for the static model and manually animate the lid while using procedural contents.

## Contents inside chest
Add procedural contents inside the chest:
- Instanced gold coins
- Instanced gems
- crystal clusters
- translucent scholarship cards
- warm emissive light
- dust particles
- sparkle particles

Use instanced meshes for repeated items.

## Important
Do not leave old component names visible to users. Internal component names can be migrated gradually, but UI text and concept must say treasure chest, not vault.
