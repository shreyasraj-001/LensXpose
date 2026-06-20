import React from 'react';
import { Type } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface TypographyToken {
  role: string;
  size: string;
  weight: string;
  font: string;
  tracking: string;
  leading: string;
  example: string;
  note: string;
}

interface TypographyProps {
  typeScale: TypographyToken[];
}

export function Typography({ typeScale }: TypographyProps) {
  return (
    <section>
      <div className="section-divider">
        <Type className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Typography System</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">02 / 09</span>
      </div>

      {/* Font Specimens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <GlassPanel className="rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="use-tag">Display / Headings</span>
          </div>
          <p className="font-display text-5xl font-light text-[#F7F5F2] leading-none mb-4">
            Cormorant<br /><em>Garamond</em>
          </p>
          <p className="font-body text-xs text-[#6B7280] tracking-[0.2em] uppercase mb-4">Editorial Luxury Serif</p>
          <p className="font-display text-sm text-[#6B7280] font-light leading-relaxed">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 &amp; . , ; : ! ?
          </p>
        </GlassPanel>

        <GlassPanel className="rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="use-tag">Body / UI</span>
          </div>
          <p className="font-body text-4xl font-light text-[#F7F5F2] leading-none mb-2">Outfit</p>
          <p className="font-body text-2xl font-medium text-[#D9A441] leading-none mb-4">Sans-Serif</p>
          <p className="font-body text-xs text-[#6B7280] tracking-[0.2em] uppercase mb-4">Modern Geometric Sans</p>
          <p className="font-body text-sm text-[#6B7280] font-light leading-relaxed tracking-wide">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 &amp; . , ; : ! ?
          </p>
        </GlassPanel>
      </div>

      {/* Type Scale */}
      <p className="font-body text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">Type Scale</p>
      <div className="space-y-3">
        {typeScale.map((t, i) => (
          <div key={t.role} className="type-row p-5 flex flex-col md:flex-row md:items-center gap-4 bg-[#121212]/20 backdrop-blur-sm">
            <div className="md:w-48 shrink-0">
              <p className="font-body text-[10px] text-[#D9A441] tracking-[0.2em] uppercase font-medium mb-1">{t.role}</p>
              <p className="font-body text-[10px] text-[#6B7280] tracking-wider">{t.font}</p>
              <p className="font-body text-[10px] text-[#6B7280] tracking-wider">{t.size} · {t.weight}</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <p
                style={{
                  fontFamily: t.font === 'Cormorant Garamond' ? "'Cormorant Garamond', serif" : "'Outfit', sans-serif",
                  fontSize: i === 0 ? '36px' : i === 1 ? '28px' : i === 2 ? '22px' : i === 3 ? '11px' : i === 4 ? '16px' : '12px',
                  fontWeight: i === 0 ? 300 : i === 1 ? 400 : i === 2 ? 500 : i === 3 ? 500 : i === 4 ? 300 : 400,
                  letterSpacing: t.tracking,
                  lineHeight: t.leading,
                  color: i === 3 ? '#6B7280' : '#F7F5F2',
                  textTransform: i === 3 ? 'uppercase' : 'none',
                }}
                className="truncate"
              >
                {t.example}
              </p>
            </div>
            <div className="md:w-48 shrink-0">
              <p className="font-body text-[10px] text-[#6B7280] leading-relaxed">{t.note}</p>
              <p className="font-body text-[10px] text-[#6B7280] mt-1">LS: {t.tracking} · LH: {t.leading}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Typography;
