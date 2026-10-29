'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white/92 backdrop-blur-md border-b border-outline transition-all">
      <div className="max-w-shell mx-auto h-full px-5 md:px-10 flex items-center justify-between">
        {/* Logo Left: Mark plus ink wordmark */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary-soft transition-transform group-hover:scale-110" />
          <span className="font-sans font-extrabold text-xl md:text-2xl tracking-[-0.035em] text-secondary">
            CLAIM READY
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#who-this-is-for"
            className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            Who This Is For
          </a>
          <a
            href="#checklist"
            className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            Checklist
          </a>
          <a
            href="#if-refused"
            className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            If Refused
          </a>
          <a
            href="#key-numbers"
            className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            Key Numbers
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center justify-center bg-secondary text-on-secondary hover:bg-primary font-sans text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Download Checklist
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline px-5 py-6 shadow-card space-y-4 animate-in fade-in duration-200">
          <a
            href="#who-this-is-for"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-on-surface-variant hover:text-primary"
          >
            Who This Is For
          </a>
          <a
            href="#checklist"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-on-surface-variant hover:text-primary"
          >
            Checklist
          </a>
          <a
            href="#if-refused"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-on-surface-variant hover:text-primary"
          >
            If Refused
          </a>
          <a
            href="#key-numbers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-on-surface-variant hover:text-primary"
          >
            Key Numbers
          </a>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-secondary text-on-secondary hover:bg-primary font-sans text-[14px] font-medium py-3 rounded-full transition-colors"
            >
              Download Checklist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

