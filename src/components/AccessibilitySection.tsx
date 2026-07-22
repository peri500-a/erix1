import React from 'react';

const AccessibilitySection: React.FC = () => {
  return (
    <section id="accessibility" className="py-6 md:py-10 bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-black text-white mb-4">הצהרת נגישות</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-sm">
          <div className="prose prose-invert max-w-none text-right leading-relaxed text-gray-300 space-y-6 text-lg">
            <p>
              אריקס ביקורת מבנים מחויבת לספק אתר אינטרנט הנגיש לקהל הרחב ביותר האפשרי, ללא קשר לנסיבות ויכולת. אנו שואפים לדבוק ככל האפשר בהנחיות הנגשת תוכן האינטרנט (WCAG 2.0, בכל דרגות החומרה A, AA, AAA), שפורסמו על ידי קונסורציום האינטרנט העולמי (W3C) ואומצו בישראל.
            </p>
            
            <p>
              ההתאמה להנחיות אלה עוזרת להפוך את האינטרנט לידידותי יותר לכל משתמש ואנו לא חוסכים שום מאמץ לדבוק בהנחיות ובתקנים האלו. 
            </p>
            
            <div className="bg-blue-600/5 border-r-4 border-blue-600 p-6 rounded-l-2xl">
              <p className="font-bold text-white mb-2">חשוב לדעת:</p>
              <p>
                בשל האופי הדינאמי של האתר, מדי פעם עשויות להתרחש בעיות קלות ואנו מטפלים בהן מיד כשהן מתרחשות.
              </p>
            </div>

            <p>
              אם את.ה זקוקים למידע שאתם סבורים כי אתם מתקשים בקבלתו אנא אל תהססו ופנו אלינו בדחיפות, לרכז הנגישות שלנו <strong>יוסי</strong>:
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-4">
              <a 
                href="tel:0547515142" 
                className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-bold">054-7515142</span>
              </a>
              
              <a 
                href="mailto:yossi10@duck.com" 
                className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-bold">yossi10@duck.com</span>
              </a>
            </div>

            <p className="text-center text-blue-400 font-black text-xl mt-8">
              זיכרו, אנחנו כאן בשבילכם.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;