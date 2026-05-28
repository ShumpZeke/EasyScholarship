import { useEffect, useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface Props {
  /** 0..1 page scroll — drives reveal opacity */
  progress: number
  reducedMotion: boolean
}

/**
 * Rich treasure inside the chest — instanced gold coins + two pools of
 * colored gems (amber + ruby). Materials are PBR so they catch the
 * Environment HDRI reflections set up on the parent Canvas.
 *
 * Performance: 60 coins + 24 gems = 84 instances drawn in 3 draw calls total,
 * vs. ~84 individual meshes. Roughly 28× cheaper.
 *
 * Reveal: opacity ramps 0 → 1 between progress 0.55 and 1.0
 * (chest is about halfway open by then).
 */
const COIN_COUNT = 60
const GEM_AMBER_COUNT = 12
const GEM_RUBY_COUNT = 12

export function ChestContents({ progress, reducedMotion }: Props) {
  const coinsRef = useRef<THREE.InstancedMesh>(null!)
  const amberRef = useRef<THREE.InstancedMesh>(null!)
  const rubyRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Stable randomized positions/rotations (computed once)
  const coins = useMemo(
    () =>
      Array.from({ length: COIN_COUNT }, () => ({
        x: (Math.random() - 0.5) * 0.85,
        y: 0.06 + Math.random() * 0.18,
        z: (Math.random() - 0.5) * 0.55,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        scale: 0.045 + Math.random() * 0.02,
        bobPhase: Math.random() * Math.PI * 2,
      })),
    []
  )

  const amberGems = useMemo(
    () =>
      Array.from({ length: GEM_AMBER_COUNT }, () => ({
        x: (Math.random() - 0.5) * 0.7,
        y: 0.12 + Math.random() * 0.18,
        z: (Math.random() - 0.5) * 0.45,
        scale: 0.028 + Math.random() * 0.024,
        spin: 0.3 + Math.random() * 0.7,
      })),
    []
  )

  const rubyGems = useMemo(
    () =>
      Array.from({ length: GEM_RUBY_COUNT }, () => ({
        x: (Math.random() - 0.5) * 0.7,
        y: 0.12 + Math.random() * 0.18,
        z: (Math.random() - 0.5) * 0.45,
        scale: 0.028 + Math.random() * 0.024,
        spin: 0.3 + Math.random() * 0.7,
      })),
    []
  )

  // Initial matrix population so the items aren't all at origin on first frame
  useEffect(() => {
    for (let i = 0; i < COIN_COUNT; i++) {
      const c = coins[i]
      dummy.position.set(c.x, c.y, c.z)
      dummy.rotation.set(c.rotX, c.rotY, c.rotZ)
      dummy.scale.setScalar(0)
      dummy.updateMatrix()
      coinsRef.current.setMatrixAt(i, dummy.matrix)
    }
    coinsRef.current.instanceMatrix.needsUpdate = true
  }, [coins, dummy])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // Reveal ramps 0 → 1 between 0.55 and 1.0 scroll
    const reveal = Math.max(0, Math.min(1, (progress - 0.55) / 0.45))

    // Material opacity (single shared material per instanced mesh)
    const coinMat = coinsRef.current.material as THREE.MeshStandardMaterial
    coinMat.opacity = reveal
    coinMat.transparent = reveal < 1

    const amberMat = amberRef.current.material as THREE.MeshStandardMaterial
    amberMat.opacity = reveal
    amberMat.transparent = reveal < 1

    const rubyMat = rubyRef.current.material as THREE.MeshStandardMaterial
    rubyMat.opacity = reveal
    rubyMat.transparent = reveal < 1

    // Coins — gentle bob (per-instance phase)
    for (let i = 0; i < COIN_COUNT; i++) {
      const c = coins[i]
      const bob = reducedMotion ? 0 : Math.sin(t * 1.4 + c.bobPhase) * 0.006 * reveal
      dummy.position.set(c.x, c.y + bob, c.z)
      dummy.rotation.set(c.rotX, c.rotY + (reducedMotion ? 0 : t * 0.15), c.rotZ)
      dummy.scale.setScalar(c.scale * reveal)
      dummy.updateMatrix()
      coinsRef.current.setMatrixAt(i, dummy.matrix)
    }
    coinsRef.current.instanceMatrix.needsUpdate = true

    // Amber gems — slow spin on Y + tumble on X
    for (let i = 0; i < GEM_AMBER_COUNT; i++) {
      const g = amberGems[i]
      const r = reducedMotion ? 0 : t * g.spin
      dummy.position.set(g.x, g.y, g.z)
      dummy.rotation.set(r * 0.5, r, r * 0.3)
      dummy.scale.setScalar(g.scale * reveal)
      dummy.updateMatrix()
      amberRef.current.setMatrixAt(i, dummy.matrix)
    }
    amberRef.current.instanceMatrix.needsUpdate = true

    // Ruby gems
    for (let i = 0; i < GEM_RUBY_COUNT; i++) {
      const g = rubyGems[i]
      const r = reducedMotion ? 0 : t * g.spin
      dummy.position.set(g.x, g.y, g.z)
      dummy.rotation.set(r * 0.5, -r, r * 0.3)
      dummy.scale.setScalar(g.scale * reveal)
      dummy.updateMatrix()
      rubyRef.current.setMatrixAt(i, dummy.matrix)
    }
    rubyRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <group position={[0, 0.25, 0]}>
      {/* Gold coins — thin cylinders, brushed gold material */}
      <instancedMesh
        ref={coinsRef}
        args={[undefined, undefined, COIN_COUNT]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[1, 1, 0.16, 18]} />
        <meshStandardMaterial
          color="#e6c168"
          emissive="#7a5520"
          emissiveIntensity={0.25}
          metalness={1}
          roughness={0.22}
          transparent
        />
      </instancedMesh>

      {/* Amber gems — octahedron */}
      <instancedMesh
        ref={amberRef}
        args={[undefined, undefined, GEM_AMBER_COUNT]}
        castShadow
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.55}
          metalness={0.35}
          roughness={0.08}
          transparent
        />
      </instancedMesh>

      {/* Ruby gems — same octahedron */}
      <instancedMesh
        ref={rubyRef}
        args={[undefined, undefined, GEM_RUBY_COUNT]}
        castShadow
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.5}
          metalness={0.35}
          roughness={0.08}
          transparent
        />
      </instancedMesh>
    </group>
  )
}
