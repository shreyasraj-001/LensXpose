import React from 'react';

export function Footer() {
  const swatchColors = [
    { name: 'Obsidian Noir', hex: '#050505' },
    { name: 'Graphite Studio', hex: '#121212' },
    { name: 'Luxury Gold', hex: '#D9A441' },
    { name: 'Warm Ivory', hex: '#F7F5F2' },
    { name: 'Accent White', hex: '#FFFFFF' },
    { name: 'Platinum Mist', hex: '#6B7280' },
  ];

  return (
    <footer className="max-w-6xl mx-auto px-8 md:px-16 mt-36 pt-12 border-t border-white/5 pb-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="font-display logo-lockup text-4xl font-light text-[#F7F5F2] mb-2">
            LensXpose<span className="logo-period">.</span>
          </h2>
          <p className="font-body text-xs text-[#6B7280] tracking-[0.15em] uppercase">Brand Guidelines · Version 3.0</p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-3">
          {swatchColors.map(({ name, hex }) => (
            <div key={hex} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-white/10" style={{ background: hex }} />
              <span className="font-body text-[10px] text-[#6B7280] tracking-wider">{name} · {hex}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="font-body text-[10px] text-[#6B7280]/40 tracking-widest uppercase mt-12">
        © LENSXPOSE · Photography, Cinematography & Creative Production · India
      </p>
    </footer>
  );
}

export default Footer;
