function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Pre-headline chip — signals progress */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 border border-gold-400/40 text-charcoal-light text-sm font-medium">
          <span className="text-gold-500">✦</span>
          <span>Phase 1 complete — landing page shipping next</span>
        </div>

        {/* Headline — Fraunces serif, navy */}
        <h1 className="text-6xl md:text-7xl font-display font-semibold text-navy-800 leading-[1.05] tracking-tight">
          Easy Scholarship
        </h1>

        {/* Subhead — value prop */}
        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed max-w-xl mx-auto">
          Unlock the hidden scholarships you qualify for. Track every
          deadline.{" "}
          <span className="text-navy-800 font-medium">
            Win more money for college.
          </span>
        </p>

        {/* CTA group — gold gradient primary, navy secondary */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            type="button"
            className="group bg-gradient-to-b from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-800 font-semibold px-8 py-4 rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/35 hover:scale-[1.02] transition-all duration-200"
          >
            Get early access
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
          <a
            href="https://github.com/ShumpZeke/EasyScholarship"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-800 font-medium underline-offset-4 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Loss-aversion anchor */}
        <p className="text-sm text-charcoal-light pt-12 tabular">
          $100M+ in scholarships go unclaimed every year. Don't let yours.
        </p>
      </div>
    </main>
  )
}

export default App
