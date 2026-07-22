'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Printer, 
  Download, 
  ArrowRight, 
  Check, 
  FileText, 
  Building2, 
  Calendar, 
  User, 
  MapPin, 
  Award,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  PhoneCall,
  FileSpreadsheet
} from 'lucide-react';

interface FindingItem {
  id: string;
  category: string;
  severity: 'קריטי' | 'בטיחות' | 'סטנדרט' | 'חובה';
  title: string;
  description: string;
  regulation: string;
  tools: string;
  findingDetail: string;
  status: 'תקין' | 'ליקוי שנמצא' | 'לא נבדק';
}

const REPORT_FINDINGS: FindingItem[] = [
  {
    id: '1',
    category: 'שלד וקונסטרוקציה',
    severity: 'קריטי',
    title: 'סדקים קונסטרוקטיביים',
    description: 'בדיקת סדקים בעלי אופי הנדסי/מבני בעמודים, תקרות, קירות נושאים.',
    regulation: 'תקן ישראלי ת"י 413 (עמידות מבנים ברעידות אדמה), ת"י 940 (ביסוס מבנים)',
    tools: 'סרגל סדקים אופטי בדיוק 0.05 מ"מ, סקלרומטר לבדיקת חוזק בטון (Schmidt Hammer).',
    findingDetail: 'נמצא סדק אלכסוני עובר ברוחב 1.2 מ"מ בקיר סלון מזרחי (קיר נושא). בנוסף נמצאו סדקי נימיות מקומיים בחיבורי בלוק-בטון שאינם מהווים סכנה מבנית אך דורשים טיפול ברשת פיברגלס.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '2',
    category: 'שלד וקונסטרוקציה',
    severity: 'סטנדרט',
    title: 'אנכיות ויישור קירות',
    description: 'בדיקת סטיות של קירות פנים וחוץ מאנכיות מלאה וממישוריות.',
    regulation: 'תקן ישראלי ת"י 789 (עבודות טיח), ת"י 1923 (עבודות בנייה בגבס)',
    tools: 'פלס לייזר דיגיטלי תלת-ממדי, סרגל אלומיניום הנדסי 2 מטר ומד מרווחים.',
    findingDetail: 'נמצאה סטייה של 12 מ"מ באנכיות קיר הפרוזדור המערבי לאורך גובה של 2.7 מטר. תקן ת"י 789 מתיר סטייה מרבית של עד 6 מ"מ בלבד לגובה קומה.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '3',
    category: 'שלד וקונסטרוקציה',
    severity: 'בטיחות',
    title: 'מעקות וגדרות בטיחות',
    description: 'מדידת גובה מעקה במרפסות שמש, גגות ומדרגות וכן עמידותו בעומס צד.',
    regulation: 'תקן ישראלי ת"י 1142 (מעקות ומסעדים ומגינים)',
    tools: 'מד גובה דיגיטלי מכויל, מד כוח מתיחה הנדסי דיגיטלי לבדיקת עומסים (Pull-Tester).',
    findingDetail: 'גובה מעקה זכוכית במרפסת השמש נמדד כ-102 ס"מ מהריצוף המוגמר. תקן 1142 מחייב גובה מינימלי של 105 ס"מ במרפסות שאינן בקומת קרקע. המעקה אינו עומד בדרישות הבטיחות.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '4',
    category: 'שלד וקונסטרוקציה',
    severity: 'בטיחות',
    title: 'גבהים של רום ושלח במדרגות',
    description: 'בדיקת אחידות גבהי רום ושלח ומניעת סטיות מסוכנות.',
    regulation: 'תקנות התכנון והבנייה (בקשה להיתר ותנאיו), חלק ג\' (מדרגות ופרוזדורים)',
    tools: 'מד גובה דיגיטלי הנדסי, קליפר דיגיטלי.',
    findingDetail: 'נמצאה חוסר אחידות בגבהי הרום בגרם המדרגות הפנימי: מדרגה 3 בגובה 18.2 ס"מ, מדרגה 4 בגובה 16.5 ס"מ. הסטייה עולה על המותר בתקנות (עד 5 מ"מ הפרש) ומהווה מכשול בטיחותי קשה להולכים.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '5',
    category: 'איטום ורטיבות',
    severity: 'קריטי',
    title: 'רטיבות קפילארית ונזילות סמויות',
    description: 'סריקה תרמוגרפית מקיפה בכל קירות הדירה לאיתור חדירת מים או נזילות סמויות.',
    regulation: 'תקן ישראלי ת"י 1555 חלק 3 (מערכות בידוד ותרמוגרפיה)',
    tools: 'מצלמה תרמית מקצועית FLIR בעלת רזולוציה גבוהה, מד לחות השראתי (Protimeter).',
    findingDetail: 'בסריקה תרמית נראתה אנומליה קרה (כחולה) בבסיס קיר חדר הורים בחיבור לאמבטיה. מד לחות הראה ערכים חריגים של 28% לחות יחסית (חדירת מים כתוצאה מכשל באיטום הרצפה מתחת לאמבטיה).',
    status: 'ליקוי שנמצא'
  },
  {
    id: '6',
    category: 'איטום ורטיבות',
    severity: 'חובה',
    title: 'שיפועים במרפסות וגגות',
    description: 'בדיקת קיום שיפועים תקניים לכיוון פתחי הניקוז למניעת עמידת מים ושלוליות.',
    regulation: 'תקן ישראלי ת"י 1752 (איטום גגות שטוחים), ת"י 1476 (מערכות ניקוז)',
    tools: 'מד שיפוע דיגיטלי רב-ערוצי בדיוק 0.1 מעלות, בדיקת הצפת מים מבוקרת (24 שעות).',
    findingDetail: 'שיפוע המרפסת נמדד כ-0.6%. תקן 1752 מחייב שיפוע מינימלי של 1% לכיוון הניקוז. בעת הצפה מבוקרת נראתה הצטברות מים ושלוליות קבועות בפינה המערבית ללא זרימה חופשית לקולטן.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '7',
    category: 'איטום ורטיבות',
    severity: 'קריטי',
    title: 'רטיבות תת-רצפתית',
    description: 'בדיקת רמת הלחות הכלואה במצע החול או השומשום מתחת לאריחים.',
    regulation: 'תקן ישראלי ת"י 1629 (תכולת רטיבות מותרת במצע ריצוף)',
    tools: 'בדיקת מעבדה מוסמכת ע"י נטילת דגימות מצע וחול מתחת לריצוף (שיטת שקילה וייבוש).',
    findingDetail: 'נלקחה דגימה של מצע השומשום מתחת לריצוף באזור הפרוזדור. תוצאות בדיקת המעבדה המוסמכת הראו 5.4% רטיבות. התקן מתיר מקסימום 3% לשומשום (או 6% לחול). המצע רטוב ודורש ייבוש מאולץ או פירוק הריצוף.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '8',
    category: 'חלונות ופתחים',
    severity: 'חובה',
    title: 'איטום סביב פתחים ומשקופים',
    description: 'איטום חיצוני ופנימי של מפתחי אלומיניום, משקופים ועיוותים ומעברי תשתיות.',
    regulation: 'תקן ישראלי ת"י 1340 (איטום חלונות ומפתחים בבניין)',
    tools: 'מד זרימת אוויר דיגיטלי, בדיקת המטרה הנדסית בלחץ מים גבוה.',
    findingDetail: 'הרובה הסיליקוני החיצוני סביב חלון חדר שינה צפון-מערבי מנותק חלקית ומרווח. בבדיקת המטרה הנדסית נמצאה חדירת מים ישירה לפנים הבית דרך חיבורי האלומיניום והמשקוף העיוור.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '9',
    category: 'בטיחות וחירום',
    severity: 'קריטי',
    title: 'תקינות ונעילת חלונות ודלתות ממ"ד',
    description: 'בדיקה מקיפה של אטימות דלת הממ"ד להדף וגזים, תקינות נעילת המנוף, וחלון הפלדה החיצוני.',
    regulation: 'תקן ישראלי ת"י 4422 (חלונות ודלתות למרחבים מוגנים), הנחיות פיקוד העורף',
    tools: 'מד לחץ אטימות ייעודי, בדיקת מרווחים הנדסית באמצעות קליפר.',
    findingDetail: 'אטם הגומי ההיקפי של דלת הממ"ד יבש, סדוק וקרוע בחלקו התחתון, מה שמכשיל לחלוטין את אטימות החדר בפני חדירת גזים. בנוסף, מנגנון הנעילה הראשי קשה ואינו ננעל עד סוף מהלכו עקב שקיעת הדלת.',
    status: 'ליקוי שנמצא'
  },
  {
    id: '10',
    category: 'חשמל ומערכות',
    severity: 'קריטי',
    title: 'תקינות ממסר פחת ומגן ההתחשמלות',
    description: 'בדיקה פונקציונלית של ממסר פחת בלוח החשמל הדירתי וזמן התגובה שלו.',
    regulation: 'חוק החשמל ותקנותיו (בדיקות והארקות), ת"י 228',
    tools: 'מד זמן תגובה וזרם הפעלה לפחת (RCD Tester) מכויל.',
    findingDetail: 'בבדיקת ממסר הפחת הראשי בלוח הדירתי נמצא כי הוא מגיב בזרם זליגה של 35mA ובזמן של 42ms. התקן מחייב תגובה מהירה בזרם של עד 30mA ובזמן קצר מ-30ms. הממסר אינו תקין ומחייב החלפה מיידית למניעת התחשמלות.',
    status: 'ליקוי שנמצא'
  }
];

