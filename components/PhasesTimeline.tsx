/**
 * PhasesTimeline.tsx
 * The 5 programme phases IN ORDER — this is a real sequence with real
 * durations, so numbered markers + a connecting spine are justified here
 * (unlike a decorative use of the same device).
 *
 * Usage: import PhasesTimeline from '@/components/PhasesTimeline';
 * Renders with id="programme" for the Hero's "See the 5 phases" anchor.
 */

const PHASES = [
  {
    n: '01',
    name: 'Cluster Mapping',
    sub: 'Foundation',
    duration: '6 weeks',
    body: 'Identify and document five innovation clusters and ecosystem actors across sectoral strengths, stakeholders, and infrastructure.',
    output: 'A validated, live cluster database.',
  },
  {
    n: '02',
    name: 'Pipeline Clinics',
    sub: 'Strengthening',
    duration: '12 weeks',
    body: 'Five expert-led virtual clinics on innovation management, prototyping, partnerships, and peer exchange.',
    output: 'Strengthened cluster frameworks with clear coordination models.',
  },
  {
    n: '03',
    name: 'Expert-in-Residence',
    sub: 'Exchange',
    duration: '4 weeks · overlaps Clinics',
    body: 'UK experts embed in Nigerian clusters; Nigerian leaders undertake reciprocal residencies with UK counterparts.',
    output: 'A cross-learning report and a trained network of cluster managers.',
  },
  {
    n: '04',
    name: 'Innovation Sprints',
    sub: 'Demonstration',
    duration: '3 months',
    body: 'Two physical, sector-focused sprints pairing Nigerian and UK clusters for co-design, testing, and validation.',
    output: 'Validated prototypes, peer-reviewed by both sides.',
  },
  {
    n: '05',
    name: 'Sustainability Model',
    sub: 'Handover',
    duration: 'End of piloting',
    body: 'Cluster coordinators and councils are formalised. The Nest supports knowledge continuity beyond the pilot.',
    output: 'Local governance structures, built to outlast the programme.',
  },
];

export default function PhasesTimeline() {
  return (
    <section
      id="programme"
      className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          THE PILOT · 9 MONTHS
        </div>
        <h2 className="mb-16 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Five phases. Each one hands off live to the next.
        </h2>

        <div className="relative">
          {/* connecting spine */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo to-signal opacity-50 sm:left-[27px]"
          />

          <ol className="m-0 list-none p-0">
            {PHASES.map((p, i) => (
              <li
                key={p.n}
                className={`relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-6 ${
                  i === PHASES.length - 1 ? 'pb-0' : 'pb-10 sm:pb-12'
                }`}
              >
                <div className="z-[1] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-soft font-mono text-xs text-paper sm:h-14 sm:w-14">
                  {p.n}
                </div>

                <div className="grid gap-2 pt-1.5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      {p.name}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
                      {p.sub}
                    </span>
                    <span className="ml-auto font-mono text-xs uppercase tracking-[0.14em] text-pulse">
                      {p.duration}
                    </span>
                  </div>
                  <p className="mt-1 max-w-2xl font-body leading-relaxed text-paper/65">
                    {p.body}
                  </p>
                  <p className="mt-2 font-mono text-[0.82rem] text-indigo">
                    → {p.output}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
