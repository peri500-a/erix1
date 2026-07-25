'use client';

import React from 'react';
import SchemaTags from './SchemaTags';
import { 
  Shield, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Sparkles
} from 'lucide-react';

const PergolaSection: React.FC = () => {
  // Simple FAQ Data for both UI and JSON-LD schema
  const faqData = [
    {
      question: "למה צריך אישור מהנדס לפרגולה?",
      answer: "על פי חוק התכנון והבנייה (תיקון 101), בניית פרגולה פטורה מהיתר בנייה מראש, אך מחייבת הגשת דיווח לעירייה תוך 45 יום מסיום הבנייה. לדיווח זה חובה לצרף אישור יציבות חתום על ידי מהנדס מבנים (קונסטרוקטור) מוסמך."
    },
    {
      question: "מה כולל השירות שלכם בפועל?",
      answer: "השירות שלנו כולל תיאום מהיר, הגעה פיזית של המהנדס לבדיקת יציבות הפרגולה והחיבורים שלה, מתן הנחיות לחיזוק במידת הצורך, והנפקת אישור קונסטרוקטור רשמי וחתום דיגיטלית שמוכן להגשה מיידית לעירייה."
    },
    {
      question: "תוך כמה זמן מקבלים את האישור?",
      answer: "אנו מתחייבים להנפקת האישור במהירות המרבית - לרוב בתוך 24 עד 48 שעות ממועד ביצוע הבדיקה בשטח, כדי שתוכלו להשלים את הדיווח לרשות ללא עיכובים."
    }
  ];

  const formattedFaqSchema = faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }));

  return (
    <div id="pergola-main-section" className="bg-slate-50 min-h-screen text-right font-sans" dir="rtl">
      {/* SEO JSON-LD Schema Tags */}
      <SchemaTags 
        type="FAQPage" 
        data={{ mainEntity: formattedFaqSchema }} 
      />
      <SchemaTags
        type="Service"
        data={{
          name: "אישור מהנדס לפרגולה - אריקס הנדסה וביקורת מבנים",
          description: "זקוקים לדיווח על פרגולה לעירייה? אנו מספקים אישור מהנדס קונסטרוקציה לפרגולות במהירות ובפשטות, בהתאם לדרישות תיקון 101 לחוק התכנון והבנייה.",
          provider: {
            "@type": "LocalBusiness",
            "name": "אריקס הנדסה",
            "telephone": "054-7515142"
          },
          areaServed: {
            "@type": "Country",
            "name": "Israel"
          }
        }}
      />

      {/* Hero Section - Simple, welcoming, clean */}
      <header id="hero-header" className="relative py-20 bg-gradient-to-br from-slate-900 via-[#132347] to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            שירות מהיר ומקצועי בפריסה ארצית
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            אישור מהנדס לפרגולה (תיקון 101) בפשטות ובמהירות
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            הקמתם פרגולה חדשה או קיימת? אנו מציעים שירות מקצועי של בדיקת יציבות והנפקת אישור מהנדס קונסטרוקטור מוסמך, המוכר ומקובל על ידי כל הרשויות המקומיות בישראל.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:054-7515142" 
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-base px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20"
            >
              <Phone className="w-4 h-4" />
              התקשרו עכשיו: 054-7515142
            </a>
            <a 
              href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%90%D7%99%D7%A9%D7%95%D7%A8%20%D7%9E%D7%94%D7%A0%D7%93%D7%A1%20%D7%9C%D7%A4%D7%A8%D7%92%D7%95%D7%9C%D7%94."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/15"
            >
              התייעצו איתנו ב-WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Trust Points - Simple layout */}
      <section id="trust-metrics" className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-slate-800">מענה ואישור מהירים</p>
              <p className="text-slate-500 text-sm mt-1">תוך 24-48 שעות מהביקור בשטח</p>
            </div>
            <div className="p-4 border-y md:border-y-0 md:border-x border-slate-100">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-slate-800">מהנדס רשוי ומנוסה</p>
              <p className="text-slate-500 text-sm mt-1">כל הבדיקות מבוצעות ע&quot;י מהנדס מוסמך</p>
            </div>
            <div className="p-4">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-slate-800">100% קבילות חוקית</p>
              <p className="text-slate-500 text-sm mt-1">אישורים תקניים המאושרים בכל עירייה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Explanation Section */}
      <section id="core-service" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm text-right space-y-8">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">תקנות התכנון והבנייה - תיקון 101</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight mb-4">
                אישור מהנדס לפרגולה (תיקון 101)
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                בניית פרגולה, גם כאשר מדובר במבנה קל יחסית, אינה פטורה מדרישות התכנון והבנייה בישראל. תיקון 101 לתקנות התכנון והבנייה קובע כי גם מבנים הפטורים מהיתר בנייה מלא מחויבים בבדיקת יציבות הנדסית ובאישור מהנדס קונסטרוקטור רשום, המוגש כחלק מהליך הרישוי מול הוועדה המקומית לתכנון ובנייה. ללא אישור זה, אתם עלולים למצוא את עצמכם מול צו הריסה, קנס, או קושי משפטי בעת מכירת הנכס בעתיד - שכן פרגולה ללא אישור מהנדס תקין עלולה להיחשב כחריגת בנייה.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg border-b border-slate-200/80 pb-2">מה כולל תהליך האישור?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  אנו מבצעים ביקור בשטח ובוחנים את מפרט הפרגולה, סוג החומרים (עץ, אלומיניום או מתכת), שיטת העיגון לקרקע או לגג, וחוזק העמידה בעומסי רוח ומשקל גג (כולל גגות מוצלים, סוככים או פרגולות מקורות בלוחות פוליקרבונט). הבדיקה בוחנת גם את מרחק הפרגולה מגבולות המגרש והשפעתה על מבנים סמוכים, בהתאם לדרישות התב&quot;ע החלה על הנכס.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  בסיום הבדיקה, אנו מנפיקים אישור קונסטרוקטור חתום ומפורט, הכולל את כל החישובים ההנדסיים הנדרשים, ומלווים אתכם בהגשת הדיווח לעירייה - כך שהתהליך מול הרשות המקומית מתבצע בצורה חלקה וללא עיכובים מיותרים.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg border-b border-slate-200/80 pb-2">למי מיועד השירות?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  השירות מתאים הן לבעלי נכסים המתכננים להקים פרגולה חדשה ומעוניינים לוודא שהתכנון עומד בדרישות התקן מראש, והן לבעלי נכסים עם פרגולה קיימת שנבנתה ללא אישור מסודר וזקוקים להסדרה רטרואקטיבית מול הרשויות. במקרים רבים, אישור מהנדס נדרש גם כתנאי מקדים בעסקאות מכר או במסגרת דרישות חברת הביטוח.
                </p>
              </div>
            </div>

            <div className="bg-blue-50/80 border border-blue-100 p-5 rounded-2xl text-blue-950 font-bold text-base leading-relaxed">
              עם ניסיון של מעל 30 שנה בתחום הביקורת ההנדסית, אינג&apos; יוסי פרי מספק אישורי קונסטרוקטור מדויקים, קבילים ומוכרים על ידי הרשויות בכל רחבי הארץ.
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Banner with pricing transparency */}
      <section id="pricing-simple" className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>
            <h3 className="text-xl sm:text-2xl font-black mb-4 relative z-10">אישור מהנדס מקצועי, בטוח ותקני</h3>
            <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-lg mx-auto relative z-10">
              הימנעו מחתימות מרחוק ללא הגעה, שעלולות להיפסל בעיריות או לבטל את פוליסת הביטוח שלכם. אנו מציעים בדיקה פיזית אמינה במחירים הוגנים ותחרותיים.
            </p>
            <div className="inline-block bg-blue-600/20 border border-blue-500/30 px-6 py-2.5 rounded-full text-blue-300 font-extrabold text-sm mb-6 relative z-10">
              מחירים נוחים והוגנים התואמים את מורכבות העבודה
            </div>
            <div>
              <a 
                href="tel:054-7515142" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-base px-8 py-3.5 rounded-xl transition-all relative z-10"
              >
                <Phone className="w-4 h-4" />
                לקבלת הצעת מחיר מהירה התקשרו
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Simple FAQs */}
      <section id="faqs" className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-slate-950 text-center mb-8">שאלות ותשובות נפוצות</h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                <h3 className="font-extrabold text-slate-900 text-base mb-2 flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">?</span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pr-3">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PergolaSection;
