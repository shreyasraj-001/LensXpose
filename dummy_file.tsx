import React, { useState } from 'react';
import { 
  Camera, 
  Film, 
  Eye, 
  Star, 
  Shield, 
  Zap, 
  MessageSquare, 
  BookOpen 
} from 'lucide-react';

import './src/styles/globals.css';

// Layout & UI Components
import Header from './src/layouts/Header';
import Footer from './src/layouts/Footer';
import CustomCursor from './src/components/ui/CustomCursor/CustomCursor';
import SpotlightGlow from './src/components/ui/SpotlightGlow/SpotlightGlow';

// Sections
import ColorSystem, { ColorToken } from './src/components/sections/ColorSystem';
import Typography, { TypographyToken } from './src/components/sections/Typography';
import InteractiveElements from './src/components/sections/InteractiveElements';
import SurfacesAndElevation from './src/components/sections/SurfacesAndElevation';
import SpacingSystem, { SpacingToken } from './src/components/sections/SpacingSystem';
import LogoUsage, { LogoRule } from './src/components/sections/LogoUsage';
import VoiceAndTone, { VoiceCase } from './src/components/sections/VoiceAndTone';
import BrandPositioning, { PositioningPair } from './src/components/sections/BrandPositioning';
import Iconography, { IconItem } from './src/components/sections/Iconography';

