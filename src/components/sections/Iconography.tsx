import React from 'react';
import { Zap, Camera, Eye, ArrowRight } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface IconItem {
  name: string;
  icon: React.ReactNode;
  use: string;
}

interface IconographyProps {
  iconography: IconItem[];
}

export function Iconography({ iconography }: IconographyProps) {
  const iconRules = [
    {
      title: 'Gold Icon — Brand Moment',
      icon: <Camera size={24} className="text-[#D9A441]" strokeWidth={1.5} />,
      desc: 'Use for section headers, hero decorations, and the single icon that anchors a service or feature.',
    },
    {
      title: 'Mist Icon — Supporting UI',
      icon: <Eye size={24} className="text-[#6B7280]" strokeWidth={1.5} />,
      desc: 'Navigation items, secondary labels, metadata rows. Recedes from composition.',
    },
    {
      title: 'White Icon — Active / Action',
      icon: <ArrowRight size={24} className="text-[#F7F5F2]" strokeWidth={1.5} />,
      desc: 'Button arrows, interactive triggers, active nav state. High-contrast for clarity.',
    },
  ];

  return (
    <section>
      <div className="section-divider">
        <Zap className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Iconography</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">09 / 09</span>
      </div>

      <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-8 max-w-2xl">
        Use Lucide React icons at 1.5 stroke weight — never filled. Icons appear in Luxury Gold for brand moments, Platinum Mist for supporting UI, and Warm Ivory when paired with text labels.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {iconography.map(icon => (
          <div key={icon.name} className="icon-tile glass-panel">
            <div className="text-[#D9A441] flex justify-center mb-3">{icon.icon}</div>
            <p className="font-body text-xs text-[#F7F5F2] font-medium mb-1">{icon.name}</p>
            <p className="font-body text-[10px] text-[#6B7280] leading-relaxed">{icon.use}</p>
          </div>
        ))}
      </div>

      {/* Icon Usage Rules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {iconRules.map(rule => (
          <GlassPanel key={rule.title} className="rounded-xl p-6 hover:border-[#D9A441]/15 transition-colors duration-300">
            <div className="mb-4">{rule.icon}</div>
            <p className="font-body text-sm text-[#F7F5F2] font-medium mb-2">{rule.title}</p>
            <p className="font-body text-xs text-[#6B7280] leading-relaxed font-light">{rule.desc}</p>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}

export default Iconography;
