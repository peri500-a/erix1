'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import CommonSections from './CommonSections';


import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const values = [
    {
      title: 'יושרה הנדסית',
      desc: 'אנו פועלים באובייקטיביות מלאה. הדוח שלנו משקף את המציאות ההנדסית בשטח, ללא הטיות וללא פשרות מול קבלנים.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: 'חדשנות טכנולוגית',
      desc: 'אנו משקיעים בציוד הקצה המתקדם ביותר בעולם – ממצלמות תרמיות FLIR ועד מכשור לייזר מדויק, כדי לאתר את מה שהעין לא רואה.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: 'שירות אישי ומקצועי',
      desc: 'עבורנו, אתם לא רק "תיק". כל לקוח מקבל ליווי אישי מהמהנדס המבצע, כולל הסברים מפורטים וייעוץ להמשך התנהלות.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    }
  ];

  return (
    <div className="bg-white text-slate-600 min-h-screen">
      <SchemaTags 
        type="AboutPage" 
        data={{
          name: "אודות אריקס ביקורת מבנים",
          description: "חברת הנדסה מובילה המתמחה בבדק בית וביקורת מבנים הנדסית",
          provider: {
            "@type": "LocalBusiness",
            "name": "אריקס ביקורת מבנים"
          }
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative pt-52 pb-12 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-right">
          <div className="max-w-4xl">
            <Breadcrumbs items={[{ label: 'אודות' }]} />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight leading-none">
              המצוינות ההנדסית <br/>
              <span className="text-blue-600">מאחורי הנכס שלכם</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-6 leading-relaxed max-w-2xl font-medium">
              אריקס ביקורת מבנים הוקמה מתוך חזון אחד: להביא סטנדרט חדש של שקיפות וביטחון לשוק הנדל&quot;ן הישראלי באמצעות הנדסה מדויקת וחסרת פשרות.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="pt-12 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 text-right">
              <h2 className="text-4xl font-black text-slate-900 mb-6 italic">הסיפור שלנו</h2>
              <div className="space-y-6 text-xl leading-relaxed text-slate-600">
                <p>
                   אריקס ביקורת מבנים החלה את דרכה לפני למעלה מ-25 שנה כמשרד בוטיק המתמחה בביקורת מבנים וביקורת הנדסית. המהנדס יוסי, מייסד החברה, זיהה את הצורך המהותי של רוכשי דירות בישראל בגורם מקצועי ואובייקטיבי שיוכל לעמוד מול קבלנים וחברות בנייה. אנו מביאים איתנו ניסיון עשיר בניהול פרויקטים מורכבים, מה שמאפשר לנו להבין את תהליך הבנייה מבפנים ולזהות כשלים עוד בשלביהם המוקדמים.
                </p>
                <p>
                   מאז ועד היום, ליווינו אלפי משפחות ובעלי עסקים בדרך לרכישה בטוחה. המומחיות שלנו היא איתור ליקויי בנייה סמויים והפיכתם לדוחות הנדסיים מוצקים הקבילים בבתי המשפט. אנו משתמשים בציוד הטכנולוגי המתקדם ביותר, כולל מצלמות תרמיות לאיתור נזילות, מכשירי לייזר למדידת סטיות וציוד לבדיקת אקוסטיקה, כדי להבטיח שכל בדיקה תהיה יסודית ומדויקת.
                </p>
                <p className="text-slate-900 font-bold">
                   המשימה שלנו ברורה: להבטיח שכל לקוח של אריקס ביקורת מבנים ייכנס לנכס תקין, בטוח ואיכותי, תוך הגנה מלאה על השקעתו הכלכלית. אנו מאמינים כי בדק בית הוא לא רק דרישה טכנית, אלא השקעה בביטחון ובשקט הנפשי שלכם לשנים רבות קדימה.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] blur-3xl"></div>
              <div className="relative rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden aspect-video">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                  alt="עבודה הנדסית בשטח" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">הערכים שמובילים אותנו</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <div key={i} className="bg-white border border-slate-100 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all group text-right shadow-sm">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all mr-0 ml-auto border border-blue-100">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">צוות המהנדסים שלנו</h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              כל המהנדסים באריקס ביקורת מבנים הם מהנדסי בניין רשומים (B.Sc) בעלי ניסיון עשיר בניהול פרויקטים, פיקוח וביצוע. המומחיות שלנו מוכרת ע&quot;י בתי המשפט בישראל, והדוחות שלנו מהווים עדות מומחה מכרעת בהליכים משפטיים.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 font-black">מהנדסי בניין רשומים</div>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 font-black">מומחים מטעם בית המשפט</div>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 font-black">שמאי מקרקעין מוסמכים</div>
            </div>
          </div>
        </div>
      </section>
      <CommonSections excludePergola />
    </div>
  );
};

export default AboutPage;
