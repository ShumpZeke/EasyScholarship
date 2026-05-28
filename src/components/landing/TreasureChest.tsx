import { useEffect, useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"
import { easeOutCubic } from "./noise"
import { ChestContents } from "./ChestContents"

interface Props {
  /** 0..1 page scroll — drives the open animation + inner glow */
  progress: number
  reducedMotion: boolean
}

/**
 * Sketchfab treasure chest GLB (CC-BY-4.0 — Multipainkiller Studio).
 * Attribution in /docs/treasure-chest/GLB_LICENSE_NOTICE.md.
 *
 * The model is auto-normalized on load: we measure its bounding box and
 * scale it to a known height, center it horizontally, and sit it on y=0.
 * This makes it render correctly no matter what units/origin the source
 * model used (FBX exports are often 100× off) — fixing the "chest invisible"
 * problem at the root.
 *
 * Lid opening: the GLB ships an "Armature|A_Open" clip animating the `top_01`
 * lid node. We scrub that clip's time directly from scroll progress. If the
 * clip can't bind, we fall back to manually rotating the `top_01` node.
 */
const MODEL_PATH = "/landing-assets/3d/treasure_chest.glb"
const TARGET_HEIGHT = 3.0
useGLTF.preload(MODEL_PATH)

export function TreasureChest({ progress, reducedMotion }: Props) {
  const groupRef = useRef<THREE.Group>(null!)
  const innerLightRef = useRef<THREE.PointLight>(null!)
  const lidRef = useRef<THREE.Object3D | null>(null)
  const lidBaseRotX = useRef(0)

  const gltf = useGLTF(MODEL_PATH)
  const { actions, mixer } = useAnimations(gltf.animations, groupRef)

  // Clone + auto-normalize (scale to TARGET_HEIGHT, center, sit on ground)
  const scene = useMemo(() => {
    const cloned = gltf.scene.clone(true)
    cloned.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(cloned)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const s = TARGET_HEIGHT / maxDim
    cloned.scale.setScalar(s)
    cloned.updateMatrixWorld(true)
    const box2 = new THREE.Box3().setFromObject(cloned)
    const center = box2.getCenter(new THREE.Vector3())
    cloned.position.set(-center.x, -box2.min.y, -center.z)

    cloned.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (mesh.isMesh) {
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
      // Cache the lid node for the manual-rotation fallback
      if (obj.name === "top_01") {
        lidRef.current = obj
        lidBaseRotX.current = obj.rotation.x
      }
    })
    return cloned
  }, [gltf.scene])

  // Set up the open clip as a paused, scrubbable timeline
  useEffect(() => {
    const open = actions["Armature|A_Open"]
    if (!open) return
    open.reset()
    open.clampWhenFinished = true
    open.loop = THREE.LoopOnce
    open.play()
    open.paused = true
  }, [actions])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // Gentle idle sway
    if (!reducedMotion && groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.02
    }

    // Open progress (lid starts moving at 30% scroll, fully open by 100%)
    const open = easeOutCubic(Math.max(0, Math.min(1, (progress - 0.3) / 0.7)))

    const openAction = actions["Armature|A_Open"]
    if (openAction) {
      // Primary: scrub the baked clip
      openAction.time = open * openAction.getClip().duration
      mixer.update(0)
    } else if (lidRef.current) {
      // Fallback: rotate the lid node manually (~110° open)
      lidRef.current.rotation.x = lidBaseRotX.current - open * (Math.PI * 0.6)
    }

    // Inner glow ramps with opening
    if (innerLightRef.current) {
      const glow = Math.max(0, (progress - 0.4) / 0.6)
      innerLightRef.current.intensity = glow * 9
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      <primitive object={scene} />

      {/* Warm gold glow inside the chest */}
      <pointLight
        ref={innerLightRef}
        position={[0, 0.9, 0]}
        color="#f1d98a"
        intensity={0}
        distance={4}
        decay={1.5}
      />

      {/* Treasure inside — coins + gems, revealed as the lid opens */}
      <group position={[0, 0.55, 0]}>
        <ChestContents progress={progress} reducedMotion={reducedMotion} />
      </group>
    </group>
  )
}
