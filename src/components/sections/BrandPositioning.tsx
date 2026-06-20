import React from 'react';
import { BookOpen } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface PositioningPair {
  left: string;
  right: string;
}

interface BrandPositioningProps {
  positioning: PositioningPair[];
}

export function BrandPositioning({ positioning }: BrandPositioningProps) {
  const philosophies = [
    ['Most photographers', 'capture moments.', 'LENSXPOSE', 'captures meaning.'],
    ['Most videographers', 'record events.', 'LENSXPOSE', 'creates cinematic narratives.'],
    ['Most agencies', 'sell packages.', 'LENSXPOSE', 'creates emotional experiences.'],
  ];

  const segments = [
    { seg: 'Corporate & Business', feel: '"This team understands business, not just cameras."' },
    { seg: 'Creators & Personal Brands', feel: '"This team can elevate my personal brand."' },
    { seg: 'Weddings & Celebrations', feel: '"I trust this team with the most important day of my life."' },
  ];

  const missionLines = [
    'Transform Moments Into Stories.',
    'Transform Stories Into Memories.',
    'Transform Memories Into Legacies.',
  ];

  return (
    <section>
      <div className="section-divider">
        <BookOpen className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Brand Positioning</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">08 / 09</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* The Duality */}
        <GlassPanel className="rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 bg-[#121212]/20">
            <p className="font-body text-xs text-[#D9A441] uppercase tracking-[0.2em]">The LENSXPOSE Duality</p>
          </div>
          {positioning.map((p, i) => (
            <div key={i} className="positioning-row px-6">
              <span className="font-display text-base text-[#F7F5F2] font-medium w-1/2">{p.left}</span>
              <span className="font-body text-[10px] text-[#D9A441] uppercase tracking-widest w-12 text-center shrink-0">vs</span>
              <span className="font-body text-sm text-[#6B7280] font-light w-1/2 text-right">{p.right}</span>
            </div>
          ))}
        </GlassPanel>

        {/* Philosophy */}
        <div className="space-y-4">
          <GlassPanel className="rounded-xl p-6">
            <p className="font-body text-[10px] text-[#D9A441] uppercase tracking-[0.2em] mb-4">Brand Philosophy</p>
            {philosophies.map(([a, b, c, d], i) => (
              <div key={i} className="mb-4 last:mb-0">
                <p className="font-body text-sm text-[#6B7280] font-light">{a} <em>{b}</em></p>
                <p className="font-display text-lg text-[#F7F5F2]">{c} <span className="text-[#D9A441]">{d}</span></p>
              </div>
            ))}
          </GlassPanel>

          {/* Target segments */}
          <GlassPanel className="rounded-xl p-6">
            <p className="font-body text-[10px] text-[#D9A441] uppercase tracking-[0.2em] mb-4">Target Segments</p>
            <div className="space-y-3">
              {segments.map(s => (
                <div key={s.seg} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441] mt-2 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-[#F7F5F2] font-medium mb-1">{s.seg}</p>
                    <p className="font-body text-xs text-[#6B7280] font-light italic">{s.feel}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* Mission Triplet */}
      <GlassPanel className="mt-8 rounded-xl p-8 text-center">
        <p className="font-body text-[10px] text-[#D9A441] uppercase tracking-[0.2em] mb-6">The Mission Triplet</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {missionLines.map((line, i) => (
            <React.Fragment key={line}>
              <p className="font-display text-xl md:text-2xl text-[#F7F5F2] font-light">{line}</p>
              {i < 2 && <div className="w-px h-8 bg-white/10 mx-8 hidden md:block" />}
            </React.Fragment>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}

export default BrandPositioning;
