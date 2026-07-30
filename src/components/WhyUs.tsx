
import React from 'react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
    <div>
      <div className="h-14 w-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'צוות מהנדסים קבוע - לא פרילנסרים',
      description: 'בניגוד למשרדים המעסיקים פרילנסרים, כל מהנדס באריקס ביקורת מבנים הוא חלק קבוע מהצוות שלנו. כך אתם מקבלים אחריות אישית מלאה על הבדיקה וסטנדרט מקצועי אחיד בכל דוח בדק בית שאנו מפיקים.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'דוח בדק בית מפורט לכל ליקוי',
      description: 'כל דוח בדק בית נכתב בהתאמה אישית לנכס הספציפי שלכם - לא מתבנית מוכנה. כל ליקוי מתועד בעובדות מדויקות וחד-משמעיות, כך שתדעו בדיוק במה מדובר ומה המשמעות שלו.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>,
      title: 'איתור רטיבות במצלמה תרמית FLIR',
      description: 'אנו משתמשים במצלמות תרמיות FLIR ובמכשור אקוסטי דיגיטלי מהמתקדמים בעולם, המאפשרים איתור נזילות ורטיבות בדיוק גבוה - ללא כל נזק לנכס שלכם.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      title: 'ליווי אישי עם המהנדס עד למסירה',
      description: 'תקבלו קשר ישיר עם המהנדס המבצע לאורך כל התהליך, זמינות מלאה לכל שאלה מקצועית, וליווי עד לרגע המסירה - לביטחון מלא בהחלטה שלכם.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7h6m6 0l-3 1m0 0l3 9a5.002 5.002 0 00-6.001 0M18 7l-3 9m3-9h-6M6 7h12M9 3h6" /></svg>,
      title: 'חוות דעת מומחה קבילה בבית משפט',
      description: 'כל דוח נחתם אישית ע״י אינג׳ יוסי פרי, מהנדס בניין רשוי ורשום (מ.ר 78687) בעל 30+ שנות ניסיון. הדוח מנוסח כחוות דעת מומחה קבילה ומעניק לכם גב משפטי חזק.',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50/80 scroll-mt-24 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-3 block">
            הסטנדרט ההנדסי הגבוה בישראל
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            5 סיבות שבעלי נכסים בוחרים <span className="text-blue-600">במהנדס אישי ולא בחברה אנונימית</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            אנו משלבים ידע הנדסי מעמיק עם טכנולוגיה מתקדמת כדי להעניק לכם את הביטחון המקסימלי בנכס שלכם.
          </p>
        </div>

        {/* 5 Features Grid - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-900/90 border border-blue-400/30 px-3.5 py-1 rounded-full text-xs font-bold text-white mb-1 shadow-sm">
              <span className="h-2 w-2 bg-emerald-400 rounded-full animate-ping"></span>
              דרישת חובה לרוכשים
            </div>
            <p className="text-xl md:text-2xl font-black leading-tight">
              הדוח שלנו הוא הכוח שלכם בניהול המשא ומתן. אובייקטיביות הנדסית ללא פשרות.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-md hover:bg-blue-50 transition-colors text-base"
          >
            להצעת מחיר מהירה
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
