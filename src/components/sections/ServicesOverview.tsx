const PROCESS_STEPS = [
  {
    label: 'Discovery',
    title: 'Understand the story',
    desc: 'We begin not with a camera, but with a conversation — understanding your world, your audience, and the meaning you want to preserve.',
  },
  {
    label: 'Creative Direction',
    title: 'Craft the vision',
    desc: 'From shot lists to mood boards, every production begins with a deliberate creative blueprint built around your unique narrative.',
  },
  {
    label: 'Production',
    title: 'Execute with mastery',
    desc: 'On-set, we are invisible. Our team moves with purpose so that the story unfolds naturally — never directed, always true.',
  },
  {
    label: 'Delivery',
    title: 'Deliver a legacy',
    desc: 'Final deliverables are refined to the last detail — color-graded, sequenced, and packaged to live forever across every platform.',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="about">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[#D9A441]" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#D9A441]">
            How We Work
          </span>
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F7F5F2] mb-16">
          A process as intentional<br />as the <em className="text-[#D9A441]">story itself.</em>
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.06]">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.label} className="bg-[#050505] p-8 md:p-10 relative hover-target group">
              {/* Connector Line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 w-px h-10 bg-gradient-to-b from-[#D9A441] to-transparent" />
              )}
              <span className="font-body text-[9px] tracking-[0.22em] uppercase text-[#D9A441] block mb-3">
                {step.label}
              </span>
              <h3 className="font-display text-[22px] font-light text-[#F7F5F2] mb-3 group-hover:text-[#D9A441] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-body text-[12px] font-light text-[#6B7280] leading-[1.7]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
