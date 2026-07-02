/**
 * AboutPartners.tsx — NEW SECTION per correction #7: "ABOUT THE PARTNERS"
 * Client-supplied descriptive copy for the two lead partners (verbatim).
 * Sits directly after PartnersSection.tsx (the logo strip) — the strip
 * shows who's involved, this explains who they are.
 *
 * Usage: import AboutPartners from '@/components/AboutPartners';
 */

const PARTNERS = [
  {
    name: 'The UK-Nigeria Tech Hub',
    body: "The UK Nigeria Tech Hub, part of the UK Government's Digital Access Programme, delivers the FCDO's Digital Development Strategy by supporting inclusive, responsible, and sustainable digital transformation in Nigeria's tech and digital innovation sectors.",
  },
  {
    name: 'The Nest Innovation Technology Park',
    body: 'The Nest is a leading African innovation hub and ESO. It provides the incubation, research, and policy frameworks necessary to help founders, researchers, and technical talent build sustainable, high-impact innovation systems.',
  },
];

export default function AboutPartners() {
  return (
    <section className="border-t border-black/10 bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
          ABOUT THE PARTNERS
        </div>
        <h2 className="mb-14 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Who's Building This With Us.
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          {PARTNERS.map((p) => (
            <div key={p.name}>
              <h3 className="mb-4 font-display text-xl font-bold tracking-tight">
                {p.name}
              </h3>
              <p className="font-body text-base leading-relaxed text-ink/62">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
