import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  forceHover?: boolean;
  forceActive?: boolean;
}

export function IconButton({
  children,
  className = '',
  forceHover = false,
  forceActive = false,
  ...props
}: IconButtonProps) {
  const hoverClass = forceHover ? 'force-hover' : '';
  const activeClass = forceActive ? 'force-active' : '';

  return (
    <button
      className={`btn-icon h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-[#F7F5F2] hover-target ${hoverClass} ${activeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton;
