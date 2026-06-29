import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`relative overflow-hidden transition-all duration-1000 cursor-pointer
    btn-primary gold-gradient text-[#050505] font-body font-medium tracking-[0.14em]
    text-[11px] uppercase px-9 py-4 hover-target rounded-[4px]
    before:content-[''] before:absolute before:top-0 before:left-[-40px]
    before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-500
    before:-skew-x-12 before:-z-10 before:transition-all before:duration-1000
    hover:text-[#050505] hover:before:w-[160%]
    ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
