/**
 * AboutNest.tsx
 * Brief "About The Nest" block — implementing partner credibility.
 * Dark section, quiet, sits just before the footer.
 *
 * Usage: import AboutNest from '@/components/AboutNest';
 */

export default function AboutNest() {
  return (
    <section className="border-t border-white/10 bg-ink px-5 py-16 text-paper sm:px-8 sm:py-24 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div>
          <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
            IMPLEMENTED BY
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            The Nest Innovation Technology Park
          </h2>
        </div>

        <p className="font-body text-base leading-loose text-paper/65">
          A community that fosters innovation through experimentation,
          research, and co-opetition — bringing individuals and
          organisations together to take ideas that solve real social and
          business challenges to market. NICE is delivered as a programme
          by the UK-Nigeria Tech Hub, an initiative of the Digital Access
          Programme (DAP) under the UK Government&apos;s Foreign, Commonwealth
          and Development Office (FCDO).
        </p>
      </div>
    </section>
  );
}
