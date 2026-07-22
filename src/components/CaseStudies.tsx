import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudyCard: React.FC<{ 
  title: string; 
  defect: string; 
  finding: string; 
  savings: string; 
  imageUrl: string; 
}> = ({ title, defect, finding, savings, imageUrl }) => (
  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:border-blue-200 hover:shadow-xl transition-all duration-500 flex flex-col h-full shadow-sm">
    <div className="h-48 overflow-hidden relative bg-slate-100">
      {imageUrl ? (
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
          referrerPolicy="no-referrer" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center border-b border-slate-100">
           <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </div>
      )}
      <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
        מקרה בוחן אמיתי
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow text-right" dir="rtl">
      <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h4>
      <div className="space-y-3 flex-grow">
        <div className="flex items-start gap-2">
          <span className="text-red-600 font-bold shrink-0 text-sm">הליקוי:</span>
          <p className="text-slate-600 text-sm leading-relaxed">{defect}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-blue-600 font-bold shrink-0 text-sm">הממצא ההנדסי:</span>
          <p className="text-slate-600 text-sm leading-relaxed">{finding}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
        <span className="text-slate-400 text-xs italic">חיסכון הנדסי משוער:</span>
        <span className="text-green-600 font-black text-lg">{savings}</span>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const studies = [
    {
      title: 'דירת פנטהאוז ברמת השרון',
      defect: 'חדירת מים למרחב מסחרי מתחת למרפסת, וליקויי ממ״ד קריטיים',
      finding: 'בדיקה במיכשור אלקטרוני (פרוטימטר) איתרה ערכי לחות קיצוניים של מים כלואים מתחת לריצוף במרפסת שמש פתוחה, המהווה סכנה לעסקים מתחת. בנוסף, חלון ההדף בממ״ד נמצא פגום ואינו נסגר, וגומיות אטימה לגזים חסרות לחלוטין בניגוד לתקן ת״י 4422, לצד מעבה מיזוג אוויר חלוד בסוף חייו.',
      savings: 'כ-81,000 ₪',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770018443/%D7%93%D7%99%D7%A8%D7%AA_%D7%91%D7%95%D7%92%D7%99%D7%A7_q4mztn.jpg'
    },
    {
      title: 'דירה בהליך תמ״א 38/1 בתל אביב',
      defect: 'מבנה מוזנח שאינו ראוי למגורים ואי-חיבור לחשמל קבוע',
      finding: 'אבחון הנדסי מקיף חשף כי כלל מערכות המבנה רקובות ודורשות החלפה מלאה (אינסטלציית ברזל חלודה, ביוב סתום). הבניין פועל על חיבור חשמל זמני ללא מעליות תקינות מזה 3 שנים, עם ביטול חניה לטובת מתקן חניה רובוטי ואילוצי פינוי קשים של עיריית תל אביב המייקרים שיפוץ ב-30%.',
      savings: 'כ-250,000 ₪',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770017891/%D7%A4%D7%A0%D7%98%D7%94%D7%90%D7%95%D7%A1_%D7%91%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91_fr8zkw.jpg'
    },
    {
      title: 'בדיקת יציבות ושלד בגבעתיים',
      defect: 'סדקים בעמודי בטון נושאי עומס בגלל קורוזיית ברזל זיון',
      finding: 'אותרו סדקים ברוחב 2 מ״מ ב-5 עמודי שלד ראשיים הנושאים את משקל הבניין. הסדקים נגרמו מהתנפחות חלודה של ברזל הזיון הפנימי. המהנדס הגדיר תוכנית שיקום דחופה הכוללת חשיפת הברזל, מריחת ממיר חלודה ושיקום בטון באמצעות סיקה רפ, עם גימור טקסטורה וצבע תואמים.',
      EstimatedCost: '10,000 ₪',
      slug: 'structural-failures-court-expert',
      id: 'structural-failures',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770017647/%D7%91%D7%99%D7%AA_%D7%A4%D7%A8%D7%98%D7%99_%D7%91%D7%A9%D7%95%D7%94%D7%9D_yxddu8.jpg'
    },
    {
      title: 'דירה בקו ראשון לים בנתניה',
      defect: 'רטיבויות גשם בקירות מעטפת הדירה ומעקה בטיחות נמוך',
      finding: 'אותרו רטיבויות חמורות בקירות פנימיים עקב חדירת מי גשמים ורסס ים מלוח, המצריכות פתרון איטום חיצוני כולל בשיתוף ועד הבית. בנוסף, זוהה מעקה בטיחות נמוך במיוחד בגובה 60 ס״מ בלבד בניגוד לתקן ת״י 1142 המתווה לפחות 105 ס״מ.',
      savings: 'כ-92,000 ₪',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770018282/%D7%A7%D7%95%D7%98%D7%92_%D7%9E%D7%A4%D7%95%D7%90%D7%A8_kx3wlq.jpg'
    },
    {
      title: 'בית צמוד קרקע בשוהם',
      defect: 'רטיבות פעילה במרתף מאסלת שירותים וריקבון בפרגולה',
      finding: 'איתור כתם רטיבות פעיל בחלל המרתף באמצעות מכשיר פרוטימטר. הרטיבות נבעה מחיבור לקוי וגומיות יבשות באסלת האורחים שבקומת הכניסה מעל. בנוסף נמצאו קורות עץ נושאות של פרגולה שסבלו מבלייה וריקבון כתוצאה מפגעי שמש וגשם והוגדרו כחובה להחלפה.',
      savings: 'כ-38,000 ₪',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770017740/%D7%93%D7%99%D7%A8%D7%AA_%D7%92%D7%91%D7%9C%D7%9F_%D7%91%D7%A8%D7%90%D7%A9%D7%95%D7%9F_%D7%9C%D7%A6%D7%99%D7%95%D7%9F_pyt6gv.jpg'
    },
    {
      title: 'דירת דופלקס בירושלים',
      defect: 'אריחים סדוקים מחימום תת-רצפתי ומים כלואים במרפסת',
      finding: 'זיהוי סדקים באריחי ריצוף שנבעו מחללים ריקים באוויר כתוצאה מהתקנת חימום תת-רצפתי מבוסס חוט להט. עוד אותר כשל חמור במרפסת תפעולית: מים כלואים שחלחלו ויצרו לחץ קיטור וסדקים ברובה (צמיחת עשבייה בחריצים). הפתרון דרש פתיחת 10% מהשטח לאידוי ורובה ייעודית לתנאי חוץ.',
      savings: 'כ-60,000 ₪',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770018003/%D7%93%D7%99%D7%A8%D7%AA_%D7%99%D7%93_%D7%A9%D7%A0%D7%99%D7%99%D7%94_%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D_uo8r5q.jpg'
    },
    {
      title: 'פנטהאוז דופלקס בתל אביב',
      defect: 'רטיבויות גשם בפאטיו ובמשקופים, וקורת פלדה חלודה',
      finding: 'רטיבות קשה אובחנה בבסיס קירות הפאטיו בעקבות מים כלואים מתחת לאריחים המחלחלים למבנה. בנוסף, אותרה רטיבות במשקופי חלונות כיס שאינם עמידים לרוחות מזרח חזקות וקורת פלדה קונסטרוקטיבית שהחלידה בתוך חדר רחצה רטוב ודרשה טיפול דחוף בגלוון קר.',
      savings: 'כ-37,000 ₪',
      imageUrl: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1770018097/%D7%95%D7%99%D7%9C%D7%94_%D7%99%D7%95%D7%A7%D7%A8%D7%AA%D7%99%D7%AA_%D7%91%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94_%D7%A4%D7%99%D7%AA%D7%95%D7%97_coh01x.jpg'
    }
  ];

  return (
    <section id="case-studies" className="py-6 md:py-12 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">ניתוח מקרי בוחן</span>
          <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6 italic">סיפורי הצלחה וביקורות לדוגמה</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            מתוך דוחות הנדסיים אמיתיים שביצענו ברחבי הארץ. ראו כיצד בדיקה יסודית ואיתור ליקויים מוקדם חוסכים מאות אלפי שקלים לרוכשים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((item, idx) => (
            <div 
              key={idx} 
              id={`case-study-${idx}`}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">{item.savings || 'איתור ליקוי'}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                
                <div className="space-y-4 text-sm leading-relaxed mb-6 flex-grow">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">הליקוי העיקרי:</span>
                    <p className="text-slate-600">{item.defect}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">ממצא והמלצה הנדסית:</span>
                    <p className="text-slate-600 line-clamp-4">{item.finding}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">אריקס ביקורת הנדסית</span>
                  <Link 
                    id={`case-study-cta-${idx}`}
                    href="/contact" 
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform duration-300"
                  >
                    התייעצו איתנו <span>&larr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
