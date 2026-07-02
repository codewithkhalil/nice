/**
 * PartnersSection.tsx — SECTION 9: PARTNERS & CREDIBILITY
 * Client copy: "Logo strip or partner card grid. Clean, minimal."
 * Three confirmed logo assets from the client's brand pack:
 *   - The Nest (Nigeria Lead)
 *   - UK Nigeria Tech Hub (UK Lead / delivery partner)
 *   - UK International Development (funder)
 * The remaining named partners (Innovate UK/ONDI, NITDA, ONSA, Bayero,
 * University of Abuja, Manchester Innovation Factory, Bristol Innovations)
 * had no logo files in the client's asset pack, so they're listed as text
 * underneath the logo strip rather than guessed at with placeholder marks.
 *
 * Usage: import PartnersSection from '@/components/PartnersSection';
 */

import Image from 'next/image';

const LOGOS = [
  {
    name: 'The Nest Innovation Technology Park',
    role: 'Nigeria Lead',
    src: '/the-nest.jpg',
    width: 674,
    height: 290,
  },
  {
    name: 'UK Nigeria Tech Hub',
    role: 'UK Lead',
    src: '/uk-nigeria-tech-hub.jpg',
    width: 1250,
    height: 474,
  },
  {
    name: 'UK International Development',
    role: 'Funder',
    src: '/uk-international-development.jpg',
    width: 720,
    height: 220,
  },
];

const OTHER_PARTNERS = [
  'Innovate UK / ONDI',
  'NITDA & ONSA',
  'Bayero University Kano',
  'University of Abuja',
  'Manchester Innovation Factory',
  'Bristol Innovations',
];

export default function PartnersSection() {
  return (
    <section className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
          BACKED BY
        </div>
        <h2 className="mb-14 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Strong Partnerships. Serious Institutions.
        </h2>

        {/* logo strip */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-black/10 bg-white px-8 py-10"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                {logo.role}
              </span>
            </div>
          ))}
        </div>

        {/* additional named partners without logo assets */}
        <div className="mt-14 border-t border-black/10 pt-10">
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-ink/50">
            With additional support from
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {OTHER_PARTNERS.map((p) => (
              <span key={p} className="font-body text-sm text-ink/62">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
