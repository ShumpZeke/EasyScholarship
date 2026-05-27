/**
 * Cheap deterministic 2D value-noise (no external lib).
 * Used to displace terrain vertices into soft rolling hills.
 */

function hash2(x: number, z: number): number {
  const n = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453
  return n - Math.floor(n)
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t)
}

export function valueNoise2D(x: number, z: number): number {
  const x1 = Math.floor(x)
  const x2 = x1 + 1
  const z1 = Math.floor(z)
  const z2 = z1 + 1
  const fx = smoothstep(x - x1)
  const fz = smoothstep(z - z1)
  const n11 = hash2(x1, z1)
  const n12 = hash2(x1, z2)
  const n21 = hash2(x2, z1)
  const n22 = hash2(x2, z2)
  return (
    n11 * (1 - fx) * (1 - fz) +
    n21 * fx * (1 - fz) +
    n12 * (1 - fx) * fz +
    n22 * fx * fz
  )
}

/** Multi-octave noise for richer terrain. Returns ~[0, 1.875]. */
export function fbm(x: number, z: number, octaves = 4): number {
  let total = 0
  let amplitude = 1
  let frequency = 1
  for (let i = 0; i < octaves; i++) {
    total += valueNoise2D(x * frequency, z * frequency) * amplitude
    amplitude *= 0.5
    frequency *= 2
  }
  return total
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
