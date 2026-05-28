$InputModel = "public/landing-assets/3d/treasure_chest_source.glb"
$OutputModel = "public/landing-assets/3d/treasure_chest_optimized.glb"

npx gltf-transform inspect $InputModel
npx gltf-transform optimize $InputModel $OutputModel --texture-compress=ktx2 --simplify --weld
