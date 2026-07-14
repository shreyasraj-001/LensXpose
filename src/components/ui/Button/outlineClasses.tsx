import React from 'react';
import { ArrowRight } from 'lucide-react';

interface outlineClassesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function outlineClasses({ children, className = '', ...props }: outlineClassesProps) {
  return (
    <button
      className={`btn-outlined text-[#F7F5F2] relative bg-white text-black hover:bg-white/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] uppercase transition-all duration-300 cursor-pointer hover-target ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#D9A441]" />
    </button>
  );
}

export default outlineClasses;



//   const solidClasses =
//     "";

//   const outlineClasses =
//     "border border-white text-white hover:bg-white/10 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.4)]";
