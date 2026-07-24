'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'ראשי' },
    { href: '/חוות-דעת-הנדסית-לבית-משפט', label: 'חוות דעת הנדסית לבית משפט' },
    { 
      label: 'מה אנחנו בודקים',
      isDropdown: true,
      items: [
        { href: '/מה-אנחנו-בודקים', label: 'מה אנחנו בודקים' },
        { href: '/מאגר-הידע-ההנדסי', label: 'מאגר הידע ההנדסי' },
        { href: '/בדק-בית-מחיר', label: 'בדק בית מחיר' }
      ]
    },
    { 
      label: 'שירותים נבחרים', 
      isDropdown: true,
      isMultiColumn: true,
      sections: [
        {
          title: 'שירותי בדיקה מובילים',
          items: [
            { href: '/בדק-בית-מקבלן', label: 'בדק בית לדירה חדשה' },
            { href: '/בדק-בית-יד-שנייה', label: 'בדק בית לדירה יד 2' },
            { href: '/בדק-בית-לבית-פרטי-וילה', label: 'בדק בית לבית פרטי' },
            { href: '/איתור-נזילות-ורטיבות', label: 'איתור נזילות ורטיבות' },
            { href: '/חוות-דעת-הנדסית-לבית-משפט', label: 'חוות דעת לבית משפט' }
          ]
        },
        {
          title: 'אזורי שירות עיקריים',
          items: [
            { href: '/בדק-בית-בתל-אביב', label: 'בדק בית בתל אביב' },
            { href: '/בדק-בית-בירושלים', label: 'בדק בית בירושלים' },
            { href: '/בדק-בית-ברעננה', label: 'בדק בית ברעננה' },
            { href: '/בדק-בית-בהרצליה', label: 'בדק בית בהרצליה' }
          ]
        }
      ]
    },
    { 
      label: 'צור קשר',
      isDropdown: true,
      items: [
        { href: '/#contact', label: 'צור קשר' },
        { href: '/אודות', label: 'אודות' },
        { href: '/הצהרת-נגישות', label: 'הצהרת נגישות' }
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const isHomePage = pathname === '/' || pathname === '';
      if (isHomePage) {
        const id = href.substring(2);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <>
      <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-header py-2' : 'bg-transparent py-3 sm:py-6 md:py-8'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-2 sm:gap-3 no-underline shrink-0">
              <span className="sm:hidden inline-flex">
                <Logo size={36} />
              </span>
              <span className="hidden sm:inline-flex">
                <Logo size={48} />
              </span>
              <div className="flex flex-col">
                <span className="text-base sm:text-2xl md:text-3xl font-black transition-colors leading-none text-slate-900">אריקס ביקורת מבנים</span>
                <span className="hidden sm:block text-xs md:text-sm font-bold text-blue-600 tracking-wide uppercase mt-1">ביטחון הנדסי מוחלט</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-x-8 xl:gap-x-10" aria-label="Main Navigation">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group py-2">
                  {link.isDropdown ? (
                    <>
                      <button 
                        className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 font-bold transition-all duration-300 focus:text-blue-600 focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {link.label}
                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                      <div className={`absolute top-[calc(100%-8px)] right-0 ${link.isMultiColumn ? 'w-[540px]' : 'w-80'} pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-50`}>
                        <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 overflow-hidden">
                          {link.isMultiColumn ? (
                            <div className="grid grid-cols-2 gap-6 text-right" dir="rtl">
                              {link.sections?.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-3">
                                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-100/60">
                                    {section.title}
                                  </h4>
                                  <div className="grid gap-1">
                                    {section.items.map((sub) => (
                                      <Link 
                                        key={sub.href} 
                                        href={sub.href} 
                                        onClick={(e) => handleLinkClick(e, sub.href)} 
                                        className="block px-3 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid gap-1">
                              {link.items?.map((sub) => (
                                <Link key={sub.href} href={sub.href} onClick={(e) => handleLinkClick(e, sub.href)} className="block px-4 py-3 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all">
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={link.href!} 
                      onClick={(e) => handleLinkClick(e, link.href!)} 
                      className="text-slate-600 hover:text-blue-600 font-bold transition-all relative group-hover:after:w-full after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-500"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Group */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <div className="hidden md:flex items-center gap-3">
                <a 
                  href="tel:054-7515142" 
                  className="bg-slate-50 text-slate-900 border border-slate-200 font-bold px-5 py-2.5 rounded-full hover:bg-slate-100 transition-all flex items-center gap-2"
                  dir="ltr"
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  054-7515142
                </a>
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="relative shrink-0"
                >
                  <span className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-35 animate-pulse"></span>
                  <Link 
                    href="/#contact"
                    onClick={(e) => handleLinkClick(e, '/#contact')}
                    className="relative bg-blue-600 text-white font-black px-7 py-3 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 transition-all shadow-lg shadow-blue-600/20 active:scale-95 inline-flex items-center justify-center whitespace-nowrap text-base gap-2 group border border-blue-500/25"
                  >
                    ייעוץ הנדסי חינם
                    <svg className="w-4 h-4 text-blue-100 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
              </div>
              
              {/* Quick Mobile Call Button */}
              <a 
                href="tel:054-7515142" 
                className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                aria-label="Call Now"
              >
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20" aria-label="Open menu">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu - Enhanced Full Screen Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white lg:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col h-full px-6 sm:px-8 py-16 sm:py-20 pointer-events-auto">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 left-6 sm:top-8 sm:left-8 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors" aria-label="Close menu">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <div className="mb-8 sm:mb-12 flex items-center gap-3">
            <Logo size={40} />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">אריקס ביקורת מבנים</h2>
          </div>

          <nav className="flex-1 min-h-0 flex flex-col gap-6 text-right overflow-y-auto custom-scrollbar pb-8">
            {navLinks.map((link, idx) => (
              <div key={idx} className="group">
                {link.isDropdown ? (
                  <div className="space-y-4">
                    <span className="block text-slate-400 text-xs font-black uppercase tracking-widest">{link.label}</span>
                    {link.isMultiColumn ? (
                      <div className="space-y-6 pr-4 border-r-2 border-slate-100">
                        {link.sections?.map((section, sIdx) => (
                          <div key={sIdx} className="space-y-3">
                            <span className="block text-slate-400/80 text-[11px] font-black uppercase tracking-wider">{section.title}</span>
                            <div className="flex flex-col gap-3.5 pr-2">
                              {section.items.map((sub) => (
                                <Link 
                                  key={sub.href} 
                                  href={sub.href} 
                                  onClick={(e) => handleLinkClick(e, sub.href)} 
                                  className="text-base sm:text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors active:text-blue-600"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 pr-4 border-r-2 border-slate-100">
                        {link.items?.map((sub) => (
                          <Link key={sub.href} href={sub.href} onClick={(e) => handleLinkClick(e, sub.href)} className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors active:text-blue-600">{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href!} onClick={(e) => handleLinkClick(e, link.href!)} className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors">{link.label}</Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-100 grid gap-4">
            <a href="tel:054-7515142" className="flex items-center justify-center gap-3 bg-blue-600 text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl shadow-blue-600/20 text-lg sm:text-xl" dir="ltr">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              054-7515142
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
