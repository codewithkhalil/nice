/**
 * Footer.tsx
 * Socials block per client copy (Twitter/X: @thenesthub,
 * Instagram: @nesthubng, plus LinkedIn from the linked socials list).
 *
 * Usage: import Footer from '@/components/Footer';
 */

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 pb-8 pt-12 text-paper sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-lg font-bold">NICE</span>
          <span className="font-mono text-xs tracking-wide text-paper/60">
            Nigeria Innovation Cluster Exchange
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
            SOCIALS
          </span>
          <a
            href="https://www.linkedin.com/company/the-nest-innovation-park/"
            className="font-body text-paper no-underline hover:underline"
          >
            LinkedIn
          </a>
          <a href="https://x.com/nesthubng" className="font-body text-paper no-underline hover:underline">
            Twitter/X · @thenesthub
          </a>
          <a
            href="https://www.instagram.com/thenesthub"
            className="font-body text-paper no-underline hover:underline"
          >
            Instagram · @nesthubng
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 font-mono text-xs text-paper/60">
        A programme by the UK-Nigeria Tech Hub, an initiative of the
        Digital Access Programme (DAP) under the UK Government&apos;s
        Foreign, Commonwealth and Development Office (FCDO).
      </div>
    </footer>
  );
}
