'use client';

import React, { useState, useEffect } from 'react';
import { Check, AlertTriangle, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import PillLabel from './PillLabel';

interface Step {
  id: number;
  numberStr: string;
  title: string;
  text: string;
}

const sectionBefore: Step[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Keep the invoice.',
    text: 'Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.',
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Register the product.',
    text: 'Many brands ask you to register on their website or app; some add extra warranty when you do.',
  },
  {
    id: 3,
    numberStr: '03',
    title: 'Read the warranty card once.',
    text: 'Note how long it lasts, what it covers, and what it excludes.',
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Record the condition.',
    text: 'Take a few dated photos of the product once it is installed or unboxed.',
  },
];

const sectionFault: Step[] = [
  {
    id: 5,
    numberStr: '05',
    title: 'Record the fault.',
    text: 'Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.',
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Raise the complaint in writing.',
    text: "Use email, the brand's website or its app, not only a phone call, so there is a record.",
  },
  {
    id: 7,
    numberStr: '07',
    title: 'Note every reference number.',
    text: 'Write down the complaint or ticket number, the date and the name of anyone you speak to.',
  },
];

const sectionTechnician: Step[] = [
  {
    id: 8,
    numberStr: '08',
    title: 'Ask for the job sheet.',
    text: 'Ask the technician for a copy of the visit report or job sheet before they leave.',
  },
  {
    id: 9,
    numberStr: '09',
    title: 'Ask what was tested.',
    text: 'Ask which test or instrument was used to reach the diagnosis.',
  },
  {
    id: 10,
    numberStr: '10',
    title: 'Take your own photos.',
    text: 'Photograph the product and anything the technician points to, during the visit.',
  },
];

const sectionRefused: Step[] = [
  {
    id: 11,
    numberStr: '11',
    title: 'Ask for the reason in writing.',
    text: 'Request a written explanation that names the exact cause and the evidence for it.',
  },
  {
    id: 12,
    numberStr: '12',
    title: 'Ask for the technical report.',
    text: 'If the refusal rests on an inspection, ask for that inspection report.',
  },
  {
    id: 13,
    numberStr: '13',
    title: 'Escalate inside the company.',
    text: 'Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.',
  },
  {
    id: 14,
    numberStr: '14',
    title: 'Keep it factual.',
    text: 'Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.',
  },
  {
    id: 15,
    numberStr: '15',
    title: 'Know your consumer helpline.',
    text: 'Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.',
  },
];