export default function App() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Iframe-Safe Clipboard Copy Fallback
  const copyToClipboard = (hex: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = hex;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    } catch (err) {
      console.error('Fallback clipboard copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  // ─── OFFICIAL PREMIUM BRAND COLORS (UPDATED) ───
  const colors: ColorToken[] = [
    {
      name: 'Obsidian Noir',
      hex: '#050505',
      rgb: '5, 5, 5',
      hsl: '0°, 0%, 2%',
      usage: 'Primary Background. The deepest luxury dark tone, curated specifically to achieve high-end editorial contrast. Elevates photographic depth.',
      useCases: ['Page backgrounds', 'Hero sections', 'Full-bleed overlays'],
      avoid: ['Small text backgrounds', 'Button fills alone'],
      isDark: true,
    },
    {
      name: 'Graphite Studio',
      hex: '#121212',
      rgb: '18, 18, 18',
      hsl: '0°, 0%, 7%',
      usage: 'Secondary Background & Card Surfaces. Elevates key blocks exactly one step above Obsidian Noir to maintain visual breathing room.',
      useCases: ['Card backgrounds', 'Navbar', 'Modal surfaces', 'Sidebar panels'],
      avoid: ['Primary backgrounds on long-read pages'],
      isDark: true,
    },
    {
      name: 'Luxury Gold',
      hex: '#D9A441',
      rgb: '217, 164, 65',
      hsl: '38°, 67%, 55%',
      usage: 'Primary Accent & Brand Identifier. The sole warm tone in the palette. Every instance carries emotional weight — use with intent and restraint.',
      useCases: ['CTAs & primary buttons', 'Logo mark', 'Active navigation states', 'Pull-quote ornaments', 'Icon highlights'],
      avoid: ['Body text blocks', 'Large filled background areas', 'More than 10% of any layout'],
      isDark: false,
    },
    {
      name: 'Warm Ivory',
      hex: '#F7F5F2',
      rgb: '247, 245, 242',
      hsl: '40°, 22%, 96%',
      usage: 'Primary Typography & Soft Backgrounds. Warmer than pure white, preventing eye strain and adding a subtle analogue quality that fits the photography aesthetic.',
      useCases: ['Heading text', 'Hero display text', 'Light-mode section backgrounds', 'Story pull quotes'],
      avoid: ['On Luxury Gold backgrounds (use #050505 instead)'],
      isDark: false,
    },
    {
      name: 'Accent White',
      hex: '#FFFFFF',
      rgb: '255, 255, 255',
      hsl: '0°, 0%, 100%',
      usage: 'High-Contrast Moments & Body Text. Reserved for maximum contrast demands — fine print, data tables, technical specs, and moments where absolute legibility is critical.',
      useCases: ['Body copy on dark backgrounds', 'Form input text', 'Price figures', 'Metadata & captions'],
      avoid: ['Large display headings (use Warm Ivory)', 'Decorative use'],
      isDark: false,
    },
    {
      name: 'Platinum Mist',
      hex: '#6B7280',
      rgb: '107, 114, 128',
      hsl: '220°, 9%, 46%',
      usage: 'Secondary Text, Borders & Dividers. A neutral mid-tone that recedes from the composition, carrying supporting information without competing with gold accents.',
      useCases: ['Image captions', 'Date / metadata', 'Horizontal rules', 'Placeholder text', 'Inactive nav items'],
      avoid: ['Primary content', 'On light backgrounds (contrast too low)'],
      isDark: true,
    },
  ];

  // ─── TYPOGRAPHY SCALE ───
  const typeScale: TypographyToken[] = [
    { role: 'Display / Hero', size: '72–96px', weight: '300 Light', font: 'Cormorant Garamond', tracking: '-0.03em', leading: '1.05', example: 'Transform Moments Into Stories.', note: 'Editorial luxury serif. The cinematic voice of the brand.' },
    { role: 'Section Heading', size: '48–64px', weight: '400 Regular', font: 'Cormorant Garamond', tracking: '-0.02em', leading: '1.1', example: 'The Work Speaks.', note: 'Use italic variant for editorial emphasis.' },
    { role: 'Sub-Heading', size: '28–36px', weight: '500 Medium', font: 'Cormorant Garamond', tracking: '-0.01em', leading: '1.2', example: 'Wedding & Celebration', note: 'Pairs with Outfit labels below for context.' },
    { role: 'UI Label / Eyebrow', size: '11–13px', weight: '500 Medium', font: 'Outfit', tracking: '0.2em', leading: '1.5', example: 'BRAND GUIDELINES — 2024', note: 'Uppercase, wide-tracked. Structural annotation.' },
    { role: 'Body / Paragraph', size: '16–18px', weight: '300 Light', font: 'Outfit', tracking: '0.01em', leading: '1.75', example: 'Every frame is a deliberate act of storytelling...', note: 'Generous line-height for readability and editorial pace.' },
    { role: 'Caption / Metadata', size: '12–13px', weight: '400 Regular', font: 'Outfit', tracking: '0.05em', leading: '1.6', example: 'Mumbai · 2024 · Commercial', note: 'Platinum Mist color. Never smaller than 12px.' },
  ];

  // ─── SPACING SCALE ───
  const spacingScale: SpacingToken[] = [
    { name: 'xs', value: '4px', token: 'space-1', use: 'Icon gap, tight inline spacing' },
    { name: 'sm', value: '8px', token: 'space-2', use: 'Tag padding, small component gap' },
    { name: 'md', value: '16px', token: 'space-4', use: 'Card internal padding, list item gap' },
    { name: 'lg', value: '24px', token: 'space-6', use: 'Section element gap, button padding' },
    { name: 'xl', value: '48px', token: 'space-12', use: 'Card-to-card gap, inner section breathing room' },
    { name: '2xl', value: '80px', token: 'space-20', use: 'Section-to-section (desktop)' },
    { name: '3xl', value: '128px', token: 'space-32', use: 'Major page sections, hero padding' },
  ];

  // ─── VOICE & TONE ───
  const voiceExamples = {
    do: [
      { label: 'Headline', wrong: 'Professional Photography Services', right: "We Don't Take Photos. We Architect Memories." },
      { label: 'CTA', wrong: 'Contact Us', right: 'Start Your Story' },
      { label: 'Service', wrong: 'Corporate Photography', right: 'Build Brand Trust Through Strategic Visual Storytelling' },
      { label: 'About', wrong: 'We are an experienced photography team', right: 'Most photographers capture moments. LENSXPOSE captures meaning.' },
      { label: 'Tagline', wrong: 'Premium photos for everyone', right: 'Transform Moments Into Legacies.' },
    ] as VoiceCase[],
  };

  // ─── BRAND POSITIONING ───
  const positioning: PositioningPair[] = [
    { left: 'Creative Partner', right: 'Not Vendor' },
    { left: 'Storyteller', right: 'Not Photographer' },
    { left: 'Brand Builder', right: 'Not Content Creator' },
    { left: 'Memory Architect', right: 'Not Camera Operator' },
    { left: 'Experience Designer', right: 'Not Service Provider' },
    { left: 'Strategic Creative Partner', right: 'Not Freelancer' },
  ];

  // ─── LOGO USAGE RULES ───
  const logoRules: LogoRule[] = [
    { rule: 'Minimum clear space', detail: 'Equal to the height of the "L" in LENSXPOSE on all four sides.' },
    { rule: 'Minimum size (digital)', detail: '120px wide. Never smaller — legibility of letterforms degrades.' },
    { rule: 'Approved background', detail: 'Obsidian Noir (#050505), Graphite Studio (#121212), or photography.' },
    { rule: 'Approved colors', detail: 'Warm Ivory on dark backgrounds. Obsidian Noir on light. Never Gold fill.' },
    { rule: 'Never distort', detail: 'Lock aspect ratio always. No rotation, skewing, or outline strokes.' },
    { rule: 'Never on busy imagery', detail: 'Ensure sufficient contrast. Use a subtle dark gradient overlay if needed.' },
  ];

  // ─── ICON SYSTEM ───
  const iconography: IconItem[] = [
    { name: 'Camera', icon: <Camera size={20} />, use: 'Photography services, capture' },
    { name: 'Film', icon: <Film size={20} />, use: 'Cinematography, video production' },
    { name: 'Eye', icon: <Eye size={20} />, use: 'Portfolio, visual review' },
    { name: 'Star', icon: <Star size={20} />, use: 'Premium tier, quality marks' },
    { name: 'Shield', icon: <Shield size={20} />, use: 'Trust, guarantee, reliability' },
    { name: 'Zap', icon: <Zap size={20} />, use: 'Speed, efficiency, energy' },
    { name: 'MessageSquare', icon: <MessageSquare size={20} />, use: 'Client communication, reviews' },
    { name: 'BookOpen', icon: <BookOpen size={20} />, use: 'Stories, case studies, blog' },
  ];

  return (
    <div className="guidelines-container min-h-screen premium-bg text-[#F7F5F2] selection:bg-[#D9A441] selection:text-[#050505] relative pb-24 overflow-x-hidden">
      
      {/* Dynamic Cinematic Custom Cursor */}
      <CustomCursor />

      {/* Velvety Dynamic Atmosphere Glow Orbs */}
      <SpotlightGlow />

      <div className="relative z-20">
        
        {/* Header Layout */}
        <Header />

        <main className="max-w-6xl mx-auto px-8 md:px-16 mt-20 space-y-36">
          
          {/* Section 01: Color System */}
          <ColorSystem 
            colors={colors} 
            copiedHex={copiedHex} 
            onCopy={copyToClipboard} 
          />

          {/* Section 02: Typography */}
          <Typography typeScale={typeScale} />

          {/* Section 03: Interactive Elements */}
          <InteractiveElements />

          {/* Section 04: Surfaces and Elevation */}
          <SurfacesAndElevation />

          {/* Section 05: Spacing System */}
          <SpacingSystem spacingScale={spacingScale} />

          {/* Section 06: Logo Usage */}
          <LogoUsage logoRules={logoRules} />

          {/* Section 07: Voice and Tone */}
          <VoiceAndTone voiceExamples={voiceExamples} />

          {/* Section 08: Brand Positioning */}
          <BrandPositioning positioning={positioning} />

          {/* Section 09: Iconography */}
          <Iconography iconography={iconography} />

        </main>

        {/* Footer Layout */}
        <Footer />

      </div>
    </div>
  );
}