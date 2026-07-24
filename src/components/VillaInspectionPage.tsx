'use client';

import React, { useEffect } from 'react';
import CommonSections from './CommonSections';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import Image from 'next/image';
import Link from 'next/link';

const VillaInspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'למה בדק בית לבית פרטי או וילה מורכב ויקר יותר מדירה פשוטה?',
      a: 'בבית פרטי או וילה, מצע התשתיות מורכב פי כמה: אתם בעלי הנכס היחידים והאחראים הבלעדיים על כל המערכות שבד"כ משותפות בבניין. זה כולל את גג הרעפים, איטום המרתפים (שבמגע ישיר עם האדמה וחשוף ללחץ מים אטומי), מערכות ניקוז ותיעול בחצר, קירות תומכים, מערכות ביוב חיצוניות, פיתוח שטח, ומעטפת שליכט רחבה. מהנדס אריקס ביקורת מבנים מבצע סריקה כפולה בשטח כדי לכסות את כלל ההיבטים הללו.'
    },
    {
      q: 'מתי הכי נכון לבצע ביקורת מבנים בבית פרטי שנבנה בבנייה עצמית?',
      a: 'בבנייה עצמית מומלץ לבצע בדיקות פיקוח הנדסי בכמה שלבים קריטיים: בסיום עבודות השלד (לפני טיח וסגירות), במהלך עבודות האיטום והאינסטלציה (לפני ריצוף), ובשלב קבלת טופס 4 וסיום עבודות הגמר. אם הבנייה הושלמה, חובה לבצע את הבדיקה רגע לפני מסירת התשלום האחרון לקבלן המפתח.'
    },
    {
      q: 'מהן חריגות הבנייה הנפוצות ביותר בבתים פרטיים וכיצד אתם מאתרים אותן?',
      a: 'החריגות הנפוצות ביותר הן סגירות מרפסות או פרגולות ללא דיווח, בניית יחידות דיור במרתף ללא היתר חוקי, חריגה מקווי הבניין המותרים בתב"ע, או שינוי גאומטרי בגובה הגג. אנו באריקס ביקורת מבנים מבצעים בדיקת התאמה קפדנית בין המצב בשטח לבין היתר הבנייה ההיסטורי המסופק מהוועדה המקומית, מה שמונע מכם להסתבך בפלילים מול העירייה.'
    },
    {
      q: 'איך המהנדס בודק את הגג (רעפים או שטוח) ואת יציבות המרפסות?',
      a: 'בגג רעפים אנו בוחנים את חוזק קונסטרוקציית העץ או הפלדה הנושאת, תקינות הבידוד התרמי, חדירת רוח, ושלמות הרעפים. בגג שטוח אנו בודקים את שיפועי הבטון (בט-קל) המובילים אל המרזבים ואת אטימות היריעות הביטומניות. בדיקת המרפסות כוללת חישוב עומסים, יציבות מעקות בטיחות (ת"י 1142) ואיטום המפגשים עם הקירות.'
    },
    {
      q: 'מהי רטיבות קפילארית במרתפים וכיצד היא מסכנת את וילת המגורים?',
      a: 'רטיבות קפילארית מתרחשת כאשר מי תהום נספגים ועולים מעלה דרך הקירות והרצפה של המרתף כתוצאה מאיטום שלילי או חיובי פגום ביסודות. הרטיבות הזו גורמת להתפרקות הטיח, הופעת פטריות עובש ועשויה לפגוע בברזל הזיון של עמודי השלד וליצור חלודה המפרקת את הבטון מבפנים. אנו מאתרים זאת בשלבים מוקדמים ביותר בעזרת מכשור תרמי מתקדם.'
    }
  ];

  const villaPoints = [
    {
      title: 'איטום מרתפים, קומות תת-קרקעיות ומקלטים',
      desc: 'בדיקת קירות המרתף הלחוצים אל מצע הקרקע, סריקת רטיבות קפילארית עם ציוד תרמוגרפי ומדידת אחוזי לחות פנימיים למניעת לחות מתמשכת ופגיעה בריאותית.'
    },
    {
      title: 'גגות רעפים, בידוד תרמי ומערכות ניקוז עליונות',
      desc: 'בדיקת יציבות קונסטרוקציית הגג, שלמות הרעפים, תקינות פח הפחחות והמרזבים, ואיכות שכבות הבידוד הפנימיות למניעת הצטברות חום משמעותית בקיץ וקור בחורף.'
    },
    {
      title: 'תשתיות חוץ, שבילים, חצרות וקירות תמך',
      desc: 'בדיקת שיפועי הריצוף והפיתוח בחצר למניעת זליגת מי גשמים אל כיוון קירות הבית, יציבות קירות תומכים הנדסיים, ותקינות בורות החילחול ומערכות הניקוז ההיקפיות.'
    },
    {
      title: 'איכות השלד, קונסטרוקציה וסדקים מבניים',
      desc: 'אבחון מקצועי של קשרים קונסטרוקטיביים בין חלקי המבנה, שלילת שקיעות יסודות של צמודי קרקע, בחינת פילוס עמודים ובקרת התפתחות סדקים בקירות נושאים.'
    },
    {
      title: 'התאמה מלאה להיתרי הבנייה ותשריט הוועדה',
      desc: 'ביצוע השוואה הנדסית מדויקת בין חלוקת השטחים בפועל לבין היתר הבנייה המאושר (גרמושקה), זיהוי חריגות בנייה קריטיות והשלכותיהן על שווי הוילה.'
    },
    {
      title: 'מערכות חשמל תלת-פאזי, הארקה ובטיחות אש',
      desc: 'בדיקת זרמי עומס ללוח חשמל תלת-פאזי ראשי המאפיין וילות, בדיקת הארקת יסודות מקיפה למניעת חישמול, ותקינות התקנת מערכות כיבוי אש מובנות ומפרדים.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-blue-500/30 text-right">
      <SchemaTags 
        type="Service" 
        data={{
          name: "בדק בית לבית פרטי ווילה - אריקס ביקורת מבנים",
          description: "ביקורת הנדסית מקיפה לצמודי קרקע, בתים פרטיים ווילות יוקרה. בדיקת שלד, איטום גגות רעפים, פיקוח מרתפים ותשתיות פיתוח חצר מקיפות.",
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
            <Breadcrumbs items={[{ label: 'שירותים', href: '/' }, { label: 'בדק בית לבית פרטי ווילה' }]} />
            
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-6 uppercase mt-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              ביקורת הנדסית מקצועית לצמודי קרקע
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              בדק בית לבית פרטי ווילה <br />
              <span className="text-blue-400 font-extrabold text-2xl md:text-4xl">ביקורת מבנים מקיפה והגנה הנדסית מושלמת</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              רכישה או בנייה עצמית של בית פרטי היא פרויקט החיים היקר ביותר שלכם. שלא כמו דירה בבניין משותף, בבית צמוד קרקע האחריות על האיטום, הגג, החצר, קירות התמך ומערכת הביוב היא שלכם בלבד. אנו באריקס ביקורת מבנים מבצעים בדיקת קונסטרוקטור ומהנדס לכלל מרכיבי הווילה למניעת הפסדים כלכליים קשים.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:054-7515142" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-lg"
              >
                חייגו למהנדס מומחה: 054-7515142
              </a>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%94%D7%A0%D7%93%D7%A1%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%20%D7%99%D7%A8%20%D7%9C%D7%91%D7%93%D7%A7%20%D7%91%D7%99%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 text-center text-lg"
              >
                ייעוץ מהיר ב-WhatsApp
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
            <div className="text-blue-600 font-extrabold text-3xl mb-3">100% שירות</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">פתרונות פיתוח שטח</h3>
            <p className="text-slate-500 text-sm leading-relaxed">בדיקה ייחודית של קירות תמך, שיפועי פיתוח, סקר אחיד של מגרש המגורים והשפעות החצר.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">FLIR ומדים</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">טכנולוגיית איטום</h3>
            <p className="text-slate-500 text-sm leading-relaxed">איתור רטיבויות ופגמי מפרד קפילארי במרתפים עמוקים המוחבאים מאחורי תשתיות בטון.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">48 שעות</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">דוח יציבות והחלטה</h3>
            <p className="text-slate-500 text-sm leading-relaxed">מסירת דוחות הנדסיים מפורטים בתוך יומיים עסקים בלבד, מגובים בתקן המחמיר ביותר בארץ.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
            <div className="text-blue-600 font-extrabold text-3xl mb-3">B.Sc מומחה</div>
            <h3 className="text-lg font-black text-slate-900 mb-2">קונסטרוקטור רשוי</h3>
            <p className="text-slate-500 text-sm leading-relaxed">עריכת דוחות כחוות דעת הנדסית לבית משפט בהובלת מהנדס יוסי המלווה הליכי {"גפ\"נ"} מעל עשרים שנה.</p>
          </div>
        </div>
      </section>

      {/* Aesthetic Image & Text Grid */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                בדק בית מקיף לבית פרטי ווילה (ת&quot;י 1004)
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                בדק בית לבית פרטי או וילה שונה במהותו מבדיקת דירה בבניין משותף. בעוד שדירה חולקת עם שכניה שלד, גג ומערכות תשתית ברכוש המשותף, בית פרטי עומד בפני עצמו מבחינה הנדסית - והאחריות לכל רכיב בו, מהיסודות ועד הגג, מוטלת במלואה על הבעלים. מסיבה זו, ביקורת הנדסית מקיפה לבית פרטי מחייבת בדיקה רחבה יותר בהיקפה, המבוצעת בהתאם לתקן הישראלי ת&quot;י 1004 העוסק בבדיקת מבנים צמודי קרקע.
              </p>
              
              <div className="space-y-4">
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">מה נבדק בביקורת?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    הבדיקה כוללת מיפוי מקיף של יסודות המבנה ושלד הבטון, איתור סדקים מבניים והערכת חומרתם, בדיקת גג הרעפים או הגג השטוח ואיטומו, בחינת תשתיות הניקוז סביב הבית (מרזבים, ניקוז מי גשמים ומניעת חדירת מים ליסודות), ובדיקת מערכות חוץ נוספות כגון חיפוי קירות חוץ, גדרות תומכות, משטחי חוץ ומערכות השקיה. בנוסף, נבדקות מערכות הבית הפנימיות - חשמל, אינסטלציה, איטום חדרים רטובים ותקינות פתחים וחלונות - באותה יסודיות המוכרת מבדיקת דירות.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">דגשים ייחודיים לבתים פרטיים</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    וילות ובתים פרטיים חשופים לסיכונים שאינם רלוונטיים בדירות: שקיעת קרקע לא אחידה, חדירת שורשים לתשתיות, בעיות ניקוז המובילות להצפות בקומת הקרקע, וכשלי איטום בגגות רעפים המתגלים רק בעונת החורף הראשונה. מהנדס מנוסה יודע לזהות סימנים מוקדמים לבעיות אלו לפני שהן הופכות לתיקון יקר ומורכב.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">למי מיועד השירות?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    הביקורת מתאימה הן לרוכשי בית יד שנייה המעוניינים להכיר את מצב הנכס לפני חתימה על חוזה, הן לבעלי בית המתכננים שיפוץ או תוספת בנייה וזקוקים להבנה של המצב ההנדסי הקיים, והן לבעלי וילות חדשות מקבלן הנמצאים בשנת הבדק ומעוניינים לממש את זכויותיהם מול הקבלן.
                  </p>
                </div>
              </div>

              <p className="text-blue-900 font-bold text-base leading-relaxed bg-blue-50/80 p-4 rounded-xl border border-blue-100">
                עם ניסיון מוכח בבדיקת מאות בתים פרטיים ווילות ברחבי הארץ, אנו מספקים דוח הנדסי יסודי המקנה לכם תמונה מלאה ומדויקת של מצב הנכס.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full"></div>
              <div className="relative rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden aspect-video">
                <Image 
                  src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1770018097/%D7%95%D7%99%D7%9C%D7%94_%D7%99%D7%95%D7%A7%D7%A8%D7%AA%D7%99%D7%AA_%D7%91%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94_%D7%A4%D7%99%D7%AA%D7%95%D7%97_coh01x.jpg" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover" 
                  alt="בדק בית לבית פרטי ווילה" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Villa Checkpoints Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">מפרט בדיקות ייחודי לווילות</span>
            <h2 className="text-4xl font-black text-slate-900">מדוע בדק בית לבתים פרטיים הוא קריטי?</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">סריקה מדעית וחשיפת כשלים סמויים במרתפים, חצרות ושלדי צמודי הקרקע בישראל</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villaPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md hover:border-blue-500/25 transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Comparative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-right">
          <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight border-r-4 border-blue-600 pr-4">
            טבלת השוואה: ביקות בית על ידי מהנדס בניין לעומת חוות דעת שמאי רגילה
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            אל תשגו להניח כי בדיקת שמאי המקרקעין של הבנק המלווה לצד מתן המשכנתא מספקת הצהרת כדאיות פיזית. השמאי מעריך את מצבו הרישומי של המגרש, ואילו אנו בודקים את המפרט ההנדסי והבטיחותי של המבנה והחיים בו.
          </p>

          <div className="overflow-x-auto border border-slate-100 rounded-2xl my-8">
            <table className="w-full text-right border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 font-black">תחום הבדיקה</th>
                  <th className="p-4 font-black">השמאי של הבנק</th>
                  <th className="p-4 font-black text-blue-600 bg-blue-50/40">מהנדס אריקס ביקורת מבנים (B.Sc)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">בקרת גגות ומערכת הניקוז</td>
                  <td className="p-4">מציין רק אם נראה ענף או חור בולט ביותר בקירות.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">סריקה מקיפה של גשרים תרמיים, מרזבים צדיים, רעפי גגות ואיטום יריעות בגגות שטוחים.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">איתור רטיבות קפילארית במרתף</td>
                  <td className="p-4">אינו משתמש בציוד מדידה או במצלמה תרמוגרפית לסימני נזילה.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">בדיקה מקיפה וגילוי כשלים במפרד איטום סמוי בעזרת מצלמות FLIR חדישות.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">סעיפי בטיחות והארקת חשמל</td>
                  <td className="p-4">אין התייחסות למערכת החשמל והארקת הבית.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">בדיקת בטיחות קשיחה של מערכות תלת-פאזי, חישמולים פוטנציאליים והארקה ראשונית.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">תכנון ופיתוח המגרש הכללי</td>
                  <td className="p-4">בודק את זכויות הבנייה והרישום בטאבו מבחינה רישומית.</td>
                  <td className="p-4 bg-blue-50/10 text-slate-900 font-medium">בודק את שיפועי המגרש, חוזק קירות מסך ותמיכה, ומדידת חריגות ואי-יציבות בשטח.</td>
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
            <span className="text-blue-600 font-extrabold text-sm tracking-wider uppercase block mb-3">שאלות נפוצות מרוכשים</span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">שאלות ותשובות בנושא <br /><span className="text-blue-600">בדק בית לבית פרטי ווילה</span></h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">המדע והחוק שיגנו עליכם מפני רכישה פגומה של בית צמוד קרקע בפריסה ארצית</p>
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

      {/* Full Core Action Banner */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black mb-4">אל תרכשו וילה או בית פרטי ללא בדיקת מהנדס קונסטרוקטור!</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            מנעו מעצמכם עשרות אלפי שקלים של הפסדים ותהליכי תיקון מתישים. פנו לאריקס ביקורת מבנים וקבלו אומדן והצעת מחיר קבועה לבדק בית צמודי קרקע עוד היום.
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
              הודעה ישירה ב-WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CommonSections excludePergola />
    </div>
  );
};

export default VillaInspectionPage;
