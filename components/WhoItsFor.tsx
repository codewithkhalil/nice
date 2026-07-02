/**
 * WhoItsFor.tsx — SECTION 4: WHO IS IT FOR
 * Client copy: icon grid / 3-column card layout, short labels, brief
 * descriptions. Uses 4 cards per the copy (ESOs, Startups & SMEs,
 * Research & Academic Institutions, State Agencies & Government Partners).
 *
 * Usage: import WhoItsFor from '@/components/WhoItsFor';
 */

const AUDIENCES = [
  {
    icon: '🏢',
    title: 'Entrepreneurship Support Organisations (ESOs)',
    body: 'Hubs, accelerators, and incubators looking to strengthen their cluster impact.',
  },
  {
    icon: '🚀',
    title: 'Startups & SMEs',
    body: 'Businesses operating in key sectors ready to collaborate and scale.',
  },
  {
    icon: '🏛️',
    title: 'Research & Academic Institutions',
    body: 'Universities and research centres contributing knowledge and talent.',
  },
  {
    icon: '🤝',
    title: 'State Agencies & Government Partners',
    body: 'Public sector stakeholders invested in sector-level innovation outcomes.',
  },
];

export default function WhoItsFor() {
  return (
    <section className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          WHO CAN PARTICIPATE
        </div>
        <h2 className="mb-14 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Built for the Builders of Nigeria&apos;s Innovation Economy.
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="bg-ink-soft px-7 py-9">
              <div className="mb-5 text-3xl">{a.icon}</div>
              <h3 className="mb-3 font-display text-lg font-bold leading-snug">
                {a.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-paper/65">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
