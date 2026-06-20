import React from 'react';
import { MessageSquare } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface VoiceCase {
  label: string;
  wrong: string;
  right: string;
}

interface VoiceAndToneProps {
  voiceExamples: {
    do: VoiceCase[];
  };
}

export function VoiceAndTone({ voiceExamples }: VoiceAndToneProps) {
  const attributes = [
    { attr: 'Cinematic', desc: 'We speak in scenes, not features.' },
    { attr: 'Confident', desc: 'No hedging. Quiet authority.' },
    { attr: 'Intimate', desc: 'Feels like a trusted partner.' },
    { attr: 'Purposeful', desc: 'Every word earns its place.' },
  ];

  return (
    <section>
      <div className="section-divider">
        <MessageSquare className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Voice & Tone</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">07 / 09</span>
      </div>

      <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-10 max-w-2xl">
        LENSXPOSE speaks with quiet confidence — never selling, always inviting. The brand voice sells outcomes, not services. It speaks the client's language, not the photographer's.
      </p>

      {/* Voice Attributes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {attributes.map(v => (
          <GlassPanel key={v.attr} className="rounded-xl p-5 hover:border-[#D9A441]/15 transition-colors duration-300">
            <p className="font-display text-xl text-[#D9A441] mb-2">{v.attr}</p>
            <p className="font-body text-xs text-[#6B7280] leading-relaxed">{v.desc}</p>
          </GlassPanel>
        ))}
      </div>

      {/* Before / After */}
      <p className="font-body text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">Copy Transformation Examples</p>
      <div className="space-y-4">
        {voiceExamples.do.map((ex, i) => (
          <div key={i} className="voice-card grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#121212]/10 backdrop-blur-sm">
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="avoid-tag">✗ Generic</span>
                <span className="font-body text-[10px] text-[#6B7280] tracking-widest uppercase">{ex.label}</span>
              </div>
              <p className="font-body text-base text-[#6B7280] font-light line-through decoration-red-500/40">{ex.wrong}</p>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="use-tag">✓ LensXpose</span>
                <span className="font-body text-[10px] text-[#6B7280] tracking-widest uppercase">{ex.label}</span>
              </div>
              <p className="font-display text-lg text-[#F7F5F2] font-light">{ex.right}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VoiceAndTone;
