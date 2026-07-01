/**
 * ScopeSection.tsx
 * Combines target sectors + the NG/UK anchor institutions table from the
 * deck. Warm paper section, mono-tagged data treatment since this is
 * reference information people will scan, not read linearly.
 *
 * Usage: import ScopeSection from '@/components/ScopeSection';
 */

const SECTORS = [
  'Cybersecurity',
  'Agricultural Technology',
  'Leather Manufacturing',
  'Mining',
  'Artificial Intelligence',
];

const SCOPE = [
  {
    country: 'Nigeria',
    dot: 'bg-indigo',
    text: 'text-indigo',
    institutions: [
      'The Nest Innovation Technology Park',
      'Academic institutions',
      'Five selected ESOs/ISOs, one per mapped cluster',
    ],
    role: 'Cluster activation, coordination, and pilot management',
  },
  {
    country: 'United Kingdom',
    dot: 'bg-signal',
    text: 'text-signal',
    institutions: [
      'United Kingdom Tech Hub (Nigeria Office)',
      'Innovate UK (ONDI)',
      'Manchester Innovation Factory, Bristol Innovations',
    ],
    role: 'Expert exchange, knowledge transfer, prototype co-development',
  },
];

export default function ScopeSection() {
  return (
    <section className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
          WHO&apos;S INVOLVED
        </div>
        <h2 className="mb-14 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Five sectors. Two countries. One shared pipeline.
        </h2>

        {/* sector chips */}
        <div className="mb-18 flex flex-wrap gap-2.5">
          {SECTORS.map((s) => (
            <span
              key={s}
              className="rounded-full border-[1.5px] border-ink px-5 py-2.5 font-display text-sm font-semibold"
            >
              {s}
            </span>
          ))}
        </div>

        {/* institutional scope table */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
          {SCOPE.map((s) => (
            <div key={s.country} className="bg-paper px-8 py-9">
              <div className="mb-5 flex items-center gap-2.5">
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${s.dot}`} />
                <h3 className="font-display text-xl font-bold">{s.country}</h3>
              </div>

              <ul className="mb-5 flex flex-col gap-2">
                {s.institutions.map((inst) => (
                  <li
                    key={inst}
                    className="relative pl-4 font-body text-[0.98rem] leading-relaxed text-ink/62"
                  >
                    <span className={`absolute left-0 ${s.text}`}>—</span>
                    {inst}
                  </li>
                ))}
              </ul>

              <div
                className={`border-t border-black/10 pt-4 font-mono text-xs uppercase tracking-[0.14em] ${s.text}`}
              >
                {s.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
