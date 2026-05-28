# Model Pipeline for Realistic Treasure Chest

## Best tools
- Blender for cleanup and refinement
- Meshy for first-pass model generation
- Tripo AI for model generation
- Rodin for higher-detail models if available
- Substance 3D Painter for realistic PBR materials
- Poly Haven HDRIs for lighting
- glTF/GLB for web delivery
- glTF Transform for optimization

## Runtime packages already discussed
- three-stdlib for loaders
- meshoptimizer for Meshopt decoding
- leva for material tuning
- @gltf-transform/cli for optimization

## Optimization goal
Keep the model detailed but web-friendly.

Target:
- ideally under 5 MB optimized for production
- textures compressed
- named nodes preserved
- animation clips preserved

## Gold/coin/gem strategy
Do not model 500 unique coins.
Use 3 to 6 coin/gem meshes and instance them.
This gives richness without killing performance.
