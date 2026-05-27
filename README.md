# Easy Scholarships

> Unlock the hidden scholarships you qualify for. Track every deadline. Win more money for college.

AI-powered scholarship discovery and application tracker for students. Built to make it possible for one student to credibly apply to 50+ scholarships in the time it would normally take to apply to 5.

Premium dark / gold luxury-tech aesthetic, scholarship-platform-grade.

## Stack

- **Frontend:** Vite + React 19 + TypeScript (strict)
- **Styling:** Tailwind v4 + shadcn/ui (base-nova) + Geist Variable
- **Motion:** Framer Motion
- **3D:** Three.js + @react-three/fiber + @react-three/drei (lazy-loaded auth scene)
- **Backend:** Supabase (Postgres, auth, storage, realtime)
- **AI:** Groq SDK (llama-3.3-70b-versatile)
- **Hosting:** Vercel
- **Forms:** React Hook Form + Zod

## Local development

```powershell
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run lint     # eslint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in your keys:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_GROQ_API_KEY=
```

- **Supabase** keys are needed for auth (Phase 3+).
- **Groq** key is needed for AI essays (Phase 8).
- Never commit `.env.local`. Never put the Supabase **secret** key in any frontend file.

## Project structure

```
src/
  components/
    ui/             shadcn/ui primitives
    auth/           premium dark/gold auth primitives + visual stage
    shared/         ProtectedRoute, navbar, footer, loaders
    dashboard/      authenticated dashboard widgets (future)
    profile/        multi-step profile builder (future)
    scholarships/   browse / detail / match score (future)
    applications/   kanban + tracker (future)
    essays/         AI essay generator + library (future)
  pages/            top-level routes (Landing, Login, Signup, Dashboard, ForgotPassword)
  lib/              supabase client, auth-errors, matching, animations
  hooks/            useAuth, usePasswordStrength, useReducedMotionSafe
  contexts/         AuthContext, etc.
  types/            generated database types
  vite-env.d.ts     typed import.meta.env

public/
  auth-assets/      logos, 3D models, reference images, textures, mockups
  favicon.svg       brand mark

docs/
  auth-assets-needed.md
  source/           master prompt source of truth
  prompts/          image + claude-code implementation prompts
```

## Asset folder

`/public/auth-assets/` is a complete drop-in pack including:

- `logo-light.svg` / `logo-dark.svg` / `logo-mark.svg`
- `student-hero.jpg`, `campus-bg.jpg`, `dashboard-preview.png`, `resume-preview.png`
- `gold-texture.png`, `noise-texture.png`, `grain-overlay.png`, `gold-particle-overlay.png`
- `auth-loop-poster.jpg` (video poster fallback)
- `3d/scholarship-core.glb` + draco variant + `opportunity-capsule.glb` + `floating-scholarship-card.glb`
- `reference-images/` (hero frames, object states, floating cards)
- `ui-mockups/` (login, signup, forgot-password reference designs)

Replace any file with final brand assets while keeping the same filenames.

## Build phases (status)

| # | Phase | Status |
|---|---|---|
| 1 | Foundation (Vite + React + Tailwind + shadcn) | ✅ done |
| 3 | Authentication (Supabase + email/password + Google OAuth) | ⏳ rebuilding in 6 passes |
| 4 | Database schema + RLS | upcoming |
| 5 | Student profile builder | upcoming |
| 6 | Scholarship matching + browsing | upcoming |
| 7 | Application tracker + dashboard | upcoming |
| 8 | AI essay generator (Groq) | upcoming |
| 9 | Scholarship data collection (admin + scraper) | upcoming |
| 10 | Polish, mobile, deploy | upcoming |

## Auth rebuild progress (6 passes)

| Pass | Goal | Status |
|---|---|---|
| 1 | Foundation: dark/gold tokens, 3D libs, assets, rename | ⏳ in progress |
| 2 | Primitives: AuthShell, AuthInput, PasswordField, AuthButton, GoogleButton | pending |
| 3 | Visual stage: floating match cards, particles, lazy 3D core | pending |
| 4 | Rebuild Login + Signup with primitives + stage + humanized errors | pending |
| 5 | Forgot password flow + AnimatePresence route transitions | pending |
| 6 | Lighthouse / a11y audit + handoff docs | pending |

## License

Not yet decided — currently private use.
