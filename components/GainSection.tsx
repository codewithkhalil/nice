/**
 * GainSection.tsx — SECTION 7: WHAT YOU GAIN
 * Client copy: bold statement section, dark/contrasting background to
 * break the page. Since the page already alternates ink/paper, this uses
 * the indigo-dim gradient treatment to read as a genuine break.
 *
 * Usage: import GainSection from '@/components/GainSection';
 */

const GAINS = [
  'Direct mentorship from UK innovation experts',
  'Co-developed, validated prototypes for real sector challenges',
  'Stronger visibility and credibility within a structured network',
  'Access to cross-cluster learning and peer exchange',
  'A foundation for future partnerships, funding, and scale',
  'No participation fee — programme costs are covered',
];

export default function GainSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-dim via-ink to-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          WHAT&apos;S IN IT FOR YOU
        </div>
        <h2 className="mb-14 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          More Than a Programme. A Real Competitive Advantage.
        </h2>

        <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2">
          {GAINS.map((g) => (
            <li key={g} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 text-pulse">→</span>
              <span className="font-body text-base leading-relaxed text-paper/85 sm:text-lg">
                {g}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
