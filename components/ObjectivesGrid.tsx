/**
 * ObjectivesGrid.tsx
 * The 4 programme objectives from the deck, as a 2x2 (desktop) grid on
 * warm paper background — the "we've got a plan" counterpoint to the
 * dark problem section before it.
 *
 * Usage: import ObjectivesGrid from '@/components/ObjectivesGrid';
 */

const OBJECTIVES = [
  {
    tag: 'MAP',
    title: 'Cluster mapping & activation',
    body: 'Identify and formally stand up innovation clusters across Nigeria — by sector and geography.',
  },
  {
    tag: 'MOVE',
    title: 'Knowledge mobility',
    body: 'Bilateral exchange through short-term expert residencies between Nigerian and UK innovation clusters.',
  },
  {
    tag: 'BUILD',
    title: 'Collaborative prototyping',
    body: 'Joint innovation sprints that pair clusters and experts to co-design and test real solutions.',
  },
  {
    tag: 'KEEP',
    title: 'Sustainability & ownership',
    body: 'A local stewardship model — cluster coordinators and councils — so momentum outlives the pilot.',
  },
];

export default function ObjectivesGrid() {
  return (
    <section className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
              PROGRAMME OBJECTIVES
            </div>
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Four moves to stimulate every cluster we activate.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
          {OBJECTIVES.map((o) => (
            <div key={o.tag} className="bg-paper px-8 py-10">
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-signal">
                {o.tag}
              </div>
              <h3 className="mb-3 font-display text-xl font-bold tracking-tight">
                {o.title}
              </h3>
              <p className="font-body text-[0.98rem] leading-relaxed text-ink/62">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
