import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reels', href: '#reels' },
  { label: 'Journal', href: '#journal' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-sticky" id="nav-header">
      <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1400px] mx-auto">
        {/* Logo */}
        <a href="#" className="font-display text-[26px] font-light tracking-[-0.04em] text-[#F7F5F2] hover-target">
          LensXpose<span className="text-[#D9A441]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-[11px] tracking-[0.18em] uppercase text-[#6B7280] no-underline hover:text-[#F7F5F2] transition-colors duration-300 hover-target"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block btn-secondary bg-transparent border border-[#D9A441] text-[#D9A441] font-body text-[11px] tracking-[0.14em] uppercase px-6 py-2.5 hover-target">
          Start a Project
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#F7F5F2] hover-target"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 px-6 pb-6 bg-[#050505]/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-4 pt-4 list-none">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-[13px] tracking-[0.14em] uppercase text-[#6B7280] no-underline hover:text-[#F7F5F2] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full btn-secondary bg-transparent border border-[#D9A441] text-[#D9A441] font-body text-[11px] tracking-[0.14em] uppercase px-6 py-3">
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
