/**
 * ProblemSection.tsx
 * "Growing but fragmented" — states the trigger/context from the deck.
 * Dark section, disconnected-node visual as the counterpoint to the
 * connected hero graph.
 *
 * Usage: import ProblemSection from '@/components/ProblemSection';
 */

const FRAGMENTS = [
  { label: 'FinTech', className: 'top-[12%] left-[8%]' },
  { label: 'Agri-Tech', className: 'top-[58%] left-[4%]' },
  { label: 'Manufacturing', className: 'top-[20%] left-[78%]' },
  { label: 'Cyber Tech', className: 'top-[70%] left-[82%]' },
  { label: 'HealthTech', className: 'top-[38%] left-[46%]' },
  { label: 'AI', className: 'top-[8%] left-[52%]' },
];

const RESULTS = [
  'Duplication',
  'Weak ecosystem learning',
  'Poor coordination',
  'Limited sustainability',
  'Reduced impact',
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-signal">
          THE PROBLEM
        </div>

        <h2 className="mb-5 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Thousands of startups, hubs, and ESOs. Almost no wiring between them.
        </h2>

        <p className="mb-16 max-w-xl font-body text-lg leading-relaxed text-paper/65">
          Nigeria&apos;s innovation ecosystem spans FinTech, Agri-Tech,
          Manufacturing, Cyber Tech, HealthTech, and AI — expanding fast, but
          fragmented. Stakeholders work in silos. Cross-cluster learning stays
          weak. The result shows up in five places:
        </p>

        {/* floating disconnected fragment labels — visual counterpoint to hero */}
        <div aria-hidden className="relative mb-14 hidden h-52 md:block">
          {FRAGMENTS.map((f) => (
            <span
              key={f.label}
              className={`absolute whitespace-nowrap rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-paper/60 ${f.className}`}
            >
              {f.label}
            </span>
          ))}
        </div>

        {/* results grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {RESULTS.map((item) => (
            <div
              key={item}
              className="bg-ink-soft px-5.5 py-7 font-display text-base font-semibold"
            >
              <span className="mr-2 text-signal">×</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
