import React from 'react';
import { Layers } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export function SurfacesAndElevation() {
  const shadowTokens = [
    { name: 'shadow-sm', value: '0 2px 8px rgba(0,0,0,0.4)', label: 'Subtle lift' },
    { name: 'shadow-md', value: '0 8px 24px rgba(0,0,0,0.5)', label: 'Card hover' },
    { name: 'shadow-lg', value: '0 20px 48px rgba(0,0,0,0.65)', label: 'Elevated modal' },
    { name: 'shadow-gold', value: '0 12px 32px rgba(217,164,65,0.12)', label: 'CTA focus glow' },
  ];

  return (
    <section>
      <div className="section-divider">
        <Layers className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Surfaces & Elevation</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">04 / 09</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Level 0 */}
        <div
          className="hover-target elevation-card relative h-56 rounded-xl overflow-hidden flex flex-col justify-end p-6 bg-gradient-to-br from-[#121212]/30 to-[#050505]/90 backdrop-blur-md"
        >
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <span className="font-body text-[10px] text-[#D9A441] uppercase tracking-[0.2em] mb-2 relative z-10">Level 0 — Base</span>
          <h3 className="font-display text-xl text-[#F7F5F2] relative z-10 transition-colors duration-300">Cinematic Foundation</h3>
          <p className="font-body text-xs text-[#6B7280] mt-2 relative z-10 leading-relaxed">Background canvas. The stage on which everything else performs.</p>
          <p className="font-body text-[10px] text-[#6B7280]/50 mt-3 relative z-10 tracking-wider">#050505 → #121212</p>
        </div>

        {/* Level 1 */}
        <div
          className="hover-target elevation-card relative h-56 rounded-xl overflow-hidden flex flex-col justify-end p-6 bg-white/[0.02] backdrop-blur-[16px]"
        >
          <span className="font-body text-[10px] text-[#D9A441] uppercase tracking-[0.2em] mb-2">Level 1 — Card</span>
          <h3 className="font-display text-xl text-[#F7F5F2] transition-colors duration-300">Glass Studio Card</h3>
          <p className="font-body text-xs text-[#6B7280] mt-2 leading-relaxed">Cards, nav, modals. Floats 1 stop above the base using glassmorphism — never harsh borders.</p>
          <p className="font-body text-[10px] text-[#6B7280]/50 mt-3 tracking-wider">backdrop-filter: blur(16px)</p>
        </div>

        {/* Level 2 */}
        <div
          className="hover-target elevation-card relative h-56 rounded-xl overflow-hidden flex flex-col justify-end p-6 bg-white/[0.04] backdrop-blur-[24px]"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/30 to-transparent" />
          <span className="font-body text-[10px] text-[#D9A441] uppercase tracking-[0.2em] mb-2">Level 2 — Elevated</span>
          <h3 className="font-display text-xl text-[#F7F5F2] transition-colors duration-300">Premium Overlay</h3>
          <p className="font-body text-xs text-[#6B7280] mt-2 leading-relaxed">Dropdowns, tooltips, lightboxes. Gold top-border signals premium elevation.</p>
          <p className="font-body text-[10px] text-[#6B7280]/50 mt-3 tracking-wider">Gold hairline · blur(24px)</p>
        </div>
      </div>

      {/* Shadow Tokens */}
      <div className="mt-8">
        <p className="font-body text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">Shadow Tokens</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shadowTokens.map(s => (
            <GlassPanel key={s.name} className="rounded-lg p-4">
              <div
                className="w-full h-12 rounded bg-[#121212]/40 mb-3"
                style={{ boxShadow: s.value }}
              />
              <p className="font-body text-[10px] text-[#D9A441] tracking-wider font-medium">{s.name}</p>
              <p className="font-body text-[10px] text-[#6B7280] mt-1">{s.label}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SurfacesAndElevation;
