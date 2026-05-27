import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top nav */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-navy-800">
          <span className="text-gold-500 text-xl">✦</span>
          <span className="font-display text-xl">Easy Scholarships</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-navy-800 font-medium hover:underline"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-b from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-800 font-semibold px-4 py-2 rounded-lg shadow shadow-gold-500/25 transition-all"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 border border-gold-400/40 text-charcoal-light text-sm font-medium">
            <span className="text-gold-500">✦</span>
            <span>Phase 3 (Auth) complete — building the app now</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-semibold text-navy-800 leading-[1.05] tracking-tight">
            Easy Scholarships
          </h1>

          <p className="text-lg md:text-xl text-charcoal-light leading-relaxed max-w-xl mx-auto">
            Unlock the hidden scholarships you qualify for. Track every
            deadline.{" "}
            <span className="text-navy-800 font-medium">
              Win more money for college.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/signup"
              className="group bg-gradient-to-b from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-800 font-semibold px-8 py-4 rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/35 hover:scale-[1.02] transition-all duration-200"
            >
              Get early access
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <a
              href="https://github.com/ShumpZeke/EasyScholarship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-800 font-medium underline-offset-4 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          <p className="text-sm text-charcoal-light pt-12 tabular">
            $100M+ in scholarships go unclaimed every year. Don't let yours.
          </p>
        </div>
      </div>
    </main>
  )
}