export default function ChecklistSection() {
  const [checkedSteps, setCheckedSteps] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('claim_ready_checked_steps');
      if (saved) {
        setCheckedSteps(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleStep = (id: number) => {
    setCheckedSteps((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('claim_ready_checked_steps', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;

  return (
    <div id="checklist">
      
      {/* Interactive Progress Bar */}
      <div className="sticky top-[72px] z-40 bg-surface-2/95 backdrop-blur-md border-b border-outline py-3 px-5 md:px-10">
        <div className="max-w-shell mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-on-surface-muted">
              CHECKLIST PROGRESS:
            </span>
            <span className="font-sans font-bold text-sm text-primary">
              {completedCount} OF 15 STEPS COMPLETED
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-64">
            <div className="w-full bg-outline rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300 rounded-full"
                style={{ width: `${(completedCount / 15) * 100}%` }}
              />
            </div>
            <span className="font-mono text-xs text-on-surface-variant font-medium">
              {Math.round((completedCount / 15) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 1: BEFORE ANYTHING GOES WRONG */}
      <section className="py-20 md:py-28 bg-white border-b border-outline">
        <div className="max-w-shell mx-auto px-5 md:px-10">
          <div className="mb-12">
            <PillLabel>CHECKLIST PART 1</PillLabel>
            <h2 className="mt-4 font-sans font-extrabold text-[31px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-secondary">
              BEFORE ANYTHING GOES WRONG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectionBefore.map((step) => {
              const isDone = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-300 ${
                    isDone
                      ? 'bg-primary-soft/40 border-primary-border shadow-card'
                      : 'bg-white border-outline shadow-card hover:-translate-y-0.5 hover:shadow-raised hover:border-outline-strong'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-primary-strong bg-primary-soft border border-primary-border px-3 py-1 rounded-full">
                      STEP {step.numberStr}
                    </span>

                    <button
                      type="button"
                      aria-label={`Toggle step ${step.id}`}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isDone
                          ? 'bg-primary text-white'
                          : 'border-2 border-outline-strong hover:border-primary text-transparent'
                      }`}
                    >
                      <Check size={14} strokeWidth={3} className={isDone ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </div>

                  <h3
                    className={`font-sans font-extrabold text-[20px] md:text-[23px] leading-[1.2] tracking-[-0.035em] mb-3 transition-colors ${
                      isDone ? 'text-primary-ink line-through opacity-85' : 'text-secondary'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="font-sans text-[16px] md:text-[17px] leading-[1.72] text-on-surface">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHEN THE FAULT APPEARS */}
      <section className="py-20 md:py-28 bg-surface-muted border-b border-outline">
        <div className="max-w-shell mx-auto px-5 md:px-10">
          <div className="mb-12">
            <PillLabel>CHECKLIST PART 2</PillLabel>
            <h2 className="mt-4 font-sans font-extrabold text-[31px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-secondary">
              WHEN THE FAULT APPEARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectionFault.map((step) => {
              const isDone = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-300 ${
                    isDone
                      ? 'bg-primary-soft/40 border-primary-border shadow-card'
                      : 'bg-white border-outline shadow-card hover:-translate-y-0.5 hover:shadow-raised hover:border-outline-strong'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-primary-strong bg-primary-soft border border-primary-border px-3 py-1 rounded-full">
                      STEP {step.numberStr}
                    </span>

                    <button
                      type="button"
                      aria-label={`Toggle step ${step.id}`}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isDone
                          ? 'bg-primary text-white'
                          : 'border-2 border-outline-strong hover:border-primary text-transparent'
                      }`}
                    >
                      <Check size={14} strokeWidth={3} className={isDone ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </div>

                  <h3
                    className={`font-sans font-extrabold text-[20px] md:text-[23px] leading-[1.2] tracking-[-0.035em] mb-3 transition-colors ${
                      isDone ? 'text-primary-ink line-through opacity-85' : 'text-secondary'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="font-sans text-[16px] md:text-[17px] leading-[1.72] text-on-surface">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHEN A TECHNICIAN VISITS */}
      <section className="py-20 md:py-28 bg-white border-b border-outline">
        <div className="max-w-shell mx-auto px-5 md:px-10">
          <div className="mb-12">
            <PillLabel>CHECKLIST PART 3</PillLabel>
            <h2 className="mt-4 font-sans font-extrabold text-[31px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-secondary">
              WHEN A TECHNICIAN VISITS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectionTechnician.map((step) => {
              const isDone = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-300 ${
                    isDone
                      ? 'bg-primary-soft/40 border-primary-border shadow-card'
                      : 'bg-white border-outline shadow-card hover:-translate-y-0.5 hover:shadow-raised hover:border-outline-strong'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-primary-strong bg-primary-soft border border-primary-border px-3 py-1 rounded-full">
                      STEP {step.numberStr}
                    </span>

                    <button
                      type="button"
                      aria-label={`Toggle step ${step.id}`}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isDone
                          ? 'bg-primary text-white'
                          : 'border-2 border-outline-strong hover:border-primary text-transparent'
                      }`}
                    >
                      <Check size={14} strokeWidth={3} className={isDone ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </div>

                  <h3
                    className={`font-sans font-extrabold text-[20px] md:text-[23px] leading-[1.2] tracking-[-0.035em] mb-3 transition-colors ${
                      isDone ? 'text-primary-ink line-through opacity-85' : 'text-secondary'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="font-sans text-[16px] md:text-[17px] leading-[1.72] text-on-surface">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: IF THE CLAIM IS REFUSED (DARK SECTION per DESIGN.md) */}
      <section id="if-refused" className="py-24 md:py-32 bg-secondary text-on-secondary border-b border-secondary">
        <div className="max-w-shell mx-auto px-5 md:px-10">
          
          <div className="mb-14">
            <PillLabel variant="dark">ESCALATION & DISPUTE PROTOCOL</PillLabel>
            <h2 className="mt-4 font-sans font-extrabold text-[31px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-white">
              IF THE CLAIM IS REFUSED
            </h2>
            <p className="mt-5 font-sans text-[17.5px] md:text-[20px] leading-[1.72] text-white/70 max-w-[62ch]">
              Do not argue on the phone. Follow these 5 structured escalation steps to obtain technical accountability and legal recourse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionRefused.map((step) => {
              const isDone = !!checkedSteps[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-300 ${
                    isDone
                      ? 'bg-primary/20 border-primary-bright/50 shadow-raised'
                      : 'bg-white/10 border-white/15 hover:bg-white/[0.14] hover:border-white/25 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="inline-flex items-center font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-primary-bright bg-white/10 border border-primary-bright/30 px-3 py-1 rounded-full">
                      STEP {step.numberStr}
                    </span>

                    <button
                      type="button"
                      aria-label={`Toggle step ${step.id}`}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isDone
                          ? 'bg-primary-bright text-secondary'
                          : 'border-2 border-white/40 hover:border-primary-bright text-transparent'
                      }`}
                    >
                      <Check size={14} strokeWidth={3} className={isDone ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </div>

                  <h3
                    className={`font-sans font-extrabold text-[20px] md:text-[23px] leading-[1.2] tracking-[-0.035em] mb-3 transition-colors ${
                      isDone ? 'text-primary-bright line-through opacity-85' : 'text-white'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="font-sans text-[16px] md:text-[17px] leading-[1.72] text-white/80">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

