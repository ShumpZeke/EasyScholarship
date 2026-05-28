import { useEffect, useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"
import { easeOutCubic } from "./noise"
import { ChestContents } from "./ChestContents"

interface Props {
  /** 0..1 page scroll — drives the A_Open animation and lid glow */
  progress: number
  reducedMotion: boolean
}

/**
 * Sketchfab treasure chest GLB (CC-BY-4.0 — Multipainkiller Studio).
 * See /docs/treasure-chest/GLB_LICENSE_NOTICE.md for attribution.
 *
 * The GLB ships with two animations:
 *   - "Armature|A_Open"  — lid opens (3 channels: top_01 scale+rotation, Armature rotation)
 *   - "Armature|A_Close" — reverse
 *
 * We grab the Open clip, pause it, and SCRUB its time directly from scroll
 * progress. This gives us frame-perfect "scroll to open" control instead of
 * triggering the animation as a one-shot.
 */
const MODEL_PATH = "/landing-assets/3d/treasure_chest.glb"
useGLTF.preload(MODEL_PATH)

export function TreasureChest({ progress, reducedMotion }: Props) {
  const groupRef = useRef<THREE.Group>(null!)
  const innerLightRef = useRef<THREE.PointLight>(null!)

  const gltf = useGLTF(MODEL_PATH)
  const { actions, mixer } = useAnimations(gltf.animations, groupRef)

  // Clone the scene once so multiple renders don't fight over the same tree.
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene])

  // Enable shadows + tweak material warmth on every mesh
  useMemo(() => {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (mesh.isMesh) {
        mesh.castShadow = true
        mesh.receiveShadow = true
        const mat = mesh.material as THREE.MeshStandardMaterial
        if (mat && "metalness" in mat) {
          // Bring the metal bands forward a touch
          if (mesh.name.toLowerCase().includes("reinforcment")) {
            mat.metalness = Math.min(1, (mat.metalness ?? 0.8) + 0.05)
            mat.roughness = Math.max(0, (mat.roughness ?? 0.4) - 0.05)
          }
        }
      }
    })
  }, [scene])

  // Set up the Open clip as a scrubbable timeline
  useEffect(() => {
    const openAction = actions["Armature|A_Open"]
    if (!openAction) return
    openAction.reset()
    openAction.clampWhenFinished = true
    openAction.loop = THREE.LoopOnce
    openAction.timeScale = 1
    openAction.play()
    openAction.paused = true
  }, [actions])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // Continuous subtle sway (skipped if reduced-motion)
    if (!reducedMotion && groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.22) * 0.025
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.012
    }

    // Scrub the open animation
    const openAction = actions["Armature|A_Open"]
    if (openAction) {
      // Doors only start opening at 35% scroll, fully open by 100%
      const eased = easeOutCubic(Math.max(0, Math.min(1, (progress - 0.35) / 0.65)))
      const duration = openAction.getClip().duration
      openAction.time = eased * duration
      // We must update the mixer manually because the action is paused
      mixer.update(0)
    }

    // Inner glow ramps as lid opens
    if (innerLightRef.current) {
      const open = Math.max(0, (progress - 0.45) / 0.55)
      innerLightRef.current.intensity = open * 8.5
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
      <primitive object={scene} />

      {/* Warm gold glow inside the chest, intensity grows with progress */}
      <pointLight
        ref={innerLightRef}
        position={[0, 0.6, 0]}
        color="#f1d98a"
        intensity={0}
        distance={4}
        decay={1.6}
      />

      {/* Treasure — only visible/animated when chest is opening */}
      <ChestContents progress={progress} reducedMotion={reducedMotion} />
    </group>
  )
}
