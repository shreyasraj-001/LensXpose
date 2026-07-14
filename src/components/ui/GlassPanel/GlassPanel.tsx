import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// We extend HTMLMotionProps instead of standard HTMLAttributes 
// so this component can natively accept Framer Motion props like 'initial', 'animate', etc.
export interface GlassPanelProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  className?: string;
  /** * Enables a subtle, premium physical lift (-6px) on hover. 
   * Perfect for interactive portfolio cards or segmented service panels.
   */
  withHoverLift?: boolean; 
}

export function GlassPanel({ 
  children, 
  className = '', 
  withHoverLift = false,
  ...props 
}: GlassPanelProps) {
  
  // This array represents the exact --ease-luxury CSS cubic-bezier(0.16, 1, 0.3, 1) 
  // from your LENSXPOSE brand guidelines, translated for Framer Motion.
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div 
      // The base 'glass-panel' class applies your backdrop-filter blur, 
      // dark tinted background, and micro-thin borders from the CSS.
      className={`glass-panel ${className}`}
      
      // 1. Entrance Kinematics: Smooth cinematic fade-up on mount
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: luxuryEase 
      }}
      
      // 2. Interactive Kinematics: Optional luxury float on hover
      whileHover={withHoverLift ? { 
        y: -6,
        transition: { duration: 0.4, ease: luxuryEase }
      } : undefined}
      
      // Spreads remaining props (including onClick handlers or custom motion overrides)
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default GlassPanel;