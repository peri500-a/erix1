'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import CommonSections from './CommonSections';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import { Building2, ShieldCheck, AlertTriangle, Clock, CheckCircle2, FileText, ArrowLeft } from 'lucide-react';

const Tama38InspectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'האם בדק בית לדירה בפרויקט תמ"א 38 שונה מבדק בית רגיל?',
      a: 'כן - הדגש העיקרי הוא על נקודות המפגש בין השלד הישן לתוספת החדשה, שהן מוקד שכיח במיוחד לכשלי איטום, סדקים קונסטרוקטיביים ובעיות עמידות סייסמית.'
    },
    {
      q: 'מי אחראי לתקן ליקויים בפרויקט פינוי בינוי - היזם או הדיירים?',
      a: 'היזם אחראי לתיקון ליקויי בנייה כפי שנקבע בהסכם ובחוק המכר (דירות), בדיוק כמו בדירה חדשה מקבלן רגילה. דוח בדק בית עצמאי ומקצועי הוא הכלי שמאפשר לכם לממש את הזכות הזו בפועל.'
    },
    {
      q: 'מתי הכי כדאי להזמין את הבדיקה בפרויקט תמ"א 38?',
      a: 'מומלץ לבצע בדיקה הן בעת קבלת התוספת החדשה והן לקראת תום שנת הבדק, כדי לתת ליזם זמן מספק לתקן ליקויים שהתגלו ולהבטיח מענה הנדסי מלא.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen selection:bg-blue-500/30 text-right">
      <SchemaTags 
        type="Service" 
        data={{
          name: "בדק בית תמ&quot;א 38 ופינוי בינוי - אריקס ביקורת מבנים",
          description: "בדק בית לדירה בפרויקט תמ&quot;א 38 או פינוי בינוי ע&quot;י מהנדס מוסמך. בדיקת נקודות מפגש בין ישן לחדש, עמידה בהתחייבויות היזם ודוח הנדסי קביל בבית משפט.",
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
            <Breadcrumbs items={[{ label: 'שירותים', href: '/#services' }, { label: 'תמ"א 38 ופינוי בינוי' }]} />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-6 mt-4">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>התחדשות עירונית &amp; תמ&quot;א 38</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.15] mb-6">
              בדק בית לפרויקטי <br />
              <span className="bg-gradient-to-l from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
                תמ&quot;א 38 ופינוי בינוי
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
              פרויקטי תמ&quot;א 38 ופינוי בינוי הפכו בשנים האחרונות לחלק משמעותי משוק הנדל&quot;ן הישראלי, אך הם טומנים בחובם סיכונים הנדסיים ומשפטיים ייחודיים שאינם קיימים ברכישה &quot;רגילה&quot; מקבלן או ביד שנייה. בדק בית לדירה בפרויקט כזה אינו פחות חשוב מבדק בית רגיל - במקרים רבים הוא אף קריטי יותר.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                ייעוץ הנדסי חינם
              </a>
              <a 
                href="tel:0522501008" 
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/10 backdrop-blur-md transition-all"
              >
                חייג: 052-2501008
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Inspection Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              מה מייחד בדיקה בפרויקט תמ&quot;א 38 או פינוי בינוי?
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 font-bold text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">תמ&quot;א 38 (חיזוק ותוספת בנייה)</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                בפרויקטי תמ&quot;א 38 קיימת סוגיה הנדסית מרכזית: <strong>איכות החיבור בין המבנה הישן לתוספת החדשה</strong>. אנו בוחנים את תקינות עבודות החיזוק הסייסמי שבוצעו, את איכות האיטום בנקודות המפגש בין הבנייה הישנה לחדשה (מוקד נפוץ לרטיבות), ואת עמידת התוספת בדרישות התקן הרלוונטי לחיזוק מבנים קיימים.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 font-bold text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">פינוי בינוי (הריסה ובנייה מחדש)</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                בפרויקטי פינוי בינוי, לעומת זאת, מדובר בבניין חדש לגמרי הנבנה מהיסוד - כך שהבדיקה דומה יותר לבדק בית לדירה חדשה מקבלן, אך עם <strong>דגש מיוחד על עמידה בהתחייבויות הספציפיות</strong> שניתנו לדיירים במסגרת הסכם הפינוי-בינוי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Critical & Timing Sections */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    למה זה קריטי דווקא בפרויקטים מהסוג הזה?
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  ברוב פרויקטי ההתחדשות העירונית, הדיירים מקבלים את הדירה כחלק מהסכם מורכב מול היזם, ולעיתים קרובות ללא כוח מיקוח משמעותי לאחר החתימה. בדק בית מקצועי לפני קבלת החזקה, ובוודאי בשנת הבדק, הוא לעיתים הכלי היחיד שנותר בידכם לוודא שהיזם עומד בהתחייבויותיו ההנדסיות במלואן.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    מתי מומלץ לבצע את הבדיקה?
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  בפרויקט תמ&quot;א 38 מומלץ לבצע בדיקה הן בשלב קבלת התוספת החדשה והן לקראת סיום שנת הבדק, בדגש על נקודות המפגש בין הישן לחדש. בפרויקט פינוי בינוי, הבדיקה מתבצעת כמו בדירה חדשה סטנדרטית - סמוך למסירה ולפני תום שנת הבדק - אך אנו ממליצים גם לבחון מראש את ההסכם וההתחייבויות ההנדסיות שניתנו.
                </p>
              </div>
            </div>

            {/* Relevant Services Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-8 md:p-10 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-200 border-b border-blue-800/50 pb-4">
                שירותים רלוונטיים
              </h3>
              <div className="space-y-4">
                <Link 
                  href="/בדק-בית-יד-שנייה"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-lg">ביקורת דירה יד שנייה לפני קנייה</span>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href="/בדק-בית-סוף-שנת-בדק"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-lg">ביקורת שנת בדק מקצועית</span>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href="/חוות-דעת-הנדסית-לבית-משפט"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-lg">חוות דעת הנדסית לבית משפט</span>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              שאלות נפוצות
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed pr-11">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommonSections />
    </div>
  );
};

export default Tama38InspectionPage;
