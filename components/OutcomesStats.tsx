/**
 * OutcomesStats.tsx — SECTION 8: OUTCOMES
 * Client copy: stats/numbers section, big bold numbers with short labels.
 * Figures per client copy (5 clusters / 10 ESOs / 2 prototypes / 1
 * mapping framework) — updated per correction: 5 pilot clusters, not 3.
 *
 * Usage: import OutcomesStats from '@/components/OutcomesStats';
 */

const STATS = [
  { value: '5', unit: '', desc: 'Innovation clusters activated across Nigeria' },
  { value: '10', unit: 'ESOs', desc: 'Strengthened with improved innovation systems' },
  { value: '2', unit: '', desc: 'Validated prototypes co-developed with UK partners' },
  { value: '1', unit: '', desc: 'Live, national innovation cluster mapping framework' },
];

export default function OutcomesStats() {
  return (
    <section className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          WHAT WE&apos;RE BUILDING TOWARD
        </div>
        <h2 className="mb-16 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Real Results. Within 6 Months.
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.desc}>
              <div className="mb-3 flex items-baseline gap-2.5">
                <span className="bg-gradient-to-b from-paper to-indigo bg-clip-text font-display text-5xl font-extrabold leading-none text-transparent lg:text-6xl">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="font-display text-lg font-semibold text-paper">
                    {s.unit}
                  </span>
                )}
              </div>
              <p className="max-w-xs font-body text-sm leading-relaxed text-paper/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
