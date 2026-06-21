import React from 'react';
import { MousePointer, Camera } from 'lucide-react';
import GlassPanel from '../ui/GlassPanel/GlassPanel';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  IconButton
} from '../ui/Button';

export function InteractiveElements() {
  return (
    <section>
      <div className="section-divider">
        <MousePointer className="text-[#D9A441]" size={26} strokeWidth={1.5} />
        <h2 className="font-display text-4xl font-medium">Interactive Elements</h2>
        <span className="font-body text-[#6B7280] text-xs tracking-[0.2em] uppercase ml-auto">03 / 09</span>
      </div>

      <GlassPanel className="rounded-2xl p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Primary Buttons */}
          <div className="space-y-8">
            <div>
              <h4 className="font-display text-2xl mb-1">Primary Button</h4>
              <p className="font-body text-sm text-[#6B7280] font-light">Gold fill with light-sweep hover. Used for the single highest-priority CTA on any screen.</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Default</p>
                <PrimaryButton>
                  Start Your Story
                </PrimaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Hover (End Frame)</p>
                <PrimaryButton>
                  Start Your Story
                </PrimaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Active / Click</p>
                <PrimaryButton>
                  Start Your Story
                </PrimaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Disabled</p>
                <button className="bg-[#121212] text-[#6B7280] border border-[#6B7280]/20 font-body font-medium tracking-[0.12em] text-xs uppercase px-8 py-4 rounded-sm opacity-40 cursor-not-allowed">
                  Processing...
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-8">
            <div>
              <h4 className="font-display text-2xl mb-1">Secondary Button</h4>
              <p className="font-body text-sm text-[#6B7280] font-light">Gold border with liquid fill. Supports the primary CTA without competing with it.</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Default</p>
                <SecondaryButton>
                  Explore Gallery
                </SecondaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Hover (End Frame)</p>
                <SecondaryButton>
                  Explore Gallery
                </SecondaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Active / Click</p>
                <SecondaryButton>
                  Explore Gallery
                </SecondaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Ghost (Neutral)</p>
                <SecondaryButton>
                  Learn More
                </SecondaryButton>
              </div>
            </div>
          </div>

          {/* Tertiary & Icons */}
          <div className="space-y-8">
            <div>
              <h4 className="font-display text-2xl mb-1">Tertiary & Icons</h4>
              <p className="font-body text-sm text-[#6B7280] font-light">Text links with animated underline draw and sliding arrow. Icon buttons with float lift.</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-4">Default Text Link</p>
                <TertiaryButton>
                  View Case Study
                </TertiaryButton>
              </div>
              <div>
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-4">Hover Text Link</p>
                <TertiaryButton>
                  View Case Study
                </TertiaryButton>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-4">Icon Buttons — Default / Hover / Active</p>
                <div className="flex gap-5">
                  <IconButton>
                    <Camera size={16} />
                  </IconButton>
                  <IconButton forceHover>
                    <Camera size={16} />
                  </IconButton>
                  <IconButton forceHover forceActive>
                    <Camera size={16} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

        </div>
      </GlassPanel>

      {/* Form Elements */}
      <div className="mt-8">
        <p className="font-body text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">Form Elements</p>
        <GlassPanel className="rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Input — Default</p>
              <input
                readOnly
                placeholder="Your full name"
                className="w-full bg-transparent border border-white/10 text-[#F7F5F2] font-body text-sm font-light px-4 py-3 rounded-sm placeholder:text-[#6B7280] outline-none focus:border-[#D9A441] transition-colors duration-300"
              />
            </div>
            <div>
              <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Input — Focused</p>
              <input
                readOnly
                defaultValue="hello@lensxpose.com"
                className="w-full bg-transparent border border-[#D9A441] text-[#F7F5F2] font-body text-sm font-light px-4 py-3 rounded-sm outline-none"
                style={{ boxShadow: '0 0 0 3px rgba(217,164,65,0.08)' }}
              />
            </div>
            <div>
              <p className="font-body text-[10px] text-[#6B7280] uppercase tracking-widest mb-3">Input — Error</p>
              <input
                readOnly
                defaultValue="invalid-email"
                className="w-full bg-transparent border border-red-500/50 text-[#F7F5F2] font-body text-sm font-light px-4 py-3 rounded-sm outline-none"
                style={{ boxShadow: '0 0 0 3px rgba(239,68,68,0.08)' }}
              />
              <p className="font-body text-[10px] text-red-400 mt-2">Please enter a valid email address.</p>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

export default InteractiveElements;
