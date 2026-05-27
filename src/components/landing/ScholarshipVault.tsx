import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, Float } from "@react-three/drei"
import * as THREE from "three"
import { FloatingCard } from "./FloatingCard"
import { easeOutCubic } from "./noise"

interface Props {
  /** 0 = closed, 1 = fully open */
  progress: number
  reducedMotion: boolean
}

/**
 * Procedural Easy Scholarships vault.
 *
 * Animation choreography (driven by scroll progress):
 *   0.00..0.10  — closed, calm, lock pulse only
 *   0.10..0.30  — pre-open VIBRATION (subtle Z jitter on doors + lock spins up)
 *   0.30..0.70  — doors swing open with eased rotation, trim/inner glow ramp
 *   0.70..1.00  — cards revealed inside, gentle hover settling
 */
export function ScholarshipVault({ progress, reducedMotion }: Props) {
  const vaultRef = useRef<THREE.Group>(null!)
  const leftDoorRef = useRef<THREE.Group>(null!)
  const rightDoorRef = useRef<THREE.Group>(null!)
  const lockRef = useRef<THREE.Mesh>(null!)
  const lockDiscRef = useRef<THREE.Mesh>(null!)
  const trimRef = useRef<THREE.Mesh>(null!)
  const innerLightRef = useRef<THREE.PointLight>(null!)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    // ───────────── continuous idle motions ─────────────
    if (!reducedMotion && vaultRef.current) {
      vaultRef.current.rotation.y = Math.sin(t * 0.22) * 0.035
      vaultRef.current.position.y = 1 + Math.sin(t * 0.45) * 0.022
    }

    // ───────────── lock pulse + ramp ─────────────
    const pulse = reducedMotion ? 0.45 : 0.45 + Math.sin(t * 1.6) * 0.2
    const lockMat = lockRef.current.material as THREE.MeshStandardMaterial
    lockMat.emissiveIntensity = pulse + progress * 1.5

    // Lock disc rotates as we approach the open threshold (like a combination dial)
    if (lockDiscRef.current && !reducedMotion) {
      const dialBoost = Math.max(0, Math.min(1, (progress - 0.1) / 0.4))
      lockDiscRef.current.rotation.z = t * 0.6 * dialBoost + progress * Math.PI * 2
    }

    // ───────────── trim glow ─────────────
    const trimMat = trimRef.current.material as THREE.MeshStandardMaterial
    trimMat.emissiveIntensity = 0.18 + progress * 1.2

    // ───────────── pre-open VIBRATION ─────────────
    // Builds 0.10..0.30, peaks at 0.20, gone by 0.30
    let vibrate = 0
    if (progress > 0.1 && progress < 0.3 && !reducedMotion) {
      const peakDist = Math.abs(progress - 0.2) / 0.1 // 0 at peak, 1 at edges
      const envelope = Math.max(0, 1 - peakDist)
      vibrate = Math.sin(t * 38) * 0.006 * envelope
    }

    // ───────────── door swing ─────────────
    // Effective open progress (only after 0.30 to give vibration time)
    const openInput = Math.max(0, (progress - 0.3) / 0.7)
    const open = easeOutCubic(openInput)
    leftDoorRef.current.rotation.y = -open * (Math.PI / 2.2)
    rightDoorRef.current.rotation.y = open * (Math.PI / 2.2)
    leftDoorRef.current.position.z = 1.1 + vibrate
    rightDoorRef.current.position.z = 1.1 - vibrate

    // ───────────── inner glow ─────────────
    innerLightRef.current.intensity = open * 7.2
  })

  return (
    <group>
      {/* ── Pedestal (graphite + thin gold ring) ────────────── */}
      <mesh position={[0, -0.7, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[2.2, 2.5, 0.45, 64]} />
        <meshStandardMaterial color="#16161a" metalness={0.75} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.47, 0]}>
        <cylinderGeometry args={[2.21, 2.21, 0.04, 64]} />
        <meshStandardMaterial
          color="#9b762e"
          metalness={0.95}
          roughness={0.35}
          emissive="#9b762e"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* ── Vault body (idle sway parent) ───────────────────── */}
      <group ref={vaultRef} position={[0, 1, 0]}>
        {/* Main body — matte graphite */}
        <RoundedBox
          args={[2.6, 2.6, 2.2]}
          radius={0.08}
          smoothness={4}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#0a0a0a" metalness={0.45} roughness={0.5} />
        </RoundedBox>

        {/* Gold trim ring around the front face */}
        <mesh ref={trimRef} position={[0, 0, 1.1]}>
          <torusGeometry args={[1.35, 0.022, 16, 100]} />
          <meshStandardMaterial
            color="#d8b45a"
            emissive="#d8b45a"
            emissiveIntensity={0.18}
            metalness={0.95}
            roughness={0.18}
          />
        </mesh>

        {/* ── Left door ─────────────────────────────────────── */}
        <group ref={leftDoorRef} position={[-1.27, 0, 1.1]}>
          <mesh position={[0.625, 0, 0]} castShadow>
            <boxGeometry args={[1.25, 2.5, 0.06]} />
            <meshStandardMaterial color="#080808" metalness={0.55} roughness={0.45} />
          </mesh>
          {/* Thin gold edge stripe on the door seam side */}
          <mesh position={[1.245, 0, 0.04]}>
            <boxGeometry args={[0.012, 2.45, 0.05]} />
            <meshStandardMaterial
              color="#d8b45a"
              emissive="#d8b45a"
              emissiveIntensity={0.3}
              metalness={1}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* ── Right door ────────────────────────────────────── */}
        <group ref={rightDoorRef} position={[1.27, 0, 1.1]}>
          <mesh position={[-0.625, 0, 0]} castShadow>
            <boxGeometry args={[1.25, 2.5, 0.06]} />
            <meshStandardMaterial color="#080808" metalness={0.55} roughness={0.45} />
          </mesh>
          <mesh position={[-1.245, 0, 0.04]}>
            <boxGeometry args={[0.012, 2.45, 0.05]} />
            <meshStandardMaterial
              color="#d8b45a"
              emissive="#d8b45a"
              emissiveIntensity={0.3}
              metalness={1}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* ── Lock face (gold ring + spinning dial + hot dot) ── */}
        <mesh ref={lockRef} position={[0, 0, 1.19]}>
          <torusGeometry args={[0.34, 0.055, 24, 64]} />
          <meshStandardMaterial
            color="#d8b45a"
            emissive="#d8b45a"
            emissiveIntensity={0.45}
            metalness={1}
            roughness={0.15}
          />
        </mesh>
        <mesh ref={lockDiscRef} position={[0, 0, 1.21]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.19, 0.19, 0.04, 32]} />
          <meshStandardMaterial color="#16161a" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Tiny gold notch on the dial so the rotation is visible */}
        <mesh position={[0, 0.14, 1.235]}>
          <boxGeometry args={[0.02, 0.06, 0.01]} />
          <meshStandardMaterial
            color="#f1d98a"
            emissive="#f1d98a"
            emissiveIntensity={1.2}
          />
        </mesh>
        {/* Hot center dot */}
        <mesh position={[0, 0, 1.235]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial
            color="#f1d98a"
            emissive="#f1d98a"
            emissiveIntensity={1.6}
          />
        </mesh>

        {/* ── Inner glow (only visible when doors open) ─────── */}
        <pointLight
          ref={innerLightRef}
          position={[0, 0.3, 0.4]}
          color="#f1d98a"
          intensity={0}
          distance={5}
          decay={1.8}
        />

        {/* ── Floating scholarship cards inside ─────────────── */}
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.45}>
          <FloatingCard
            position={[-0.45, 0.35, 0.35]}
            rotation={[-0.05, 0.2, 0.04]}
            reveal={progress}
            delay={0.55}
          />
        </Float>
        <Float speed={1.7} rotationIntensity={0.3} floatIntensity={0.55}>
          <FloatingCard
            position={[0, 0, 0.25]}
            rotation={[0, 0, 0]}
            reveal={progress}
            delay={0.65}
          />
        </Float>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
          <FloatingCard
            position={[0.45, -0.3, 0.4]}
            rotation={[0.05, -0.2, -0.04]}
            reveal={progress}
            delay={0.75}
          />
        </Float>
      </group>
    </group>
  )
}
