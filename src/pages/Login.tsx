import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "@/contexts/AuthContext"

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginForm = z.infer<typeof loginSchema>

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setServerError(null)
    setSubmitting(true)
    const { error } = await signIn(data.email, data.password)
    setSubmitting(false)
    if (error) {
      setServerError(error.message)
      return
    }
    navigate("/dashboard")
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy-800 hover:opacity-80"
          >
            <span className="text-gold-500 text-xl">✦</span>
            <span className="font-display text-xl">Easy Scholarships</span>
          </Link>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-xl shadow-navy-800/5 p-8">
          <h1 className="text-3xl font-display font-semibold text-navy-800 mb-2">
            Welcome back to your scholarships
          </h1>
          <p className="text-charcoal-light mb-6">
            Sign in to continue your applications.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                autoComplete="email"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-urgent-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                autoComplete="current-password"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1.5 text-sm text-urgent-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {serverError && (
              <div className="rounded-lg bg-urgent-500/10 border border-urgent-500/30 text-urgent-600 text-sm px-4 py-2.5">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-b from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-800 font-semibold px-6 py-3 rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/35 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-charcoal-light">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-navy-800 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
