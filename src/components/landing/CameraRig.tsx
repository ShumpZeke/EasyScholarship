import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { easeInOutCubic } from "./noise"

interface Props {
  /** 0..1 normalized page scroll */
  progress: number
  reducedMotion: boolean
}

/**
 * Multi-stage cinematic camera path tied to the four scroll sections.
 * Re-tuned for the treasure chest (lower & wider than the previous vault).
 *
 *   Section 0 (Approach / 0.00..0.25)   — wide establishing shot, chest in distance
 *   Section 1 (Discovery / 0.25..0.50)  — push in, chest details visible
 *   Section 2 (Unlock / 0.50..0.75)     — slight orbit right, tight on lock
 *   Section 3 (Reveal / 0.75..1.00)     — top-down peek into the open chest
 *
 * Between sections, position + lookAt smoothly lerp via easeInOutCubic.
 * Mouse parallax adds subtle live offset on top (disabled if reduced-motion).
 */

interface CameraKeyframe {
  pos: [number, number, number]
  look: [number, number, number]
}

const KEYFRAMES: CameraKeyframe[] = [
  // 0 — Approach: wide, pedestal visible, full landscape
  { pos: [0, 2.4, 9.0], look: [0, 0.4, 0] },
  // 1 — Discovery: pushed in, centered, chest fills mid-frame
  { pos: [0, 1.7, 5.2], look: [0, 0.5, 0] },
  // 2 — Unlock: orbit right + tight on the latch
  { pos: [1.6, 1.3, 3.6], look: [0, 0.55, 0] },
  // 3 — Reveal: angled top-down peek INTO the open chest
  { pos: [0, 2.0, 2.6], look: [0, 0.7, 0] },
  // Repeat last to safeguard floating-point at progress = 1.0
  { pos: [0, 2.0, 2.6], look: [0, 0.7, 0] },
]

const tmpPos = new THREE.Vector3()
const tmpLook = new THREE.Vector3()

export function CameraRig({ progress, reducedMotion }: Props) {
  const targetPos = useRef(new THREE.Vector3(...KEYFRAMES[0].pos))
  const targetLook = useRef(new THREE.Vector3(...KEYFRAMES[0].look))

  useFrame((state, delta) => {
    const { camera, mouse } = state

    const segments = KEYFRAMES.length - 1
    const scaled = Math.min(progress, 0.9999) * segments
    const segIdx = Math.floor(scaled)
    const local = scaled - segIdx
    const eased = easeInOutCubic(local)

    const a = KEYFRAMES[segIdx]
    const b = KEYFRAMES[segIdx + 1]

    tmpPos.set(
      THREE.MathUtils.lerp(a.pos[0], b.pos[0], eased),
      THREE.MathUtils.lerp(a.pos[1], b.pos[1], eased),
      THREE.MathUtils.lerp(a.pos[2], b.pos[2], eased)
    )
    tmpLook.set(
      THREE.MathUtils.lerp(a.look[0], b.look[0], eased),
      THREE.MathUtils.lerp(a.look[1], b.look[1], eased),
      THREE.MathUtils.lerp(a.look[2], b.look[2], eased)
    )

    if (!reducedMotion) {
      tmpPos.x += mouse.x * 0.35
      tmpPos.y += mouse.y * 0.18
    }

    targetPos.current.copy(tmpPos)
    targetLook.current.copy(tmpLook)

    camera.position.lerp(targetPos.current, Math.min(1, delta * 2.6))
    camera.lookAt(targetLook.current)
  })

  return null
}
