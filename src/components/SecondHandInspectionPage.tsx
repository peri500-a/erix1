'use client';

import React, { useEffect } from 'react';
import Contact from './Contact';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import { Scale, FileText, CheckCircle2, ShieldCheck, AlertTriangle, Droplet, Settings, Eye, HelpCircle } from 'lucide-react';

const SecondHandInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'האם מוכר הדירה מחויב לתקן את הליקויים שתמצאו?',
      a: 'בדירת יד שנייה המוכר אינו מחויב לתקן, אלא אם הוסכם אחרת בחוזה המכר. עם זאת, הדוח משמש אתכם כקלף מיקוח חזק מאוד להפחתת מחיר הדירה בגובה עלויות התיקון ההנדסיות.'
    },
    {
      q: 'תוך כמה זמן מתקבל דוח בדק הבית?',
      a: 'דוח הנדסי מפורט, חתום וקביל משפטית נשלח אליכם תוך ימי עסקים ספורים מסיום הבדיקה הפיזית בנכס.'
    },
    {
      q: 'מה ההבדל בין בדק בית יד שנייה לבדיקת דירה מקבלן?',
      a: 'בדירת קבלן הבדיקה מתבצעת מול מפרט המכר וחוק המכר (דירות), והקבלן מחויב לתקן את הליקויים מכוח החוק. בדירת יד שנייה, הבדיקה מתמקדת בבלאי, נזקים מצטברים, מערכות ישנות ותקינות הנדסית כללית לצורך הערכת שווי העסקה והסיכונים הכרוכים בה. המוכר אינו מחוייב בתיקון הליקויים והדבר נתון להסכמות המסחריות שבין הצדדים כפי שאלו ינוסחו בחוזה המכר.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-blue-500/30 text-right">
      <SchemaTags 
        type="Service" 
        data={{
          name: "בדק בית לדירה יד שנייה - אריקס ביקורת מבנים",
          description: "בדק בית לדירה יד שנייה – הגנה הנדסית וכלכלית לפני הרכישה. חשיפת ליקויים סמויים, הערכת עלויות תיקון וכלי חזק למשא ומתן.",
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
      <section className="relative pt-44 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-[#101c38] to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/25 rounded-full blur-[130px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-[130px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-right">
          <div className="max-w-4xl">
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'ביקורת דירה יד שנייה לפני קנייה' }]} />
            
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-6 uppercase mt-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              תקן ישראלי ת&quot;י 1205
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              ביקורת דירה יד שנייה לפני קנייה
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              אבחון הנדסי מקיף וגילוי ליקויים סמויים לפני החתימה על החוזה – הגנה מלאה על ההשקעה שלכם וקבלת כוח מיקוח ממשי במשא ומתן.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg"
              >
                חייגו לבדיקה מהירה: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%20%D7%99%D7%A8%20%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-center text-lg"
              >
                התכתבו איתנו בווטסאפ
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5 font-bold">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                מהנדס בניין רשום ומורשה (B.Sc)
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                בדיקה לפי תקן ת&quot;י 1205
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                דוח הנדסי מפורט וקביל
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core Explanation Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm text-right space-y-10">
            
            {/* Introductory Callout */}
            <div className="border-r-4 border-blue-600 pr-5 py-1">
              <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium">
                רכישת דירה יד שנייה היא לרוב העסקה הכלכלית המשמעותית ביותר בחיים, אך בניגוד לדירה חדשה מקבלן, כאן אין אחריות יצרן ואין שנת בדק. כל ליקוי שיתגלה לאחר החתימה על החוזה - מרטיבות נסתרת ועד בעיות בשלד - הופך באחת לבעיה שלכם בלבד, על כל העלות הכרוכה בתיקונה. משום כך, בדק בית לפני קנייה אינו הוצאה מיותרת אלא כלי הגנה בסיסי על ההשקעה שלכם.
              </p>
            </div>

            {/* Grid of detailed content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Box 1: מה כוללת הבדיקה? */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h3 className="text-xl font-black text-slate-900">מה כוללת הבדיקה?</h3>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  הביקורת מתבצעת בהתאם לתקן הישראלי ת&quot;י 1205, העוסק בבדיקת דירות מגורים לפני מכירה, ומכסה את כלל מערכות הדירה: איתור סדקים וסימני תזוזה בקירות ובתקרות, בדיקת רטיבות וכשלי איטום בחדרים רטובים, במרפסות ובקירות חוץ, תקינות מערכת החשמל והלוח הראשי, מצב האינסטלציה והצנרת, תפקוד דלתות, חלונות ותריסים, ובחינת גימור הריצוף והטיח. כאשר קיים חשד לרטיבות סמויה, אנו משלבים גם סריקה במצלמה תרמית לאיתור מדויק ללא צורך בפגיעה בנכס.
                </p>
              </div>

              {/* Box 2: הכוח שבדוח ההנדסי */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <FileText className="w-6 h-6 shrink-0" />
                  <h3 className="text-xl font-black text-slate-900">הכוח שבדוח ההנדסי</h3>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  בסיום הבדיקה מתקבל דוח הנדסי מפורט, הכולל תיעוד צילומי של כל ממצא, הסבר על חומרת הליקוי והערכת עלות תיקון משוערת. דוח זה הוא הרבה מעבר לרשימת תקלות - הוא כלי משא ומתן ממשי. במקרים רבים, לקוחותינו השתמשו בממצאי הדוח כדי לדרוש הפחתת מחיר משמעותית מהמוכר, לתקן ליקויים כתנאי להשלמת העסקה, או במקרים חריגים - לסגת מעסקה שהתבררה כבעייתית מדי.
                </p>
              </div>

            </div>

            {/* Box 3: מתי כדאי להזמין את הבדיקה? */}
            <div className="bg-blue-50/70 border border-blue-100 p-6 sm:p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-blue-800 font-bold">
                <Scale className="w-6 h-6 shrink-0" />
                <h3 className="text-xl font-black text-slate-900">מתי כדאי להזמין את הבדיקה?</h3>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                מומלץ לבצע את הביקורת לאחר סיכום ראשוני על מחיר עם המוכר אך לפני חתימה על חוזה מחייב, כך שתוצאות הבדיקה עדיין יכולות להשפיע על תנאי העסקה. הבדיקה נמשכת כשעה עד שעתיים בהתאם לגודל הדירה, והדוח המלא מועבר תוך ימים ספורים - מהירות המאפשרת לכם לעמוד בלוחות הזמנים הנהוגים בעסקאות נדל&quot;ן מבלי להתפשר על יסודיות הבדיקה.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              מה כוללת בדיקת מהנדס בדירה יד שנייה?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              בדיקה יסודית של חברתנו מקיפה את כלל מערכות המבנה ומבוצעת באמצעות מכשור טכנולוגי מתקדם (כולל מצלמה תרמית לאיתור נזילות ורטיבות סמויה). הבדיקה כוללת את הפרקים הבאים:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-3 items-center mb-4 text-blue-600">
                <Droplet className="w-7 h-7" />
                <h3 className="text-xl font-black text-slate-900">מערכות אינסטלציה וניקוז</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                בדיקה יסודית של קווי המים והדלוחין בנכס. אנו מוודאים כי אין נזילות פעילות או כשלים בצנרת הישנה.
              </p>
              <ul className="space-y-2 text-slate-600 text-sm border-t border-slate-50 pt-4">
                <li className="flex gap-2 items-center">
                  <span className="text-blue-500 font-bold">●</span>
                  <span>לחץ מים תקין נבדק בנפרד בכל נקודות הקצה.</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-blue-500 font-bold">●</span>
                  <span>ספיקה תקינה וקצב זרימה נבחנים כדי למנוע סתימות עתידיות.</span>
                </li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-3 items-center mb-4 text-blue-600">
                <Eye className="w-7 h-7" />
                <h3 className="text-xl font-black text-slate-900">איטום, לחות ורטיבות</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                איתור כשלי איטום בקירות, בתקרות, בחדרים רטובים ובסמוך לחלונות באמצעות ציוד תרמוגרפי ומדדי לחות מתקדמים, המאפשרים לגלות רטיבות עוד לפני שהיא נראית לעין על פני השטח.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-3 items-center mb-4 text-blue-600">
                <FileText className="w-7 h-7" />
                <h3 className="text-xl font-black text-slate-900">רכיבי בנייה וגימורים</h3>
              </div>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="border-b border-slate-50 pb-3">
                  <strong className="text-slate-900 block mb-1">ריצוף הדירה:</strong>
                  בדיקת שקיעות, אריחים חלולים, פגמים מקומיים או שברים בריצוף הכללי.
                </li>
                <li className="border-b border-slate-50 pb-3">
                  <strong className="text-slate-900 block mb-1">חיפויים ואריחים:</strong>
                  בדיקת אריחי קיר חדר אמבטיה ואריחי רצפה בחדר אמבטיה, לוודא הדבקה תקינה, שיפועים נכונים לעבר הניקוז, ומניעת חדירת מים.
                </li>
                <li>
                  <strong className="text-slate-900 block mb-1">נגרות קבועה:</strong>
                  מתן הערכה יסודית ומקצועית לגבי ארונות מטבח, מצבם המבני, פלס ורמת השחיקה שלהם.
                </li>
              </ul>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-3 items-center mb-4 text-blue-600">
                <Settings className="w-7 h-7" />
                <h3 className="text-xl font-black text-slate-900">פתחים ואלומיניום</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                בדיקה קפדנית של כלל מערכות הסגירה והבידוד בנכס לשמירה על בטיחות ויעילות אנרגטית:
              </p>
              <ul className="space-y-2 text-slate-600 text-sm border-t border-slate-50 pt-4">
                <li className="flex gap-2 items-center">
                  <span className="text-blue-500 font-bold">●</span>
                  <span>דלתות נבדקו ונמצאו תקינות (כולל דלתות פנים ודלת הכניסה הראשית).</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-blue-500 font-bold">●</span>
                  <span>חלונות אלומיניום נבדקו תקינים (תקינות מנגנוני הנעילה, המסילות, הצירוד והאיטום מפני רוח וגשם).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estimates Table Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-right">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              אומדן עלויות התיקון והליקויים בנכס
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              כאשר מתגלים ליקויים ויש אומדן כספי בצדם, אנו עורכים עבורכם טבלה מפורטת ומקצועית המלמדת על מהות הליקויים ועל עלות התיקון הצפויה שלהם בשוק. הטבלה נערכת מימין לשמאל באופן ברור וקריא, וכוללת חמישה עמודות קבועות לריכוז האומדנים:
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-100 rounded-3xl my-8 shadow-sm">
            <table className="w-full text-right border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-black rounded-tr-3xl">מספר פריט</th>
                  <th className="p-4 font-black">תיאור הליקוי ומהות התיקון</th>
                  <th className="p-4 font-black">יחידת מידה</th>
                  <th className="p-4 font-black">כמות</th>
                  <th className="p-4 font-black rounded-tl-3xl">סה&quot;כ (ש&quot;ח)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-950">1</td>
                  <td className="p-4">תיקון כשלי איטום מקומיים בחדר רחצה</td>
                  <td className="p-4">גלובלי</td>
                  <td className="p-4">1</td>
                  <td className="p-4 font-mono font-bold text-slate-900">X,XXX</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-950">2</td>
                  <td className="p-4">החלפת מנגנוני נעילה בחלונות אלומיניום</td>
                  <td className="p-4">יחידה</td>
                  <td className="p-4">3</td>
                  <td className="p-4 font-mono font-bold text-slate-900">XXX</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-950">3</td>
                  <td className="p-4">חיזוק ותיקון דלתות פנים פגומות</td>
                  <td className="p-4">יחידה</td>
                  <td className="p-4">2</td>
                  <td className="p-4 font-mono font-bold text-slate-900">XXX</td>
                </tr>
                <tr className="bg-slate-50 font-medium">
                  <td className="p-4 text-center text-slate-400">...</td>
                  <td className="p-4 text-slate-400">...</td>
                  <td className="p-4 text-slate-400">...</td>
                  <td className="p-4 text-slate-400">...</td>
                  <td className="p-4 text-slate-400">...</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 max-w-md mr-auto text-left shadow-sm">
            <h4 className="font-black text-slate-900 mb-4 border-b border-slate-200 pb-2 text-right">סעיפי סיכום תקציביים:</h4>
            <div className="space-y-2 text-sm text-slate-600 text-right">
              <div className="flex justify-between">
                <span className="font-bold text-slate-800">[סכום] ש&quot;ח</span>
                <span>סכום ביניים לפני מע&quot;מ:</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-800">[סכום] ש&quot;ח</span>
                <span>מע&quot;מ (18%):</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-black text-blue-600">
                <span>[סכום] ש&quot;ח</span>
                <span>סה&quot;כ כולל מע&quot;מ:</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="p-2 px-4 bg-blue-100 text-blue-700 rounded-full font-extrabold text-sm tracking-wider uppercase block mb-3 w-fit mx-auto">
              מידע חשוב ומקצועי
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              שאלות ותשובות נפוצות (FAQ) – בדק בית יד שנייה
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-right"
              >
                <h3 className="text-lg font-black text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-xl shrink-0">◀</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm pr-6 border-r border-slate-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default SecondHandInspectionPage;
