import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`} id="vsc-peptides-logo">
      <img
        src="/assets/images/logo.svg"
        alt="VSC PEPTIDES Logo"
        className="h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform duration-300 hover:scale-[1.02]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
