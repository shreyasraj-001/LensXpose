export function PhilosophyBreak() {
  return (
    <section className="py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Radial Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_50%_50%,rgba(217,164,65,0.04)_0%,transparent_70%)]" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <p className="font-display text-[clamp(28px,4.5vw,56px)] font-light italic leading-[1.2] tracking-[-0.01em] text-[#F7F5F2] mb-10">
          "Most photographers capture <em className="not-italic text-[#D9A441]">moments.</em>{' '}
          LENSXPOSE captures <em className="not-italic text-[#D9A441]">meaning.</em>"
        </p>
        <div className="w-10 h-px bg-[#D9A441]/25 mx-auto mb-4" />
        <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#6B7280]">
          The LENSXPOSE Difference
        </p>
      </div>
    </section>
  );
}

export default PhilosophyBreak;
