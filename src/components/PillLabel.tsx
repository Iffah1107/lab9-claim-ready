import React from 'react';

interface PillLabelProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  hasDot?: boolean;
  className?: string;
}

export default function PillLabel({
  children,
  variant = 'light',
  hasDot = true,
  className = '',
}: PillLabelProps) {
  if (variant === 'dark') {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-primary-bright/40 text-primary-bright font-mono text-[10px] font-medium uppercase tracking-[0.16em] ${className}`}
      >
        {hasDot && <span className="w-1.5 h-1.5 rounded-full bg-primary-bright inline-block" />}
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary-border text-primary-ink font-mono text-[10px] font-medium uppercase tracking-[0.16em] ${className}`}
    >
      {hasDot && <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
      {children}
    </span>
  );
}

