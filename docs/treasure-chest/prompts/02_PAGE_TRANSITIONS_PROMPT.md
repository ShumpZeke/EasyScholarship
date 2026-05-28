# Page Transition Prompt

Add animated page transitions between routes.

## Goal
The site should not hard-cut when navigating.
It should feel like one cinematic world.

## Routes
- `/`
- `/login`
- `/signup`
- `/forgot-password`
- `/dashboard`

## Use
- Framer Motion AnimatePresence
- route-level wrapper component
- shared layout if helpful
- optional View Transitions API if already suitable

## Required behavior
When clicking Sign in:
- fade and blur current hero UI
- keep dark/gold atmosphere
- transition into a login form card that feels like part of the treasure world

When clicking Create account:
- smooth move into signup chamber/panel
- preserve particles and background

When returning home:
- transition back to the chest world

## Avoid
- instant route changes
- white flash
- layout pop
- full reset feeling
- unrelated auth design

## Implementation idea
Create:
- `AnimatedRoutes.tsx`
- `PageTransitionShell.tsx`
- `CinematicBackground.tsx`

Wrap routes in AnimatePresence with location key.