// Component to render high-fidelity engineering diagrams and visual evidence for each defect
function FindingVisual({ id }: { id: string }) {
  switch (id) {
    case '1': // סדקים קונסטרוקטיביים
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 1.1: סדק קיר נושא
          </span>
          <div className="sr-only">
            איור הנדסי המציג סדק מבני אלכסוני בקיר סלון מזרחי. תצוגת זכוכית מגדלת מראה מדידה מדויקת של רוחב הסדק - 1.2 מילימטרים, החורג מהמותר.
          </div>
          <svg role="img" aria-label="איור הנדסי 1.1: סדק מבני בקיר נושא ומדידת רוחבו" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 1.1: סדק קיר נושא</title>
            {/* Background wall pattern */}
            <rect width="200" height="120" rx="8" fill="#E2E8F0" />
            <path d="M0 30H200M0 60H200M0 90H200" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2 2" />
            
            {/* The Crack */}
            <path d="M40 10 L65 35 L80 42 L110 75 L125 90 L135 110" stroke="#475569" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Secondary minor cracks */}
            <path d="M80 42 L95 35 L110 32" stroke="#64748B" strokeWidth="0.8" />
            <path d="M110 75 L100 85 L95 98" stroke="#64748B" strokeWidth="0.8" />

            {/* Magnifier scope overlay */}
            <circle cx="95" cy="58" r="28" fill="#F8FAFC" fillOpacity="0.95" stroke="#2563EB" strokeWidth="1.5" />
            {/* Zoomed crack inside magnifier */}
            <path d="M78 35 L90 53 L100 68 L112 85" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Measurement caliper inside magnifier */}
            <line x1="82" y1="53" x2="104" y2="53" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 1" />
            <path d="M82 50 V56 M104 50 V56" stroke="#EF4444" strokeWidth="1" />
            <text x="93" y="47" fill="#EF4444" fontSize="6.5" fontWeight="black" textAnchor="middle">1.2mm</text>

            {/* General annotation */}
            <text x="15" y="112" fill="#475569" fontSize="6.5" fontWeight="bold">קיר סלון מזרחי</text>
          </svg>
          <div className="mt-2 text-[10px] text-slate-500 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            סרגל אופטי אומדן רוחב: 1.20 מ&quot;מ
          </div>
        </div>
      );

    case '2': // אנכיות ויישור קירות
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 2.1: פלס לייזר
          </span>
          <div className="sr-only">
            איור הנדסי המראה מדידת אנכיות של קיר. קו פלס לייזר אדום משמש כנקודת ייחוס אנכית ישרה, ומראה סטייה של קיר קיים בפועל הנוטה הצידה ב-12 מילימטרים לאורך גובה קומה של 2.7 מטרים.
          </div>
          <svg role="img" aria-label="איור הנדסי 2.1: מדידת סטיית אנכיות קיר באמצעות פלס לייזר" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 2.1: פלס לייזר</title>
            <rect width="200" height="120" rx="8" fill="#F1F5F9" />
            
            {/* Reference true vertical line (Plumb line) */}
            <line x1="70" y1="10" x2="70" y2="110" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="50" y="20" fill="#EF4444" fontSize="5.5" fontWeight="bold">אנך פלס לייזר</text>

            {/* Actual leaning wall line */}
            <line x1="70" y1="110" x2="95" y2="10" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <text x="110" y="20" fill="#1E293B" fontSize="5.5" fontWeight="bold">קיר קיים בפועל</text>

            {/* Ground line */}
            <line x1="20" y1="110" x2="180" y2="110" stroke="#94A3B8" strokeWidth="2" />
            
            {/* Dimension brackets at top */}
            <path d="M70 15 H95" stroke="#EF4444" strokeWidth="1" />
            <path d="M70 12 V18 M95 12 V18" stroke="#EF4444" strokeWidth="1" />
            <text x="82.5" y="10" fill="#EF4444" fontSize="7.5" fontWeight="black" textAnchor="middle">12 מ&quot;מ</text>
            
            {/* Laser level emitter icon */}
            <rect x="62" y="102" width="16" height="8" rx="1" fill="#3B82F6" />
            <circle cx="70" cy="106" r="2" fill="#22C55E" />
            
            {/* Label height */}
            <text x="180" y="65" fill="#64748B" fontSize="5.5" textAnchor="end">גובה קומה: 2.70 מ&apos;</text>
            <path d="M185 10 V110" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            סטייה הנדסית לאורך גובה קומה
          </div>
        </div>
      );

    case '3': // מעקות וגדרות בטיחות
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 3.1: חריגת גובה מעקה
          </span>
          <div className="sr-only">
            איור הנדסי של מעקה זכוכית במרפסת. גובה המעקה בפועל הוא 102 סנטימטרים מהריצוף המוגמר, כאשר התקן הישראלי מחייב גובה מינימלי של 105 סנטימטרים.
          </div>
          <svg role="img" aria-label="איור הנדסי 3.1: חריגת גובה של מעקה מרפסת זכוכית לעומת התקן" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 3.1: חריגת גובה מעקה</title>
            <rect width="200" height="120" rx="8" fill="#F8FAFC" />
            
            {/* Balcony concrete floor */}
            <rect x="20" y="95" width="160" height="25" fill="#E2E8F0" />
            <line x1="20" y1="95" x2="180" y2="95" stroke="#94A3B8" strokeWidth="1" />
            <text x="30" y="110" fill="#64748B" fontSize="5.5" fontWeight="bold">ריצוף מוגמר</text>

            {/* Balcony Railing Glass Post */}
            <rect x="70" y="30" width="6" height="65" fill="#94A3B8" />
            <rect x="90" y="30" width="6" height="65" fill="#94A3B8" />
            
            {/* Glass panel */}
            <rect x="50" y="33" width="100" height="58" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1" />
            <path d="M60 40 L80 60 M120 40 L140 60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />

            {/* Top metal handrail */}
            <rect x="40" y="27" width="120" height="6" rx="1" fill="#475569" />

            {/* Actual height line and dimension */}
            <line x1="150" y1="95" x2="150" y2="27" stroke="#EF4444" strokeWidth="1" />
            <path d="M147 95 H153 M147 27 H153" stroke="#EF4444" strokeWidth="1" />
            <text x="156" y="65" fill="#EF4444" fontSize="7" fontWeight="black">נמדד: 102 ס&quot;מ</text>

            {/* Required height limit */}
            <line x1="168" y1="95" x2="168" y2="15" stroke="#22C55E" strokeWidth="1" strokeDasharray="2 1" />
            <path d="M165 95 H171 M165 15 H171" stroke="#22C55E" strokeWidth="1" />
            <text x="168" y="10" fill="#22C55E" fontSize="6" fontWeight="bold" textAnchor="middle">תקן: 105 ס&quot;מ</text>
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            חוסר של 3 ס&quot;מ מעל המותר
          </div>
        </div>
      );

    case '4': // גבהים של רום ושלח במדרגות
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 4.1: חוסר אחידות מדרגות
          </span>
          <div className="sr-only">
            איור הנדסי המציג חתך של גרם מדרגות. רום מדרגה אחת הוא 18.2 סנטימטרים ורום המדרגה הבאה הוא 16.5 סנטימטרים, המציג הפרש גובה לא תקני ומסוכן של 1.7 סנטימטרים.
          </div>
          <svg role="img" aria-label="איור הנדסי 4.1: אי אחידות וחריגה בגבהי רום המדרגות" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 4.1: חוסר אחידות מדרגות</title>
            <rect width="200" height="120" rx="8" fill="#F1F5F9" />
            
            {/* Stair stairs contour */}
            <path d="M20 110 H60 V80 H105 V45 H160 V10" stroke="#475569" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Stair Treads and Risers details */}
            {/* Step 3 (lower) */}
            <line x1="105" y1="80" x2="105" y2="45" stroke="#EF4444" strokeWidth="1.5" />
            <text x="110" y="65" fill="#EF4444" fontSize="6.5" fontWeight="bold">רום 3: 18.2 ס&quot;מ</text>

            {/* Step 4 (upper) */}
            <line x1="160" y1="45" x2="160" y2="10" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="150" y="30" fill="#3B82F6" fontSize="6.5" fontWeight="bold" textAnchor="end">רום 4: 16.5 ס&quot;מ</text>

            {/* Dimension Callout Difference */}
            <rect x="25" y="20" width="70" height="35" rx="6" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1" />
            <text x="60" y="32" fill="#9F1239" fontSize="6.5" fontWeight="black" textAnchor="middle">הפרש גובה: 1.7 ס&quot;מ</text>
            <text x="60" y="42" fill="#E11D48" fontSize="5.5" fontWeight="bold" textAnchor="middle">מותר עד 0.5 ס&quot;מ הפרש</text>
            <path d="M95 37 L115 50" stroke="#E11D48" strokeWidth="0.8" strokeDasharray="2 1" />
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            סטיות בין רומים עוקבים
          </div>
        </div>
      );

    case '5': // רטיבות קפילארית ונזילות סמויות
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-white absolute top-2 right-2 uppercase tracking-wider bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-md shadow-sm z-10">
            סריקת FLIR E8-XT אינפרא-אדום
          </span>
          <div className="sr-only">
            הדמיית צג של מצלמה תרמית מדגם FLIR. הסריקה התרמוגרפית מציגה אנומליה קרה בצבע כחול בבסיס הקיר בחיבור לאמבטיה, עם לחות יחסית של 28 אחוזים המעידה על רטיבות סמויה כלואה.
          </div>
          <div className="relative w-full h-40 rounded-lg overflow-hidden border border-slate-300 drop-shadow-sm mt-3" role="img" aria-label="סריקה תרמוגרפית המציגה רטיבות כלואה בצבעי כחול וסגול קרים">
            {/* Thermal screen background with CSS gradient representing moisture map */}
            <div className="w-full h-full bg-gradient-to-tr from-purple-950 via-violet-900 to-amber-500 relative">
              
              {/* Moisture cold leak zone */}
              <div className="absolute bottom-0 left-1/4 w-32 h-20 bg-blue-500/75 rounded-t-full filter blur-md animate-pulse"></div>
              <div className="absolute bottom-0 left-1/3 w-16 h-12 bg-cyan-400/80 rounded-t-full filter blur-sm"></div>

              {/* Grid / crosshairs of infrared camera */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                </div>
                <span className="absolute text-[8px] text-white font-mono translate-y-4 font-black bg-black/40 px-1 rounded">+ 16.4°C (קפילארי)</span>
              </div>

              {/* Thermal color scale sidebar */}
              <div className="absolute left-2 top-4 bottom-4 w-2 rounded-full bg-gradient-to-t from-purple-950 via-blue-500 via-cyan-400 via-green-400 to-amber-500 flex flex-col justify-between text-[6px] font-mono text-white pl-3">
                <span>24.8°C</span>
                <span>15.2°C</span>
              </div>

              {/* Camera metadata */}
              <div className="absolute top-2 right-2 text-[6px] text-white font-mono flex flex-col items-end opacity-90">
                <span>FLIR SYSTEMS</span>
                <span>ε = 0.95</span>
              </div>

              <div className="absolute bottom-2 right-2 text-[7px] text-white font-mono bg-black/80 px-1.5 py-0.5 rounded">
                לחות יחסית: 28%
              </div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            נמצא ריכוז חום נמוך (כחול) המעיד על רטיבות סמויה
          </div>
        </div>
      );

    case '6': // שיפועים במרפסות וגגות
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 6.1: מדידת שיפועים
          </span>
          <div className="sr-only">
            איור הנדסי של מדידת שיפועים במרפסת. מכשיר מד שיפוע המונח על מישור הריצוף מראה זווית שיפוע של 0.6 אחוזים בלבד לכיוון קולטן הניקוז, בעוד התקן דורש שיפוע מינימלי של אחוז אחד.
          </div>
          <svg role="img" aria-label="איור הנדסי 6.1: מדידת שיפוע מרפסת לא תקני בעזרת פלס דיגיטלי" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 6.1: מדידת שיפועים</title>
            <rect width="200" height="120" rx="8" fill="#F8FAFC" />
            
            {/* Slanted floor plane */}
            {/* Slopes downwards from left to right, but too weak (0.6%) */}
            <path d="M20 70 L180 82" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            <text x="30" y="62" fill="#475569" fontSize="5.5" fontWeight="bold">מישור אריחים קיים במרפסת</text>

            {/* Flat reference level */}
            <line x1="20" y1="70" x2="180" y2="70" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 3" />

            {/* Inclinometer tool lying on the tile */}
            <g transform="translate(100, 76) rotate(4)">
              <rect x="-35" y="-8" width="70" height="12" rx="2" fill="#1E293B" stroke="#000" strokeWidth="1" />
              {/* LCD Display */}
              <rect x="-18" y="-5" width="36" height="7" fill="#22C55E" fillOpacity="0.8" />
              <text x="0" y="0" fill="#0F172A" fontSize="5" fontWeight="black" fontFamily="monospace" textAnchor="middle">0.6% SLOPE</text>
            </g>

            {/* Rain drain pipe */}
            <rect x="170" y="82" width="12" height="18" fill="#CBD5E1" />
            <line x1="170" y1="82" x2="182" y2="82" stroke="#64748B" strokeWidth="1.5" />

            {/* Note of the violation */}
            <text x="25" y="105" fill="#EF4444" fontSize="6" fontWeight="black">שיפוע בפועל: 0.6% (תקן נדרש: 1.0% לפחות)</text>
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            שיפוע חסר לכיוון פתח הניקוז
          </div>
        </div>
      );

    case '7': // רטיבות תת-רצפתית
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            אנליזת מעבדה מוסמכת
          </span>
          <div className="sr-only">
            איור הנדסי המציג חתך של הריצוף ומצע השומשום הרטוב מתחתיו, ולצידו מסמך מעבדה מוסמכת המורה על תכולת לחות של 5.4 אחוזים החורגת מהתקן המותר של עד 3 אחוזים.
          </div>
          <svg role="img" aria-label="איור הנדסי 7.1: חתך ריצוף עם מצע שומשום רטוב ותוצאת בדיקת מעבדה חורגת" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>אנליזת מעבדה מוסמכת</title>
            <rect width="200" height="120" rx="8" fill="#F1F5F9" />
            
            {/* Tile Profile */}
            <rect x="15" y="15" width="100" height="10" fill="#E2E8F0" stroke="#94A3B8" />
            <text x="65" y="22" fill="#475569" fontSize="5.5" fontWeight="bold" textAnchor="middle">אריח ריצוף קרמיקה</text>

            {/* Bedding Material layer (מצע שומשום) */}
            <rect x="15" y="25" width="100" height="35" fill="#D97706" fillOpacity="0.15" stroke="#D97706" strokeWidth="1" strokeDasharray="1 1" />
            {/* Wet dots */}
            <circle cx="25" cy="35" r="1.5" fill="#3B82F6" />
            <circle cx="50" cy="45" r="1" fill="#3B82F6" />
            <circle cx="85" cy="32" r="2" fill="#3B82F6" />
            <circle cx="70" cy="50" r="1.5" fill="#3B82F6" />
            <text x="65" y="42" fill="#D97706" fontSize="5.5" fontWeight="black" textAnchor="middle">מצע חול/שומשום רטוב</text>

            {/* Concrete subfloor */}
            <rect x="15" y="60" width="100" height="20" fill="#94A3B8" />
            <text x="65" y="72" fill="#FFF" fontSize="5.5" textAnchor="middle">בטון יסוד תקני</text>

            {/* Laboratory report summary paper */}
            <g transform="translate(122, 12)">
              <rect width="63" height="95" rx="3" fill="#FFF" stroke="#64748B" strokeWidth="1" />
              <line x1="5" y1="10" x2="58" y2="10" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="31" y="22" fill="#1E293B" fontSize="6" fontWeight="black" textAnchor="middle">דוח מעבדה</text>
              
              <text x="5" y="38" fill="#64748B" fontSize="5" fontWeight="bold">רטיבות: 5.4%</text>
              <rect x="4" y="42" width="55" height="3" fill="#EF4444" />
              <text x="5" y="55" fill="#DC2626" fontSize="4.5" fontWeight="black">חריגה מהתקן!</text>
              
              <text x="5" y="70" fill="#64748B" fontSize="4.5">שומשום תקן: ≤3.0%</text>
              <text x="5" y="80" fill="#64748B" fontSize="4.5">חול תקן: ≤6.0%</text>
            </g>
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            דגימת מעבדה של מצע שומשום רטוב
          </div>
        </div>
      );

    case '8': // איטום סביב פתחים ומשקופים
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 8.1: חדירת מים מחלון
          </span>
          <div className="sr-only">
            איור הנדסי של חתך קיר וחלון בעת המטרת גשם. נראית חדירת מים פעילה אל פנים הבית דרך מרווחים ברובה הסיליקונית של המשקוף החיצוני.
          </div>
          <svg role="img" aria-label="איור הנדסי 8.1: חתך חלון עם סיליקון פגום המאפשר חדירת מי גשם לתוך המבנה" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 8.1: חדירת מים מחלון</title>
            <rect width="200" height="120" rx="8" fill="#F8FAFC" />
            
            {/* Wall side cut */}
            <rect x="80" y="10" width="40" height="100" fill="#CBD5E1" />
            
            {/* Window glass and frame */}
            <rect x="70" y="25" width="10" height="70" fill="#38BDF8" fillOpacity="0.2" stroke="#475569" strokeWidth="2" />
            
            {/* Cracked sealant block */}
            <circle cx="80" cy="25" r="3" fill="#EF4444" />
            <circle cx="80" cy="95" r="3" fill="#EF4444" />
            <text x="110" y="102" fill="#EF4444" fontSize="5.5" fontWeight="bold">כשל בסיליקון</text>

            {/* Rain simulation */}
            <path d="M15 20 L40 35 M20 50 L45 65 M10 80 L35 95" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Water path leaking into the room */}
            <path d="M70 25 L83 29 L95 45 L95 85" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            <path d="M95 45 L115 50" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="1 1" />
            
            {/* Water stains on inside wall */}
            <path d="M120 45 C125 45, 125 55, 130 55" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />
            <text x="145" y="55" fill="#D97706" fontSize="6" fontWeight="black">חדירת מים פעילה</text>

            {/* Outside indicator */}
            <text x="25" y="15" fill="#64748B" fontSize="5.5" fontWeight="bold">חוץ (גשם)</text>
            {/* Inside indicator */}
            <text x="175" y="15" fill="#64748B" fontSize="5.5" fontWeight="bold" textAnchor="end">פנים</text>
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            כשל איטום בהיקף החיצוני של החלון
          </div>
        </div>
      );

    case '9': // תקינות ונעילת חלונות ודלתות ממ"ד
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            איור הנדסי 9.1: כשל דלת ממ&quot;ד
          </span>
          <div className="sr-only">
            איור הנדסי של דלת פלדה של ממ״ד. האיור מציג תקריב של אטם גומי סדוק ובלוי המונע אטימות מלאה לגזים, לצד מנגנון נעילה וידית תקועה שאינה נסגרת עד סופה.
          </div>
          <svg role="img" aria-label="איור הנדסי 9.1: כשל נעילה ואיטום בדלת הדף של ממ״ד" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>איור הנדסי 9.1: כשל דלת ממ&quot;ד</title>
            <rect width="200" height="120" rx="8" fill="#F1F5F9" />
            
            {/* Main heavy steel door */}
            <rect x="50" y="15" width="80" height="90" rx="4" fill="#64748B" stroke="#334155" strokeWidth="2" />
            
            {/* Inner frame lock mechanism */}
            <rect x="110" y="45" width="15" height="30" fill="#475569" />
            
            {/* Stuck handle at angle */}
            <g transform="translate(118, 55) rotate(45)">
              <rect x="-3" y="-3" width="6" height="6" rx="3" fill="#94A3B8" />
              <rect x="-2" y="0" width="4" height="24" rx="1" fill="#1E293B" />
              {/* Highlight handle direction error */}
              <path d="M4 18 C12 18, 18 10, 18 2" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 1" />
              <text x="22" y="2" fill="#EF4444" fontSize="5.5" fontWeight="bold">נעול חלקית בלבד</text>
            </g>

            {/* Torn gasket zoom circle */}
            <circle cx="65" cy="80" r="18" fill="#F8FAFC" stroke="#EF4444" strokeWidth="1.5" />
            <path d="M50 80 H80" stroke="#1E293B" strokeWidth="4" />
            {/* Rubber layer */}
            <rect x="52" y="74" width="26" height="4" fill="#000" />
            {/* Torn cut */}
            <path d="M63 74 L65 78 L68 74" fill="#F8FAFC" />
            <text x="65" y="93" fill="#EF4444" fontSize="5.5" fontWeight="black" textAnchor="middle">אטם גומי סדוק</text>
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            אטם גומי בלוי וידית תקועה במנגנון הנעילה
          </div>
        </div>
      );

    case '10': // תקינות ממסר פחת ומגן ההתחשמלות
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[9px] font-black text-slate-400 absolute top-1 right-1 uppercase tracking-wider bg-white/95 border border-slate-200/60 px-2 py-0.5 rounded-md shadow-sm">
            מכשיר בדיקה דיגיטלי RCD
          </span>
          <div className="sr-only">
            הדמיית מסך של מכשיר בדיקה דיגיטלי RCD המציג חיווי נכשל אדום עבור ממסר הפחת הראשי, עם זרם הפעלה חריג של 35 מיליאמפר וזמן תגובה ארוך של 42 מילישניות.
          </div>
          <svg role="img" aria-label="איור הנדסי 10.1: חיווי נכשל על צג מכשיר בדיקה דיגיטלי של ממסר פחת" className="w-full h-40 drop-shadow-sm mt-3" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>מכשיר בדיקה דיגיטלי RCD</title>
            {/* The Tester body (yellow Fluke style) */}
            <rect width="200" height="120" rx="8" fill="#EAB308" />
            
            {/* Black border screen */}
            <rect x="15" y="15" width="170" height="90" rx="4" fill="#1E293B" stroke="#000" strokeWidth="2" />
            
            {/* LCD backlight in amber/orange alert color */}
            <rect x="20" y="20" width="160" height="80" rx="2" fill="#FFF7ED" />

            {/* Testing Info */}
            <text x="30" y="35" fill="#475569" fontSize="6.5" fontWeight="bold" fontFamily="monospace">MODE: AUTO RCD TRIP</text>
            
            {/* Result Trip Current */}
            <text x="30" y="55" fill="#1E293B" fontSize="8" fontWeight="bold" fontFamily="monospace">TRIP CURRENT (זרם פחת):</text>
            <text x="170" y="55" fill="#DC2626" fontSize="10" fontWeight="black" fontFamily="monospace" textAnchor="end">35 mA ✖</text>
            <text x="30" y="63" fill="#64748B" fontSize="4.5" fontFamily="monospace">(MAX LIMIT: 30 mA)</text>

            {/* Result Trip Time */}
            <text x="30" y="78" fill="#1E293B" fontSize="8" fontWeight="bold" fontFamily="monospace">TRIP TIME (זמן תגובה):</text>
            <text x="170" y="78" fill="#DC2626" fontSize="10" fontWeight="black" fontFamily="monospace" textAnchor="end">42 ms ✖</text>
            <text x="30" y="86" fill="#64748B" fontSize="4.5" fontFamily="monospace">(MAX LIMIT: 30 ms)</text>

            {/* FAIL blinking banner */}
            <rect x="120" y="23" width="50" height="15" rx="3" fill="#DC2626" />
            <text x="145" y="33" fill="#FFF" fontSize="8" fontWeight="black" textAnchor="middle">FAIL / נכשל</text>
          </svg>
          <div className="mt-2 text-[10px] text-red-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            זרם וזמן זליגה גבוהים מהמותר בתקן
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function SampleReportPage() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const date = new Date();
    const formatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setCurrentDate(formatted);

    // Auto trigger print if URL search param print=true
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === 'true') {
      setTimeout(() => {
        window.print();
      }, 800);
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleExportToExcel = () => {
    const headers = [
      'מספר ליקוי',
      'קטגוריה',
      'חומרת ליקוי',
      'נושא הליקוי',
      'תיאור הבדיקה',
      'תקן / תקנות רלוונטיות',
      'כלי עבודה ובדיקה',
      'ממצאי הבדיקה בשטח',
      'סטטוס'
    ];

    const escapeCsvValue = (val: string) => {
      if (!val) return '""';
      const clean = val.replace(/"/g, '""');
      return `"${clean}"`;
    };

    const csvRows = [
      headers.map(escapeCsvValue).join(','),
      ...REPORT_FINDINGS.map(item => [
        item.id,
        item.category,
        item.severity,
        item.title,
        item.description,
        item.regulation,
        item.tools,
        item.findingDetail,
        item.status
      ].map(escapeCsvValue).join(','))
    ];

    // UTF-8 with BOM to ensure Hebrew letters display correctly in Excel
    const csvContent = '\uFEFF' + csvRows.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `דוח_ליקויים_אריקס_הנדסה_${currentDate.replace(/\//g, '-') || '2026'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-right pb-16 pt-28" dir="rtl">
      {/* CSS overrides specifically for printing the report beautifully */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          header, footer, .no-print {
            display: none !important;
          }
          .print-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
          .badge-print {
            border: 1px solid #000 !important;
            background: transparent !important;
            color: black !important;
          }
        }
      `}</style>

      {/* Top Floating Control Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-6 no-print">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-600 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50/50 px-4 py-2.5 rounded-xl border border-slate-200"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לדף הבית
          </button>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={handleExportToExcel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 active:scale-95 transition-all text-sm cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              ייצוא ליקויים ל-Excel
            </button>
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              הדפס / שמור כ-PDF
            </button>
          </div>
        </div>
        
        {/* Instruction Note */}
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-2.5 leading-relaxed">
          <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <strong>כיצד לשמור כקובץ PDF?</strong> לחצו על כפתור <strong>&quot;הדפס / שמור כ-PDF&quot;</strong> למעלה. בחלון ההדפסה של הדפדפן שיפתח, שנו את היעד (Destination) ל-<strong>&quot;שמור כ-PDF&quot;</strong> (Save as PDF) ולחצו על שמירה.
          </div>
        </div>
      </div>

      {/* Main PDF Page Design Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 print-container">
        <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xl overflow-hidden p-8 sm:p-12 md:p-16 relative">
          
          {/* Header watermark/seal pattern */}
          <div className="absolute top-0 right-0 left-0 h-4 bg-gradient-to-r from-blue-600 via-blue-500 to-slate-900 no-print"></div>
          
          {/* PDF Page 1: Header and Metadata */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-slate-100 pb-8 mb-8 gap-6">
            
            {/* Logo and business details */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl border border-slate-800 shadow-md">
                  א
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">אריקס ביקורת מבנים</h1>
                  <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mt-1 block">ביקורת מבנים ובדק בית מוסמך</span>
                </div>
              </div>
              <p className="text-3xs text-slate-500 font-bold leading-relaxed">
                משרד מומחים לביקורת מבנים ובדק בית בישראל <br />
                טלפון: 054-7515142 | דוא&quot;ל: yossi10@duck.com
              </p>
            </div>

            {/* Document Meta Box (Left) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 w-full sm:w-64 text-xs">
              <div className="grid grid-cols-2 gap-y-2 gap-x-1">
                <span className="text-slate-400 font-bold">מספר מסמך:</span>
                <span className="font-black text-slate-800 text-left">CHK-2026-102</span>
                
                <span className="text-slate-400 font-bold">תאריך הבדיקה:</span>
                <span className="font-black text-slate-800 text-left">{currentDate || '27/06/2026'}</span>
                
                <span className="text-slate-400 font-bold">מהנדס מאשר:</span>
                <span className="font-black text-blue-600 text-left">אינג&apos; יוסי אריקס</span>

                <span className="text-slate-400 font-bold">מספר רישיון:</span>
                <span className="font-black text-slate-800 text-left">1239845</span>
              </div>
            </div>

          </div>

          {/* Section: Project Details (פרטי הנכס והבדיקה) */}
          <div className="mb-10 bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-black text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              פרטי הנכס והבדיקה המבוצעת
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <User className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500 font-bold w-24">שם המזמין:</span>
                  <span className="font-black text-slate-800">ישראל ישראלי</span>
                </div>
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500 font-bold w-24">כתובת הנכס:</span>
                  <span className="font-black text-slate-800">רחוב הרצל 10, קומה 4, דירה 16, תל אביב</span>
                </div>
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500 font-bold w-24">סוג הנכס:</span>
                  <span className="font-black text-slate-800">דירה חדשה מקבלן (בניין רווחי)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500 font-bold w-24">תאריך ביקור:</span>
                  <span className="font-black text-slate-800">{currentDate || '27/06/2026'}</span>
                </div>
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <Award className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500 font-bold w-24">מטרת הבדיקה:</span>
                  <span className="font-black text-slate-800">ביקורת הנדסית לצורך קבלת טופס 4 ומסירת מפתח</span>
                </div>
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  <span className="text-slate-500 font-bold w-24">מצב הבדיקה:</span>
                  <span 
                    role="status"
                    aria-label="מצב הבדיקה: הושלמה בהצלחה"
                    className="inline-flex items-center gap-1 text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold"
                  >
                    הושלמה בהצלחה
                  </span>
                </div>
              </div>
            </div>

            {/* Engineer Seal & Stamp */}
            <div className="mt-8 flex justify-end">
              <div className="border-2 border-dashed border-blue-600/35 rounded-2xl p-4 text-center w-56 bg-blue-50/20">
                <span className="text-[10px] text-blue-600 font-black block mb-1">חתימת וחותמת המהנדס</span>
                <div className="h-10 flex items-center justify-center text-slate-300 font-mono text-xs italic">
                  [חתימה אלקטרונית מאושרת]
                </div>
                <div className="border-t border-blue-200 pt-1.5 mt-1.5">
                  <span className="text-xs font-black text-slate-800">אינג&apos; יוסי אריקס</span>
                  <span className="text-[9px] text-slate-500 block">מהנדס בניין רשוי ורשום</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Inspection Header */}
          <div className="mb-6">
            <h2 className="text-xl font-black text-slate-900 mb-2">
              רשימת בדיקה הנדסית (פרוטוקול בדק בית מקיף)
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              להלן פירוט של נקודות הבדיקה שנבחנו בנכס בהתאם לסטנדרטים המחמירים, לתקנים הישראליים הרשמיים, ולחוק המכר (דירות). בכל סעיף מצוינים כלי העבודה המיוחדים שנעשה בהם שימוש והממצאים ההנדסיים בשטח.
            </p>
          </div>

          {/* Inspection items list */}
          <div className="space-y-6">
            {REPORT_FINDINGS.map((item, index) => {
              const isCritical = item.severity === 'קריטי';
              const isSafety = item.severity === 'בטיחות';
              const isObligatory = item.severity === 'חובה';

              return (
                <div 
                  key={item.id} 
                  className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                    index === 4 ? 'page-break' : ''
                  } ${
                    isCritical 
                      ? 'border-red-200 bg-red-50/5 hover:bg-red-50/10' 
                      : isSafety 
                      ? 'border-amber-200 bg-amber-50/5 hover:bg-amber-50/10'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Item Header */}
                  <div className={`p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b ${
                    isCritical ? 'border-red-100 bg-red-50/30' : isSafety ? 'border-amber-100 bg-amber-50/30' : 'border-slate-100 bg-slate-50/30'
                  }`}>
                    <div>
                      <span className="text-3xs font-black text-slate-400 uppercase tracking-widest block mb-0.5">
                        בדיקה {item.id} מתוך {REPORT_FINDINGS.length} ({item.category})
                      </span>
                      <h3 className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
                        {item.title}
                        
                        {/* Severity Tags */}
                        <span className={`text-3xs font-black px-2 py-0.5 rounded-full ${
                          isCritical 
                            ? 'bg-red-100 text-red-800 border border-red-200' 
                            : isSafety 
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : isObligatory
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : 'bg-slate-100 text-slate-800 border border-slate-200'
                        }`}>
                          {item.severity}
                        </span>
                      </h3>
                    </div>

                    {/* Checkbox Status */}
                    <div 
                      role="status"
                      aria-label={`סטטוס בדיקה: ${item.status}`}
                      className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-white/80 border border-slate-200 rounded-xl px-3 py-1 text-xs"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true"></span>
                      <span className="font-bold text-slate-700">{item.status}</span>
                    </div>
                  </div>

                  {/* Item Content Grid */}
                  <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    {/* Finding details (Right side) */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        {/* General description */}
                        <p className="text-slate-600 leading-relaxed text-xs">
                          {item.description}
                        </p>

                        {/* Standards and regulation */}
                        <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-3 space-y-2">
                          <div className="flex items-start gap-1.5 text-2xs">
                            <span className="font-black text-slate-900 shrink-0">תקן ישראלי / נסמך:</span>
                            <span className="text-slate-600">{item.regulation}</span>
                          </div>
                          <div className="flex items-start gap-1.5 text-2xs border-t border-slate-200/50 pt-2">
                            <span className="font-black text-slate-900 shrink-0">כלי עבודה מהדוח:</span>
                            <span className="text-slate-600">{item.tools}</span>
                          </div>
                        </div>
                      </div>

                      {/* Findings detail */}
                      <div className="bg-red-50/40 border border-red-100 rounded-xl p-4 text-slate-900 leading-relaxed text-xs">
                        <div className="flex items-center gap-1.5 text-red-800 font-black mb-1">
                          <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
                          ממצאי הבדיקה בשטח:
                        </div>
                        <p className="font-semibold text-slate-700">
                          {item.findingDetail}
                        </p>
                      </div>
                    </div>

                    {/* Finding Visual Evidence Illustration (Left side) */}
                    <div className="md:col-span-5 bg-slate-50/50 border border-slate-200/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
                      <FindingVisual id={item.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PDF Page Footer (Page 1) */}
          <div className="border-t-2 border-slate-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-3xs text-slate-400 font-bold gap-4">
            <span>© 2026 אריקס ביקורת מבנים. כל הזכויות שמורות למשרד מהנדסים אריקס.</span>
            <span>עמוד 1 מתוך 1 – חוות דעת הנדסית לדוגמא</span>
          </div>

        </div>
      </div>

      {/* Floating Action Button for Hot-Line Call (Only mobile) */}
      <div className="fixed bottom-6 left-6 z-40 lg:hidden no-print">
        <a
          href="tel:054-7515142"
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all border border-blue-500/20"
        >
          <PhoneCall className="w-6 h-6 animate-pulse" />
        </a>
      </div>

    </main>
  );
}
