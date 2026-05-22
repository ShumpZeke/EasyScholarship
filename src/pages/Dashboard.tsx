import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate("/")
  }

  // Friendly display name — first part of email until we collect real name
  const displayName = user?.email?.split("@")[0] ?? "there"

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <nav className="flex items-center justify-between mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-navy-800">
            <span className="text-gold-500 text-xl">✦</span>
            <span className="font-display text-xl">Easy Scholarship</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-charcoal-light">
              {user?.email}
            </span>
            <button
              onClick={handleSignOut}
              className="text-navy-800 font-medium hover:underline"
            >
              Sign out
            </button>
          </div>
        </nav>

        {/* Welcome */}
        <h1 className="text-4xl md:text-5xl font-display text-navy-800 mb-2">
          Welcome, {displayName}!
        </h1>
        <p className="text-charcoal-light text-lg mb-8">
          Let's find scholarships you qualify for.
        </p>

        {/* Endowed progress: starts at 20%, not 0% (psychology rule) */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-charcoal font-medium">
              Profile completion
            </span>
            <span className="text-charcoal-light tabular">20%</span>
          </div>
          <div className="h-2 bg-cream-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold-400 to-gold-500 transition-all duration-700"
              style={{ width: "20%" }}
            />
          </div>
          <p className="text-xs text-charcoal-light mt-3">
            You're already 20% done just by signing up. Keep going!
          </p>
        </div>

        {/* Primary CTA */}
        <button
          type="button"
          className="bg-gradient-to-b from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-800 font-semibold px-8 py-4 rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/35 hover:scale-[1.01] transition-all duration-200"
        >
          Complete your profile to unlock matches →
        </button>

        <p className="text-sm text-charcoal-light mt-12">
          Profile builder coming in Phase 5. Scholarship matching in Phase 6.
        </p>
      </div>
    </main>
  )
}
