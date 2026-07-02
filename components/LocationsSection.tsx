/**
 * LocationsSection.tsx — SECTION 6: FOCUS SECTORS & LOCATIONS
 * Updated per client corrections:
 *   - 5 pilot clusters (not 3): Kano, Abuja, Aba, Port Harcourt, Ogun
 *   - "Cyber Tech" — never "Cybersecurity" (client-mandated terminology)
 *   - Real Nigeria cluster-map image, cropped from the client's launch flier
 *
 * Usage: import LocationsSection from '@/components/LocationsSection';
 * Renders with id="locations".
 */

import Image from 'next/image';

const LOCATIONS = [
  {
    pin: '📍',
    place: 'Kano',
    sector: 'Agri-Tech & Agro-Processing',
    body: 'Reducing post-harvest losses and building digital agriculture solutions.',
  },
  {
    pin: '📍',
    place: 'Abuja (FCT)',
    sector: 'Cyber Tech',
    body: "Building trust and security infrastructure for Nigeria's digital economy.",
  },
  {
    pin: '📍',
    place: 'Aba, Abia State',
    sector: 'Light Manufacturing',
    body: 'Strengthening product standards, skills, and trade integration.',
  },
  {
    pin: '📍',
    place: 'Port Harcourt',
    sector: 'Health Tech',
    body: 'Advancing digital health solutions and care delivery infrastructure.',
  },
  {
    pin: '📍',
    place: 'Ogun State',
    sector: 'Manufacturing & Industrial Technology',
    body: 'Driving industrial innovation and technology-led production.',
  },
];

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          PILOT CLUSTERS
        </div>
        <h2 className="mb-14 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Five Locations. One Connected Ecosystem.
        </h2>

        {/* map image */}
        <div className="mb-14 flex justify-center overflow-hidden rounded-2xl border border-white/10 bg-ink-soft p-6">
          <div className="relative aspect-1277/1590 w-full max-w-md">
            <Image
              src="/flier.jpeg"
              alt="Map of Nigeria showing the five NICE pilot cluster locations connected by a coloured thread network"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 448px, 100vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {LOCATIONS.map((loc) => (
            <div key={loc.place} className="bg-ink-soft px-6 py-8">
              <div className="mb-4 text-2xl">{loc.pin}</div>
              <h3 className="font-display text-lg font-bold">{loc.place}</h3>
              <div className="mb-3 mt-1 font-mono text-xs uppercase tracking-[0.12em] text-indigo">
                {loc.sector}
              </div>
              <p className="font-body text-sm leading-relaxed text-paper/65">
                {loc.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
