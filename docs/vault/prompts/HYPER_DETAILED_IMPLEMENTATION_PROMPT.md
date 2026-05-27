# HYPER-DETAILED IMPLEMENTATION PROMPT

Use this if you want Claude Code to work with more art direction and technical direction at the same time.

## Creative direction
Build an original website for Easy Scholarships that feels like a premium cinematic landscape interface.
The design should be simpler and more centered than the earlier dramatic concept.
The main object is a black-and-gold scholarship vault on a circular pedestal in a soft gray landscape.
The vault is the centerpiece of the page and it must feel balanced, still, elegant, and expensive.

## Visual tone
- black and graphite materials
- soft gray environment
- muted gold trim and glow
- minimal UI overlays
- calm fog
- symmetrical framing
- luxury but understated
- minimal clutter
- clean horizon
- big negative space

## Scene progression
Frame 1:
- closed centered vault
- distant but still fairly large
- pedestal visible
- smooth gray terrain
- soft sky haze

Frame 2:
- subtle glow along trim
- slight camera move inward

Frame 3:
- ring or lock motion implied
- gold intensity increases

Frame 4:
- doors open
- warm internal light
- soft fog spill
- floating translucent scholarship cards appear

Final frame:
- zoomed-in open vault
- vault occupies much more of frame
- scholarship cards visible inside
- surrounding landscape simplified and secondary

## Technical approach
Use React Three Fiber for the live website.
Use Framer Motion for overlay copy.
Use Drei ScrollControls or a custom scroll state to drive scene progression.
If needed, use GSAP ScrollTrigger for exact motion synchronization.

## Recommended structure
- Canvas fixed full-screen
- HTML overlays layered above
- scene state tied to normalized scroll progress from 0 to 1
- object transforms, emissive intensity, fog density, and card opacity all derived from scroll progress

## Suggested scroll map
0.00 to 0.20:
- static closed vault
- calm intro

0.20 to 0.40:
- gentle camera push-in
- trim glow ramps up

0.40 to 0.60:
- lock rotation or seam motion

0.60 to 0.80:
- doors open gradually
- fog and light bloom emerge

0.80 to 1.00:
- floating cards appear
- feature copy transitions in

## Use references
Primary references:
- `assets/images/generated/01_first_frame_closed_vault_simple.png`
- `assets/images/generated/02_last_frame_open_vault_zoomed.png`

Motion reference:
- `assets/video/vault_motion_reference.mp4`

## Output expectation
The first screen should not feel like a generic SaaS site.
It should feel like a 3D scene with UI overlays.
The final result should feel original, premium, and simple.
