'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-6 relative overflow-hidden">
      {/* Engineering Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="flex justify-center mb-10">
          <div className="transform scale-150 animate-pulse">
            <Logo />
          </div>
        </div>
        
        <div className="relative mb-8">
          <h1 className="text-[10rem] sm:text-[16rem] font-black text-slate-900/5 leading-none tracking-wide select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight drop-shadow-sm">
              הדף עבר <br/>
              <span className="text-blue-600">שדרוג הנדסי</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm mb-12 transition-all duration-500 hover:border-blue-500/20">
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            נראה שהגעתם לכתובת ישנה או שגויה. <br/>
            האתר של <span className="text-slate-900 font-bold">אריקס ביקורת מבנים</span> התחדש במערכת אחת מתקדמת כדי להעניק לכם חוויה מקצועית ומדויקת יותר.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-xl px-12 py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center"
            >
              חזרה לעמוד הבית
            </Link>
            <Link 
              href="/#contact" 
              className="w-full sm:w-auto px-12 py-5 text-xl font-bold border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
            >
              ייעוץ עם מהנדס
            </Link>
          </div>
        </div>
        
        <nav className="pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-widest" aria-label="Quick links">
          <Link href="/#services" className="hover:text-blue-600 transition-colors">שירותים</Link>
          <Link href="/#knowledge" className="hover:text-blue-600 transition-colors">מחירון</Link>
          <Link href="/#faq" className="hover:text-blue-600 transition-colors">שאלות נפוצות</Link>
          <Link href="/#process" className="hover:text-blue-600 transition-colors">התהליך</Link>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;