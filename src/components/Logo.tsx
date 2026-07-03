import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`} id="vsc-peptides-logo">
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto filter drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]"
      >
        <defs>
          {/* Silver/Chrome Gradient for 'V' and 'PEPTIDES' */}
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E2E8F0" />
            <stop offset="60%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Deep Sapphire/Cobalt Gradient for 'S' */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="30%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          {/* Neon Cyan Gradient for 'C' */}
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="30%" stopColor="#0EA5E9" />
            <stop offset="70%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>

          {/* Molecule Node Glowing Gradient */}
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- SLEEK FUTURISTIC LOGO GRAPHICS --- */}

        {/* Letter 'V' (Silver Chrome Finish, Sleek Angled Cuts) */}
        <path
          d="M 12 35 L 26 35 L 44 75 L 56 35 L 70 35 L 48 88 L 34 88 L 12 35 Z"
          fill="url(#silverGradient)"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        {/* Decorative Inner Cut for V */}
        <path
          d="M 15 38 L 24 38 L 41 77 L 34 85 L 15 38 Z"
          fill="#FFFFFF"
          fillOpacity="0.15"
        />

        {/* Letter 'S' (Deep Cobalt Blue Glossy Fluid Curve) */}
        <path
          d="M 85 41 C 80 34, 68 33, 62 38 C 55 43, 54 52, 60 56 C 72 63, 89 60, 89 74 C 89 85, 75 89, 64 86 C 56 84, 50 78, 48 72 L 60 69 C 61 74, 66 77, 72 77 C 77 77, 79 73, 76 71 C 70 67, 50 63, 50 51 C 50 39, 65 30, 80 33 C 86 34, 91 38, 93 43 L 85 41 Z"
          fill="url(#blueGradient)"
          stroke="#3B82F6"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* Letter 'C' (Electric Cyan Arch overlapping with S) */}
        <path
          d="M 128 42 C 124 36, 115 33, 107 33 C 92 33, 82 45, 82 61 C 82 77, 92 88, 108 88 C 117 88, 126 83, 130 77 L 119 70 C 116 74, 112 76, 107 76 C 100 76, 94 70, 94 61 C 94 51, 100 45, 107 45 C 111 45, 115 47, 118 51 L 128 42 Z"
          fill="url(#cyanGradient)"
          stroke="#06B6D4"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* --- MOLECULAR BOND SYSTEM (Floating off C's upper right) --- */}
        <g id="molecular-bonds">
          {/* Connection Lines */}
          <line x1="128" y1="42" x2="138" y2="30" stroke="#06B6D4" strokeWidth="1.5" opacity="0.8" />
          <line x1="138" y1="30" x2="152" y2="30" stroke="#06B6D4" strokeWidth="1.5" opacity="0.8" />
          <line x1="138" y1="30" x2="132" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          <line x1="152" y1="30" x2="158" y2="42" stroke="#06B6D4" strokeWidth="1.5" opacity="0.8" />
          <line x1="152" y1="30" x2="158" y2="18" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />

          {/* Glowing Backing behind key nodes */}
          <circle cx="138" cy="30" r="8" fill="url(#nodeGlow)" />
          <circle cx="152" cy="30" r="8" fill="url(#nodeGlow)" />
          <circle cx="158" cy="42" r="10" fill="url(#nodeGlow)" />

          {/* Molecule Nodes (Spheres with glossy highlights) */}
          <circle cx="138" cy="30" r="3.5" fill="#22D3EE" stroke="#FFFFFF" strokeWidth="0.5" />
          <circle cx="152" cy="30" r="3" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="0.5" />
          <circle cx="132" cy="18" r="2" fill="#94A3B8" />
          <circle cx="158" cy="42" r="4.5" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="0.7" />
          <circle cx="158" cy="18" r="2.5" fill="#38BDF8" />
        </g>

        {/* --- "PEPTIDES" Centered Directly Below "VSC" --- */}
        <text
          x="73"
          y="110"
          textAnchor="middle"
          fill="url(#silverGradient)"
          fontFamily="'Inter', 'Space Grotesk', system-ui, -apple-system, sans-serif"
          fontSize="14.5"
          fontWeight="900"
          letterSpacing="6.5"
          className="uppercase select-none"
          style={{
            fontFamily: "'Inter', 'Space Grotesk', sans-serif",
            letterSpacing: "0.45em",
            fontWeight: 900
          }}
        >
          PEPTIDES
        </text>
      </svg>
    </div>
  );
}
