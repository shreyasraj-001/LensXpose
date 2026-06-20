const SEGMENTS = [
  {
    icon: '🏢',
    label: 'Segment One',
    name: 'Corporate &\nBrands',
    desc: 'Build market authority through strategic visual storytelling that speaks the language of your industry.',
    services: ['Brand Films', 'Product Shoots', 'Employer Branding', 'Event Coverage'],
  },
  {
    icon: '✨',
    label: 'Segment Two',
    name: 'Creators &\nInfluencers',
    desc: 'Elevate your personal brand from content creator to cultural voice with cinematic production values.',
    services: ['Reels Production', 'YouTube Shorts', 'Brand Shoots', 'Social Content'],
  },
  {
    icon: '💍',
    label: 'Segment Three',
    name: 'Weddings &\nCelebrations',
    desc: 'Entrust your most irreplaceable day to a team that understands that some moments can only be lived once.',
    services: ['Cinematic Films', 'Drone Coverage', 'Pre-Wedding', 'Photography'],
  },
];

export function ClientSegments() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#121212] border-t border-b border-white/[0.06]" id="services">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#D9A441]" />
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
                Who We Serve
              </span>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F7F5F2]">
              Every story<br />deserves a<br />
              <em className="text-[#D9A441]">master narrator.</em>
            </h2>
          </div>
          <p className="text-[#6B7280] font-body text-[13px] font-light leading-[1.7] max-w-[280px] md:text-right">
            Three worlds. One commitment — to make every frame feel irreplaceable.
          </p>
        </div>

        {/* Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {SEGMENTS.map((seg, i) => (
            <div key={seg.label} className="segment-card hover-target">
              {/* Icon */}
              <div className="w-12 h-12 border border-[#D9A441]/25 flex items-center justify-center mb-7 text-xl">
                {seg.icon}
              </div>

              {/* Ghost Number */}
              <div className="absolute top-10 right-10 font-display text-[48px] font-light text-white/[0.03] leading-none">
                0{i + 1}
              </div>

              {/* Content */}
              <span className="font-body text-[9px] tracking-[0.22em] uppercase text-[#D9A441] block mb-2.5">
                {seg.label}
              </span>
              <h3 className="font-display text-[28px] font-light text-[#F7F5F2] mb-4 whitespace-pre-line leading-tight">
                {seg.name}
              </h3>
              <p className="font-body text-[13px] font-light text-[#6B7280] leading-[1.7] mb-7">
                {seg.desc}
              </p>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-1.5">
                {seg.services.map(s => (
                  <span
                    key={s}
                    className="font-body text-[9px] tracking-[0.12em] uppercase px-3 py-1.5 border border-white/[0.06] text-[#6B7280]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSegments;
