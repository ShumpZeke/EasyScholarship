import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface Props {
  position: [number, number, number]
  rotation: [number, number, number]
  /** 0 (vault closed, invisible) → 1 (vault open, fully visible) */
  reveal: number
  /** Stagger so each card appears at a slightly different scroll point */
  delay: number
}

/**
 * One translucent gold scholarship card that floats inside the vault.
 * Fades in as the vault opens. Delay staggers the reveal across cards.
 */
export function FloatingCard({ position, rotation, reveal, delay }: Props) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    const mat = meshRef.current.material as THREE.MeshStandardMaterial
    // Per-card normalized reveal (0 → 1) after delay
    const local = Math.max(0, Math.min(1, (reveal - delay) / (1 - delay)))
    mat.opacity = local * 0.9
    mat.emissiveIntensity = 0.4 + local * 0.6
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[0.58, 0.78]} />
      <meshStandardMaterial
        color="#f1d98a"
        emissive="#d8b45a"
        emissiveIntensity={0.4}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
        roughness={0.4}
        metalness={0.3}
      />
    </mesh>
  )
}
