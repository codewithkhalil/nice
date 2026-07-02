/**
 * ProblemSection.tsx — SECTION 2: THE PROBLEM
 * Client copy: clean, centred text block. "One truth, stated plainly."
 *
 * Usage: import ProblemSection from '@/components/ProblemSection';
 */

export default function ProblemSection() {
  return (
    <section className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-signal">
          WHY NICE EXISTS
        </div>

        <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          We Have the Talent. We Have the Ideas. But We&apos;re Working in
          Silos.
        </h2>

        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-paper/65">
          Nigeria&apos;s innovation ecosystem is growing fast — across
          FinTech, Agri-Tech, Manufacturing, Cybersecurity, and more. But
          our hubs, startups, and support organisations are largely
          disconnected from each other and from global best practices.
        </p>

        <p className="mt-6 font-display text-xl font-bold tracking-tight sm:text-2xl">
          NICE was built to change that.
        </p>
      </div>
    </section>
  );
}
