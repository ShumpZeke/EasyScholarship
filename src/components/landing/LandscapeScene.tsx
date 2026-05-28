import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { TreasureChest } from "./TreasureChest"
import { Terrain } from "./Terrain"
import { GoldParticles } from "./GoldParticles"
import { CameraRig } from "./CameraRig"

interface Props {
  /** 0..1 page scroll progress */
  progress: number
  reducedMotion: boolean
}

/**
 * Full landing 3D scene — landscape, treasure chest, lights, particles, camera.
 * Loaded lazily from Landing.tsx so the initial JS bundle stays slim.
 *
 * The chest GLB is preloaded by TreasureChest.tsx via useGLTF.preload,
 * which kicks off the network fetch the moment this module is imported.
 */
export default function LandscapeScene({ progress, reducedMotion }: Props) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.2, 9], fov: 38, near: 0.1, far: 120 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      {/* Atmospheric fog — matches the foggy gray reference */}
      <fog attach="fog" args={["#9aa1a9", 8, 32]} />
      <color attach="background" args={["#a8aeb6"]} />

      {/* ─── Lighting ────────────────────────────────────────── */}
      <ambientLight intensity={0.4} color="#b6bcc4" />
      <hemisphereLight args={["#cdd3da", "#3a3a3a", 0.7]} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={1.0}
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

      {/* Environment for realistic PBR reflections on the chest's metal bands.
          "warehouse" is built into drei (no external HDRI download). */}
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
      </Suspense>

      <CameraRig progress={progress} reducedMotion={reducedMotion} />

      <Terrain />
      <Suspense fallback={null}>
        <TreasureChest progress={progress} reducedMotion={reducedMotion} />
      </Suspense>
      <GoldParticles count={80} progress={progress} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
