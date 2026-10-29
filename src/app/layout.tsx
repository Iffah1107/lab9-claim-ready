import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CLAIM READY — Warranty Claim Checklist',
  description:
    'A free checklist for anyone about to file a warranty claim. Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.',
  keywords: ['warranty claim', 'consumer rights', 'checklist', 'claim ready', 'appliance warranty'],
  authors: [{ name: 'Claim Ready' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&family=Plus+Jakarta+Sans:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-on-surface antialiased selection:bg-primary-soft-2 selection:text-primary-ink">
        {children}
      </body>
    </html>
  );
}
