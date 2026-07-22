'use client';

import React from 'react';
import Link from 'next/link';

const AccessibilityButton: React.FC = () => {
  return (
    <Link
      href="/accessibility-statement"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[45] w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] hidden md:flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 group border-2 border-white/20"
      aria-label="Open accessibility statement"
      title="Accessibility statement"
    >
      {/* Icon matching the image (Person icon) */}
      <svg 
        className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      
      <span className="absolute right-16 md:right-20 bg-gray-900 text-white text-xs font-black px-4 py-2.5 rounded-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none border border-white/10 shadow-2xl">
        הצהרת נגישות
      </span>
    </Link>
  );
};

export default AccessibilityButton;