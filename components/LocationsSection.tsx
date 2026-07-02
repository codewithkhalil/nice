/**
 * LocationsSection.tsx — SECTION 6: FOCUS SECTORS & LOCATIONS
 * Client copy: map visual of Nigeria or 3 location cards with sector icons.
 * Replaces the previous ScopeSection.tsx (which had different, deck-era
 * sector data — this client copy is the source of truth now).
 *
 * Usage: import LocationsSection from '@/components/LocationsSection';
 * Renders with id="locations".
 */

const LOCATIONS = [
  {
    pin: '📍',
    place: 'Kano',
    sector: 'Agri-Tech & Food Systems',
    body: 'Reducing post-harvest losses and building digital agriculture solutions.',
  },
  {
    pin: '📍',
    place: 'Aba, Abia State',
    sector: 'Light Manufacturing & Trade',
    body: 'Strengthening product standards, skills, and trade integration.',
  },
  {
    pin: '📍',
    place: 'Abuja (FCT)',
    sector: 'Cybersecurity',
    body: 'Building trust and security infrastructure for Nigeria\u2019s digital economy.',
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
          Starting in Three Locations. Built to Scale.
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <div key={loc.place} className="bg-ink-soft px-7 py-9">
              <div className="mb-4 text-2xl">{loc.pin}</div>
              <h3 className="font-display text-xl font-bold">{loc.place}</h3>
              <div className="mb-4 mt-1 font-mono text-xs uppercase tracking-[0.14em] text-indigo">
                {loc.sector}
              </div>
              <p className="font-body text-sm leading-relaxed text-paper/65">
                {loc.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-sm italic text-paper/50">
          More sectors — including Health, AI, Mining, and Green Economy —
          are mapped for future expansion.
        </p>
      </div>
    </section>
  );
}
