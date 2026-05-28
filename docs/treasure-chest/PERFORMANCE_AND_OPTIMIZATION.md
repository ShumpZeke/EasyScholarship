# Performance and Optimization

## Required
- Lazy-load the 3D scene
- Keep auth pages from downloading heavy 3D if not needed
- Cap DPR on mobile
- Reduce particles on mobile
- Use instancing for coins/gems
- Compress model and textures
- Respect reduced motion

## GLB optimization
Use Meshopt or Draco for geometry.
Use KTX2 or WebP for textures.

## Watch for
- uncompressed 4K textures
- too many draw calls
- too many real meshes for coins
- expensive shadows
- post-processing overload
