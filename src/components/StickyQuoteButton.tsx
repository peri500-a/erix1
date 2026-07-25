'use client';

import React, { useState, useEffect } from 'react';

const StickyQuoteButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Auto-reveal after 1.2 seconds for higher conversions, or immediately upon scroll
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Desktop Sticky Button */}
      <a
        href="#contact"
        className={`hidden md:inline-block fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-blue-600 text-white font-black px-6 py-4 rounded-full shadow-2xl hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
      >
        קבל הצעת מחיר מיידית
      </a>

      {/* Mobile Sticky Dual Actions (Quick Call & WhatsApp) */}
      <div
        className={`md:hidden fixed bottom-6 left-4 right-4 z-40 flex items-center gap-3 transition-all duration-300 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-hidden={!isVisible}
      >
        {/* Quick Call Button */}
        <a
          href="tel:054-7515142"
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-base active:scale-95 transition-all outline-none"
        >
          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          התקשרו עכשיו
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A2%D7%A6%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-base active:scale-95 transition-all outline-none"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.423 4.842 1.425 5.303 0 9.617-4.312 9.619-9.617.001-2.571-1.003-4.985-2.83-6.81s-4.239-2.827-6.801-2.829c-5.304 0-9.619 4.313-9.621 9.618-.001 1.738.476 3.426 1.38 4.898l-1.035 3.778 3.846-1.007zm11.303-5.004c-.312-.156-1.848-.912-2.141-1.017-.293-.104-.506-.156-.719.156-.213.312-.826 1.017-1.012 1.25-.187.234-.373.26-.686.104-.312-.156-1.316-.486-2.507-1.548-.927-.827-1.553-1.849-1.735-2.162-.182-.312-.019-.481.137-.635.141-.138.312-.364.469-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.719-1.731-.985-2.37-.259-.622-.523-.538-.719-.547l-.613-.013c-.213 0-.559.081-.852.403-.293.322-1.118 1.094-1.118 2.67s1.145 3.1 1.303 3.308c.158.208 2.254 3.441 5.459 4.823.761.329 1.355.525 1.817.671.764.243 1.459.208 2.009.127.613-.091 1.848-.755 2.11-1.485.261-.73.261-1.355.183-1.485-.077-.13-.285-.208-.597-.364z" />
          </svg>
          דברו איתנו בוואטסאפ
        </a>
      </div>
    </>
  );
};

export default StickyQuoteButton;