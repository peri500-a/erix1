'use client';

import React, { useEffect } from 'react';
import CommonSections from './CommonSections';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import Link from 'next/link';

const WarrantyInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'למה דווקא בתום השנה הראשונה (סוף שנת בדק) קריטי לבצע בדק בית?',
      a: 'במהלך השנה הראשונה המבנה "מתיישב" על יסודותיו, מה שיוצר לעיתים עיוותים וסדקים קונסטרוקטיביים או נימיים שלא נראו כלל במעמד פרוטוקול המסירה הראשוני. בנוסף, מכלולי האיטום, הקולטנים, מערכות הניקוז ומרזבי הגגות עוברים חורף ראשון אקטיבי תחת עומס. זהו חלון ההזדמנויות האחרון שלכם לגלות את הבעיות הללו כשנטל ההוכחה הבלעדי מוטל על כתפיו של הקבלן.'
    },
    {
      q: 'מה ההבדל המשפטי והמעשי בין "תקופת הבדק" ל"תקופת האחריות"?',
      a: 'על פי חוק המכר (דירות), בתקופת הבדק (נמשכת בין 1 ל-7 שנים לפי סוג הכשל) נטל ההוכחה חל על הקבלן: עליו להוכיח כי הליקוי נגרם ישירות עקב רשלנות או שימוש של בעל הדירה, אחרת החובה לתקנו חלה עליו. בתקופת האחריות (שלוש שנים מעבר לתקופת הבדק), נטל ההוכחה עובר אליכם: עליכם להוכיח כי מקור הכשל הוא בבנייה לקויה של הקבלן כדי לחייבו בתיקונים.'
    },
    {
      q: 'אילו ליקויי בנייה מתגלים בדרך כלל רק אחרי שנה שלמה של מגורים?',
      a: 'הנושאים השכיחים ביותר שמתגלים רק לאחר שימוש קבוע הם: כשלי איטום חמורים הגורמים לחדירת מי גשמים מקירות חוץ וגגות, רטיבויות קפילאריות מתחת לריצוף ש"נוסעות" בהדרגה במעלה הקירות, סדקי שקיעה והתיישבות בשילד, בעיות של מעבר קול קולני ואקוסטיקה פגומה בין הקומות, וקצרים לא מוסברים בלוח החשמל בעקבות עומסים או חדירת רטיבות לארונות הסתעפות חיצוניים.'
    },
    {
      q: 'האם הקבלן יכול פשוט להתעלם מדוח הליקויים של שנת הבדק ששלחתי לו?',
      a: 'החוק בישראל מטיל סנקציות כבדות על קבלנים המתנערים מאחריותם בתקופת הבדק. דוח הליקויים של אריקס ביקורת מבנים נכתב כחוות דעת קבילה לבית משפט. במידה והקבלן מסרב או מנסה לדחות את ביצוע התיקונים, הדוח משמש כבסיס יציב, ישיר ואמין לתביעה פיננסית בבית משפט או בוררות הנדסית שתאלץ אותו לפצות אתכם במאות אלפי שקלים.'
    },
    {
      q: 'כמה זמן מראש לפני סיום השנה הראשונה כדאי לתאם את בדק הבית?',
      a: 'אנו ממליצים בחום לתאם את סיור המהנדס כחודשיים לפני תום השנה למסירה הרשמית. הדבר מאפשר לנו להפיק את הדוח המדויק, מאפשר לכם להגישו בצורה מסודרת ומתועדת במכתב רשום לקבלן, ומותיר לקבלן ולצוותי העבודה שלו מספיק זמן לתכנן ולבצע את התיקונים בשטח במהלך תקופת האחריות החוקית.'
    }
  ];

  const warrantyChecks = [
    {
      t: 'איתור והתפתחות סדקים קונסטרוקטיביים',
      d: 'פירוש הנדסי מדויק להבדל הקיים בין סדקי שערה קוסמטיים שנובעים מעבודות טיח לבין סדקים דינמיים המהווים סכנה ליציבות או מעידים על שקיעה תשתיתית של הבלוקים.'
    },
    {
      t: 'כשלי איטום ורטיבות לאחר החורף הראשון',
      d: 'ביצוע סקר תרמוגרפי נרחב (FLIR) לאיתור סימני עובש, עיבוי, קילופי צבע או לחות כלואה בחיבור של קירות חיצוניים, גגות ורטיבויות נסתרות תחת הריצוף.'
    },
    {
      t: 'תפקוד מערכות האינסטלציה והביוב בפועל',
      d: 'בדיקת כשלי זרימה, לחצי מים נמוכים תחת עומסים, סתימות חוזרות במחסומי הריחות של המקלחות או צנרת דלוחין המורכבת בשיפועים גרועים ולא חוקיים.'
    },
    {
      t: 'בטיחות מערכת החשמל ואי-התאמות תקפיליות',
      d: 'בחינת תקינות מפסק הפחת להגנה מפני התחשמלות, בדיקת הארקת יסודות תקנית, איטום שקעים חיצוניים ממים והצלבת התכנון בפועל למפרטי הלוחות הרשמיים.'
    },
    {
      t: 'מערכות החלונות, הפרופילים וההרמטיות',
      d: 'בדיקת חדירת מים ואוויר דרך פרופילי אלומיניום (חלונות הזזה, דלתות המרפסת), יציבות המסילות וסגירה הרמטית של המחסומים מפני רוחות עזות.'
    },
    {
      t: 'יציבות ודיוק הריצוף והחיפויים',
      d: 'בדיקת סימני שאלת אריחים חלולים שהתרופפו תחת תנועת הדיירים בשנה הראשונה, פגמים במפרקי התפשטות בריצוף, ופליטות רובה פגומה המאפשרת חדירת נוזלים.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-blue-500/30 text-right">
      <SchemaTags 
        type="Service" 
        data={{
          name: "בדק בית לסוף שנת בדק - אריקס ביקורת מבנים",
          description: "ביקורת מבנים מקיפה לדירה חדשה וצמודי קרקע רגע לפני סיום תקופת הבדק ואחריות הקבלן. עריכת דוח ליקויים הנדסי קביל משפטית לחוק המכר.",
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
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'בדק בית לסוף שנת בדק' }]} />
            
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-6 uppercase mt-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              הזדמנות אחרונה לחיוב הקבלן בתיקון חינם
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              בדק בית לסוף שנת בדק <br />
              <span className="text-blue-400 font-extrabold text-2xl md:text-4xl">ביקורת מבנים מקיפה והגנת חוק המכר המלאה בהתאמה לתקן</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              עברה כמעט שנה מאז שקיבלתם את המפתח לדירה החדשה? אל תפספסו את המועד הקריטי ביותר! על פי חוק המכר (דירות), סיום השנה הראשונה מסמן את סוף תקופת הבדק שבה חובת ההוכחה חלה על הקבלן. בצעו בדיקת מהנדס יסודית לגילוי סדקי התיישבות, רטיבות חורף וכשלי צנרת סמויים.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg"
              >
                חייגו למהנדס שלנו: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%25D7%99%25D7%95%25D7%94%2520%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
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
            <div className="text-blue-600 font-extrabold text-3xl mb-3">100% הגנה</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">חובת הוכחה על הקבלן</h3>
            <p className="text-slate-500 text-sm leading-relaxed">במהלך שנת הבדק, החוק מטיל על הקבלן להוכיח כי הליקוי נגרם באשמתכם, אחרת הוא מחויב לתקנו.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">FLIR תרמי</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">איתור רטיבות חורף</h3>
            <p className="text-slate-500 text-sm leading-relaxed">מזהים כשלי איטום, חילחול מי גשמים ועיבוי מים סמוי שהופיעו רק במהלך החורף הראשון של המבנה.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">₪30,000+</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">חיסכון הנדסי ממוצע</h3>
            <p className="text-slate-500 text-sm leading-relaxed">לקוחותינו חוסכים עשרות אלפי שקלים בתיקונים שהיו נאלצים לשלם מכיסם בעוד מספר שנים ספורות.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">B.Sc מומחה</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">חוות דעת קבילה</h3>
            <p className="text-slate-500 text-sm leading-relaxed">דוח מהנדס עשוי ומנוסח בפורמט קביל לחלוטין בכל ערכאה משפטית, בוררויות, ולשכת המקרקעין.</p>
          </div>
        </div>
      </section>

      {/* Main Educational Text Info */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Legal Alert */}
            <div className="bg-blue-50/70 border-r-4 border-blue-600 p-8 rounded-l-3xl shadow-sm">
              <span className="text-blue-800 font-black text-xs uppercase tracking-widest block mb-2">◀ קריטי ביותר לחוק המכר</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                חשיבות הטיימינג הצרכני
              </h2>
              <p className="text-slate-750 text-base leading-relaxed mb-4">
                מרבית רוכשי הדירות החדשות חשים רגיעה שקרית לאחר השגת המפתחות, ומזניחים את הבדיקות בשנה הראשונה. אולם, הקבלן אחראי לתיקונים אך ורק תחת מגבלות זמני חוק המכר. <span className="font-bold text-slate-900">מרגע שתקופת הבדק מסתיימת, חובת ההוכחה עוברת ישירות אליכם</span>.
              </p>
              <p className="text-slate-755 text-base leading-relaxed">
                מהנדסי אריקס ביקורת מבנים בוחנים את כל אותם ליקויים שהתפתחו עקב {"\""}עבודה מאוחרת{"\""} - סדקים קונסטרוקטיביים בקומות שלד, שקיעות בריצוף שנובעות מביסוס חול גרוע, ורטיבות קפילארית שכבר החלה לעלות בבסיסי הקירות.
              </p>
            </div>

            {/* Why not simple inspection */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                למה דווקא עכשיו, בסוף השנה הראשונה?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                במהלך השנה הראשונה, המבנה החדש מושפע באופן פיזי וישיר משינויי טמפרטורה, תנודות קרקע בטבע, משקל עצמי קבוע ועומסי רוח. סדקי מאמץ שונים מופיעים בקירות, מערכת האיטום עוברת מבחן ראשון בגשמי החורף וריקבון סמוי בצינורות המים עשוי להתפרץ.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                דוח הליקויים של אריקס ביקורת מבנים פועל כנשק הצרכני וליטיגטור ההנדסי החזק ביותר שלכם מול היזם. הוא מאלץ את הקבלן לשלוח פועלים מקצועיים לביצוע תיקונים יסודיים ולא קוסמטיים שרק מסתירים את הכשל ומחמירים אותו לאורך שנים.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-1 text-base">חוות דעת קבילה לערעורים ודרישות תיקון חוקיות</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  אם בדיקת הנכס מגלה כשלים משמעותיים, אנו מציינים בדוח את הסימוכין המלאים מהתקנות ותקן הבנייה המתאים, ומנחים אתכם כיצד לפנות לקבלן באופן שייאלץ אותו לתקן את הדברים בצורה תשתיתית ומקיפה מייד.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checklist Points Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">רשימת מכלולי בדיקה</span>
            <h2 className="text-4xl font-black text-slate-900">מה אנו בודקים במסגרת ביקורת סוף שנת בדק?</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">סריקה מדעית וחשיפת כשלים הנדסיים מורכבים שהתפתחו במהלך השנה הראשונה למגורים</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warrantyChecks.map((point, index) => (
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

      {/* Comparison Table Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-right">
          <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight border-r-4 border-blue-600 pr-4">
            טבלת חוק המכר: חובת ההוכחה בתקופת הבדק לעומת תקופת האחריות
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            רוכשים רבים אינם מודעים להבדל המשפטי הדרמטי המשפיע על היכולת שלהם לחייב את הקבלן בתיקון חינם. הבנת ההבדלים הללו היא קריטית לשקט הפיננסי שלכם.
          </p>

          <div className="overflow-x-auto border border-slate-100 rounded-2xl my-8">
            <table className="w-full text-right border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 font-black">האלמנט המשפטי</th>
                  <th className="p-4 font-black text-blue-600 bg-blue-50/40">תקופת הבדק (שנה חולפת עד 7 שנים)</th>
                  <th className="p-4 font-black">תקופת האחריות (3 שנים נוספות)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">על מי חל נטל ההוכחה?</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-semibold">על הקבלן - עליו להוכיח שהליקוי נגרם באשמתכם, אחרת חלה עליו חובת תיקון.</td>
                  <td className="p-4">על רוכש הדירה - עליכם להביא הוכחה מדעית-הנדסית שהכשל נובע מעבודה לקויה במקור.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">גילוי וסוגי רטיבויות</td>
                  <td className="p-4 bg-blue-50/10">הקבלן מתקן נזילת צנרת ואיטום בגגות מייד ובחינם על חשבונו הבלעדי.</td>
                  <td className="p-4">נדרש דוח מהנדס יקר ומפרך המוכיח כשלי יריעות ביטומניות כדי לחייב את החברה.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">איכות כוח המיקוח הצרכני</td>
                  <td className="p-4 bg-blue-50/10">חזק ומגובה בחוק המכר הדירות בצורה קשיחה.</td>
                  <td className="p-4">חלש יחסית, כרוך לרוב {"במו\"מ"} מפרך וניהול הליכים מייגעים מול עורכי דין.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">שאלות נפוצות מבעלי הבית</span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">שאלות ותשובות בנושא <br /><span className="text-blue-600">בדק בית לסוף שנת בדק</span></h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">המידע והתקנים שיסייעו לכם להתייצב במקצועיות הנדסית מושלמת מול נציגי החברות המבצעות</p>
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

      {/* Dynamic CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black mb-4">אל תאבדו את זכותכם לתיקונים חינם מטעם חוק המכר!</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            הזמינו עכשיו בדק בית לסוף שנת בדק מאריקס ביקורת מבנים, וקבלו דוח מהנדס יסודי שיגלה את כל כשלי האיטום והסדקים הנסתרים בדירתכם.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:054-7515142" 
              className="bg-white text-blue-600 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-lg shadow-lg shadow-blue-900/20"
            >
              התקשרו ועמדו בקשר מיידי: 054-7515142
            </a>
            <a 
              href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%25D7%99%25D7%95%25D7%94%2520%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white font-black px-8 py-4 rounded-xl hover:bg-slate-800 transition-all text-lg"
            >
              הודעה מהירה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CommonSections />
    </div>
  );
};

export default WarrantyInspectionPage;
