/**
 * CtaSection.tsx — SECTION 11: FINAL CTA
 * Client copy: full-width closing section, bold, warm, action-focused,
 * dark background. Contact details rendered here per copy; full socials
 * block lives in Footer.tsx directly below.
 *
 * Usage: import CtaSection from '@/components/CtaSection';
 * Renders with id="get-involved".
 */

export default function CtaSection() {
  return (
    <section
      id="get-involved"
      className="relative overflow-hidden bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-7 font-display text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-5xl lg:text-7xl">
          Ready to Build Nigeria&apos;s Innovation Future?
        </h2>

        <p className="mx-auto mb-11 max-w-xl font-body text-lg leading-relaxed text-paper/65">
          Whether you&apos;re a hub, a startup, a university, or a
          government agency — if you&apos;re building something that
          matters, NICE is for you.
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-3.5">
          <a
            href="#locations"
            className="inline-block rounded-[10px] bg-pulse px-8 py-4.5 font-display text-base font-bold text-ink"
          >
            Read More About Our Clusters
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 font-mono text-sm text-paper/70">
          <a href="mailto:contactus@thenest.ng" className="hover:underline">
            📧 contactus@thenest.ng
          </a>
          <a href="tel:+2348090554170" className="hover:underline">
            📞 +234 809 055 4170
          </a>
          <a href="https://www.thenest.ng" className="hover:underline">
            🌐 www.thenest.ng
          </a>
        </div>
      </div>
    </section>
  );
}
