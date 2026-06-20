const CLIENTS = ['Novatech', 'Celestia Hotels', 'Meridian Brands', 'Apex Studios', 'Veritas Corp', 'Luminary'];

export function TrustedLogos() {
  return (
    <section className="py-20 px-6 md:px-12 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#6B7280] text-center mb-10">
          Trusted by brands across India
        </p>
        <div className="flex justify-center items-center gap-10 md:gap-14 flex-wrap">
          {CLIENTS.map(name => (
            <span
              key={name}
              className="font-display text-[18px] font-light text-[#6B7280]/35 tracking-[0.04em] hover:text-[#6B7280]/65 transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedLogos;
