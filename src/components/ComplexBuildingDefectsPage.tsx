import React from 'react';
import { Eye, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import Contact from './Contact';

const ComplexBuildingDefectsPage: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-right">
          <div className="mb-6">
            <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'איתור ליקויי בנייה הנדסיים מורכבים' }]} />
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-blue-400/30 mb-6">
            <Eye className="w-4 h-4" />
            <span>תקן ישראלי ת&quot;י 1920</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            איתור ליקויי בנייה הנדסיים מורכבים
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            אבחון ומיפוי ליקויי בנייה מורכבים ע&quot;י מהנדס מוסמך. לא כל סדק הוא ליקוי אסתטי, ולא כל בעיה נראית לעין.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm text-right space-y-10">
            
            {/* Opening Intro */}
            <div>
              <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium border-r-4 border-blue-600 pr-5 py-1">
                לא כל ליקוי בנייה נראה לעין, ולא כל ליקוי הנראה לעין הוא זה שמסכן את יציבות הנכס. ליקויי בנייה מורכבים - כגון סדקים מבניים בקורות ועמודים, כשלים בקונסטרוקציית הבטון, שקיעות דיפרנציאליות ביסודות, או פגמים בעיצוב הקונסטרוקטיבי - דורשים עין הנדסית מנוסה ולעיתים גם כלים מתקדמים לאבחון מדויק, בשונה מליקויי גימור פשוטים יחסית.
              </p>
            </div>

            {/* Section 1: הבדיקה בהתאם לת"י 1920 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 justify-end text-blue-600">
                <h2 className="text-2xl font-black text-slate-950">הבדיקה בהתאם לת&quot;י 1920</h2>
                <CheckCircle2 className="w-7 h-7 shrink-0 text-blue-600" />
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                העבודה מתבצעת בהתאם לתקן הישראלי ת&quot;י 1920, העוסק בבדיקת יציבות ובטיחות מבנים קיימים, ומיועדת לזהות ולתעד ליקויים הנדסיים מורכבים באופן שיטתי ומבוסס. הבדיקה כוללת מיפוי סדקים לפי כיוונם, רוחבם והתפתחותם לאורך זמן (מדד קריטי להבחנה בין סדק אסתטי לסדק מבני מסוכן), בחינת מצב הברזל בתוך אלמנטי הבטון בשיטות לא הורסות, איתור כשלי איטום המשפיעים על חוזק המבנה לאורך זמן, ובדיקת בטיחות מרפסות, גגות וקונסטרוקציות תלויות.
              </p>
            </div>

            {/* Section 2: מתי מדובר בליקוי מבני אמיתי? */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 justify-end text-amber-600">
                <h2 className="text-2xl font-black text-slate-950">מתי מדובר בליקוי מבני אמיתי?</h2>
                <ShieldAlert className="w-7 h-7 shrink-0 text-amber-600" />
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                אחד האתגרים המרכזיים עבור בעלי נכסים הוא ההבחנה בין ליקוי קוסמטי לליקוי מבני מסכן. סדק דק וישר בצבע לרוב מעיד על תנועת סיוד טבעית, בעוד סדק אלכסוני רחב החוצה קורה או עמוד עשוי להעיד על בעיה מבנית של ממש. הערכה שגויה - בשני הכיוונים - עלולה לעלות ביוקר: פאניקה מיותרת מול הזנחה מסוכנת. מהנדס מוסמך עם ניסיון מעשי הוא היחיד שיכול לקבוע בוודאות את חומרת הממצא.
              </p>
            </div>

            {/* Section 3: הדוח ותוצריו */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 justify-end text-blue-600">
                <h2 className="text-2xl font-black text-slate-950">הדוח ותוצריו</h2>
                <FileText className="w-7 h-7 shrink-0 text-blue-600" />
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                בתום הבדיקה מתקבל דוח הנדסי הכולל את כל הממצאים, דירוג חומרת כל ליקוי (מקוסמטי ועד דורש טיפול מיידי), והמלצות תיקון מפורטות בהתאם לתקן. כאשר הליקוי מחייב זאת, הדוח כולל גם המלצה על היוועצות עם מהנדס קונסטרוקציה לביצוע חיזוק או תיקון מבני. דוח זה משמש גם כבסיס לפניה לקבלן, לחברת ביטוח, או כראיה תומכת בהליך משפטי, ומעניק לכם החלטה מבוססת עובדות במקום ניחוש.
              </p>
            </div>

            {/* Expert Trust Box */}
            <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl shadow-md text-right space-y-2">
              <h3 className="text-xl font-extrabold">ליווי מקצועי ע&quot;י אינג&apos; יוסי פרי</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                עם מעל 30 שנות ניסיון בהנדסת בניין ובדיקת מבנים, אינג&apos; יוסי פרי מספק חוות דעת הנדסיות קבילות ומבוססות לתקנים המחמירים ביותר בישראל.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ComplexBuildingDefectsPage;
