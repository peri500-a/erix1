'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import CommonSections from './CommonSections';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';

const ContractorInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'מתי הכי נכון לבצע בדק בית מקבלן בדירה חדשה?',
      a: 'המועד האידיאלי והקריטי ביותר הוא בשלב "הפרוטוקול הראשון" (המוכר גם כטרום-מסירה), כ-14 עד 30 יום לפני קבלת המפתח הרשמית. בשלב זה, לקבלן יש עדיין כוח אדם, פועלים מנוסים וציוד מקצועי זמין בבניין, מה שמבטיח תיקון מהיר, איכותי ויעיל של כל הליקויים לפני מעבר הדירה שלכם.'
    },
    {
      q: 'מה ההבדל בין בדק בית מקבלן לביקורת מבנים רגילה ביד שנייה?',
      a: 'בבדק בית מקבלן, הבדיקה נעשית בהתאמה מחמירה לחוק המכר (דירות), לתקנות התכנון והבנייה, לתקנים הישראליים הרשמיים, ולמפרט הטכני המקורי של המכר עליו חתמתם בחוזה הרכישה. אנו בודקים חוסרים הנדסיים מול החייב בחוק, מעבר לליקויים פיזיים, כדי למנוע ירידות ערך הנדסיות במבנה החדש.'
    },
    {
      q: 'האם הקבלן רשאי לסרב להכניס מהנדס בדק בית מטעמי לפרוטוקול המסירה?',
      a: 'בשום אופן לא. על פי פסיקת בתי המשפט וחוק הבטחת זכויות רוכשי דירות, לרוכש יש זכות מלאה ובלתי ניתנת לערעור להיות מלווה על ידי מהנדס בניין מקצועי או מומחה מטעמו במהלך כל בדיקות הדירה. נוכחות של מהנדס מוסמך מעניקה לכם ביטחון ומאלצת את נציגי הקבלן להתייחס ברצינות לכל כשל תשתיתי.'
    },
    {
      q: 'האם הקבלן מחויב לתיקון הליקויים שמופיעים בדוח ההנדסי שלכם?',
      a: 'כן. חוק המכר (דירות) מגדיר תקופת אחריות ותקופת בדק ברורות לכל מרכיבי הבניין (כגון איטום, אינסטלציה, ריצוף ושלד). דו"ח הבדיקה המפורט של אריקס ביקורת מבנים מהווה דרישה משפטית קבילה ומנוסח ברוח פקודת הראיות. הקבלן אינו יכול להתעלם מליקויים המבוססים על תקנים ישראליים רשמיים ומחויב בהשבת המצב לתקין.'
    },
    {
      q: 'מה ההבדל בין תקופת הבדק לתקופת האחריות לפי חוק המכר?',
      a: 'תקופת הבדק נמשכת בין שנה ל-7 שנים (בהתאם לסוג הליקוי, למשל: 4 שנים לכשל בצינורות מים ו-7 שנים לכשל באיטום גגות). במהלך תקופה זו, נטל ההוכחה הוא על הקבלן - עליו להוכיח כי הליקוי נגרם משימוש לא תקין של הדייר, אחרת עליו לתקנו. תקופת האחריות מתחילה עם סיום תקופת הבדק (נמשכת שלוש שנים נוספות), ובה נטל ההוכחה עובר אל בעל הדירה.'
    }
  ];

  const checklistItems = [
    { 
      t: 'מערכת אינסטלציה, לחצים ומאגרי מים', 
      d: 'מדידת לחצי מים במקלחות ומטבח, בדיקת קשרי ניקוזים, איתור סתימות פנימיות בביוב באמצעות סיב אופטי חודרני, ווידוא קיום שיפועים תקינים בצנרת הדלוחין המונעים הצטברות ריח רע.' 
    },
    { 
      t: 'מערכות איטום, חילחול רטיבות וסריקה תרמית', 
      d: 'ביצוע סריקה היקפית מדעית באמצעות מצלמה תרמוגרפית מתקדמת (FLIR) לאיתור כשלי איטום סמויים, רטיבות כלואה מתחת ליציקת הריצוף או נזילות סמויות בחדרי שירותים ובקירות מסך.' 
    },
    { 
      t: 'עבודות ריצוף, אריחים חלולים וחיפוי קירות', 
      d: 'בדיקת הידבקות אריחים מול מפרט מכר למניעת שבירות עתידיות, בדיקת מישוריות, רוחב ואחידות החריצים (פוגות), ותקינות פנלים מסביב לכל פינות החדרים.' 
    },
    { 
      t: 'עמידות שלד הבניין, רישיון קונסטרוקטור וסדקים', 
      d: 'איבחוון חזותי קפדני של טיב הבטון והעבודות הקונסטרוקטיביות, איתור סדקים קורוזיביים או סדקי חוזק באלמנטים טרומיים וקירות נושאים, לשלילת שקיעה הנדסית של המעטפת.' 
    },
    { 
      t: 'אקוסטיקה, בידוד רעשים ומעברי קול', 
      d: 'בדיקת בידוד אקוסטי בין דירות חופפות (ת"י 1004) לווידוא מפגעי רעש עתידיים, זיהוי גשרי קור וחום במעטפת החיצונית הגורמים לעיבוי, טחב, ועובש פטרייתי מסוכן.' 
    },
    { 
      t: 'חשמל, לוח ההארקה ובטיחות מערכת זרם', 
      d: 'בדיקת הארקת יסודות תקנית שהיא קריטית להתחשמלות, בדיקת כיוון שקעים, רציפות מוליכים, מרחקי בטיחות במקלחות מול מקור מים, ותקינות שלטי סימון ומנרטים בלוח הראשי.' 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-blue-500/30 text-right">
      <SchemaTags 
        type="Service" 
        data={{
          name: "בדק בית מקבלן - בדיקת דירה חדשה לפני מסירה אריקס ביקורת מבנים",
          description: "ביקורת דירה חדשה מקיפה לפני מסירה ופרוטוקול מסירה ראשון. איתור ליקויי בנייה, כשלים תרמיים, רטיבות כלואה, ואי-התאמות דקדקניות לחוק המכר.",
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
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-[130px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-[130px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-right">
          <div className="max-w-4xl">
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'בדק בית מקבלן' }]} />
            
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-6 uppercase mt-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              הגנת חוק המכר לרוכשי דירות
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              בדק בית מקבלן <br />
              <span className="text-blue-400 font-extrabold text-2xl md:text-4xl">בדיקת דירה חדשה לפני קבלת מפתח</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              קניתם דירה חדשה מקבלן? אל תסמכו על מראה עיניים קוסמטי וריח של צבע טרי. בצעו בדיקה הנדסית יסודית ומדויקת לפני פרוטוקול מסירה ראשון. מהנדסי <strong>אריקס ביקורת מבנים</strong> יבחנו כל סנטימטר בדירה ויפיקו חוות דעת מקצועית וקבילה משפטית לחיוב הקבלן בתיקון מלא.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg"
              >
                חייגו למהנדס בניין: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%20%D7%99%D7%A8%20%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-center text-lg"
              >
                התייעצות מהירה ב-WhatsApp
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
                חוות דעת קבילות בבית משפט
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                דוח הנדסי מפורט תוך 48 שעות
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">100% דיוק</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">עמידות במפרט החוק</h3>
            <p className="text-slate-500 text-sm leading-relaxed">אנו בוחנים כל אלמנט בדירה החדשה מול תוכניות המכר עליהן חתמתם, ומגלים כל חריגה.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">48 שעות</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">דוח מהנדס מהיר</h3>
            <p className="text-slate-500 text-sm leading-relaxed">נמסר לכם דוח חתום דינאמית בתוך יומיים עסקים בלבד, כדי שתוכלו להציגו מייד לקבלן.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">₪45,000+</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">חיסכון ממוצע למשפחה</h3>
            <p className="text-slate-500 text-sm leading-relaxed">שמישות לקוחותינו מונעת קנסות ומתקנת תיקוני איטום, צנרת ונקודות חשמל יקרות {"ע\"ח"} הקבלן.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">B.Sc רשום</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">מומחיות בבתי משפט</h3>
            <p className="text-slate-500 text-sm leading-relaxed">חוות הדעת של המהנדס יוסי מנוסחת בהתאמה מחמירה לדיני הראיות ומקובלת על כל החברות הגדולות.</p>
          </div>
        </div>
      </section>

      {/* Main Educational Context */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Legal Alert */}
            <div className="bg-blue-50/70 border-r-4 border-blue-600 p-8 rounded-l-3xl shadow-sm">
              <span className="text-blue-800 font-black text-xs uppercase tracking-widest block mb-2">◀ קריטי לרוכשי דירות חדשות</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                סכנת הויתור בפרוטוקול מסירה ראשון
              </h2>
              <p className="text-slate-750 text-base leading-relaxed mb-4">
                נציגי קבלן רבים מנסים להלחיץ את הרוכשים במהלך &quot;פרוטוקול מסירה ראשון&quot;, ומחתימים אותם על הצהרה כי הדירה נקייה, שלמה ותקינה לשביעות רצונם. מרגע שחתמתם ללא ליווי של חוות דעת הנדסית, קשה בהרבה לדרוש את תיקון הליקויים.
              </p>
              <p className="text-slate-755 text-base leading-relaxed">
                מהנדסי אריקס ביקורת מבנים מבצעים את הבדיקה בעזרת מכשור טכנולוגי מתקדם. אנו מכינים את רשימת הליקויים בצורה שיטתית ומאוגדת, ומגבים אותה בתקנים ישראליים רשמיים, מה שלא מותיר לקבלן שום מקום לוויכוח.
              </p>
            </div>

            {/* Why not simple inspection */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                מדוע קיימים ליקויי בנייה בדירות חדשות מקבלן?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                עקב קצב בנייה מהיר ביותר, מחסור חמור בפועלים מקצועיים מיומנים ביישובי ישראל, ופיקוח דל בשטח מטעם החברות היזמיות, מרבית הדירות החדשות נמסרות כיום עם עשרות ליקויים - החל מליקויי קוסמטיקה פשוטים ועד בעיות איטום, צנרת כלואה, לחצי מים נמוכים וכשלים משמעותיים בחשמל ובקונסטרוקציה.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                בדק בית יסודי מעניק לכם את הביטחון כי ההשקעה הגדולה ביותר של חייכם אכן תקינה, בטוחה למגורים ושווה את כוח ערכה המלא. אל תגררו את התיקונים הללו לחודשים של סבל ופגיעה באיכות החיים של משפחתכם.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-1 text-base">מתי מתבצעת הבדיקה בפועל?</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  הזמן הטוב ביותר הוא מיד עם קבלת הודעה כתובה מהקבלן על זימון לפרוטוקול ראשון. אנו נתאם סיור משותף שבו נרכז את הבדיקות כדי שהקבלן יספיק לבצע את התיקונים המלאים עד למועד מסירת המפתח הרשמי (הפרוטוקול השני).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Checkpoints */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">רשימת בדיקות מקיפה</span>
            <h2 className="text-4xl font-black text-slate-900">מה נבדק במסגרת בדק בית מקבלן?</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">סריקה מבוססת טכנולוגיה ותרמוגרפיה של כל חלל הדירה, קירות, תקרות, תשתיות חוץ ופרופילים</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {checklistItems.map((point, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md hover:border-blue-500/25 transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {point.t}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {point.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-right">
          <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight border-r-4 border-blue-600 pr-4">
            טבלת השוואה: ביצוע בדק בית מקצועי לעומת בדיקה עצמית ללא מכשור
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            בעוד שרוכשים רבים סבורים שהם מסוגלים לאתר בעצמם דפקטים בריצוף או פנל חסר, מרבית הכשלים הקריטיים של הבנייה אינם נראים לעין בלתי מזוינת ומחייבים ידע הנדסי וציוד מדידה מתקדם ביותר.
          </p>

          <div className="overflow-x-auto border border-slate-100 rounded-2xl my-8">
            <table className="w-full text-right border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 font-black">האלמנט המשותף</th>
                  <th className="p-4 font-black">בדיקה חזותית עצמית</th>
                  <th className="p-4 font-black text-blue-600 bg-blue-50/40">בדיקה של אריקס ביקורת מבנים (מבוססת תקן)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">איתור רטיבות כלואה ואיטום</td>
                  <td className="p-4">מבחינים ברטיבות רק לאחר שיש התנפחות צבע קיצונית או עובש קשה.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">סריקה מדעית עם FLIR תרמי המזהה תנועת מים נסתרת תחת הריצוף מיד עם ביצועו.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">אינסטלציה ולחצים במערכת</td>
                  <td className="p-4">פתיחת ברזים אקראית לראות אם זורמים מים דלילים.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">מדידת לחצי ברים ואימות תקינות חיבורי קווי הניקוזים מול הוראות {"הל\"ת"}.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">חשמל, הארקה ומערכות לוח</td>
                  <td className="p-4">בדיקה עצמית שטחית על ידי חיבור מטען טלפון לשקע.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">בדיקת רציפות מוליכי הארקה של המבנה, מדידת עומסים ומניעת סכנות אש.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">חוק המכר ומפרט חוזה</td>
                  <td className="p-4">הדייר אינו מכיר את לשון החוק ואת תקני רוחב הפרופיל הנדרש.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">הצלבה מלאה של עובי, נפח וגאומטריה מול מפרט הבנייה הרשמי התקף בחוק.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">שאלות ותשובות</span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">שאלות נפוצות בנושא <br /><span className="text-blue-600">בדק בית מקבלן</span></h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">המידע המקצועי שייתן לכם שקט נפשי מלא, יחסוך לכם אלפי שקלים ויחזק את כוחכם מול הקבלן</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-right"
              >
                <h3 className="text-lg font-black text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-xl">◀</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm pr-6 border-r border-slate-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Call To Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black mb-4">אל תקבלו מפתח לדירה חדשה ללא בדק בית יסודי!</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            הגנו על כספכם, בריאות משפחתכם והזכויות המגיעות לכם בחוק המכר. קבלו הצעת מחיר אטרקטיבית וקבועה לבדיקת דירת קבלן עוד היום.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:054-7515142" 
              className="bg-white text-blue-600 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-lg shadow-lg shadow-blue-900/20"
            >
              חייגו ישירות למהנדס שלנו: 054-7515142
            </a>
            <a 
              href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%20%D7%99%D7%A8%20%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white font-black px-8 py-4 rounded-xl hover:bg-slate-800 transition-all text-lg"
            >
              כתבו לנו בווטסאפ
            </a>
          </div>
        </div>
      </section>

      <CommonSections />
    </div>
  );
};

export default ContractorInspectionPage;
