import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "@/contexts/AuthContext"
import { humanizeAuthError } from "@/lib/auth-errors"

const schema = z.object({
  email: z.string().email("Enter a valid email"),
})
type ForgotForm = z.infer<typeof schema>

export default function ForgotPassword() {
  const { resetPassword } = useAuth()
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [sentTo, setSentTo] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotForm>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: ForgotForm) => {
    setServerError(null)
    setSubmitting(true)
    const { error } = await resetPassword(data.email)
    setSubmitting(false)
    if (error) {
      setServerError(humanizeAuthError(error))
      return
    }
    // Don't reveal whether the email exists — always show success.
    setSentTo(data.email)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-7">
          <Link to="/" className="inline-flex items-center gap-2 text-auth-text hover:opacity-80">
            <span className="text-auth-gold text-xl">✦</span>
            <span className="font-display text-lg font-semibold">Easy Scholarships</span>
          </Link>
        </div>

        <div className="auth-glass-strong rounded-3xl border border-auth-border p-8 shadow-2xl shadow-black/50">
          {sentTo ? (
            <div className="text-center">
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-auth-gold/15 border border-auth-gold/40">
                <span className="text-auth-gold text-2xl">✦</span>
              </div>
              <h1 className="text-2xl font-display font-semibold text-auth-text-strong mb-2">
                Check your email.
              </h1>
              <p className="text-auth-muted text-sm mb-6">
                If an account exists for{" "}
                <span className="text-auth-text font-medium">{sentTo}</span>, we sent a
                reset link.
              </p>
              <Link to="/login" className="text-auth-gold font-medium hover:underline">
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl md:text-3xl font-display font-semibold text-auth-text-strong mb-2 tracking-tight">
                Forgot your password?
              </h1>
              <p className="text-auth-muted text-sm mb-6">
                Enter your email and we'll send a reset link.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-auth-text mb-1.5">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    autoComplete="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-auth-border bg-auth-surface text-auth-text placeholder:text-auth-muted-deep focus:outline-none focus:ring-2 focus:ring-auth-gold/40 focus:border-auth-gold transition"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-auth-error">{errors.email.message}</p>
                  )}
                </div>

                {serverError && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="rounded-lg bg-auth-error-soft border border-auth-error/30 text-auth-error text-sm px-4 py-2.5"
                  >
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-b from-auth-gold-soft to-auth-gold text-auth-bg font-semibold px-6 py-3 rounded-xl shadow-lg shadow-auth-gold/20 hover:shadow-auth-gold/35 hover:scale-[1.01] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Send reset link"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-auth-muted">
                <Link to="/login" className="text-auth-gold font-medium hover:underline">
                  Back to sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
