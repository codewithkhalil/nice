/**
 * CtaSection.tsx
 * Final call to action — "Join Us" from the carousel deck, rendered as
 * a full-bleed high-contrast close. Renders with id="apply" for the
 * Hero's anchor link.
 *
 * Usage: import CtaSection from '@/components/CtaSection';
 */

export default function CtaSection() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-signal">
          NICE · REGISTRATION OPENS FOR PILOT COHORT
        </div>

        <h2 className="mb-7 font-display text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-5xl lg:text-7xl">
          Collaborate for the future {" "}
          {/* <br className="hidden sm:block" /> */}
          of innovation in Nigeria.
        </h2>

        <p className="mx-auto mb-11 max-w-lg font-body text-lg leading-relaxed text-ink/62">
          If you run an ESO, hub, startup, or research centre in one of our
          five sectors, this is the pilot cohort to be part of.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="mailto:contactus@thenest.ng?subject=NICE%20Pilot%20-%20Cluster%20Registration"
            className="inline-block rounded-[10px] bg-ink px-8 py-4.5 font-display text-base font-bold text-paper w-full sm:w-auto text-center transition-colors hover:bg-ink/90"
          >
            Register your cluster →
          </a>
          <a
            href="tel:+2348090554170"
            className="inline-block rounded-[10px] border-[1.5px] border-ink px-8 py-4.5 font-display text-base font-bold text-ink w-full sm:w-auto text-center transition-colors hover:bg-ink/90 hover:text-white"
          >
            +234 809 055 4170
          </a>
        </div>
      </div>
    </section>
  );
}
