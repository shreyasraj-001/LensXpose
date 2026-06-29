import React from 'react';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondaryButton({ children, className = '', ...props }: SecondaryButtonProps) {
  return (
    <button
      className={`btn-secondary rounded-[4px] bg-transparent border border-[#D9A441] text-[#D9A441] font-body font-medium tracking-[0.14em] text-[11px] uppercase px-9 py-4 hover-target ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;


// const baseClasses =
//     "relative inline-flex items-center justify-center px-6 py-3 font-body text-xs tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer";

//   const solidClasses =
//     "bg-white text-black hover:bg-white/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]";

//   const outlineClasses =
//     "border border-white text-white hover:bg-white/10 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.4)]";