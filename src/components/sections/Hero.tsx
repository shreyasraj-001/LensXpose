import { PrimaryButton } from '../ui/Button';

export function Hero() {
  return (
    <section className="hero-section" id="hero-section">
      {/* Background Layers */}
      <div className="hero-bg-layer" />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="film-grain" />

      {/* Film Strip — Right Side */}
      <div className="film-strip">
        <div className="film-cell">
          <span className="absolute bottom-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase text-[#D9A441]/50">
            Wedding · 2024
          </span>
        </div>
        <div className="film-cell">
          <span className="absolute bottom-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase text-[#D9A441]/50">
            Corporate · Brand Film
          </span>
        </div>
        <div className="film-cell">
          <span className="absolute bottom-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase text-[#D9A441]/50">
            Creator · Content
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 pb-20 max-w-[700px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-8 h-px bg-[#D9A441]" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
            Visual Storytelling Studio · India
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(60px,9vw,108px)] font-light leading-[0.92] tracking-[-0.03em] text-[#F7F5F2] mb-8">
          Stories<br />
          <em className="text-[#D9A441]">Beyond</em><br />
          Frames.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-[15px] font-light text-[#6B7280] max-w-[440px] leading-[1.7] mb-11">
          We don't capture photographs. We preserve the meaning behind moments — for the brands, creators, and families who refuse to settle for ordinary.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-6 flex-wrap">
          <PrimaryButton>Explore Our Work</PrimaryButton>
          <button className="btn-secondary flex items-center gap-2.5 bg-transparent border border-white/[0.06] text-[#F7F5F2] font-body text-[11px] tracking-[0.14em] uppercase px-9 py-4 hover-target">
            <span className="w-[18px] h-[18px] border border-current rounded-full flex items-center justify-center flex-shrink-0">
              <span className="w-0 h-0 border-l-[6px] border-l-current border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
            </span>
            Watch Showreel
          </button>
        </div>
      </div>

      {/* Stats — Bottom Right */}
      <div className="absolute bottom-20 right-6 md:right-12 z-10 flex gap-10">
        {[
          { value: '340', suffix: '+', label: 'Stories Told' },
          { value: '12', suffix: '+', label: 'Industries' },
          { value: '8', suffix: 'yr', label: 'Of Excellence' },
        ].map(stat => (
          <div key={stat.label} className="text-right">
            <div className="font-display text-[40px] font-light text-[#F7F5F2] leading-none">
              {stat.value}<span className="text-[#D9A441] text-2xl">{stat.suffix}</span>
            </div>
            <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[#6B7280] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator flex flex-col items-center gap-2">
        <span className="font-body text-[9px] tracking-[0.28em] uppercase text-[#6B7280]">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
