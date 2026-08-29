const CLIENTS = [
  "Bastian Garden City",
  "One8 Commune",
  "Cavore",
  "Sunburn Union",
  "Oia",
  "Kai",
  "Taj",
  "Mirage",
  "Pangeo",
  "Biergarten",
  "Social",
  "Kaze",
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
                className="group/client relative mx-8 font-display text-[18px] font-light text-gray-400 tracking-[0.04em] cursor-default select-none transition-colors duration-300 hover:text-yellow-400"
              >
                {name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 ease-out group-hover/client:w-full" />
              </span>
            ))}

            {/* Duplicate for seamless loop */}
            {CLIENTS.map((name, idx) => (
              <span
                key={`dup-${idx}`}
                className="group/client relative mx-8 font-display text-[18px] font-light text-gray-400 tracking-[0.04em] cursor-default select-none transition-colors duration-300 hover:text-yellow-400"
              >
                {name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 ease-out group-hover/client:w-full" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedLogos;
