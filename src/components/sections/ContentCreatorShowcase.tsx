import { Play } from 'lucide-react';
import { SecondaryButton } from '../ui/Button';

const REELS = [
  {
    id: 'reel-1',
    platform: 'Instagram Reel',
    title: 'Lifestyle × Fashion — Riya Kapoor',
    gradient: 'linear-gradient(170deg, #1a1208, #050505)',
  },
  {
    id: 'reel-2',
    platform: 'YouTube Short',
    title: 'Product Launch — Meridian Essentials',
    gradient: 'linear-gradient(170deg, #0d1219, #050505)',
  },
  {
    id: 'reel-3',
    platform: 'Instagram Reel',
    title: 'Travel Diary — @wanderwitharjun',
    gradient: 'linear-gradient(170deg, #12100d, #050505)',
  },
  {
    id: 'reel-4',
    platform: 'Brand Film',
    title: 'Celestia Hotels — A Stay Story',
    gradient: 'linear-gradient(170deg, #0d1912, #050505)',
  },
];

export function ContentCreatorShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="reels">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[#D9A441]" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
            Creator Content
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F7F5F2]">
            Content that<br />stops the scroll.
          </h2>
          <SecondaryButton>View All Reels</SecondaryButton>
        </div>

        {/* Vertical Reel Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {REELS.map(reel => (
            <div key={reel.id} className="reel-card hover-target">
              <div className="reel-card-bg" style={{ background: reel.gradient }}>
                <div className="reel-play">
                  <Play size={16} className="text-[#F7F5F2] ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#D9A441] block mb-1">
                  {reel.platform}
                </span>
                <span className="font-body text-[12px] font-light text-[#F7F5F2] leading-[1.4]">
                  {reel.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentCreatorShowcase;
