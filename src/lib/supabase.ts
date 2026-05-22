import { createClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!url || !key) {
  throw new Error(
    "Missing Supabase env vars. Copy .env.example → .env.local and fill them in."
  )
}

/**
 * Singleton Supabase client.
 *
 * - Uses localStorage to persist auth sessions across page reloads.
 * - All security is enforced server-side by Row Level Security policies
 *   on each Postgres table (set up in Phase 4).
 * - This client is safe to import anywhere in the React app.
 */
export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true, // for OAuth + email confirm redirects
  },
})
