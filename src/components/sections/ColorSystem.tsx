import React from 'react';
import { Palette, CheckCircle2, Copy } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface ColorToken {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  usage: string;
  useCases: string[];
  avoid: string[];
  isDark: boolean;
}

interface ColorSystemProps {
  colors: ColorToken[];
  copiedHex: string | null;
  onCopy: (hex: string) => void;
}

export function ColorSystem({ colors, copiedHex, onCopy }: ColorSystemProps) {
  const combinations = [
    { bg: '#050505', text: '#F7F5F2', label: 'Hero Text', score: 'AAA' },
    { bg: '#050505', text: '#D9A441', label: 'Gold on Black', score: 'AA' },
    { bg: '#121212', text: '#F7F5F2', label: 'Card Text', score: 'AAA' },
    { bg: '#D9A441', text: '#050505', label: 'Gold CTA', score: 'AAA' },
  ];

  return (
    <section>
      <div className="section-divider">
        <Palette className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Color System</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">01 / 09</span>
      </div>

      <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-10 max-w-2xl">
        Five official brand colors plus one extended neutral. The palette is deliberately cold and cinematic — Luxury Gold is the only warmth, making every use of it feel earned. Think of gold as light entering a dark room.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {colors.map((color) => (
          <GlassPanel
            key={color.hex}
            className="hover-target color-card"
          >
            {/* Swatch */}
            <div
              className="color-swatch h-36 w-full relative flex items-center justify-center overflow-hidden cursor-pointer"
              style={{ backgroundColor: color.hex }}
              onClick={() => onCopy(color.hex)}
            >
              <div className={`opacity-0 hover:opacity-100 transition-opacity duration-400 flex items-center gap-2 ${color.isDark ? 'text-white/80' : 'text-black/70'} font-body text-xs tracking-widest uppercase`}>
                {copiedHex === color.hex ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedHex === color.hex ? 'Copied!' : 'Copy Hex'}
              </div>
              {/* Color code watermark */}
              <span className={`absolute bottom-3 right-4 font-body text-xs font-medium tracking-widest ${color.isDark ? 'text-white/10' : 'text-black/10'}`}>
                #{color.hex.replace('#', '')}
              </span>
            </div>

            {/* Info */}
            <div className="p-5 bg-[#121212]/40 backdrop-blur-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-body font-medium text-base text-[#F7F5F2]">{color.name}</h3>
                <button
                  onClick={() => onCopy(color.hex)}
                  className="hover-target font-body text-[#D9A441] text-xs tracking-widest font-medium"
                >
                  {color.hex}
                </button>
              </div>

              {/* Values */}
              <div className="flex gap-3 mb-3">
                <span className="font-body text-[10px] text-[#6B7280] tracking-wider">RGB {color.rgb}</span>
                <span className="font-body text-[10px] text-[#6B7280] tracking-wider">HSL {color.hsl}</span>
              </div>

              <p className="font-body text-xs text-[#6B7280] leading-relaxed mb-4 font-light">{color.usage}</p>

              {/* Use cases */}
              <div className="mb-3">
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-[0.15em] mb-2">Use for</p>
                <div className="flex flex-wrap gap-1.5">
                  {color.useCases.map(u => <span key={u} className="use-tag">{u}</span>)}
                </div>
              </div>

              {/* Avoid */}
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-[0.15em] mb-2">Avoid</p>
                <div className="flex flex-wrap gap-1.5">
                  {color.avoid.map(a => <span key={a} className="avoid-tag">{a}</span>)}
                </div>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>

      {/* Color Combinations */}
      <div className="mt-10">
        <p className="font-body text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">Approved Color Combinations</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {combinations.map(combo => (
            <div key={combo.label} className="rounded-lg overflow-hidden border border-white/5">
              <div
                className="h-20 flex flex-col items-center justify-center px-4"
                style={{ backgroundColor: combo.bg }}
              >
                <span className="font-display text-lg" style={{ color: combo.text }}>Aa</span>
                <span className="font-body text-xs mt-1" style={{ color: combo.text, opacity: 0.6 }}>
                  {combo.label}
                </span>
              </div>
              <div className="bg-[#121212]/80 px-3 py-2 flex justify-between items-center border-t border-white/5">
                <span className="font-body text-[10px] text-[#6B7280] tracking-wider">{combo.label}</span>
                <span className="font-body text-[10px] text-[#D9A441] tracking-widest font-medium">WCAG {combo.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ColorSystem;
