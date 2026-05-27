import { useMemo } from "react"
import * as THREE from "three"
import { fbm } from "./noise"

/**
 * Soft rolling-hills landscape that matches the reference vault images.
 * Uses fbm noise to displace plane vertices; flattens near the center
 * so the vault has a clean pedestal area to sit on.
 */
export function Terrain() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(120, 120, 128, 128)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i) // becomes -world-Z after rotation
      const distFromCenter = Math.sqrt(x * x + y * y)
      // Smooth flatten-to-zero near origin (radius ~5)
      const ringMask = Math.min(1, distFromCenter / 6)
      const flattenCenter = ringMask * ringMask // ease-in
      // Multi-octave hills, taller at the horizon
      const height = (fbm(x * 0.04, y * 0.04, 4) - 0.5) * 4.5 * flattenCenter
      pos.setZ(i, height)
    }
    geo.computeVertexNormals()
    return geo
  }, [])

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        color="#7a7f86"
        roughness={0.95}
        metalness={0.05}
      />
    </mesh>
  )
}
