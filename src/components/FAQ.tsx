'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import SchemaTags from './SchemaTags';

const FaqItem: React.FC<{ question: string; answer: string; index: number; defaultOpen?: boolean }> = ({ question, answer, index, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className={`transition-all duration-300 ${
        isOpen 
          ? 'bg-white border border-blue-100 shadow-md shadow-blue-900/[0.02] p-6 rounded-2xl mb-4 mt-2 ring-1 ring-blue-50/50' 
          : 'border-b border-slate-200/60 last:border-b-0 py-5 px-2 bg-transparent rounded-none'
      }`}
    >
      <button
        className="w-full flex justify-between items-center text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-xl gap-4 hover:bg-black/[0.01] transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
          {question}
        </h3>
        <div 
          className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
            isOpen 
              ? 'bg-blue-600 border-blue-600 text-white' 
              : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-slate-100 group-hover:border-slate-300 group-hover:text-slate-600'
          }`}
        >
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </div>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-slate-600 leading-relaxed pr-2 pt-4 pb-2 text-base md:text-lg">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'האם דוח בדק הבית שלכם קביל בבית משפט ומשמש כחוות דעת מומחה?',
      answer: 'בהחלט, ובאופן מלא. כל דוח של אריקס ביקורת מבנים נערך ונחתם אישית ע״י אינג׳ יוסי פרי, מהנדס בניין רשוי ורשום (מ.ר 78687) עם מעל 30 שנות ניסיון. הדוח מנוסח כחוות דעת מומחה משפטית רשמית הקבילה לחלוטין בבתי המשפט בישראל לפי פקודת הראיות [נוסח חדש], תשל״א-1971. הדוח מפרט את הליקויים בהתאם לתקנות התכנון והבנייה, לחוק המכר (דירות) ולתקנים הישראליים הרלוונטיים (ת״י), ומגובה בתיעוד מצולם מקיף ובמדידות מכשור דיגיטלי. רמת הפירוט והסמכות ההנדסית של אינג׳ יוסי פרי מקנות לכם הגנה משפטית חזקה ומותירות לקבלן או למוכר אפס מקום לספק.',
    },
    {
      question: 'כמה עולה בדק בית וכיצד נקבע המחיר?',
      answer: 'מחיר בדק בית נקבע לפי מספר גורמים: סוג הנכס (דירה, פנטהאוז, בית פרטי או וילה), גודלו במ"ר, שלב המסירה (דירה חדשה מקבלן או יד שנייה) והיקף הבדיקות הנדרש - למשל שילוב של בדיקה תרמית לאיתור רטיבות. אנו מספקים הצעת מחיר מדויקת ושקופה מראש, ללא עלויות נסתרות, כך שתדעו בדיוק על מה אתם משלמים לפני שאתם מתחייבים. חשוב לזכור: בדק בית זול משמעותית מהממוצע בשוק לרוב מעיד על בדיקה שטחית שעלולה לפספס ליקויים יקרים.',
    },
    {
      question: 'תוך כמה זמן מתבצעת הבדיקה ומתי מתקבל הדוח ההנדסי המלא?',
      answer: 'הבדיקה עצמה בשטח אורכת בממוצע בין שעה וחצי לשלוש שעות, בהתאם לגודל הנכס ומורכבותו. לאחר מכן, אינג\' יוסי פרי מנתח את כל הממצאים, התיעוד הצילומי והמדידות שנאספו, ומכין דוח הנדסי מפורט הכולל תמונות, הסברים והמלצות לתיקון. הדוח המלא נמסר לכם תוך 3-5 ימי עסקים, ובמקרים דחופים (כגון מועד חתימה קרוב) ניתן לזרז את קבלתו בתיאום מראש.',
    },
    {
      question: 'מדוע חשוב לבצע בדק בית מקצועי דווקא לדירת יד שנייה?',
      answer: 'בניגוד לדירה חדשה מקבלן, בדירת יד שנייה אין אחריות יצרן על ליקויי בנייה - כל בעיה שתתגלה לאחר החתימה על החוזה היא באחריותכם המלאה. בדק בית לפני קנייה חושף ליקויים סמויים שאינם נראים לעין הבלתי מקצועית: רטיבות בקירות פנימיים, בעיות בקונסטרוקציה, אינסטלציה וחשמל ישנים, וסימנים לתיקונים לא תקניים שביצע המוכר. הדוח ההנדסי שלנו מעניק לכם כוח מיקוח אמיתי במשא ומתן - מסמך אובייקטיבי המראה בדיוק מה מצב הנכס, ומאפשר לכם לדרוש הפחתת מחיר או לדעת בדיוק לאן אתם נכנסים.',
    },
    {
      question: 'מהי שנת בדק לדירה חדשה ומה בדיוק בודקים בה?',
      answer: 'שנת בדק היא שנה אחת מיום קבלת המפתח, שבה הקבלן מחויב על פי חוק המכר (דירות) לתקן כמעט כל ליקוי בנייה שמתגלה בדירה - על חשבונו. זוהי ההזדמנות המשמעותית האחרונה שלכם לוודא שהדירה נמסרת במצב תקין לחלוטין. אנו ממליצים לבצע ביקורת שנת בדק מקצועית כ-1-2 חודשים לפני תום השנה, כדי לאפשר לקבלן זמן מספק לתיקון הליקויים שיתגלו. הבדיקה כוללת איתור סדקים, בעיות איטום ורטיבות, ליקויי חשמל ואינסטלציה, וכל סטייה מהתקן הישראלי או ממפרט המכר.',
    },
    {
      question: 'באילו אמצעים טכנולוגיים אתם משתמשים במהלך הבדיקה?',
      answer: 'אנו משלבים מכשור הנדסי מתקדם לצד ניסיון הנדסי מעמיק: מצלמות תרמיות (FLIR) לאיתור רטיבות ונזילות מבלי לשבור קירות או ריצוף, מכשור אקוסטי דיגיטלי לאבחון חללים וכשלים במבנה, מד לחות דיגיטלי, פלס לייזר לבדיקת ישרות קירות ורצפות, ומצלמות תיעוד באיכות גבוהה לתיעוד מלא של כל ממצא. השילוב בין הטכנולוגיה לניסיון של מעל 30 שנה מאפשר לנו לאתר ליקויים שבדיקה ויזואלית בלבד עלולה לפספס.',
    }
  ];

  const faqSchema = faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }));

  return (
    <section id="faq" className="py-6 md:py-12 bg-white scroll-mt-24">
      <SchemaTags type="FAQPage" data={{ mainEntity: faqSchema }} />
      <div className="container mx-auto px-6">
        <div className="text-center mb-4 md:mb-10">
          <span className="block text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">שאלות נפוצות</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">השאלות שכל בעל נכס <span className="text-blue-600">חייב לשאול</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">ריכזנו עבורכם את כל המידע המקצועי שחשוב לדעת לפני שמזמינים בדיקת בדק בית.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
