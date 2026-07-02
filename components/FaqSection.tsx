'use client';

/**
 * FaqSection.tsx — SECTION 10: FAQ
 * Client copy: accordion/collapsible format, placed toward the bottom of
 * the page before the final CTA. Exact Q&As per the client's landing page
 * copy doc (supersedes the earlier draft pulled from NICE_FAQ.docx).
 *
 * Usage: import FaqSection from '@/components/FaqSection';
 * Renders with id="faq".
 */

import { useState } from 'react';

const FAQS = [
  {
    q: 'What is NICE?',
    a: 'A pilot programme connecting Nigerian innovation clusters with UK counterparts for knowledge exchange, expert mentorship, and joint prototyping — led by The Nest, UK Tech Hub, and ONDI.',
  },
  {
    q: 'Who is it for?',
    a: 'ESOs, innovation hubs, startups, SMEs, research institutions, and state agencies working in or around key innovation sectors in Nigeria.',
  },
  {
    q: 'Does it cost anything to participate?',
    a: 'No. There is no participation fee. NICE is funded through The Nest, UK Tech Hub, and programme partners.',
  },
  {
    q: 'What sectors are covered?',
    a: 'The pilot focuses on Agri-Tech (Kano), Light Manufacturing (Aba), and Cybersecurity (Abuja). Other sectors are mapped for future expansion.',
  },
  {
    q: 'How long is the programme?',
    a: 'NICE is a 6-month pilot programme.',
  },
  {
    q: 'What does participation involve?',
    a: 'Being onboarded into a cluster, joining virtual expert clinics, hosting or visiting an Expert-in-Residence, and participating in an in-person innovation sprint.',
  },
  {
    q: 'What happens after the pilot?',
    a: 'Each cluster sets up its own governance — a Coordinator and Council — ensuring the network and momentum continue independently.',
  },
  {
    q: 'Who is backing this programme?',
    a: 'The Nest Innovation Technology Park, UK Tech Hub, Innovate UK/ONDI, NITDA, ONSA, and leading Nigerian and UK universities.',
  },
  {
    q: 'How do I get involved?',
    a: 'Send us an email, give us a call, or fill in the interest form on this page. Details below.',
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
