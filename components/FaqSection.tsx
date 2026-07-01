'use client';

/**
 * FaqSection.tsx
 * Accordion FAQ pulled from NICE_FAQ.docx. Full 12-question set condensed
 * to the questions a prospective participant actually needs before
 * registering — cost, eligibility, backing, duration, what happens after.
 * (Sector list, "who's for", and expected results are already covered by
 * ScopeSection / ObjectivesGrid / OutcomesStats elsewhere on the page, so
 * they're left out here to avoid repeating the same content twice.)
 *
 * Usage: import FaqSection from '@/components/FaqSection';
 * Renders with id="faq".
 */

import { useState } from 'react';

const FAQS = [
  {
    q: 'What is NICE?',
    a: "A national platform that connects innovation clusters across Nigeria — innovators, hubs, ESOs, universities, investors, corporates, policymakers, and government agencies — to collaborate, share knowledge, and unlock growth together, rather than another standalone programme.",
  },
  {
    q: 'What problem does NICE solve?',
    a: 'Nigeria has no shortage of innovation — what has been missing is coordination. Hubs, startups, universities, and investors often work in isolation, causing duplicated effort, missed collaboration, and weak policy coordination. NICE creates a structured platform for coordinated action.',
  },
  {
    q: 'Is there a cost to join?',
    a: 'Participation in the NICE pilot is fully funded for selected participants. There are no participation fees.',
  },
  {
    q: 'How long does the programme run?',
    a: 'The pilot runs over several months, covering ecosystem mapping, stakeholder engagement, learning exchanges, and documentation. The long-term vision extends well beyond the pilot, into a sustaining national platform.',
  },
  {
    q: 'What does participation actually involve?',
    a: 'Ecosystem mapping, stakeholder dialogues, learning exchanges between clusters, workshops, collaborative problem-solving, policy engagement, networking, and showcasing initiatives — practical and action-oriented, not just attendance.',
  },
  {
    q: 'Who is backing this programme?',
    a: 'Implemented by The Nest Innovation Technology Park, in partnership with the UK Foreign, Commonwealth & Development Office (FCDO) through the Digital Access Programme, with support from the UK Tech Hub.',
  },
  {
    q: 'What happens after the pilot ends?',
    a: 'Insights and successful models from the pilot inform a long-term national innovation cluster framework — expanding to more states and sectors, and building a self-sustaining national community of practice.',
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
          FAQ
        </div>
        <h2 className="mb-14 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Before you register, the short answers.
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
