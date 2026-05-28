import type { AuthError } from "@supabase/supabase-js"

/**
 * Turns a raw Supabase AuthError into a friendly, human-readable message.
 * Never leaks stack traces or internal details. Falls back to a generic
 * message for anything unrecognized + overly long.
 */
export function humanizeAuthError(error: AuthError | null | undefined): string {
  if (!error) return "Something went wrong. Try again."
  const msg = (error.message ?? "").toLowerCase()

  if (msg.includes("invalid login credentials"))
    return "That email and password don't match. Try again, or reset your password."
  if (msg.includes("email not confirmed"))
    return "Almost there — check your inbox to confirm your email, then sign in."
  if (msg.includes("already registered") || msg.includes("already been registered"))
    return "An account with this email already exists. Try signing in instead."
  if (msg.includes("password should be at least"))
    return "Pick a password at least 6 characters long."
  if (msg.includes("rate limit") || msg.includes("too many"))
    return "Too many tries. Take a breath, then try again in a minute."
  if (msg.includes("signups not allowed"))
    return "New signups are temporarily paused. Check back soon."
  if (msg.includes("network") || msg.includes("fetch") || msg.includes("failed to"))
    return "We couldn't reach the server. Check your connection and try again."

  // Safe-ish short raw messages pass through; otherwise generic
  return error.message && error.message.length < 120
    ? error.message
    : "Something went wrong. Try again."
}
