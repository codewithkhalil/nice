import Image from 'next/image';

const reveal = (delay: string) =>
  `starting:opacity-0 starting:translate-y-4 opacity-100 translate-y-0 transition-all duration-700 ${delay}`;

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden bg-ink text-paper">
      {/* background photo */}
      <Image
        src={'/hero.webp'}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* dark scrim — keeps headline/nav legible over any photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"
      />

      {/* faint grid accent, on top of the scrim */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(245,243,237,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(245,243,237,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_30%,black_40%,transparent_78%)]"
      /> */}

      <nav className="relative z-10 flex items-center justify-between px-5 pt-7 sm:px-8 lg:px-16 gap-2">
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2.5 w-2.5 shrink-0 animate-nice-pulse rounded-full bg-pulse shadow-[0_0_0_3px_rgba(57,255,136,0.18)]" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
            The Nest Innovation Park × UK Tech Hub × ONDI
          </span>
        </div>
        <a
          href="#get-involved"
          className="rounded-full whitespace-nowrap border border-white/10 px-4.5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-white/5"
        >
          Get Involved
        </a>
      </nav>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-2 pt-12 sm:px-8 lg:px-16">
        <div className={`mb-5 font-mono text-xs uppercase tracking-[0.14em] text-pulse ${reveal('')}`}>
          NICE — PILOT PROGRAMME · 6 MONTHS · NG ⇄ UK
        </div>

        <h1
          className={`max-w-4xl font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl ${reveal(
            'delay-[80ms]'
          )}`}
        >
          Nigeria&apos;s innovators are{' '}
          <span className="bg-gradient-to-r from-indigo to-signal bg-clip-text text-transparent">
            stronger together.
          </span>
        </h1>

        <p
          className={`mt-7 max-w-xl font-body text-base leading-relaxed text-paper/80 sm:text-lg lg:text-xl ${reveal(
            'delay-[180ms]'
          )}`}
        >
          NICE is a pilot programme connecting Nigeria&apos;s innovation
          clusters with the United Kingdom — for knowledge, expertise, and
          co-created solutions.
        </p>

        <div className={`mt-10 flex flex-wrap gap-3.5 ${reveal('delay-[260ms]')}`}>
          <a
            href="#get-involved"
            className="inline-block rounded-[10px] bg-pulse px-7 py-4 font-display text-base font-bold text-ink w-full sm:w-auto text-center"
          >
            Get Involved
          </a>
          <a
            href="#locations"
            className="inline-block rounded-[10px] border border-white/30 px-7 py-4 font-display text-base font-bold text-paper backdrop-blur-sm w-full sm:w-auto text-center"
          >
            Read More About Our Clusters
          </a>
        </div>
      </div>

      {/* signature node graph — sits on top of the photo/scrim */}
      <div className="relative z-[1] w-full px-5 sm:px-8 lg:px-16">
        <svg
          viewBox="0 0 1200 160"
          width="100%"
          height="160"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden
          className="block"
        >
          <defs>
            <linearGradient id="wire-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3d5aff" />
              <stop offset="100%" stopColor="#ff3b30" />
            </linearGradient>
          </defs>

          <line
            x1="140"
            y1="80"
            x2="1060"
            y2="80"
            stroke="url(#wire-grad)"
            strokeWidth="1.5"
            strokeDasharray="2 10"
            className="animate-nice-drift"
          />

          {[
            [90, 50],
            [140, 80],
            [95, 112],
            [60, 78],
          ].map(([cx, cy], i) => (
            <circle
              key={`ng-${i}`}
              cx={cx}
              cy={cy}
              r={i === 1 ? 7 : 4.5}
              fill={i === 1 ? '#3d5aff' : 'rgba(61,90,255,0.55)'}
              className="animate-nice-pulse"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: `${2 + i * 0.3}s` }}
            />
          ))}
          <text x="100" y="140" textAnchor="middle" fill="rgba(245,243,237,0.75)" className="font-mono text-[11px] tracking-[0.12em]">
            NG CLUSTERS
          </text>

          {[
            [1110, 50],
            [1060, 80],
            [1105, 112],
            [1140, 78],
          ].map(([cx, cy], i) => (
            <circle
              key={`uk-${i}`}
              cx={cx}
              cy={cy}
              r={i === 1 ? 7 : 4.5}
              fill={i === 1 ? '#ff3b30' : 'rgba(255,59,48,0.55)'}
              className="animate-nice-pulse"
              style={{ animationDelay: `${i * 0.25}s`, animationDuration: `${2.2 + i * 0.3}s` }}
            />
          ))}
          <text x="1100" y="140" textAnchor="middle" fill="rgba(245,243,237,0.75)" className="font-mono text-[11px] tracking-[0.12em]">
            UK CLUSTERS
          </text>
        </svg>
      </div>
    </section>
  );
}