# Route Transition Design

## Required
The user specifically asked for animated transitions from different pages instead of pages just going there.

## Recommended technical pattern
- use React Router location
- wrap routes in AnimatePresence
- make each page a motion wrapper
- animate opacity, y, scale, blur
- keep background color dark during transition
- avoid white flashes

## Advanced pattern
Create a shared `CinematicBackground` that stays mounted across route changes. Only foreground route content transitions.

## Target feel
The site should feel like moving around one treasure landscape, not loading separate pages.
