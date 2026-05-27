interface Section {
  id: string
  label: string
}

interface Props {
  sections: Section[]
  activeIdx: number
  onSelect: (idx: number) => void
}

/**
 * Floating top-center tab nav. Shows numbered tabs for each scroll section.
 * Active tab is highlighted in gold; clicking one smooth-scrolls to that section.
 */
export function SectionTabs({ sections, activeIdx, onSelect }: Props) {
  return (
    <nav
      aria-label="Page sections"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-30 hidden md:block"
    >
      <div className="auth-glass rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-lg shadow-black/30">
        {sections.map((s, i) => {
          const active = i === activeIdx
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(i)}
              aria-current={active ? "true" : undefined}
              className={[
                "group relative px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-300 ease-out",
                active
                  ? "bg-auth-gold/14 text-auth-gold border border-auth-gold/35 shadow-inner shadow-auth-gold/15"
                  : "text-auth-muted border border-transparent hover:text-auth-text",
              ].join(" ")}
            >
              <span className={active ? "opacity-70 mr-1.5" : "opacity-40 mr-1.5"}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
