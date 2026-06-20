import React from 'react';
import { Grid } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface SpacingToken {
  name: string;
  value: string;
  token: string;
  use: string;
}

interface SpacingSystemProps {
  spacingScale: SpacingToken[];
}

export function SpacingSystem({ spacingScale }: SpacingSystemProps) {
  return (
    <section>
      <div className="section-divider">
        <Grid className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Spacing System</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">05 / 09</span>
      </div>

      <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-8 max-w-2xl">
        Based on a 4px base unit. Generous white space is a luxury signal — tighter spacing feels crowded and cheap. When in doubt, add more breathing room.
      </p>

      <div className="space-y-3">
        {spacingScale.map((s) => {
          const pxVal = parseInt(s.value);
          const maxPx = 128;
          const widthPct = Math.min((pxVal / maxPx) * 100, 100);
          return (
            <div key={s.name} className="flex items-center gap-5 py-3 border-b border-white/[0.03]">
              <div className="w-10 shrink-0">
                <span className="font-body text-[10px] text-[#D9A441] tracking-widest uppercase font-medium">{s.name}</span>
              </div>
              <div className="w-16 shrink-0">
                <span className="font-body text-sm text-[#F7F5F2] font-light">{s.value}</span>
              </div>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="spacing-bar-fill" style={{ width: `${widthPct}%` }} />
              </div>
              <div className="w-24 shrink-0">
                <span className="font-body text-[10px] text-[#6B7280] tracking-wider">{s.token}</span>
              </div>
              <div className="w-48 shrink-0 hidden md:block">
                <span className="font-body text-[10px] text-[#6B7280] leading-relaxed">{s.use}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid System */}
      <div className="mt-10">
        <p className="font-body text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">Layout Grid</p>
        <GlassPanel className="rounded-xl p-6">
          <div className="grid grid-cols-12 gap-2 mb-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-8 rounded"
                style={{
                  background: i % 3 === 0 ? 'rgba(217,164,65,0.12)' : 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Columns', value: '12' },
              { label: 'Gutter', value: '24px' },
              { label: 'Margin (desktop)', value: '64px' },
              { label: 'Margin (mobile)', value: '24px' },
              { label: 'Max content width', value: '1200px' },
            ].map(g => (
              <div key={g.label}>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest">{g.label}</p>
                <p className="font-body text-sm text-[#D9A441] font-medium mt-1">{g.value}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

export default SpacingSystem;
