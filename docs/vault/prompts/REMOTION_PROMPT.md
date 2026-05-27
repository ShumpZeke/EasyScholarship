# REMOTION PROMPT

Use this prompt if you want Claude Code to create a Remotion project for a teaser animation or motion prototype based on the website hero.

Build a Remotion composition named `VaultTeaser`.

## Specs
- duration: 8 seconds
- fps: 24
- resolution: 1920x1080
- tone: premium, calm, minimal, cinematic

## Visual concept
A centered black-and-gold scholarship vault sits in a minimal gray landscape on a circular pedestal.
The sequence begins with the vault closed and ends with the vault open, glowing warmly, with a few floating translucent scholarship cards inside.

## Timing
0s to 1.5s:
- closed vault hold
- subtle ambient haze
- small push-in

1.5s to 3.0s:
- trim and center lock glow slightly brighter

3.0s to 4.5s:
- circular lock or side mechanisms animate subtly

4.5s to 6.5s:
- doors open smoothly
- warm light blooms from inside
- fog spills out

6.5s to 8.0s:
- floating scholarship cards hover
- slight camera push-in continues
- end on a zoomed-in final frame

## Motion style
- very smooth easing
- no harsh cuts
- no fast movement
- luxury pacing
- subtle fog animation
- subtle floating motion on cards

## Production approach
Option A:
- use imported image layers and motion effects for a fast prototype

Option B:
- build a simple 2.5D or 3D-feeling motion system using layered transforms

Option C:
- if the project supports it, integrate Three.js-based renders exported to Remotion

## Assets
Use:
- `assets/images/generated/01_first_frame_closed_vault_simple.png`
- `assets/images/generated/02_last_frame_open_vault_zoomed.png`
- `assets/video_frames/*`
- `assets/video/vault_motion_reference.mp4`

## Nice extras
- add subtle film grain
- add soft vignette
- add glow around the interior light
- add light atmospheric particles

## Deliverables
- Remotion composition
- easy way to swap first/last frame assets
- exported teaser ready for review
