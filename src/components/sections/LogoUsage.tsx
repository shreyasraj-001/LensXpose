import React from 'react';
import { Camera } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';

export interface LogoRule {
  rule: string;
  detail: string;
}

interface LogoUsageProps {
  logoRules: LogoRule[];
}

export function LogoUsage({ logoRules }: LogoUsageProps) {
  return (
    <section>
      <div className="section-divider">
        <Camera className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Logo Usage</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">06 / 09</span>
      </div>

      {/* Logo Lockups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {/* Dark background */}
        <div className="rounded-xl border border-white/5 overflow-hidden">
          <div className="h-36 flex items-center justify-center" style={{ background: '#050505' }}>
            <span className="font-display logo-lockup text-3xl text-[#F7F5F2]">
              LensXpose<span className="logo-period">.</span>
            </span>
          </div>
          <div className="bg-[#121212]/40 backdrop-blur-md px-4 py-3 flex justify-between border-t border-white/5">
            <span className="font-body text-[10px] text-[#6B7280]">On Obsidian Noir</span>
            <span className="use-tag">✓ Approved</span>
          </div>
        </div>

        {/* Charcoal background */}
        <div className="rounded-xl border border-white/5 overflow-hidden">
          <div className="h-36 flex items-center justify-center" style={{ background: '#121212' }}>
            <span className="font-display logo-lockup text-3xl text-[#F7F5F2]">
              LensXpose<span className="logo-period">.</span>
            </span>
          </div>
          <div className="bg-[#121212]/40 backdrop-blur-md px-4 py-3 flex justify-between border-t border-white/5">
            <span className="font-body text-[10px] text-[#6B7280]">On Graphite Studio</span>
            <span className="use-tag">✓ Approved</span>
          </div>
        </div>

        {/* Incorrect usage */}
        <div className="rounded-xl border border-red-500/20 overflow-hidden">
          <div className="h-36 flex items-center justify-center relative" style={{ background: '#D9A441' }}>
            <span className="font-display logo-lockup text-3xl text-[#050505]">
              LensXpose<span style={{ color: '#050505' }}>.</span>
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-red-500/70 rotate-12" />
              <div className="w-full h-0.5 bg-red-500/70 -rotate-12 absolute" />
            </div>
          </div>
          <div className="bg-[#121212]/40 backdrop-blur-md px-4 py-3 flex justify-between border-t border-white/5">
            <span className="font-body text-[10px] text-[#6B7280]">On Gold — Never use</span>
            <span className="avoid-tag">✗ Avoid</span>
          </div>
        </div>
      </div>

      {/* Logo Rules */}
      <GlassPanel className="rounded-xl overflow-hidden">
        {logoRules.map((rule) => (
          <div key={rule.rule} className="logo-rule-row px-6 flex gap-6">
            <div className="w-48 shrink-0 py-1">
              <p className="font-body text-xs text-[#D9A441] font-medium tracking-wide">{rule.rule}</p>
            </div>
            <p className="font-body text-sm text-[#6B7280] font-light leading-relaxed py-1 flex-1">{rule.detail}</p>
          </div>
        ))}
      </GlassPanel>
    </section>
  );
}

export default LogoUsage;
