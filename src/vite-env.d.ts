/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string
  readonly VITE_GROQ_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Side-effect CSS imports from @fontsource-variable/* packages
declare module "@fontsource-variable/geist"
declare module "@fontsource-variable/*"
