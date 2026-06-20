import React from 'react';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondaryButton({ children, className = '', ...props }: SecondaryButtonProps) {
  return (
    <button
      className={`btn-secondary bg-transparent border border-[#D9A441] text-[#D9A441] font-body font-medium tracking-[0.14em] text-[11px] uppercase px-9 py-4 hover-target ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
