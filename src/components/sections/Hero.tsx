import { PrimaryButton, SecondaryButton } from '../ui/Button';

export function Hero() {
  return (
    <section className="hero-section" id="hero-section">
      {/* Background Layers */}
      <div className="hero-bg-layer" />
      <div className="absolute inset-0 grid-overlay opacity-90" />
      {/* <div className="film-grain" /> */}

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
      <div className="relative z-10 px-10 sm:px-10 md:px-16 lg:px-20 pb-20 sm:pb-16 md:pb-20  max-w-[700px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-[6px] h-[6px] bg-[#D9A441] rounded-full" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
            Visual Storytelling Studio · India
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(60px,9vw,108px)] font-light leading-[0.92] tracking-[-0.03em] text-[#F7F5F2] mb-8">
          Stories<br />
          <em style={{
            fontStyle: 'italic',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(217, 164, 65, 0.6)'
          }}>Beyond</em><br />
          Frames.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-[15px] font-light text-[#6B7280] max-w-[440px] leading-[1.7] mb-11" style={{ color: 'var(--mist)', fontSize: '14px', fontWeight: 300, lineHeight: 1.8, maxWidth: '380px', marginBottom: '52px', borderLeft: '1px solid rgba(217,164,65,0.25)', paddingLeft: '20px' }}>
          We don't capture photographs. We preserve the meaning behind moments — for the brands, creators, and families who refuse to settle for ordinary.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-6 flex-wrap">
          <PrimaryButton>Explore Our Work</PrimaryButton>
          <SecondaryButton>Watch Showreel</SecondaryButton>
        </div>
      </div>

    </section>
  );
}

export default Hero;
