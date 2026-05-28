import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { humanizeAuthError } from "@/lib/auth-errors"

interface Props {
  label?: string
  onError?: (message: string) => void
}

/** Official Google "G" mark (4-color) as inline SVG. */
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34A9 9 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.94H.96a9 9 0 0 0 0 8.12l3.01-2.34z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.94l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  )
}

/**
 * "Continue with Google" button. Triggers Supabase OAuth which redirects the
 * browser to Google. On success the browser returns to /dashboard.
 *
 * NOTE: Requires the Google provider to be enabled in the Supabase dashboard
 * with valid OAuth credentials. See /docs/treasure-chest or auth setup notes.
 */
export function GoogleButton({ label = "Continue with Google", onError }: Props) {
  const { signInWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const { error } = await signInWithGoogle()
    if (error) {
      setLoading(false)
      onError?.(humanizeAuthError(error))
    }
    // On success the page redirects away, so no further state needed.
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 rounded-xl border border-auth-border bg-auth-glass hover:bg-auth-glass-strong text-auth-text px-6 py-3 font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <GoogleIcon />
      <span>{loading ? "Redirecting…" : label}</span>
    </button>
  )
}
