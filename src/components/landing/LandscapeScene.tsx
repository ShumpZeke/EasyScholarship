import { Canvas } from "@react-three/fiber"
import { ScholarshipVault } from "./ScholarshipVault"
import { Terrain } from "./Terrain"
import { GoldParticles } from "./GoldParticles"
import { CameraRig } from "./CameraRig"

interface Props {
  /** 0..1 page scroll progress */
  progress: number
  reducedMotion: boolean
}

/**
 * Full landing 3D scene — landscape, vault, lights, particles, camera rig.
 * Loaded lazily from Landing.tsx so the initial JS bundle stays slim.
 */
export default function LandscapeScene({ progress, reducedMotion }: Props) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, 8], fov: 38, near: 0.1, far: 120 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      {/* Atmospheric fog — matches the reference image's gray haze */}
      <fog attach="fog" args={["#9aa1a9", 8, 32]} />
      <color attach="background" args={["#a8aeb6"]} />

      {/* ─── Lighting (soft skylight, cool key, warm fill) ─── */}
      <ambientLight intensity={0.4} color="#b6bcc4" />
      <hemisphereLight args={["#cdd3da", "#3a3a3a", 0.7]} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={0.85}
        color="#f8f1dc"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <directionalLight position={[-4, 5, -3]} intensity={0.25} color="#8aa0c0" />

      <CameraRig progress={progress} reducedMotion={reducedMotion} />

      <Terrain />
      <ScholarshipVault progress={progress} reducedMotion={reducedMotion} />
      <GoldParticles count={80} progress={progress} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
