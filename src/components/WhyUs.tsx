
import React from 'react';
import Image from 'next/image';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start group">
    <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 transform group-hover:scale-105">
      <div className="scale-110">{icon}</div>
    </div>
    <div className="mr-6">
      <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">{title}</h3>
      <p className="mt-3 text-slate-600 leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'צוות מהנדסים קבוע - לא פרילנסרים',
      description: 'בניגוד למשרדים המעסיקים פרילנסרים, כל מהנדס באריקס ביקורת מבנים הוא חלק קבוע מהצוות שלנו. כך אתם מקבלים אחריות אישית מלאה על הבדיקה וסטנדרט מקצועי אחיד בכל דוח בדק בית שאנו מפיקים.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'דוח בדק בית מפורט לכל ליקוי',
      description: 'כל דוח בדק בית נכתב בהתאמה אישית לנכס הספציפי שלכם - לא מתבנית מוכנה. כל ליקוי מתועד בעובדות מדויקות וחד-משמעיות, כך שתדעו בדיוק במה מדובר ומה המשמעות שלו.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>,
      title: 'איתור רטיבות במצלמה תרמית FLIR',
      description: 'אנו משתמשים במצלמות תרמיות FLIR ובמכשור אקוסטי דיגיטלי מהמתקדמים בעולם, המאפשרים איתור נזילות ורטיבות בדיוק גבוה - ללא כל נזק לנכס שלכם.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      title: 'ליווי אישי עם המהנדס עד למסירה',
      description: 'תקבלו קשר ישיר עם המהנדס המבצע לאורך כל התהליך, זמינות מלאה לכל שאלה מקצועית, וליווי עד לרגע המסירה - לביטחון מלא בהחלטה שלכם.',
    },
  ];

  return (
    <section id="why-us" className="py-8 md:py-16 bg-slate-50 scroll-mt-24 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div className="mb-10 lg:mb-0 order-2 lg:order-1">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-3 block">הסטנדרט ההנדסי הגבוה בישראל</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              למה לבחור <br /> <span className="luxury-text-gradient">באריקס ביקורת מבנים?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              אנו משלבים ידע הנדסי מעמיק עם טכנולוגיה מתקדמת כדי להעניק לכם את הביטחון המקסימלי בנכס שלכם.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-10 bg-blue-100/50 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative prestige-card h-[500px] sm:h-[650px] lg:h-[750px] overflow-hidden">
              <Image 
                src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1774889764/sitereport_ntcuy8.jpg" 
                alt="דוח בדק בית מפורט ומקצועי"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 right-8 left-8 p-10 bg-white/95 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-3 w-3 bg-blue-500 rounded-full animate-ping"></span>
                    <p className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">דרישת חובה לרוכשים</p>
                </div>
                <p className="text-slate-900 text-xl md:text-2xl font-black leading-tight">
                    הדוח שלנו הוא הכוח שלכם בניהול המשא ומתן. אובייקטיביות הנדסית ללא פשרות.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
