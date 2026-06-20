import React from 'react';
import { Camera } from 'lucide-react';

export function Header() {
  const sections = [
    'Color System',
    'Typography',
    'Interactive Elements',
    'Surfaces & Elevation',
    'Spacing',
    'Logo Usage',
    'Voice & Tone',
    'Brand Positioning',
    'Iconography'
  ];

  return (
    <header className="border-b border-white/5 pt-20 pb-16 px-8 md:px-16 relative overflow-hidden grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 text-[#D9A441] mb-8">
          <Camera size={22} strokeWidth={1.5} />
          <span className="font-body tracking-[0.25em] uppercase text-xs font-medium">Brand Guidelines · Version 3.0</span>
        </div>

        <h1 className="font-display logo-lockup text-6xl md:text-9xl font-light mb-3 text-[#F7F5F2]">
          LensXpose<span className="logo-period">.</span>
        </h1>
        <p className="font-display text-xl md:text-2xl italic text-[#D9A441] font-light mb-8 tracking-wide">
          Transform Moments Into Legacies.
        </p>
        <p className="font-body text-[#6B7280] text-base md:text-lg max-w-3xl font-light leading-relaxed">
          A complete design system for India's most trusted creative storytelling studio. Every token, rule, and example here exists to support one objective: make every visitor feel they've found the only team they'd trust with their most important story.
        </p>

        {/* Index Nav */}
        <div className="mt-12 flex flex-wrap gap-6">
          {sections.map((label) => (
            <div key={label} className="flex items-center gap-2 group hover-target">
              <div className="nav-dot active" />
              <span className="font-body text-xs tracking-[0.12em] uppercase text-[#6B7280] group-hover:text-[#D9A441] transition-colors duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
