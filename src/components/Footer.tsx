'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Phone, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-16 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo, Description & Contacts */}
          <div className="space-y-6 text-right">
            <Link 
              href="/" 
              className="flex items-center gap-4 justify-end group"
            >
              <div className="flex flex-col text-right">
                <span className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">אריקס ביקורת מבנים</span>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">ERIX BUILDING INSPECTION</span>
              </div>
              <Logo />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md ml-auto">
              המשרד המוביל בישראל לבדק בית, ביקורת מבנים וחוות דעת מהנדס קבילה בבית משפט. אנו מחויבים למצוינות הנדסית, שקיפות מלאה והגנה על ההשקעה שלכם.
            </p>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 text-slate-400 text-sm font-bold">
              <a href="tel:054-7515142" className="flex items-center gap-2.5 justify-end hover:text-blue-400 transition-colors">
                <span>054-7515142</span>
                <Phone className="w-4 h-4 text-blue-500" />
              </a>
              <a href="mailto:yossi10@duck.com" className="flex items-center gap-2.5 justify-end hover:text-blue-400 transition-colors">
                <span className="font-sans">yossi10@duck.com</span>
                <Mail className="w-4 h-4 text-blue-500" />
              </a>
              <div className="pt-2">
                <a 
                  href="https://www.google.com/maps/place//@32.0076968,34.9659148,10z/data=!3m1!4b1!4m3!3m2!1s0x1502b359b8db2f6b:0xaad745e4d96444d3!12e1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-950/50 w-full justify-center group"
                >
                  <span>נהניתם מהשירות? דרגו אותנו בגוגל</span>
                  <svg className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Services (SEO) */}
          <div className="text-right">
            <h4 className="text-base font-black mb-6 text-white pb-2 border-b border-slate-800 inline-block">שירותי בדק בית מובילים</h4>
            <nav className="flex flex-col gap-3 text-slate-400 font-bold text-sm">
              <Link href="/בדק-בית-מקבלן" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">בדק בית מקבלן (דירה חדשה)</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/בדק-בית-יד-שנייה" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">בדק בית לדירה יד שנייה</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/בדק-בית-סוף-שנת-בדק" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">ביקורת שנת בדק מקצועית</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/בדק-בית-לבית-פרטי-וילה" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">בדק בית לווילות ובתים פרטיים</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/חוות-דעת-הנדסית-לבית-משפט" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">חוות דעת מומחה לבית משפט</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/איתור-נזילות-ורטיבות" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">איתור רטיבות ונזילות מים</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/אישור-מהנדס-לפרגולה" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">אישור קונסטרוקטור לפרגולה</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
            </nav>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="text-right">
            <h4 className="text-base font-black mb-6 text-white pb-2 border-b border-slate-800 inline-block">ניווט מהיר</h4>
            <nav className="flex flex-col gap-3 text-slate-400 font-bold text-sm">
              <Link href="/" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">דף הבית</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/אודות" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">אודות המשרד</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/מה-אנחנו-בודקים" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">מה אנחנו בודקים?</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/בדק-בית-מחיר" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">מחירון בדק בית</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/#knowledge" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">מרכז ידע הנדסי</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
              <Link href="/הצהרת-נגישות" className="flex items-center gap-1.5 justify-end hover:text-white transition-colors group">
                <span className="group-hover:translate-x-[-2px] transition-transform">הצהרת נגישות</span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
              </Link>
            </nav>
          </div>

          {/* Column 4: Service Areas */}
          <div className="text-right">
            <h4 className="text-base font-black mb-6 text-white pb-2 border-b border-slate-800 inline-block">אזורי שירות פופולריים</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3 text-slate-400 font-bold text-sm">
              <Link href="/בדק-בית-בתל-אביב" className="hover:text-white transition-colors text-right">תל אביב</Link>
              <Link href="/בדק-בית-בירושלים" className="hover:text-white transition-colors text-right">ירושלים</Link>
              <Link href="/בדק-בית-ברעננה" className="hover:text-white transition-colors text-right">רעננה</Link>
              <Link href="/בדק-בית-בהרצליה" className="hover:text-white transition-colors text-right">הרצליה</Link>
              <Link href="/בדק-בית-בהוד-השרון" className="hover:text-white transition-colors text-right">הוד השרון</Link>
              <Link href="/בדק-בית-ברמת-השרון" className="hover:text-white transition-colors text-right">רמת השרון</Link>
              <Link href="/בדק-בית-בנס-ציונה" className="hover:text-white transition-colors text-right">נס ציונה</Link>
              <Link href="/בדק-בית-בשוהם" className="hover:text-white transition-colors text-right">שוהם</Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row-reverse justify-between items-center gap-6 text-slate-500 text-xs font-bold">
          <p className="text-center md:text-right">© {new Date().getFullYear()} אריקס ביקורת מבנים. כל הזכויות שמורות למשרד מהנדסים וביקורת מבנים.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">מפת אתר</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

