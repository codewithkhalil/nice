/**
 * PhasesTimeline.tsx — SECTION 5: HOW IT WORKS
 * Client copy: horizontal timeline / numbered step cards, tight per step.
 * NICE is a 6-month pilot (per client copy — supersedes earlier 9-month
 * draft from the deck).
 *
 * Usage: import PhasesTimeline from '@/components/PhasesTimeline';
 * Renders with id="programme".
 */

const PHASES = [
  {
    n: '01',
    name: 'Cluster Mapping',
    duration: '6 Weeks',
    body: 'We identify and document innovation clusters across key sectors, building a live database of stakeholders and infrastructure.',
  },
  {
    n: '02',
    name: 'Pipeline Clinics',
    duration: '12 Weeks',
    body: 'Virtual, expert-led sessions strengthening clusters on innovation management, prototyping, partnerships, and peer exchange.',
  },
  {
    n: '03',
    name: 'Expert-in-Residence',
    duration: '4 Weeks',
    body: 'UK experts are embedded within Nigerian clusters. Select Nigerian leaders travel to the UK for reciprocal learning.',
  },
  {
    n: '04',
    name: 'Innovation Sprints',
    duration: '3 Months',
    body: 'In-person, sector-focused co-design sessions where Nigerian and UK teams build and validate prototypes together.',
  },
  {
    n: '05',
    name: 'Sustainability Model',
    duration: '',
    body: 'Each cluster establishes its own governance structure — a Cluster Coordinator and Cluster Council — so the work continues long after the pilot.',
  },
];

export default function PhasesTimeline() {
  return (
    <section
      id="programme"
      className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
          THE PROGRAMME PHASES
        </div>
        <h2 className="mb-3 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Five Phases. One Mission.
        </h2>
        <p className="mb-16 font-mono text-sm uppercase tracking-[0.1em] text-ink/50">
          NICE is a 6-month pilot programme.
        </p>

        <div className="relative">
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
                <div className="z-[1] flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-paper font-mono text-xs text-ink sm:h-14 sm:w-14">
                  {p.n}
                </div>

                <div className="grid gap-2 pt-1.5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      {p.name}
                    </h3>
                    {p.duration && (
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                        {p.duration}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 max-w-2xl font-body leading-relaxed text-ink/62">
                    {p.body}
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
