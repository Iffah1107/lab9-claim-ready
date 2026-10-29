import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-muted border-t border-outline py-16">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Three Columns per DESIGN.md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-outline">
          
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-sans font-extrabold text-lg tracking-[-0.035em] text-secondary">
                CLAIM READY
              </span>
            </div>
            <p className="font-sans text-[14px] leading-[1.6] text-on-surface-variant max-w-sm">
              A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.
            </p>
          </div>

          {/* Column 2: Sections */}
          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-secondary mb-4">
              SECTIONS
            </h4>
            <ul className="space-y-2.5 text-[14px] font-sans text-on-surface-variant">
              <li>
                <a href="#who-this-is-for" className="hover:text-primary transition-colors">
                  Who This Is For
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-primary transition-colors">
                  15-Step Warranty Checklist
                </a>
              </li>
              <li>
                <a href="#if-refused" className="hover:text-primary transition-colors">
                  If The Claim Is Refused
                </a>
              </li>
              <li>
                <a href="#key-numbers" className="hover:text-primary transition-colors">
                  Key Numbers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ground Rule */}
          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-secondary mb-4">
              THE RULE
            </h4>
            <p className="font-mono text-[13px] leading-[1.6] text-on-surface bg-surface p-4 rounded-sm border border-outline shadow-input">
              &ldquo;If it is not in writing, it did not happen.&rdquo;
            </p>
          </div>

        </div>

        {/* Legal Line / Footer Note from content.txt */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-[0.16em] mr-2">
              FOOTER NOTE:
            </span>
            <span className="font-sans text-[13px] leading-[1.6] text-on-surface-variant">
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
            </span>
          </div>

          <div className="font-mono text-[12px] text-on-surface-muted whitespace-nowrap">
            &copy; {new Date().getFullYear()} Claim Ready
          </div>
        </div>

      </div>
    </footer>
  );
}

