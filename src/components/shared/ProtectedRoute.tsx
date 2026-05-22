import { Navigate, useLocation } from "react-router-dom"
import type { ReactNode } from "react"
import { useAuth } from "@/contexts/AuthContext"

/**
 * Wraps a route that requires authentication.
 * - While auth state is loading: shows a spinner.
 * - If not authenticated: redirects to /login (preserving where they came from).
 * - If authenticated: renders the children.
 */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="flex items-center gap-3 text-charcoal-light">
          <span className="inline-block w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span>Loading…</span>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}
