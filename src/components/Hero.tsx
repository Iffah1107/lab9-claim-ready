'use client';

import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import PillLabel from './PillLabel';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-white border-b border-outline">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (55% on desktop: lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <PillLabel>CLAIM READY</PillLabel>
            </div>

            <h1 className="font-sans font-extrabold text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.06] tracking-[-0.035em] text-secondary text-balance">
              A free checklist for anyone about to file a warranty claim.
            </h1>

            {/* WHO THIS IS FOR Section Callout */}
            <div id="who-this-is-for" className="pt-2">
              <div className="text-[12px] font-mono uppercase tracking-[0.16em] text-primary-strong font-semibold mb-2">
                WHO THIS IS FOR
              </div>
              <p className="font-sans text-[18px] md:text-[20px] leading-[1.72] text-on-surface-variant max-w-[62ch]">
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#checklist"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-strong text-on-primary font-sans text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore the 15 Steps</span>
                <ArrowDown size={18} />
              </a>

              <a
                href="#download"
                className="inline-flex items-center gap-2 bg-white hover:bg-surface-muted text-on-surface-strong border border-outline font-sans text-[15px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Download Checklist</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Side (Headline Card from DESIGN.md) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-secondary text-primary-bright p-8 sm:p-10 shadow-raised scanlines border border-secondary overflow-hidden">
              {/* Subtle radial decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <PillLabel variant="dark">
                    THE IDEA IN ONE LINE
                  </PillLabel>
                  <ShieldCheck size={20} className="text-primary-bright/80" />
                </div>

                <blockquote className="font-mono text-[20px] sm:text-[23px] md:text-[25px] leading-[1.4] font-medium tracking-tight text-white">
                  &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-mono">
                  <span className="flex items-center gap-2">
                    <FileText size={14} className="text-primary-bright" />
                    <span>GROUND RULE</span>
                  </span>
                  <span className="tracking-[0.16em] uppercase text-primary-bright font-semibold">
                    FACTS IN WRITING
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

