# Easy Scholarship

> Unlock the hidden scholarships you qualify for. Track every deadline. Win more money for college.

AI-powered scholarship discovery and application tracker for students. Built to make it possible for one student to credibly apply to 50+ scholarships in the time it would normally take to apply to 5.

## Stack

- **Frontend:** Vite + React 19 + TypeScript (strict)
- **Styling:** Tailwind v4 + shadcn/ui + Framer Motion
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
VITE_SUPABASE_ANON_KEY=
VITE_GROQ_API_KEY=
```

- **Supabase** keys are needed starting in Phase 3 (Authentication).
- **Groq** key is needed starting in Phase 8 (AI Essay Generator).

## Project structure

```
src/
  components/
    ui/             shadcn/ui primitives
    landing/        landing page sections
    dashboard/      authenticated dashboard widgets
    profile/        multi-step profile builder
    scholarships/   browse / detail / match score
    applications/   kanban + tracker
    essays/         AI essay generator + library
    shared/         navbar, footer, loaders, money counters
  pages/            top-level routes
  lib/              supabase, groq, matching, animations
  hooks/            useAuth, useProfile, etc.
  types/            generated database types
  contexts/         AuthContext, etc.

scraper/            standalone Node scrapers for Phase 9
  sources/          per-source extractors
```

## Build phases

| # | Phase |
|---|---|
| 1 | Foundation (Vite + React + Tailwind + shadcn) |
| 2 | Psychology-driven landing page |
| 3 | Authentication (Supabase) |
| 4 | Database schema + RLS |
| 5 | Student profile builder |
| 6 | Scholarship matching + browsing |
| 7 | Application tracker + dashboard |
| 8 | AI essay generator (Groq) |
| 9 | Scholarship data collection (admin + scraper) |
| 10 | Polish, mobile, deploy |

## License

Not yet decided — currently private use.
