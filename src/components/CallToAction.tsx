'use client';

import React, { useState } from 'react';
import { Download, Share2, Check, Printer, FileDown } from 'lucide-react';
import PillLabel from './PillLabel';

export default function CallToAction() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;

    const shareData = {
      title: 'Claim Ready — Warranty Claim Checklist',
      text: 'A free checklist for anyone about to file a warranty claim. Keep your records and ask for theirs in writing.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (typeof window === 'undefined') return;

    // Direct printable view or download formatted text
    const checklistContent = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.`;

    const blob = new Blob([checklistContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'claim-ready-warranty-checklist.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="download" className="py-20 md:py-28 bg-white border-b border-outline">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Main CTA Callout Card per DESIGN.md */}
        <div className="bg-primary-soft border border-primary-border rounded-md p-8 sm:p-12 md:p-16 shadow-card text-center max-w-4xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <PillLabel>CALL TO ACTION</PillLabel>
          </div>

          <h2 className="font-sans font-extrabold text-[31px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-secondary max-w-2xl mx-auto">
            Be prepared before you ever need to file a claim.
          </h2>

          <div className="mt-8 space-y-4 max-w-xl mx-auto text-on-surface-variant font-sans text-[17.5px] md:text-[20px] leading-[1.72]">
            <p className="font-medium text-primary-ink">
              Download the checklist and keep it with your invoices.
            </p>
            <p className="text-on-surface">
              Share it with a friend who just bought something expensive.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-strong text-on-primary font-sans text-[15px] font-semibold px-8 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-300"
            >
              <FileDown size={18} />
              <span>Download Checklist (.TXT)</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-surface-2 text-on-surface-strong border border-outline font-sans text-[15px] font-semibold px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-all duration-300"
            >
              <Printer size={18} />
              <span>Print Checklist</span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2.5 bg-secondary hover:bg-primary text-on-secondary font-sans text-[15px] font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-primary-bright" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={18} />
                  <span>Share with a Friend</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

