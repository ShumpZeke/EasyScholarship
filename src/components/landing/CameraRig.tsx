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
 *
 *   Section 0 (Hero / 0.00..0.25)    — wide establishing shot
 *   Section 1 (Reveal / 0.25..0.50)  — push in, centered
 *   Section 2 (Features / 0.50..0.75)— small orbit to the right + tighter framing
 *   Section 3 (CTA / 0.75..1.00)     — pulled in close, looking into the open vault
 *
 * Between sections, camera position + lookAt smoothly lerp.
 * Mouse parallax adds subtle live offset on top (disabled if reduced-motion).
 */

interface CameraKeyframe {
  pos: [number, number, number]
  look: [number, number, number]
}

const KEYFRAMES: CameraKeyframe[] = [
  // 0 — Hero: wide, pedestal visible, full landscape
  { pos: [0, 1.6, 9.0], look: [0, 1.0, 0] },
  // 1 — Reveal: pushed in, centered
  { pos: [0, 1.3, 5.8], look: [0, 1.0, 0] },
  // 2 — Features: slight orbit right + tight on lock face
  { pos: [1.4, 0.95, 4.0], look: [0, 0.95, 0] },
  // 3 — CTA: dead-on close, looking into the now-open interior
  { pos: [0, 1.15, 3.0], look: [0, 1.05, 0] },
  // Repeat last for safe interpolation past 1.0
  { pos: [0, 1.15, 3.0], look: [0, 1.05, 0] },
]

const tmpPos = new THREE.Vector3()
const tmpLook = new THREE.Vector3()

export function CameraRig({ progress, reducedMotion }: Props) {
  const targetPos = useRef(new THREE.Vector3(0, 1.6, 9.0))
  const targetLook = useRef(new THREE.Vector3(0, 1.0, 0))

  useFrame((state, delta) => {
    const { camera, mouse } = state

    // Find the keyframe segment we're in (4 segments across 0..1)
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

    // Mouse parallax — subtle live offset on top of the section target
    if (!reducedMotion) {
      tmpPos.x += mouse.x * 0.35
      tmpPos.y += mouse.y * 0.18
    }

    targetPos.current.copy(tmpPos)
    targetLook.current.copy(tmpLook)

    // Smoothly chase the target (delta-clamped for big frame gaps)
    camera.position.lerp(targetPos.current, Math.min(1, delta * 2.6))
    camera.lookAt(targetLook.current)
  })

  return null
}
