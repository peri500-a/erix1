import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:drop-shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all duration-500"
      >
        <defs>
          {/* Shimmer/Reflection Gradient (keeps the logo feeling "alive" with light) */}
          <linearGradient id="shieldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="30%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#60a5fa" id="shimmerStop">
              <animate 
                attributeName="offset" 
                values="-0.5; 1.5" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </stop>
            <stop offset="70%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* 1. Blueprint Grid Background lines to add Engineering Illustration Vibe */}
        <circle cx="60" cy="60" r="54" stroke="#93c5fd" strokeDasharray="2 4" opacity={0.15} strokeWidth="1" />
        <circle cx="60" cy="60" r="46" stroke="#93c5fd" strokeDasharray="2 4" opacity={0.15} strokeWidth="1" />
        <line x1="60" y1="6" x2="60" y2="114" stroke="#93c5fd" strokeDasharray="2 4" opacity={0.15} strokeWidth="1" />
        <line x1="6" y1="60" x2="114" y2="60" stroke="#93c5fd" strokeDasharray="2 4" opacity={0.15} strokeWidth="1" />

        {/* 2. Shield / Building Hexagonal Frame with Shimmering Sheen */}
        <path
          d="M60 10 L102 32 L102 88 L60 110 L18 88 L18 32 Z"
          fill="url(#shieldShimmer)"
          stroke="#3b82f6"
          strokeWidth="3.5"
          strokeLinejoin="round"
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* 3. Subtle Engineering Blueprint inner outline */}
        <path
          d="M60 16 L95 35 L95 85 L60 104 L25 85 L25 35 Z"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeDasharray="4 2"
          opacity="0.5"
        />

        {/* 4. Hebrew text "אריקס" in a clean bold architectural layout */}
        <text
          x="60"
          y="62"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#ffffff"
          fontSize="24"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Rubik, Assistant, sans-serif"
          className="select-none font-black"
          letterSpacing="-0.5"
        >
          אריקס
        </text>
      </svg>
    </div>
  );
};

export default Logo;
