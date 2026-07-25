'use client';

import React, { useEffect } from 'react';

const AccessibilityStatement: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white text-slate-600 min-h-screen selection:bg-blue-500/30">

      
      <section className="relative pt-52 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-right">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
               </div>
               <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight">
                 הצהרת <span className="text-blue-600">נגישות</span>
               </h1>
             </div>
             
             <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="prose prose-slate max-w-none text-right leading-relaxed text-slate-600 space-y-8 text-lg md:text-xl">
                  <p>
                    אנו ב&quot;אריקס ביקורת מבנים&quot; רואים חשיבות עליונה במתן שירות שוויוני, מכובד, נגיש ומקצועי לכלל לקוחותינו, לרבות אנשים עם מוגבלות. 
                    אנו משקיעים משאבים רבים בהנגשת האתר ופעילות החברה כדי לאפשר חווית גלישה מיטבית וקבלת שירותי הנדסה ללא מחיצות.
                  </p>

                  <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 border-r-4 border-blue-600 pr-4">רמת הנגישות באתר</h2>
                    <p>
                      אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013.
                      התאמות הנגישות בוצעו עפ&quot;י המלצות התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 border-r-4 border-blue-600 pr-4">התאמות שבוצעו באתר</h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>ניווט מלא באמצעות מקלדת.</li>
                      <li>תמיכה בתוכנות קורא מסך (Screen Readers).</li>
                      <li>ניגודיות צבעים גבוהה וטקסטים קריאים.</li>
                      <li>הפסקה והפעלה של אלמנטים נעים (קרוסלות/אנימציות).</li>
                      <li>מבנה היררכי ברור של כותרות (H1-H4) לניווט קל.</li>
                      <li>תיאור אלטרנטיבי (Alt Text) לתמונות משמעותיות.</li>
                    </ul>
                  </section>

                  <section className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">רכז נגישות</h2>
                    <p className="mb-6">
                      אם במהלך הגלישה באתר נתקלתם בבעיה בנושא נגישות, נשמח לקבל הערה או בקשה למידע נוסף. אנו מחויבים לטפל בכל פנייה במקצועיות ובמהירות.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">רכז נגישות</p>
                        <p className="text-xl font-black text-slate-900">יוסי</p>
                      </div>
                      <a href="tel:0547515142" className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500/30 transition-all flex items-center justify-between group">
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">טלפון</p>
                          <p className="text-xl font-black text-slate-900 group-hover:text-blue-600">054-7515142</p>
                        </div>
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2.5"/></svg>
                      </a>
                    </div>
                  </section>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityStatement;
