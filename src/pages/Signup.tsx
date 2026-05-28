import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "@/contexts/AuthContext"
import { humanizeAuthError } from "@/lib/auth-errors"
import { GoogleButton } from "@/components/auth/GoogleButton"

const signupSchema = z
  .object({
    fullName: z.string().min(1, "Enter your full name").max(80, "That's too long"),
    email: z.string().email("Enter a valid email"),
    password: z
      .string()
      .min(8, "At least 8 characters")
      .regex(/[a-z]/, "Add a lowercase letter")
      .regex(/[A-Z]/, "Add an uppercase letter")
      .regex(/[0-9]/, "Add a number"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignupForm = z.infer<typeof signupSchema>

export default function Signup() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [emailSent, setEmailSent] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({ resolver: zodResolver(signupSchema) })

  const onSubmit = async (data: SignupForm) => {
    setServerError(null)
    setSubmitting(true)
    const { error, needsEmailConfirm } = await signUp(
      data.email,
      data.password,
      data.fullName
    )
    setSubmitting(false)
    if (error) {
      setServerError(humanizeAuthError(error))
      return
    }
    if (needsEmailConfirm) {
      setEmailSent(data.email)
      return
    }
    navigate("/dashboard")
  }

  if (emailSent) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-auth-gold/15 border border-auth-gold/40">
            <span className="text-auth-gold text-3xl">✦</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-auth-text-strong mb-3">
            Check your email.
          </h1>
          <p className="text-auth-muted mb-6">
            We sent a confirmation link to{" "}
            <span className="font-medium text-auth-text">{emailSent}</span>. Click it
            to activate your account.
          </p>
          <Link to="/login" className="text-auth-gold font-medium hover:underline">
            Back to sign in
          </Link>
        </div>
      </main>
    )
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
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-auth-text-strong mb-2 tracking-tight">
            Start finding better scholarship matches.
          </h1>
          <p className="text-auth-muted text-sm mb-6">
            Create your Easy Scholarships account and build a smarter path to applications.
          </p>

          <GoogleButton onError={setServerError} />

          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-auth-border" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-auth-muted-deep">or</span>
            <div className="h-px flex-1 bg-auth-border" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-auth-text mb-1.5">
                Full name
              </label>
              <input
                {...register("fullName")}
                type="text"
                id="fullName"
                autoComplete="name"
                className="w-full px-4 py-2.5 rounded-lg border border-auth-border bg-auth-surface text-auth-text placeholder:text-auth-muted-deep focus:outline-none focus:ring-2 focus:ring-auth-gold/40 focus:border-auth-gold transition"
                placeholder="Your name"
              />
              {errors.fullName && (
                <p className="mt-1.5 text-sm text-auth-error">{errors.fullName.message}</p>
              )}
            </div>

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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-auth-text mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  className="w-full px-4 py-2.5 pr-16 rounded-lg border border-auth-border bg-auth-surface text-auth-text placeholder:text-auth-muted-deep focus:outline-none focus:ring-2 focus:ring-auth-gold/40 focus:border-auth-gold transition"
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-pressed={showPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-auth-muted hover:text-auth-text"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-sm text-auth-error">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-auth-text mb-1.5">
                Confirm password
              </label>
              <input
                {...register("confirmPassword")}
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                autoComplete="new-password"
                className="w-full px-4 py-2.5 rounded-lg border border-auth-border bg-auth-surface text-auth-text placeholder:text-auth-muted-deep focus:outline-none focus:ring-2 focus:ring-auth-gold/40 focus:border-auth-gold transition"
                placeholder="Re-enter password"
              />
              {errors.confirmPassword && (
                <p className="mt-1.5 text-sm text-auth-error">{errors.confirmPassword.message}</p>
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
              {submitting ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-auth-muted">
            Already have an account?{" "}
            <Link to="/login" className="text-auth-gold font-medium hover:underline">
              Sign in.
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
