'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show the banner with a slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      role="alert" 
      aria-live="polite"
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-auto md:max-w-2xl md:left-1/2 md:-translate-x-1/2 z-[100] animate-slide-up"
    >
      <div className="bg-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center gap-8 border-b-blue-600/50">
        <div className="flex-grow text-center md:text-right">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
             <span className="text-2xl" aria-hidden="true">🍪</span>
             <div className="text-white font-black text-xl">פרטיות ושימוש בעוגיות</div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך, לספק הגנה הנדסית טובה יותר ולהציג תוכן מותאם אישית. 
            בלחיצה על &quot;אישור&quot;, הנך מסכים לשימוש זה. למידע נוסף, ניתן לעיין ב
            <a href="#/privacy-policy" className="text-blue-400 hover:text-blue-300 font-bold underline underline-offset-4 mr-1 transition-colors">מדיניות הפרטיות</a> שלנו.
          </p>
        </div>
        
        <div className="flex flex-row gap-4 w-full md:w-auto shrink-0">
          <button 
            onClick={() => handleConsent('declined')}
            className="flex-1 md:flex-none px-8 py-4 rounded-2xl border border-white/10 text-gray-400 text-sm font-bold hover:bg-white/5 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-95"
          >
            דחה
          </button>
          <button 
            onClick={() => handleConsent('accepted')}
            className="flex-1 md:flex-none px-12 py-4 rounded-2xl bg-blue-600 text-white text-sm font-black hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95"
          >
            אישור
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;