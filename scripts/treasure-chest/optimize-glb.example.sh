#!/usr/bin/env bash
set -e

INPUT="public/landing-assets/3d/treasure_chest_source.glb"
OUTPUT="public/landing-assets/3d/treasure_chest_optimized.glb"

npx gltf-transform inspect "$INPUT"
npx gltf-transform optimize "$INPUT" "$OUTPUT" --texture-compress=ktx2 --simplify --weld
