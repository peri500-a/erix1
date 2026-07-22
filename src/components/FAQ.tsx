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
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="text-slate-600 leading-relaxed pr-2 pt-4 pb-2 text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
      answer: 'המחיר לבדק בית הוא שקוף, ידוע מראש ומשתנה בהתאם לסוג הנכס (דירת קבלן חדשה, דירת יד שנייה או בית פרטי) ומספר החדרים/השטח שלו. המחירון ההוגן שלנו מתחיל ב-1,200 ש״ח לדירות קטנות. חשוב לזכור: עלות הבדיקה היא השקעה קטנה שמחזירה את עצמה פי כמה וכמה – אנו מאתרים כמעט תמיד ליקויים בשווי עשרות ומאות אלפי שקלים, ומאפשרים לכם לדרוש תיקון מהקבלן או להוריד את סכום הליקויים ממחיר הרכישה של דירת יד שנייה.',
    },
    {
      question: 'תוך כמה זמן מתבצעת הבדיקה ומתי מתקבל הדוח ההנדסי המלא?',
      answer: 'אנו מבינים שאתם נמצאים לרוב בלוחות זמנים צפופים (לפני חתימת חוזה או מסירת מפתח). לכן אנו עושים מאמץ לתאם את הביקור בשטח בתוך ימים בודדים. לאחר הבדיקה הפיזית, אנו מתחייבים לשלוח אליכם את חוות הדעת ההנדסית המלאה, המפורטת והמצולמת בתוך 48 שעות בלבד – ללא פשרות על איכות ויסודיות הדוח.',
    },
    {
      question: 'מדוע חשוב לבצע בדק בית מקצועי דווקא לדירת יד שנייה?',
      answer: 'דירות יד שנייה טומנות בחובן סכנות רבות שאינן נראות לעין לא מקצועית, כגון בעיות רטיבות חמורות המוסתרות ע״י צבע טרי, כשלי איטום, תשתיות חשמל פגומות, צנרת מים בלויה או תזוזות שלד וסדקים קונסטרוקטיביים. בדיקה הנדסית יסודית חושפת את מצב הנכס האמיתי ומספקת לכם הערכת עלויות לתיקון הליקויים. זהו כלי המיקוח החזק ביותר שלכם שיכול לחסוך לכם עשרות אלפי שקלים במעמד המשא ומתן.',
    },
    {
      question: 'מהי שנת בדק לדירה חדשה ומה בדיוק בודקים בה?',
      answer: 'שנת בדק היא השנה הראשונה שלאחר מסירת הדירה מהקבלן, שבה האחריות על מרבית הליקויים חלה עליו. בבדיקה זו אנו מתמקדים באיתור כשלים שהתפתחו או התגלו רק לאחר שימוש מעשי בנכס ובמהלך עונות השנה (כמו חדירות מים בחורף, סדקי התיישבות בקירות, בעיות ניקוז במרפסות ובמקלחות, תקינות ממ״ד ואקוסטיקה). ביצוע בדק בית לקראת תום שנת הבדק מבטיח שלא תפספסו את חלון הזדמנויות החוקי לדרוש מהקבלן לתקן את הכשלים על חשבונו.',
    },
    {
      question: 'באילו אמצעים טכנולוגיים אתם משתמשים במהלך הבדיקה?',
      answer: 'הבדיקה ההנדסית משלבת מומחיות וניסיון יחד עם שימוש במכשור טכנולוגי מתקדם ביותר. בין היתר, אנו משתמשים במצלמה תרמית מקצועית מבית FLIR לאיתור נזילות ורטיבות סמויה מאחורי קירות וריצוף ללא צורך בהרס, מדי לחות דיגיטליים (פרוטימטר), פלס לייזר ומדי טווח דיגיטליים לבדיקת סטיות וקירות, ומכשור ייעודי לבדיקת תקינות לחצי המים, הארקה ומערכות החשמל בנכס.',
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
