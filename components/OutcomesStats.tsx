/**
 * OutcomesStats.tsx
 * The 6-month expected outcomes rendered as a big-number stat row —
 * justified here because these ARE literal counts from the deck
 * (2 prototypes, 10 ESOs, 5 clusters), not decorative numbers.
 *
 * Usage: import OutcomesStats from '@/components/OutcomesStats';
 */

const STATS = [
  { value: '5', unit: 'clusters', desc: 'mapped, documented, and operationally strengthened' },
  { value: '10', unit: 'ESOs', desc: 'equipped with improved innovation management systems' },
  { value: '2', unit: 'prototypes', desc: 'co-developed and validated through bilateral sprints' },
  { value: '1', unit: 'sustainability model', desc: 'integrating clusters into state-level innovation systems' },
];

export default function OutcomesStats() {
  return (
    <section className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          EXPECTED OUTCOMES · 6 MONTHS
        </div>
        <h2 className="mb-16 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          What the pilot delivers, on paper and in the room.
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.unit}>
              <div className="mb-3 flex items-baseline gap-2.5">
                <span className="bg-gradient-to-b from-paper to-indigo bg-clip-text font-display text-5xl font-extrabold leading-none text-transparent lg:text-6xl">
                  {s.value}
                </span>
                <span className="font-display text-lg font-semibold text-paper">
                  {s.unit}
                </span>
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
