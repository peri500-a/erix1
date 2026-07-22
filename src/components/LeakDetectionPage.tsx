'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import CommonSections from './CommonSections';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import Link from 'next/link';

const LeakDetectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'מה ההבדל בין איתור נזילות על ידי מהנדס בניין לבין אינסטלטור רגיל?',
      a: 'אינסטלטור רגיל מציע לרוב פתרונות מקומיים המבוססים על ניחוש וניסיון חזותי בלבד, ואף עלול לשבור קירות וריצוף לצורך חיפוש נקודתי. מהנדס בניין מאריקס ביקורת מבנים משתמש במכשור קצה תרמוגרפי (FLIR) ומכשירי מדידת לחצים מתוחכמים. בסוף התהליך מופק דוח הנדסי חתום המהווה חוות דעת מומחה קבילה משפטית, אשר מחייבת את חברות הביטוח, הקבלנים ושותפים לבניין.'
    },
    {
      q: 'כיצד טכנולוגיית המצלמה התרמית של חברת FLIR מאתרת נזילה ללא הרס?',
      a: 'המצלמה התרמית קולטת את קרינת האינפרא-אדום הנפלטת מהקירות והרצפה ומציגה מפת טמפרטורה מדויקת של השטח. מאחר שמים ומנזרי לחות מוליכים קור וחום באופן שונה מחומרי בניין יבשים, אנו מזהים את "חתימת החום" של המים הנסתרים בדיוק של סנטימטרים בודדים, ללא כל צורך בשבירה או השחתה של אריחים.'
    },
    {
      q: 'הקיר שלי לח ומתחיל להתקלף, האם מדובר בנזילה פעילה או בלחות ישנה?',
      a: 'זוהי אחת השאלות הקשות ביותר שאינסטלטורים מתקשים לענות עליהן. מהנדס אריקס פותר זאת בעזרת מד לחות דיגיטלי חודרני ולא-הרסני המודד את נפח הנוזלים בדיוק באחוזי לחות פנימיים. אם אחוזי הלחות גבוהים מהתקן המותר (ת"י 1555), נוכל לקבוע בוודאות שמדובר בנזילה אקטיבית ופעילה הדורשת טיפול שורש מיידי.'
    },
    {
      q: 'הדוח ההנדסי שלכם קביל להתנהלות מול חברת הביטוח או הקבלן?',
      a: 'כן, לחלוטין. כלל הדוחות הנדסיים המונפקים על ידי מהנדס החברה, יוסי, מנוסחים וחתומים כחוות דעת מומחה לבית משפט בהתאם לפקודת הראיות. חברות הביטוח המובילות בישראל, כמו גם הקבלנים המבצעים הגדולים, מכירים היטב במקצועיות של אריקס ביקורת מבנים ומקבלים את הדוחות שלנו כבסיס מחייב למימון התיקון.'
    },
    {
      q: 'מהם הסימנים המעידים על נזילת מים סמויה מתחת לריצוף בבית?',
      a: 'הסימנים הנפוצים ביותר הם: עלייה חריגה ולא מוסברת בחשבון המים המשותף או הפרטי, מד מים שממשיך להסתובב כשכל הברזים סגורים הרמטית, קילופי טיח וצבע מעל לפנלים (רטיבות קפילארית), ריח רע וטחב מתמשך בחלל החדר, או הופעה פתאומית של מים בחריצי הרובה שבין האריחים.'
    }
  ];

  const technologies = [
    {
      title: 'מצלמה תרמית (FLIR) ברזולוציה גבוהה',
      desc: 'איתור מדויק של הפרשי טמפרטורה זעירים המעידים על נזילה כלואה מאחורי קירות בטון, גבס או תחת מרצפות קרמיקה, ללא נגיעה או הרס פיזי.',
      icon: '🔥'
    },
    {
      title: 'חיישני לחות דיגיטליים חודרניים',
      desc: 'מדידה והגרלת נתונים מספריים של אחוזי לחות לחומרי תשתית (בטון, חול, מצע שומשום וקירות גבס) לאפיון לחות פעילה מעבר לטולרנס המותר בתקן.',
      icon: '💧'
    },
    {
      title: 'מדי לחץ דיגיטליים לצנרת אספקה',
      desc: 'ביצוע בדיקות לחץ סטטיות ודינמיות לקווי מים חמים וקרים, לצורך איתור מהיר של כשלים במערכות המים הראשיות עוד לפני פגיעה ממשית בקירות המבנה.',
      icon: '⏱️'
    },
    {
      title: 'גלאי תהודה אקוסטיים לתדרים נמוכים',
      desc: 'שימוש באוזניות הגברה רגישות מיוחדות לקליטת רעשי דליפה ותנועת נוזלים סמויים בתוך קווי ביוב ניקוזים או מערכות השקיה חיצוניות ועמוקות.',
      icon: '🎧'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-blue-500/30 text-right">
      <SchemaTags 
        type="Service" 
        data={{
          name: "איתור נזילות ורטיבות ללא הרס - אריקס ביקורת מבנים",
          description: "איתור נזילות מים ובעיות איטום ללא הרס באמצעות מומחיות מהנדס ובמערכות צילום תרמי FLIR. הפקת דוחות וחוות דעת קבילות משפטית.",
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
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'איתור נזילות ורטיבות' }]} />
            
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-6 uppercase mt-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              איתור נזילות מים ללא הרס לפנלים וריצוף
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              איתור נזילות <span className="text-blue-400 block sm:inline">ורטיבות ללא הרס</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              יש לכם עובש פתאומי בקיר? ריח מתמשך של רטיבות שמסרב להיעלם? אל תתנו לאינסטלטורים חובבנים לחפור ולשבור לכם את הריצוף היקר. אנו באריקס ביקורת מבנים מאתרים את מקור הנזילה במדויק בטכנולוגיית אינפרא-אדום מתקדמת ללא כל פגיעה אסטטית בדירה, ומספקים דוח הנדסי חתום להחזרי ביטוח מיידיים.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg"
              >
                חייגו למהנדס שלנו: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%25D7%99%25D7%95%25D7%94%2520%D7%9C%D7%90%D7%99%D7%AA%D7%95%D7%A8%20%D7%A0%D7%96%D7%99%D7%9C%D7%94"
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

      {/* Bento Grid Stats */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">99.8% דיוק</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">טכנולוגיית מפה</h3>
            <p className="text-slate-500 text-sm leading-relaxed">זיהוי מוקד הכשל של הנזילות באמצעות פתיחת מסלולי צילום וחדירת קרינה מתקדמת.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">0% נזק</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">עבודה ללא הרס</h3>
            <p className="text-slate-500 text-sm leading-relaxed">אין צורך בשריטות, הרמת מרצפות שיש או חפירת קירות. הבדיקה נקייה והיגיינית ביותר.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">₪40,000+</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">חיסכון הנדסי במקום</h3>
            <p className="text-slate-500 text-sm leading-relaxed">מונעים החלפת קווי ריצוף נרחבים בכל חללי הסלון והלובי על ידי מיקוד כירורגי של מקור הדלף.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">B.Sc מוסמך</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">אישור חברות הביטוח</h3>
            <p className="text-slate-500 text-sm leading-relaxed">דוח מהנדס שמתקבל ישירות לחברות הביטוח המסורתיות בישראל ומבטיח החזרי תיקון מהירים.</p>
          </div>
        </div>
      </section>

      {/* Main Context with Visual Layout */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Why standard plumber fails */}
            <div className="bg-blue-50/70 border-r-4 border-blue-600 p-8 rounded-l-3xl shadow-sm animate-fade-in">
              <span className="text-blue-800 font-black text-xs uppercase tracking-widest block mb-2">◀ השוואה צרכנית חשובה ביותר</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                למה אינסטלטורים חובבנים {"\""}מנחשים{"\""} במקום לאבחן?
              </h2>
              <p className="text-slate-755 text-base leading-relaxed mb-4">
                אינסטלטורים רבים רוכשים מצלמות תרמיות זולות מבלי לעבור שום הכשרה הנדסית מתאימה. הם מפרשים {"\""}צל כחול{"\""} פשוט כרטיבות פעילה, בעוד שלעיתים מדובר רק בהבדל טמפרטורה הנובע מגשרי קור בבטון או מזרם אוויר חיצוני.
              </p>
              <p className="text-slate-755 text-base leading-relaxed">
                מהנדסי אריקס ביקורת מבנים מבצעים את האנליזה בראייה מערכתית קפדנית, תוך שימוש במד לחות חודרני מדעי ובדיקת קווי ניקוז דינמיים. הדוח ההנדסי מהווה מסמך {"\""}חסין ויכוחים{"\""} מול עורכי הדין של חברות הבנייה הגדולות ושותפי הבית.
              </p>
            </div>

            {/* Scientific explanation */}
            <div className="space-y-6 text-right">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                הסכנה הבריאותית והסמויה של רטיבות כלואה
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                רטיבות כלואה מתחת לריצוף שעולה על 6% לחות (בהתאם לתקן {"ת\"י"} 1555) אינה {"\""}מתייבשת עצמאית{"\""} לעולם. היא נודדת ומטפסת בהדרגה במעלה קירות הבית, ומייצרת סביבה אידיאלית לצמיחה של עובש שחור פטרייתי (Stachybotrys).
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                פטריות העובש הללו משחררות רעלנים סמויים לאוויר הנשימה של חלל הבית, מה שמייצר בעיות נשימה קשות, אסטמה אצל ילדים ואלרגיות כרוניות חמורות. איתור נזילות מוקדם שומר ובונה חומת מגן בריאותית למשפחתכם.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-1 text-base">חוות דעת המשמשת כראיה משפטית קשיחה</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  הדוחות ההנדסיים של אריקס ביקורת מבנים כוללים צילום צבעוני, צילום תרמי מקביל, מדידת אחוזי לחות מדויקים, סימוכין מהתקנים המקצועיים והוראות לתיקון מפורט, ורשומים ברוח פקודת הראיות.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">ארסנל טכנולוגי מתקדם</span>
            <h2 className="text-4xl font-black text-slate-900">שימוש במכשור קצה לצילום תרמוגרפי ומדידת רטיבות</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">כלי האיתור המתקדמים והמדויקים ביותר בעולם מאפשרים לנו לדעת היכן הבעיה בדיוק של סנטימטרים</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md hover:border-blue-500/25 transition-all group relative overflow-hidden"
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{tech.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-slate-550 leading-relaxed text-sm">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Plumber vs Engineer */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-right">
          <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight border-r-4 border-blue-600 pr-4">
            טבלת השוואה: מהנדס אריקס ביקורת מבנים (B.Sc) לעומת אינסטלטור רגיל מחברת ביטוח
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            יש דברים שמומבחיות ההנדסה קובע בהם באופן קריטי ומשמעותי. אל תסמכו על {"\""}מומחה{"\""} מטעם חברת הביטוח שיש לו אינטרס כספי מובהק להקטין את עלויות הנזילה והנזק השמיש.
          </p>

          <div className="overflow-x-auto border border-slate-100 rounded-2xl my-8">
            <table className="w-full text-right border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 font-black">האלמנט הנבחר</th>
                  <th className="p-4 font-black text-blue-600 bg-blue-50/40 font-bold">מהנדס מומחה - אריקס ביקורת מבנים</th>
                  <th className="p-4 font-black">אינסטלטור רגיל מטעם הביטוח</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">ניגוד עניינים ואינטרס</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-semibold">אובייקטיביות מוחלטת - הדוח מייצג את האינטרס הבלעדי שלכם לקבלת פיצוי ושיקום מלא.</td>
                  <td className="p-4">מייצג את האינטרס של חברת הביטוח להפחית עלויות תיקון ודוחה תביעות.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">מד זמנים ומכשור תרמי</td>
                  <td className="p-4 bg-blue-50/10">מצלמות FLIR Systems, מדי לחות גרמניים חדישים ובקרת לחץ דיגיטלית קשיחה.</td>
                  <td className="p-4">מכשיר סיני פשוט או הסתמכות על ניחושים חזותיים ושבירות שטח נרחבות.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">מסמך קצה וחלון משפטי</td>
                  <td className="p-4 bg-blue-50/10 font-bold">חוות דעת מומחה הנדסית חתומה על ידי מהנדס רשום B.Sc, קבילה בבתי משפט.</td>
                  <td className="p-4">הצעת מחיר פשוטה או {"\""}נייר עבודה{"\""} שחברת הביטוח יכולה להתעלם ממנו בקלות.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">אבחון עובש ובקרת בריאות</td>
                  <td className="p-4 bg-blue-50/10">אבחון רמות סיכון ביולוגיות של ספוגי לחות בשילבי קירות למניעת עובש.</td>
                  <td className="p-4">ללא התייחסות לחצאי עובש או מפגעים בריאותיים מתפתחים.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study / Testimonial visual */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden rounded-[3.5rem] my-12 max-w-6xl mx-auto">
        <div className="px-8 md:px-20 py-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8 text-right">
            <span className="text-blue-400 font-extrabold text-xs tracking-widest uppercase block">◀ סיפור הצלחה אמיתי מהשטח</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">חיסכון של מעל 35,000 {"ש\"ח"} למשפחת אהרוני</h2>
            <p className="text-blue-100 text-base leading-relaxed italic">
              {"\""}אינסטלטור מטעם הביטוח הגיע שלוש פעמים וקבע שיש להרים את כל הפרקט והריצוף בחדר שינה כי &apos;מקור הנזילה שם&apos;. החלטנו להביא מהנדס מאריקס ביקורת מבנים לפני שבירות הענק. המהנדס יוסי הגיע עם מצלמה תרמית וגילה בשניות שהנזילה מגיעה בכלל מאיטום כושל במרפסת שמעל, והמים פשוט נסעו דרך מסילת הבטון. פתרנו את זה באיטום קטן ובחצי שעה במקום שבועיים של הריסות בבית!{"\""}
            </p>
            <div>
              <div className="font-extrabold text-white">יונתן ושירה אהרוני</div>
              <div className="text-blue-400 text-xs italic">לקוחות מרוצים מראש העין</div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video grayscale opacity-40 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400" 
                  alt="Inspection before" 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-white/30 block text-right">צילום חזותי רגיל במצלמה</span>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border-2 border-blue-500 aspect-video shadow-lg shadow-blue-500/30 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400" 
                  alt="Thermal view FLIR" 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 block text-right">סריקה תרמוגרפית (FLIR) לגלוי המקור</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">שאלות נפוצות</span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">שאלות ותשובות בנושא <br /><span className="text-blue-600">איתור נזילות ורטיבות מים</span></h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">המידע המקצועי שייתן לכם ביטחון, יחסוך לכם הרס בבית ויספק לכם כוח איתן מול הביטוח והקבלנים</p>
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

      {/* Core Action Call Banner */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black mb-4">אל תתנו לרטיבות הסמויה להרוס לכם את הדירה או הבריאות!</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            הזמינו איתור נזילות ורטיבות מקצועי ללא הרס דרך אריקס ביקורת מבנים, וקבלו דוח מהנדס יסודי וקביל לחברות הביטוח ולבתי המשפט עוד היום.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:054-7515142" 
              className="bg-white text-blue-600 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-lg shadow-lg shadow-blue-900/20"
            >
              חייגו למהנדס המומחה שלנו: 054-7515142
            </a>
            <a 
              href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%25D7%99%25D7%95%25D7%94%2520%D7%9C%D7%90%D7%99%D7%AA%D7%95%D7%A8%20%D7%A0%D7%96%D7%99%D7%9C%D7%94"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white font-black px-8 py-4 rounded-xl hover:bg-slate-800 transition-all text-lg"
            >
              הודעה ישירה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CommonSections excludeWhyUs excludePergola />
    </div>
  );
};

export default LeakDetectionPage;
