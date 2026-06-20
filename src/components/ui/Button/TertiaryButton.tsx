import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TertiaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function TertiaryButton({ children, className = '', ...props }: TertiaryButtonProps) {
  return (
    <button
      className={`btn-tertiary text-[#F7F5F2] font-body font-light tracking-[0.1em] text-[11px] uppercase hover-target ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#D9A441]" />
    </button>
  );
}

export default TertiaryButton;
