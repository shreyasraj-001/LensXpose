const CLIENTS = [
  'Novatech',
  'Celestia Hotels',
  'Meridian Brands',
  'Apex Studios',
  'Veritas Corp',
  'Luminary'
];

export function TrustedLogos() {
  return (
    <section className="py-4 px-4 md:px-12 border-b border-white/[0.06] overflow-hidden border-t-[1px] border-gray-400">
      <div className="max-w-[1400px] mx-auto">
        {/* Marquee wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {CLIENTS.map((name, idx) => (
              <span
                key={idx}
                className="mx-8 font-display text-[14px] font-light text-[#6B7280]/70 tracking-[0.04em] hover:text-[#6B7280]/90 transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {CLIENTS.map((name, idx) => (
              <span
                key={`dup-${idx}`}
                className="mx-8 font-display text-[18px] font-light text-[#6B7280]/70 tracking-[0.04em] hover:text-[#6B7280]/90 transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedLogos;
