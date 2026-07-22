
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string; isLast?: boolean }> = ({ number, title, description, isLast = false }) => (
  <div className="relative group flex items-start">
    <div className="hidden md:block absolute -right-20 top-0 overflow-hidden pointer-events-none">
      <span className="text-[140px] font-black text-slate-100 leading-none select-none transition-colors group-hover:text-blue-50/50">
        0{number}
      </span>
    </div>
    
    <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full">
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center text-3xl font-black shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
        {number}
      </div>
      
      <div className={`flex-grow pb-16 ${!isLast ? 'border-r-2 border-slate-100 pr-8 md:pr-12' : 'pr-8 md:pr-12'}`}>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">{description}</p>
      </div>
    </div>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">הדרך לביטחון המלא שלכם</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              תהליך העבודה <br /> <span className="luxury-text-gradient">של אריקס ביקורת מבנים</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed mb-10">
              אנו מאמינים בשקיפות, דיוק וליווי אישי. הדרך שלנו מבטיחה לכם שקט נפשי מלא ומקצועיות ללא פשרות.
            </p>
            <div className="prestige-card p-8 bg-slate-900 border-0">
              <p className="text-white text-lg font-bold mb-4 font-display">צריכים עזרה דחופה?</p>
              <a href="tel:054-7515142" className="inline-flex items-center gap-3 text-blue-400 font-black text-2xl hover:text-white transition-colors" dir="ltr">
                054-7515142
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-0">
            <Step 
              number="1"
              title="ייעוץ ראשוני ואפיון צרכים"
              description="שיחת עומק להבנת הנכס ואיפיון הבדיקות הנדרשות. אנו מספקים הצעה שקופה ומפורטת המותאמת בדיוק לצרכים ההנדסיים שלכם."
            />
            <Step 
              number="2"
              title="ביצוע הבדיקות בשטח"
              description="מהנדס מומחה מגיע עם ציוד טכנולוגי מתקדם (מצלמות תרמיות, מכשירי מדידה) לביצוע סקירה הנדסית מלאה של כל מערכות הנכס."
            />
            <Step 
              number="3"
              title="ניתוח נתונים והפקת דוח"
              description="גיבוש הממצאים לכדי דוח הנדסי קביל משפטית, הכולל תמונות, הסברים טכניים ואומדן עלויות לתיקון הליקויים שנמצאו."
            />
            <Step 
              number="4"
              title="ליווי הנדסי וייעוץ המשכי"
              description="מסירת הדוח ושיחת הסבר מפורטת. אנו עומדים לרשותכם בייעוץ מול קבלנים, מוכרים או רשויות עד לתיקון הליקויים."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
