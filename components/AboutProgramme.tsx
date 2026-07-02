/**
 * AboutProgramme.tsx — SECTION 3: WHAT IS NICE
 * Client copy: two-column layout, icon/visual on one side, text on the
 * other. Replaces the previous ObjectivesGrid.tsx.
 *
 * Usage: import AboutProgramme from '@/components/AboutProgramme';
 */

export default function AboutProgramme() {
  return (
    <section className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* visual side */}
        <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-black/10 bg-ink">
          <svg viewBox="0 0 300 300" className="h-2/3 w-2/3" aria-hidden>
            <circle cx="90" cy="150" r="7" fill="#3d5aff" className="animate-nice-pulse" />
            <circle cx="90" cy="100" r="4" fill="rgba(61,90,255,0.55)" className="animate-nice-pulse" style={{ animationDelay: '0.15s' }} />
            <circle cx="90" cy="200" r="4" fill="rgba(61,90,255,0.55)" className="animate-nice-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="210" cy="150" r="7" fill="#ff3b30" className="animate-nice-pulse" style={{ animationDelay: '0.2s' }} />
            <circle cx="210" cy="100" r="4" fill="rgba(255,59,48,0.55)" className="animate-nice-pulse" style={{ animationDelay: '0.35s' }} />
            <circle cx="210" cy="200" r="4" fill="rgba(255,59,48,0.55)" className="animate-nice-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="90" y1="150" x2="210" y2="150" stroke="url(#about-wire)" strokeWidth="1.5" strokeDasharray="2 8" className="animate-nice-drift" />
            <defs>
              <linearGradient id="about-wire" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3d5aff" />
                <stop offset="100%" stopColor="#ff3b30" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* text side */}
        <div>
          <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
            ABOUT THE PROGRAMME
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            A New Model for Innovation in Nigeria.
          </h2>
          <p className="mb-6 font-body text-lg leading-relaxed text-ink/62">
            The Nigeria Innovation Cluster Exchange (NICE) is a structured
            pilot initiative that brings Nigerian innovation clusters
            together with United Kingdom innovation partners — for
            learning, collaboration, and building real solutions to real
            problems.
          </p>
          <p className="font-body text-lg leading-relaxed text-ink/62">
            NICE is implemented by{' '}
            <strong className="text-ink">The Nest Innovation Technology Park</strong>{' '}
            in partnership with the{' '}
            <strong className="text-ink">
              United Kingdom Foreign, Commonwealth &amp; Development Office (FCDO)
            </strong>{' '}
            through the{' '}
            <strong className="text-ink">Digital Access Programme</strong>, with
            support from the{' '}
            <strong className="text-ink">UK Tech Hub</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
