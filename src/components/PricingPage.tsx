'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Coins, 
  Phone, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ArrowLeftRight 
} from 'lucide-react';
import CommonSections from './CommonSections';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import DefectCalculator from './DefectCalculator';

const PricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const mainPrices = [
    { id: 1, service: 'בדק בית לדירת יד שנייה', unit: 'נכס', quantity: 'דירת 2-3 חדרים', price: '1,400 - 1,700' },
    { id: 2, service: 'בדק בית לדירת יד שנייה', unit: 'נכס', quantity: 'דירת 4 חדרים', price: '1,700 - 1,900' },
    { id: 3, service: 'בדק בית לדירת יד שנייה', unit: 'נכס', quantity: 'דירת 5 חדרים', price: '1,800 - 2,200' },
    { id: 4, service: 'ביקורת מבנים לבית פרטי / קוטג׳ / פנטהאוז', unit: 'נכס', quantity: 'עד 200 מ״ר', price: '2,200 - 3,500' },
    { id: 5, service: 'תוספת לבדיקת מערכת איטום ורטיבות (במצלמה תרמית)', unit: 'בדיקה', quantity: 'כלל הדירה', price: 'כלול במחיר הבסיס' },
  ];

  const specialServices = [
    { id: 6, service: 'בדק בית סוף שנת בדק', unit: 'נכס', quantity: 'לפי מפרט חוק המכר', price: 'החל מ-1,400' },
    { id: 7, service: 'איתור נזילות תרמי ממוקד', unit: 'בדיקה', quantity: 'מכשור FLIR מתקדם', price: 'החל מ-1,200' },
    { id: 8, service: 'חוות דעת הנדסית לבית משפט', unit: 'חוות דעת', quantity: 'לפי פקודת הראיות', price: 'החל מ-4,500' },
  ];

  const faqs = [
    {
      q: 'מהי העלות הממוצעת של בדק בית והאם המחירים קבועים?',
      a: 'עלות בדק בית משתנה בהתאם למספר החדרים, שטח הנכס במ״ר, וסוג הבדיקה הדרושה. מחיר דירת 3 חדרים ממוצעת נע סביב 1,400 עד 1,700 ₪, ואילו בדיקת בית פרטי מורכב עשויה להתחיל ב-2,200 ₪. המחירים מותאמים אישית כדי להבטיח הוגנות הנדסית.'
    },
    {
      q: 'האם מחירון בדק הבית שלכם כולל מע״מ?',
      a: 'לא, כל המחירים המוצגים במחירון ובהצעות המחיר אינם כוללים מע״מ כחוק, אלא אם צוין אחרת במפורש.'
    },
    {
      q: 'מדוע יש הבדל במחיר בין דירה מקבלן לדירת יד שנייה?',
      a: 'בדיקת דירת יד שנייה מורכבת יותר משום שהיא דורשת שימוש אינטנסיבי במכשור איתור טכנולוגי (כמו מצלמה תרמית FLIR ומד רטיבות) לאיתור נזילות ורטיבות כלואה מתחת לריצוף, לצד בחינת בלאי של מערכות ישנות. בדיקת קבלן מתמקדת בעיקר בהתאמה לתקנים ישראליים ובאיכות ביצוע הגימורים.'
    },
    {
      q: 'מה מקבלים בסיום הבדיקה ההנדסית?',
      a: 'בתום הבדיקה מופק דוח הנדסי מקיף ומפורט. הדוח כולל צילומים תרמיים ורגילים של כל כשל, הפניות ספציפיות לתקנים הישראליים ותקנות התכנון והבנייה, ואומדן עלויות תיקון מפורט הניתן להצגה לקבלן, למוכר או לבית המשפט.'
    },
    {
      q: 'האם מהנדס מוסמך מגיע לבצע את הבדיקה בפועל?',
      a: 'בוודאי. באריקס ביקורת מבנים, כל הבדיקות מבוצעות אך ורק על ידי מהנדס אזרחי מוסמך הרשום בפנקס המהנדסים. איננו מעסיקים ״הנדסאים״ או ״בודקים״ ללא הכשרה הנדסית אקדמית מלאה.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen selection:bg-blue-500/30 text-right font-sans">
      <SchemaTags 
        type="Service" 
        data={{
          name: "מחירון בדק בית וביקורת מבנים - אריקס ביקורת מבנים",
          description: "מחפשים בדק בית מחיר משתלם ושקוף? היכנסו למחירון המלא של אריקס ביקורת מבנים. מחירים מפורטים לפי גודל הדירה, סוג הנכס (קבלן או יד שנייה) והסברים מקיפים.",
          provider: {
            "@type": "LocalBusiness",
            "name": "אריקס ביקורת מבנים"
          },
          areaServed: "ישראל"
        }} 
      />

      <SchemaTags 
        type="FAQPage" 
        data={{
          mainEntity: faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        }} 
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0e172e] to-slate-950 text-white">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'מחירון בדק בית' }]} />
            
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black tracking-wider mb-6 mt-4 uppercase"
            >
              <Coins className="w-4 h-4 text-blue-400" />
              מחירון שקוף והוגן 2026
            </motion.span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              בדק בית מחיר – המחירון המלא והשקוף לביקורת מבנים
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
              מתכננים לקנות דירה או לקבל מפתח מהקבלן? אחת השאלות הראשונות שעולות היא <strong>כמה עולה בדק בית</strong> וכיצד נקבע המחיר. בשוק ביקורת המבנים בישראל קיימים פערי מחירים נרחבים, והמטרה שלנו היא לעשות לכם סדר מלא, להציג מחירון שקוף ולהסביר בדיוק על מה אתם משלמים.
            </p>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl">
              חברת <strong>אריקס ביקורת מבנים וביקורת מבנים</strong> מציעה שירותי בדק בית מקצועיים, יסודיים והנדסיים, המבוצעים אך ורק על ידי מהנדסים אזרחיים רשומים, ומספקת לכם שקט נפשי מוחלט במחיר הוגן ותחרותי.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5 shrink-0" />
                חייגו להצעת מחיר: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%91%D7%99%D7%A7%D7%95%D7%A8%D7%AA%20%D7%9E%D7%91%D7%A0%D7%99%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-center text-lg"
              >
                שליחת הודעה ישירה ב-WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Pricing Table Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 border-r-4 border-blue-600 pr-4">
              מחירון בדק בית מומלץ – דירות קבלן ויד שנייה
            </h2>
            <p className="text-slate-600 text-lg">
              להלן טבלת המחירים המומלצת לביקורת מבנים, הערוכה מימין לשמאל ומבוססת על סוג הנכס וגודלו (מספר החדרים):
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white mb-8">
            <table className="w-full border-collapse text-right text-sm" dir="rtl">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 border-l border-slate-200 w-16">מספר פריט</th>
                  <th className="p-4 border-l border-slate-200">תיאור השירות וסוג הנכס</th>
                  <th className="p-4 border-l border-slate-200">יחידת מידה</th>
                  <th className="p-4 border-l border-slate-200">כמות / גודל</th>
                  <th className="p-4">סה״כ משוער (ש״ח)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {mainPrices.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 border-l border-slate-200 font-bold text-slate-500">{row.id}</td>
                    <td className="p-4 border-l border-slate-200 font-bold text-slate-900">{row.service}</td>
                    <td className="p-4 border-l border-slate-200">{row.unit}</td>
                    <td className="p-4 border-l border-slate-200 font-medium">{row.quantity}</td>
                    <td className="p-4 font-black text-blue-600 text-base">{row.price} {row.price.includes('כלול') ? '' : '₪'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Secondary Table: Special services */}
          <div className="mt-16 mb-12">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 border-r-4 border-slate-400 pr-4">
              מחירון בדיקות הנדסיות מיוחדות וחוות דעת מומחה
            </h3>
            <p className="text-slate-600 text-base mb-6">
              שירותים מקצועיים מיוחדים הניתנים על ידי מהנדס רשום קביל בבתי משפט:
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
              <table className="w-full border-collapse text-right text-sm" dir="rtl">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="p-4 border-l border-slate-200 w-16">מספר פריט</th>
                    <th className="p-4 border-l border-slate-200">סוג השירות ההנדסי</th>
                    <th className="p-4 border-l border-slate-200">יחידת מידה</th>
                    <th className="p-4 border-l border-slate-200">פירוט הדוח והקבילות</th>
                    <th className="p-4">מחיר התחלתי (ש״ח)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {specialServices.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 border-l border-slate-200 font-bold text-slate-500">{row.id}</td>
                      <td className="p-4 border-l border-slate-200 font-bold text-slate-900">{row.service}</td>
                      <td className="p-4 border-l border-slate-200">{row.unit}</td>
                      <td className="p-4 border-l border-slate-200">{row.quantity}</td>
                      <td className="p-4 font-black text-blue-600 text-base">{row.price} ₪</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Disclaimer / Legal note */}
          

        </div>
      </section>

      {/* Interactive Defect Calculator */}
      <DefectCalculator />

      {/* Deep Dive SEO Content Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 border-r-4 border-blue-600 pr-4">
            מהם הפרמטרים המשפיעים על מחיר בדק בית?
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            מחיר בדק בית אינו קבוע, והוא נגזר ממספר מאפיינים מרכזיים של הנכס המיועד לבדיקה:
          </p>

          <div className="space-y-6 text-right">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                גודל הנכס ומספר החדרים
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                ככל שהדירה גדולה יותר או בעלת מפלסים מרובים (כמו קוטג׳ או פנטהאוז), כך משך הבדיקה ארוך יותר והמחיר יעלה בהתאם. כמות אלמנטים כמו אריחי ריצוף, פתחים, קירות ונקודות חשמל עולה משמעותית. בדיקה יסודית לוקחת זמן – דירת 5 חדרים דורשת כשעתיים עד שלוש שעות של עבודה קפדנית בשטח, בעוד דירת 2 חדרים קטנה דורשת פחות זמן.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                סוג הדירה (חדשה מקבלן מול יד שנייה)
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                בדירת קבלן הדגש הוא על התאמה מוחלטת לתוכניות המכר, למפרט הטכני ולתקני הבנייה הישראליים ואיכות הגימורים. בדירת יד שנייה הבדיקה מתמקדת בעיקר בבלאי, כשלי איטום, סדקים מבניים ומערכות ישנות, לרבות סכנה גבוהה של נזילות מים ורטיבות כלואה מתחת לרצפות בעקבות בלאי צנרת.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                ציוד טכנולוגי נדרש
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                שימוש במצלמות תרמיות מתקדמות לאיתור נזילות סמויות, מדי לחות, ומכשירים ליישור ופילוס בלייזר עשויים להשפיע על מורכבות העבודה. בדיקה זו דורשת מכשור תרמוגרפי מתקדם לאיתור נזילות, בדיקת שיפועים במרפסות ובמקלחות, ובדיקה יסודית של בלאי קונסטרוקטיבי וקירות חוץ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Includes Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-right">
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 border-r-4 border-blue-600 pr-4">
            מה כוללת בדיקת מהנדס אריקס ביקורת מבנים?
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            הדוח ההנדסי שתקבלו מאיתנו הוא מסמך משפטי ומקצועי מפורט. להלן האלמנטים המרכזיים שנבדקים בדירה:
          </p>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-3">ריצוף וחיפויים</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                אנו בודקים את כלל ריצוף הדירה. אם אין אזכור של פגם או שבר באריחים, אנו מציינים בדוח כי הריצוף במצב נאות. הבדיקה כוללת סעיפים נפרדים ועצמאיים עבור אריחי קיר חדר אמבטיה ואריחי רצפה בחדר אמבטיה, על מנת לוודא הדבקה תקנית ומניעת חללים ריקים מתחת לאריח.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-3">ארונות מטבח</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                בדיקת ארונות המטבח והנגרות כוללת הערכה סובייקטיבית מקצועית של המהנדס לגבי איכות ההתקנה, חוזק החיבורים, פתיחה וסגירה תקינה של המנגנונים והתאמה הנדסית לשימוש ארוך טווח.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-3">מערכות אינסטלציה</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                בפרק האינסטלציה, המהנדס מוודא את תקינות זרימת המים והניקוזים. במידה ולא נמצאו ליקויים, יופיעו בדוח בשורות נפרדות הנתונים הבאים המעידים על בדיקה יסודית:
              </p>
              <div className="flex flex-col gap-2 border-r-2 border-blue-500 pr-4 mr-2 bg-white/60 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  לחץ מים תקין
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  ספיקה תקינה
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-3">פרק פתחים</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                בכל דוח נפתח פרק ייעודי בשם {"'פתחים'"}. במידה ולא נמצאו ליקויים במערכות האלומיניום והנגרות, יירשמו בפרק זה שתי שורות נפרדות לחלוטין:
              </p>
              <div className="flex flex-col gap-2 border-r-2 border-blue-500 pr-4 mr-2 bg-white/60 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  דלתות נבדקו ונמצאו תקינות
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  חלונות אלומיניום נבדקו תקינים
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danger of Cheap Checks Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-right">
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 border-r-4 border-blue-600 pr-4">
            למה לא כדאי לבחור בהצעה הזולה ביותר בבדק בית?
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            השוק מוצף ב״בודקים״ שמציעים מחירים נמוכים באופן מחשיד (500-700 ש״ח). לרוב, מדובר באנשים שאינם מהנדסים אזרחיים, או שהם מספקים ״דוח מהיר״ בן עמודים בודדים שאינו קביל בשום ערכאה משפטית או מול קבלנים. דוח שטחי שלא יזהה נזילת מים סמויה או כשל קונסטרוקטיבי יעלה לכם עשרות אלפי שקלים בטווח הארוך. השקעה בבדק בית מקצועי מחזירה את עצמה כבר בליקוי הראשון שמתגלה.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                חוסר הסמכה הנדסית
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                רבים מהבודקים הזולים אינם מהנדסים אזרחיים רשומים אלא הנדסאים או אנשי שיפוצים לשעבר. חוות דעתם אינה נושאת משקל מקצועי או קבילות משפטית מול קבלנים ובתי משפט.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                בדיקה חפוזה ושטחית
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                כדי להרוויח במחירים נמוכים, בודקים זולים מקדישים 30-40 דקות בלבד לדירה, ומפספסים ליקויי איטום קשים ורטיבות כלואה שהתיקון שלהם יעלה לכם עשרות אלפי שקלים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">שאלות נפוצות</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              שאלות ותשובות בנושא מחירי בדק בית וביקורת מבנים
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              כל מה שצריך לדעת על תמחור ביקורת מבנים, בדיקות תרמיות ודוחות הנדסיים
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-right shadow-sm"
              >
                <h3 className="text-lg font-black text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-xl">◀</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm pr-6 border-r border-slate-200">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/60 border border-blue-500/20 rounded-[2.5rem] p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              רוצים לקבל הצעת מחיר מדויקת ומשתלמת לנכס שלכם?
            </h2>
            <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
              צרו קשר עם מומחי אריקס ביקורת מבנים עוד היום! התקשרו עכשיו או שלחו הודעה וקבלו הצעת מחיר שקופה, הוגנת ומדויקת ממהנדס מומחה תוך דקות ספורות.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:054-7515142" 
                className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-2xl hover:bg-blue-500 transition-all shadow-lg hover:scale-105"
              >
                <Phone className="w-6 h-6 stroke-[3]" />
                054-7515142
              </a>
            </div>
          </div>
        </div>
      </section>

      <CommonSections excludePergola />
    </div>
  );
};

export default PricingPage;
