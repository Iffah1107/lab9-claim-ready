'use client';

import React from 'react';

const tickerItems = [
  'CLAIM READY',
  '15 STEPS IN THE CHECKLIST',
  '4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG',
  '1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN',
  'FREE GENERAL GUIDE',
  'A WARRANTY CLAIM IS DECIDED ON RECORDS',
  'KEEP YOURS, AND ASK FOR THEIRS IN WRITING',
];

export default function Ticker() {
  return (
    <div className="w-full bg-primary-soft border-b border-primary-border py-2.5 overflow-hidden select-none">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex items-center space-x-10 pr-10">
          {tickerItems.map((item, index) => (
            <div key={`ticker-1-${index}`} className="flex items-center space-x-3 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-ink font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Second set for seamless looping */}
        <div className="flex items-center space-x-10 pr-10" aria-hidden="true">
          {tickerItems.map((item, index) => (
            <div key={`ticker-2-${index}`} className="flex items-center space-x-3 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-ink font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

