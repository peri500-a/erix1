import React from 'react';
import Link from 'next/link';
import { 
  Building, 
  Home, 
  FileText, 
  Droplet, 
  ShieldAlert, 
  Gavel, 
  ClipboardCheck, 
  Compass,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface EngineeringService {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  standards: string[];
}

const coreServices: EngineeringService[] = [
  {
    title: "בדק בית לדירה חדשה מקבלן",
    subtitle: "ביקורת מקיפה לפני מסירה או במהלך שנת הבדק",
    description: "בדיקה הנדסית יסודית לדירה חדשה מקבלן לפני קבלת מפתח או במהלך שנת הבדק. אנו בודקים ליקויי ריצוף וחיפוי, מערכות אינסטלציה וחשמל, איטום, סדקים, שיפועים במרפסות ואי-התאמות חמורות למפרט המכר ולתקנים הישראליים.",
    href: "/בדק-בית-מקבלן",
    icon: Building,
    badge: "דירה חדשה",
    standards: ["ת\"י 1920", "חוק המכר (דירות)"]
  },
  {
    title: "בדק בית לדירת יד שנייה",
    subtitle: "חשיפת ליקויים סמויים לפני רכישה ומשא ומתן",
    description: "בדיקת דירה יד שנייה לפני קנייה מונעת עסקאות כושלות ומעניקה לכם כוח מיקוח עצום. אנו חושפים ליקויים סמויים בשלד, רטיבות כלואה מתחת לריצוף, כשלי איטום בקירות ובלאי מתקדם של מערכות הבניין.",
    href: "/בדק-בית-יד-שנייה",
    icon: Home,
    badge: "יד שנייה",
    standards: ["ת\"י 1205", "חוק המכר"]
  },
  {
    title: "בדק בית לבתים פרטיים ווילות",
    subtitle: "אבחון הנדסי יסודי למבנים מורכבים וצמודי קרקע",
    description: "בדיקה ייעודית לבתים פרטיים, וילות ודו-משפחתיים הכוללת בחינת גגות רעפים, מרתפים ומקלטים, מערכות ניקוז חוץ, שלד ויציבות המבנה, גדרות תומכות ותשתיות פיתוח חצר מקיפות.",
    href: "/בדק-בית-לבית-פרטי-וילה",
    icon: Home,
    badge: "צמודי קרקע",
    standards: ["ת\"י 1004", "מפרט בין-משרדי"]
  },
  {
    title: "ביקורת הנדסית בסוף שנת בדק",
    subtitle: "הפסקת התחמקות הקבלן ותיקון הליקויים בזמן",
    description: "בדיקה קריטית לקראת תום שנת המגורים הראשונה בנכס חדש. אנו מאתרים ליקויים שהתפתחו עקב שימוש והתיישבות של השלד, ומפיקים דו\"ח מהנדס רשמי המחייב את הקבלן לבצע את התיקונים המלאים.",
    href: "/בדק-בית-סוף-שנת-בדק",
    icon: ClipboardCheck,
    badge: "שנת בדק",
    standards: ["חוק המכר תיקון 5"]
  },
  {
    title: "חוות דעת הנדסית לבית משפט",
    subtitle: "גיבוי משפטי חזק, ליווי מלא ומתן עדות מומחה",
    description: "כתיבת חוות דעת מומחה ע\"י מהנדס בניין מוסמך, הערוכה בהתאם לפקודת הראיות וקבילה לחלוטין בבתי המשפט בישראל. הדו\"ח כולל הפניה לתקנות התכנון והבנייה, אומדן עלויות תיקון וליווי משפטי צמוד.",
    href: "/חוות-דעת-הנדסית-לבית-משפט",
    icon: Gavel,
    badge: "קביל משפטית",
    standards: ["פקודת הראיות", "חוק הנדסאים"]
  },
  {
    title: "איתור נזילות ורטיבות במצלמה תרמית",
    subtitle: "מיפוי כשלי איטום ורטיבות כלואה ללא הרס",
    description: "סריקה תרמוגרפית מתקדמת לאיתור נזילות מים וכשלי איטום סמויים. אנו משתמשים במצלמה תרמית אינפרה-אדום, מדי לחות אלקטרוניים וציוד אקוסטי למציאת מקור הכשל בצורה מדויקת וללא שבירת קירות.",
    href: "/איתור-נזילות-ורטיבות",
    icon: Droplet,
    badge: "טכנולוגי",
    standards: ["ISO 6781", "ASTM C1060"]
  },
  {
    title: "איתור חריגות בנייה ובדיקת היתרים",
    subtitle: "מניעת סיכונים פליליים ותכנוניים בקניית דירה",
    description: "בדיקת התאמה מלאה של הנכס הבנוי להיתר הבנייה המאושר בתיק הבניין בעירייה. איתור תוספות בנייה ללא היתר, חריגות משפטיות, פלישות וצווי הריסה פעילים.",
    href: "/ליקויי-בנייה",
    icon: ShieldAlert,
    badge: "תכנוני ומשפטי",
    standards: ["חוק התכנון והבנייה"]
  },
  {
    title: "אישור מהנדס קונסטרוקציה לפרגולה",
    subtitle: "רישוי מהיר לפרגולות ומבנים קלים בהתאם לתיקון 101",
    description: "בדיקת יציבות, חישוב עומסים סטטיים והנפקת אישור מהנדס קונסטרוקטור מוסמך להגשה לעירייה בהתאם לרפורמת הפרגולות (תיקון 101 לחוק התכנון והבנייה). שירות בטיחותי ומהיר.",
    href: "/אישור-מהנדס-לפרגולה",
    icon: CheckCircle2,
    badge: "רישוי ובטיחות",
    standards: ["תיקון 101", "ת\"י 412"]
  },
  {
    title: "מדריך ומפרט הבדיקות המלא",
    subtitle: "מה אנחנו בודקים בפועל במהלך בדק הבית?",
    description: "סקירה מפורטת ורשימת תיוג של כל המכלולים ההנדסיים הנבדקים על ידינו: שלד, קונסטרוקציה, מערכות סניטריות, לוחות חשמל, בדיקות אקוסטיות, פוגות, עבודות טיח וצבע, נגרות ואטימות חלונות.",
    href: "/מה-אנחנו-בודקים",
    icon: Compass,
    badge: "שקיפות מלאה",
    standards: ["מפרט אריקס ביקורת מבנים"]
  }
];

const CoreServicesSEO: React.FC = () => {
  return (
    <section id="core-engineering-services" className="py-6 md:py-12 bg-white border-t border-slate-100 relative scroll-mt-20">
      {/* Visual background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header Section */}
        <div className="text-right mb-4 md:mb-8 max-w-4xl">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs mb-3 block">
            מדריך הנדסי מורחב • משרד מהנדסים מוסמך
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            שירותי הנדסה וביקורת מבנים <span className="text-blue-600">בסטנדרט הגבוה ביותר</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            אריקס ביקורת מבנים מעניקה מעטפת הנדסית מלאה לרוכשי דירות, בעלי בתים פרטיים ועורכי דין. 
            כל השירותים מבוצעים על ידי מהנדסי בניין מוסמכים (B.Sc) וקונסטרוקטורים בעלי ניסיון רב, 
            תוך שימוש בציוד טכנולוגי מתקדם ובהתאם לתקנים הישראליים הרשמיים.
          </p>
        </div>

        {/* Services Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col justify-between p-8 bg-slate-50 hover:bg-white rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_rgba(37,99,235,0.04)] transition-all duration-500 text-right"
              >
                <div>
                  {/* Top line with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-100/50">
                      {service.badge}
                    </span>
                    <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    <Link href={service.href} className="focus:outline-none">
                      {service.title}
                    </Link>
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-400 mb-4">
                    {service.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer of card with standards and link */}
                <div className="mt-auto border-t border-slate-100 pt-6">
                  {/* Standards badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5 justify-start">
                    {service.standards.map((std, i) => (
                      <span key={i} className="text-[10px] font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
                        {std}
                      </span>
                    ))}
                  </div>

                  {/* Call to action */}
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    <span>קראו עוד על השירות</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover/link:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional SEO Footer block */}
        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong>מחפשים בדק בית מקצועי?</strong> משרדנו מספק שירותי ביקורת מבנים ואיתור ליקויים בכל אזור המרכז, גוש דן, השרון והשפלה (כולל תל אביב, ירושלים, ראשון לציון, הרצליה, רעננה ועוד). כל הדו&quot;חות נכתבים ע&quot;י מהנדס בניין מומחה (B.Sc) בהתאם לחוק המכר ותקנות הבנייה והם קבילים לחלוטין בערכאות משפטיות.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSEO;
