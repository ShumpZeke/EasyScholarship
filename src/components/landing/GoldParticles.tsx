import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface Props {
  count?: number
  /** 0..1 page scroll — drives extra emission near the open-door threshold */
  progress: number
  reducedMotion: boolean
}

/**
 * Slow-drifting gold particles + a synchronized "burst" when the vault opens.
 *
 * Two particle groups share one InstancedMesh:
 *   - ambient (count * 0.7) — always drifting around the landscape
 *   - burst   (count * 0.3) — bound near the vault, scale & spread driven by
 *                              scroll progress (visible only after ~0.35)
 */
export function GoldParticles({ count = 80, progress, reducedMotion }: Props) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const ambientCount = Math.floor(count * 0.7)

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const isBurst = i >= ambientCount
      return {
        isBurst,
        x: isBurst
          ? (Math.random() - 0.5) * 0.6
          : (Math.random() - 0.5) * 16,
        baseY: isBurst
          ? 0.5 + (Math.random() - 0.5) * 0.6
          : Math.random() * 5 - 0.5,
        z: isBurst ? Math.random() * 0.8 - 0.2 : (Math.random() - 0.5) * 8 + 1,
        speed: 0.05 + Math.random() * 0.18,
        offset: Math.random() * Math.PI * 2,
        scale: isBurst ? 0.018 + Math.random() * 0.025 : 0.01 + Math.random() * 0.024,
      }
    })
  }, [count, ambientCount])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // burstFactor: 0 below 0.35, ramps to 1 by 0.75
    const burstFactor = Math.max(0, Math.min(1, (progress - 0.35) / 0.4))

    for (let i = 0; i < count; i++) {
      const p = particles[i]

      if (p.isBurst) {
        // Burst particles spread outward from the vault center as it opens
        const spread = 1.5 + burstFactor * 3
        const angle = p.offset + (reducedMotion ? 0 : t * 0.3)
        const r = burstFactor * spread
        const x = p.x + Math.cos(angle) * r
        const y = p.baseY + 1 + Math.sin(angle * 1.3) * 0.5 + burstFactor * 0.6
        const z = p.z + Math.sin(angle) * r * 0.4
        dummy.position.set(x, y, z)
        dummy.scale.setScalar(p.scale * (0.3 + burstFactor * 0.7))
      } else {
        // Ambient drifting particles
        const y = p.baseY + (reducedMotion ? 0 : ((t * p.speed) % 6) - 2)
        const xOff = reducedMotion ? 0 : Math.sin(t * 0.4 + p.offset) * 0.12
        dummy.position.set(p.x + xOff, y, p.z)
        dummy.scale.setScalar(p.scale)
      }
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#f1d98a" transparent opacity={0.55} />
    </instancedMesh>
  )
}
