import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`btn-primary gold-gradient text-[#050505] font-body font-medium tracking-[0.14em] text-[11px] uppercase px-9 py-4 hover-target ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
