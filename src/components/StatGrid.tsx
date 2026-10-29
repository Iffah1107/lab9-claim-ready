import React from 'react';
import PillLabel from './PillLabel';

export default function StatGrid() {
  return (
    <section id="key-numbers" className="py-20 md:py-28 bg-surface-muted border-b border-outline">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Section Header Stack per DESIGN.md */}
        <div className="mb-12 md:mb-16">
          <PillLabel>KEY NUMBERS FOR THE PAGE</PillLabel>
          <h2 className="mt-4 font-sans font-extrabold text-[31px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-secondary">
            Essential metrics to guide your warranty claim
          </h2>
          <p className="mt-5 font-sans text-[17.5px] md:text-[20px] leading-[1.72] text-on-surface-variant max-w-[62ch]">
            Every step, record, and rule you need to know before dealing with customer service or technical inspections.
          </p>
        </div>

        {/* Stat Grid inside one rounded card with 1px hairline dividers */}
        <div className="bg-outline rounded-md p-[1px] grid grid-cols-1 md:grid-cols-3 gap-[1px] overflow-hidden shadow-card">
          
          {/* Cell 1: 15 Steps */}
          <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-surface-2 transition-colors">
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-on-surface-muted mb-6">
              CHECKLIST TOTAL
            </div>
            <div>
              <div className="font-sans font-extrabold text-[46px] md:text-[54px] leading-none tracking-[-0.035em] text-secondary tabular-nums">
                15
              </div>
              <div className="mt-3 font-sans text-[15px] md:text-[17px] font-medium text-on-surface">
                steps in the checklist.
              </div>
            </div>
          </div>

          {/* Cell 2: 4 Records */}
          <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-surface-2 transition-colors">
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-on-surface-muted mb-6">
              PREPARATION PHASE
            </div>
            <div>
              <div className="font-sans font-extrabold text-[46px] md:text-[54px] leading-none tracking-[-0.035em] text-secondary tabular-nums">
                4
              </div>
              <div className="mt-3 font-sans text-[15px] md:text-[17px] font-medium text-on-surface">
                records to keep before anything goes wrong.
              </div>
            </div>
          </div>

          {/* Cell 3: 1 Rule (HOT CELL in Emerald per DESIGN.md) */}
          <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-primary-soft/30 transition-colors">
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-primary-strong mb-6">
              THE GOLDEN STANDARD
            </div>
            <div>
              <div className="font-sans font-extrabold text-[46px] md:text-[54px] leading-none tracking-[-0.035em] text-primary tabular-nums">
                1
              </div>
              <div className="mt-3 font-sans text-[15px] md:text-[17px] font-medium text-on-surface">
                rule: if it is not in writing, it did not happen.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

