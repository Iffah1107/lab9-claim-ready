import React from 'react';
import Ticker from '@/components/Ticker';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatGrid from '@/components/StatGrid';
import ChecklistSection from '@/components/ChecklistSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface">
      {/* Ticker at the very top per DESIGN.md */}
      <Ticker />

      {/* Sticky Header with 72px height, logo, nav and button */}
      <Header />

      <main className="flex-1">
        {/* Hero Section with copy left and Headline Card right */}
        <Hero />

        {/* Key Numbers / Stat Grid inside rounded card with hairline dividers */}
        <StatGrid />

        {/* 15-Step Checklist broken down across its 4 sections */}
        <ChecklistSection />

        {/* Call to Action Section with download, print and share buttons */}
        <CallToAction />
      </main>

      {/* Footer with 3 columns and Footer Note */}
      <Footer />
    </div>
  );
}

