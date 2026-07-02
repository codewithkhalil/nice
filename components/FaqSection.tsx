'use client';

/**
 * FaqSection.tsx — SECTION 10: FAQ
 * Reverted per client correction #3: "the FAQ questions used in the
 * initial site should be maintained" — this is the original 12-question
 * set from NICE__FAQ.docx, condensed into accordion format (full prose
 * preserved, just trimmed of repeated framing sentences for scannability).
 * Also carries the corrected "implemented by" language (correction #6)
 * and "Cybertech" terminology (correction #2), both already present
 * verbatim in the source FAQ doc.
 *
 * Usage: import FaqSection from '@/components/FaqSection';
 * Renders with id="faq".
 */

import { useState } from 'react';

const FAQS = [
  {
    q: 'What is NICE?',
    a: "A national platform designed to strengthen Nigeria's innovation ecosystem by connecting innovation clusters across the country — innovators, hubs, ESOs, universities, research institutions, investors, corporates, policymakers, development partners, and government agencies. Rather than another standalone programme, NICE is building a stronger, more connected ecosystem where every stakeholder can thrive together.",
  },
  {
    q: 'What problem does NICE solve?',
    a: 'Nigeria has no shortage of innovation — what has been missing is coordination. Hubs, startups, universities, and investors often do remarkable work in isolation, leading to duplicated effort, missed collaboration, limited access to investment, and weak policy coordination. NICE creates a structured platform for collaboration, knowledge exchange, and coordinated action.',
  },
  {
    q: 'Who is NICE for?',
    a: 'Innovation hubs, startup founders, ESOs, universities and research institutions, investors and VC firms, government MDAs, policymakers, corporates, development partners, and ecosystem builders. Whether you support, fund, regulate, or create innovation, NICE provides a platform for meaningful engagement.',
  },
  {
    q: 'What sectors are covered?',
    a: 'NICE takes a cluster-based approach across Agriculture & Agritech, Manufacturing, Artificial Intelligence, Cybertech, Digital Economy, HealthTech, Climate & Green Economy, Blue Economy, Creative & Cultural Industries, EdTech, FinTech, Circular Economy, Logistics & Mobility, and emerging technologies. Additional clusters may be added as the programme expands.',
  },
  {
    q: "What's in it for participants?",
    a: 'Cross-sector collaborations and strategic partnerships, increased visibility, knowledge exchange, connections to investors and policymakers, participation in ecosystem and policy dialogues, exposure to successful cluster models, joint project and funding opportunities, and a role in shaping Nigeria\u2019s national innovation agenda.',
  },
  {
    q: 'How long does the programme run?',
    a: 'The pilot phase runs over several months, covering ecosystem mapping, stakeholder engagement, learning exchanges, and documentation. The long-term vision extends well beyond the pilot into a sustaining national platform.',
  },
  {
    q: 'What does participation actually involve?',
    a: 'Ecosystem mapping, stakeholder dialogues, learning exchanges between clusters, workshops, collaborative problem-solving, policy engagement, networking, and showcasing initiatives — practical and action-oriented, not just attendance.',
  },
  {
    q: 'Is there a cost to join?',
    a: 'Participation in the NICE pilot is fully funded for selected participants. There are no participation fees.',
  },
  {
    q: 'Who is backing this programme?',
    a: 'NICE is implemented by The Nest Innovation Technology Park in partnership with the United Kingdom Foreign, Commonwealth & Development Office (FCDO) through the Digital Access Programme, with support from the UK Tech Hub — alongside Nigerian ecosystem stakeholders, public institutions, private sector organisations, and academia.',
  },
  {
    q: 'What happens after the pilot ends?',
    a: 'Insights and successful models from the pilot inform a long-term national innovation cluster framework — expanding to more states and sectors, strengthening regional clusters, and building a self-sustaining national community of practice.',
  },
  {
    q: 'What results is the programme aiming for?',
    a: 'Stronger collaboration between ecosystem stakeholders, better-connected clusters, increased knowledge sharing, improved coordination between government, academia, industry and innovators, and a more inclusive, globally competitive innovation ecosystem.',
  },
  {
    q: 'How do I get involved?',
    a: 'Email contactus@thenest.ng, call +234 809 055 4170, or visit www.thenest.ng.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-4.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2 className="mb-14 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Got Questions? We Have Answers.
        </h2>

        <ul className="m-0 list-none divide-y divide-white/10 border-y border-white/10 p-0">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold sm:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-xl text-paper/60 transition-transform duration-300 ${
                      open ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-6 font-body leading-relaxed text-paper/65">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
