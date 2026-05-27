# RESEARCH AND STACK NOTES

## Recommended main stack
- Vite + React + TypeScript
- Tailwind CSS
- Three.js via React Three Fiber
- @react-three/drei
- Framer Motion

## Scroll and motion
Primary recommendation:
- Drei ScrollControls or custom normalized scroll progress

Optional if more timeline precision is needed:
- GSAP ScrollTrigger

Optional smooth scroll:
- Lenis

## Why these tools
React Three Fiber gives a structured React way to build WebGL scenes.
Drei provides useful helpers, including scroll controls and utilities.
Framer Motion is good for overlay UI transitions.
GSAP is only needed if you want tighter timeline choreography.

## Useful Claude Code add-ons and MCP ideas
- Context7 for current package docs
- Playwright for responsive and interaction testing
- shadcn MCP for polished UI component scaffolding
- Figma MCP if you later use a design file

## 3D modeling and asset generation options
- Spline for quick 3D concepting or code export inspiration
- Blender for final cleanup
- Meshy or Tripo AI for generating object concepts
- glTF / GLB as final web model format
- glTF Transform for optimization
- Draco / Meshopt / KTX2 when optimizing 3D assets

## What to build first
1. audit current project
2. create color tokens and layout shell
3. build hero overlays
4. build procedural vault scene
5. connect scroll progress to opening sequence
6. style auth pages
7. polish performance and QA
