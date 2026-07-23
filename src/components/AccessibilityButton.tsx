'use client';

import React from 'react';
import Link from 'next/link';

const AccessibilityButton: React.FC = () => {
  return (
    <Link
      href="/accessibility-statement"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[45] group flex items-center gap-2 bg-slate-900/90 text-white hover:bg-slate-900 backdrop-blur-md px-3.5 py-2.5 md:px-4 md:py-3 rounded-full shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
      aria-label="הצהרת נגישות"
      title="הצהרת נגישות"
    >
      {/* Universal Accessibility Icon (Person with outstretched arms in circle) */}
      <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
        <svg 
          className="w-4 h-4 md:w-5 md:h-5" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13h-4v7a1 1 0 0 1-2 0v-5h-2v5a1 1 0 0 1-2 0v-7H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
        </svg>
      </div>
      
      <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap pl-1">
        נגישות
      </span>
    </Link>
  );
};

export default AccessibilityButton;