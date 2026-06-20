const FOOTER_NAV = [
  {
    title: 'Work',
    links: [
      { label: 'Weddings', href: '#' },
      { label: 'Corporate', href: '#' },
      { label: 'Creators', href: '#' },
      { label: 'Commercial', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Photography', href: '#' },
      { label: 'Cinematography', href: '#' },
      { label: 'Brand Films', href: '#' },
      { label: 'Reels & Shorts', href: '#' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '#' },
      { label: 'Journal', href: '#' },
      { label: 'Process', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-16 pb-10 border-t border-white/[0.06]" id="footer">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-[32px] font-light tracking-[-0.04em] text-[#F7F5F2]">
              LensXpose<span className="text-[#D9A441]">.</span>
            </div>
            <p className="font-body text-[12px] text-[#6B7280] mt-1.5 tracking-[0.06em]">
              Transform Moments Into Legacies.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="flex flex-wrap gap-14">
            {FOOTER_NAV.map(col => (
              <div key={col.title}>
                <h4 className="font-body text-[10px] tracking-[0.22em] uppercase text-[#D9A441] mb-4">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5 list-none">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-body text-[13px] font-light text-[#6B7280] no-underline hover:text-[#F7F5F2] transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/[0.06] gap-4">
          <p className="font-body text-[11px] text-[#6B7280]/50 tracking-[0.1em]">
            © LENSXPOSE · Photography, Cinematography & Creative Production · India
          </p>
          <div className="flex gap-5">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="font-body text-[10px] tracking-[0.18em] uppercase text-[#6B7280] no-underline hover:text-[#D9A441] transition-colors duration-300 hover-target"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
