'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckSquare, 
  Square, 
  Printer, 
  FileText, 
  ShieldCheck, 
  Droplet, 
  Flame, 
  Grid, 
  Cpu, 
  Home, 
  Settings, 
  Search, 
  Info, 
  Check, 
  RotateCcw,
  ClipboardList,
  AlertTriangle,
  User,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  desc: string;
  standard: string;
  instrument?: string;
  category: string;
  priority: 'critical' | 'mandatory' | 'safety' | 'standard';
  legalRef?: string;
}

const CATEGORIES = [
  { id: 'all', label: 'כל הסעיפים', icon: ClipboardList },
  { id: 'structural', label: 'שלד וקונסטרוקציה', icon: Home, color: 'text-amber-600 bg-amber-50' },
  { id: 'waterproofing', label: 'איטום ורטיבות', icon: Droplet, color: 'text-blue-600 bg-blue-50' },
  { id: 'plumbing', label: 'אינסטלציה וניקוז', icon: Settings, color: 'text-teal-600 bg-teal-50' },
  { id: 'flooring', label: 'ריצוף וחיפויי קירות', icon: Grid, color: 'text-emerald-600 bg-emerald-50' },
  { id: 'aluminium', label: 'חלונות, דלתות ואלומיניום', icon: FileText, color: 'text-sky-600 bg-sky-50' },
  { id: 'electrical', label: 'חשמל, בטיחות ומערכות', icon: Cpu, color: 'text-rose-600 bg-rose-50' },
];

const CHECKLIST_DATA: ChecklistItem[] = [
  // שלד וקונסטרוקציה
  {
    id: 'str-1',
    category: 'structural',
    title: 'סדקים קונסטרוקטיביים',
    desc: 'בדיקת סדקים בעלי אופי הנדסי/מבני בעמודים, תקרות, קורות קשר או קירות נושאים.',
    standard: 'תקן ישראלי ת"י 413, ת"י 940',
    priority: 'critical',
    instrument: 'סרגל סדקים אופטי, סקלרומטר לבדיקת חוזק בטון',
    legalRef: 'תקנות התכנון והבנייה (יציבות המבנה)'
  },
  {
    id: 'str-2',
    category: 'structural',
    title: 'אנכיות ויישור קירות',
    desc: 'בדיקת סטיות של קירות פנים וחוץ מאנכיות מלאה וממישוריות.',
    standard: 'תקן ישראלי ת"י 789 / ת"י 1923',
    priority: 'standard',
    instrument: 'פלס לייזר דיגיטלי, סרגל אלומיניום הנדסי 2 מטר',
    legalRef: 'נספח א\' לתקן טיח וצבע'
  },
  {
    id: 'str-3',
    category: 'structural',
    title: 'מעקות וגדרות בטיחות',
    desc: 'מדידת גובה מעקה במרפסות שמש, גגות ומדרגות וכן עמידותו בעומס צד.',
    standard: 'תקן ישראלי ת"י 1142 (מעקות ומסעדים)',
    priority: 'safety',
    instrument: 'מד גובה דיגיטלי, מד כוח מתיחה הנדסי',
    legalRef: 'חוק המכר (דירות) - מניעת סכנת נפילה'
  },
  {
    id: 'str-4',
    category: 'structural',
    title: 'מדרגות ומהלכי מדרגות',
    desc: 'בדיקת אחידות גבהי רום ושלח במדרגות ומניעת סטיות מסוכנות.',
    standard: 'תקנות התכנון והבנייה (חלק ג\')',
    priority: 'safety',
    legalRef: 'סעיף 3.2 לתקנון הבנייה'
  },
  {
    id: 'str-5',
    category: 'structural',
    title: 'חיזוקים ויציבות אלמנטים בנויים',
    desc: 'וידוא חיבור תקני של מחיצות גבס, אלמנטים דקורטיביים וסגירות חוץ.',
    standard: 'תקן ישראלי ת"י 1490 (מחיצות גבס)',
    priority: 'mandatory',
    legalRef: 'הנחיות קונסטרוקטור מוסמך'
  },

  // איטום ורטיבות
  {
    id: 'wat-1',
    category: 'waterproofing',
    title: 'רטיבות קפילארית ונזילות סמויות',
    desc: 'סריקה תרמוגרפית מקיפה בכל קירות הדירה לאיתור חדירת מים או נזילות סמויות.',
    standard: 'תקן ישראלי ת"י 1555 חלק 3',
    priority: 'critical',
    instrument: 'מצלמה תרמית מקצועית FLIR, מד לחות השראתי (Protimeter)',
    legalRef: 'חוק המכר (איטום ומניעת חדירת רטיבות)'
  },
  {
    id: 'wat-2',
    category: 'waterproofing',
    title: 'שיפועים במרפסות וגגות',
    desc: 'בדיקת קיום שיפועים תקינים לכיוון פתחי הניקוז למניעת עמידת מים ושלוליות.',
    standard: 'תקן ישראלי ת"י 1752, ת"י 1476',
    priority: 'mandatory',
    instrument: 'מד שיפוע דיגיטלי רב-ערוצי, בדיקת הצפת מים',
    legalRef: 'תקנות התכנון והבנייה (ניקוז שטחים פתוחים)'
  },
  {
    id: 'wat-3',
    category: 'waterproofing',
    title: 'רטיבות תת-רצפתית',
    desc: 'בדיקת רמת הלחות הכלואה במצע החול או הסומסום מתחת לאריחים.',
    standard: 'תקן ישראלי ת"י 1629 (תכולת רטיבות מותרת)',
    priority: 'critical',
    instrument: 'בדיקת מעבדה מוסמכת (מקסימום 6% לחול או 3% לסומסום)',
    legalRef: 'חוק המכר - הגנת קילוף ואסתטיקה'
  },
  {
    id: 'wat-4',
    category: 'waterproofing',
    title: 'איטום סביב חלונות ומשקופים',
    desc: 'איטום חיצוני ופנימי של מפתחי אלומיניום, משקופים עיוורים ומעברי תשתיות.',
    standard: 'תקן ישראלי ת"י 1340',
    priority: 'mandatory',
    instrument: 'בדיקת המטרה הנדסית',
    legalRef: 'תקנות הבנייה (איטום קירות חיצוניים)'
  },
  {
    id: 'wat-5',
    category: 'waterproofing',
    title: 'סימני עובש ופטרת קיר',
    desc: 'איתור בעיות עיבוי תרמי (גשרי קור) היוצרים עובש או פטרת בפינות החלל.',
    standard: 'תקן ישראלי ת"י 1045 (בידוד תרמי של בניינים)',
    priority: 'standard',
    instrument: 'מד טמפרטורה ולחות יחסית, מד נקודת טל דיגיטלי',
    legalRef: 'איכות אוויר פנים ובריאות הציבור'
  },

  // אינסטלציה וניקוז
  {
    id: 'plu-1',
    category: 'plumbing',
    title: 'לחץ מים וספיקה דינמית',
    desc: 'מדידת לחץ המים וזרימתו בכל הברזים בדירה בו-זמנית.',
    standard: 'תקן ישראלי ת"י 1205 (התקנת מתקני תברואה)',
    priority: 'mandatory',
    instrument: 'מד לחץ מים הנדסי (מנומטר דיגיטלי)',
    legalRef: 'הוראות למתקני תברואה (הל"ת)'
  },
  {
    id: 'plu-2',
    category: 'plumbing',
    title: 'מחסומי ריח וקופסאות ביקורת',
    desc: 'בדיקת קיומם ותקינותם של סיפונים ומחסומי ריח תחת כיורים, מקלחונים ונקודות ניקוז.',
    standard: 'תקן ישראלי ת"י 1205 חלק 2',
    priority: 'standard',
    legalRef: 'הל"ת - מניעת ריחות רעים וחדירת מזיקים'
  },
  {
    id: 'plu-3',
    category: 'plumbing',
    title: 'קצב ניקוז ומניעת הצפות',
    desc: 'ביצוע בדיקת הצפה מבוקרת לכל הכלים הסניטריים ובדיקת קצב ניקוז המים לביוב.',
    standard: 'תקן ישראלי ת"י 1205 חלק 4',
    priority: 'mandatory',
    legalRef: 'מניעת הצפות משנה ותקינות אביזרים'
  },
  {
    id: 'plu-4',
    category: 'plumbing',
    title: 'חיבורי צנרת וקולטנים גלויים',
    desc: 'חיפוש סימני קורוזיה, כשלים בחיבורים ואטימות צנרת שופכין גלויה וקולטני מי גשם.',
    standard: 'תקן ישראלי ת"י 1205.8',
    priority: 'mandatory',
    instrument: 'פנס הנדסי עוצמתי, סיב אופטי אנדוסקופי',
    legalRef: 'תקינות קולטני מרזבים ומי גשמים'
  },

  // ריצוף וחיפוי
  {
    id: 'flo-1',
    category: 'flooring',
    title: 'אריחים חלולים ורווחים',
    desc: 'בדיקה לאיתור חוסר מילוי טיט/דבק מתחת לאריחי ריצוף וחיפוי (רעש חלול).',
    standard: 'תקן ישראלי ת"י 1555 חלק 2 (ריצוף)',
    priority: 'mandatory',
    instrument: 'פטיש הקשה הנדסי ייעודי לביקורת מבנים',
    legalRef: 'מפרט כללי לעבודות בנייה - פרק ריצוף'
  },
  {
    id: 'flo-2',
    category: 'flooring',
    title: 'מדרגות ופגמי גובה בריצוף ("שן")',
    desc: 'איתור הבדלי גובה ומכשולים בין אריחים צמודים המסכנים את ההליכה.',
    standard: 'תקן ישראלי ת"י 1555.2 סעיף 4.1',
    priority: 'mandatory',
    instrument: 'מד מדרגה אלקטרוני, סרגל מרווחים קליפר דיגיטלי',
    legalRef: 'בטיחות משתמשים ומניעת נפילות'
  },
  {
    id: 'flo-3',
    category: 'flooring',
    title: 'מילוי ואחידות הרובה',
    desc: 'בדיקת קיום מילוי מלא, ישר ואחיד במישורי הרובה בין האריחים למניעת חדירת מים.',
    standard: 'תקן ישראלי ת"י 1661',
    priority: 'standard',
    legalRef: 'מניעת חדירת מים דרך המישקים'
  },
  {
    id: 'flo-4',
    category: 'flooring',
    title: 'עמידות בהחלקה (אזורים רטובים)',
    desc: 'סיווג רמת החיכוך והתאמתה לאריחים במקלחות, מרפסות חוץ ומדרגות.',
    standard: 'תקן ישראלי ת"י 2279 (עמידות בהחלקה)',
    priority: 'safety',
    instrument: 'בדיקת דירוג R-Rating של האריח',
    legalRef: 'תקנון הבנייה הציבורי והפרטי למניעת החלקה'
  },

  // אלומיניום ומסגרות
  {
    id: 'alu-1',
    category: 'aluminium',
    title: 'חורי ניקוז במסילות חלונות',
    desc: 'וידוא קיומם וניקיונם של חורי ניקוז ומים במסילות חלונות האלומיניום למניעת הצפה בבית.',
    standard: 'תקן ישראלי ת"י 1068 (חלונות)',
    priority: 'mandatory',
    legalRef: 'מניעת חדירת מי גשמים לחלל הפנימי'
  },
  {
    id: 'alu-2',
    category: 'aluminium',
    title: 'זכוכית בטיחות תקנית',
    desc: 'בדיקת סימון רשמי וסוג הזכוכית בחלונות נמוכים, ויטרינות ומעקות (חובה זכוכית בטיחות).',
    standard: 'תקן ישראלי ת"י 1099 (זכוכית בבניינים)',
    priority: 'safety',
    instrument: 'בודק זכוכית מוסמך, פנס זיהוי לייזר',
    legalRef: 'חוק התכנון והבנייה - מניעת פגיעות גוף'
  },
  {
    id: 'alu-3',
    category: 'aluminium',
    title: 'מנגנוני נעילה ואטימות מברשות',
    desc: 'בדיקת קלות תנועה של חלונות, דלתות הזזה, תקינות ידיות וקיום גומיות אטימה.',
    standard: 'תקן ישראלי ת"י 1068 חלק 2',
    priority: 'standard',
    legalRef: 'בידוד אקוסטי ומניעת חדירת אוויר ומים'
  },
  {
    id: 'alu-4',
    category: 'aluminium',
    title: 'תקינות ונעילת חלונות ודלתות ממ"ד',
    desc: 'בדיקה מקיפה של אטימות דלת הממ"ד להדף וגזים, תקינות נעילת המנוף, וחלון הפלדה החיצוני.',
    standard: 'תקן ישראלי ת"י 4422, הנחיות פיקוד העורף',
    priority: 'critical',
    instrument: 'מד לחץ אטימות, בדיקת מרווחים הנדסית',
    legalRef: 'תקנות ההתגוננות האזרחית'
  },

  // חשמל ובטיחות
  {
    id: 'ele-1',
    category: 'electrical',
    title: 'תקינות ממסר פחת ומגן התחשמלות',
    desc: 'בדיקה פונקציונלית של ממסר הפחת בלוח החשמל הדירתי וזמן התגובה שלו.',
    standard: 'חוק החשמל ותקנותיו',
    priority: 'critical',
    instrument: 'מד זמן תגובה וזרם הפעלה לפחת (RCD Tester)',
    legalRef: 'תקנות החשמל (הארקות ואמצעי הגנה)'
  },
  {
    id: 'ele-2',
    category: 'electrical',
    title: 'בדיקת הארקה דירתית',
    desc: 'מדידת טיב ולולאת תקלה של מערכת ההארקה הראשית של הנכס.',
    standard: 'תקנות החשמל ת"י 228',
    priority: 'critical',
    instrument: 'מד התנגדות לולאת תקלה (Loop Impedance Tester)',
    legalRef: 'חוק החשמל - הגנה מפני מגע עקיף'
  },
  {
    id: 'ele-3',
    category: 'electrical',
    title: 'מרחקי בטיחות של שקעי חשמל מברזים',
    desc: 'וידוא קיום מרחק של 60 ס"מ לפחות בין שקע חשמל או נקודת כוח לבין ברזי מים.',
    standard: 'תקנות החשמל (התקנות במקלטים ובחדרי רחצה)',
    priority: 'safety',
    instrument: 'מד מרחק לייזר הנדסי',
    legalRef: 'מניעת סכנת התחשמלות באזורים רטובים'
  },
  {
    id: 'ele-4',
    category: 'electrical',
    title: 'תקינות חיווט וקוטביות שקעים',
    desc: 'בדיקת חיבור תקין של מוליכי פאזה, אפס והארקה בכל השקעים בדירה.',
    standard: 'תקנות החשמל (חיווט ומוליכים)',
    priority: 'mandatory',
    instrument: 'בודק שקעים דיגיטלי (Socket Tester)',
    legalRef: 'מניעת קצרים ושריפות בנכס'
  },
];

export default function InspectionChecklist() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [propertyPreset, setPropertyPreset] = useState<string>('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Filter items based on category, search and property type preset
  const filteredItems = CHECKLIST_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.standard.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Virtual preset priorities
    if (propertyPreset === 'new' && item.id === 'wat-3') {
      // For new apartments, concrete humidity check is critical
      return matchesCategory && matchesSearch;
    }
    
    return matchesCategory && matchesSearch;
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectAll = () => {
    const nextState: Record<string, boolean> = {};
    filteredItems.forEach(item => {
      nextState[item.id] = true;
    });
    setCheckedItems(prev => ({ ...prev, ...nextState }));
  };

  const handleReset = () => {
    setCheckedItems({});
  };

  const totalItemsCount = CHECKLIST_DATA.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItemsCount) * 100);

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-red-200">קריטי</span>;
      case 'safety':
        return <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-rose-200">בטיחות</span>;
      case 'mandatory':
        return <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-blue-200">חובה בתקן</span>;
      default:
        return <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-slate-200">סטנדרט</span>;
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-right font-sans" dir="rtl" id="checklist-root">
      
      {/* Printable Area Overlays / Styles */}
      <style jsx global>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            font-size: 12px !important;
          }
          #checklist-root {
            background-color: #ffffff !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .print-card {
            border: 1px solid #e2e8f0 !important;
            box-shadow: none !important;
            break-inside: avoid;
            margin-bottom: 12px !important;
            padding: 12px !important;
            background: #ffffff !important;
          }
          .print-header {
            border-bottom: 2px solid #0f172a !important;
            padding-bottom: 12px !important;
            margin-bottom: 24px !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}</style>

      {/* Official Print Header Cover */}
      <div className="print-only container mx-auto px-8 py-6">
        <div className="print-header flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900 leading-none">אריקס ביקורת מבנים</h1>
            <p className="text-sm font-bold text-slate-600 mt-1">משרד מומחים לביקורת מבנים ובדק בית</p>
            <p className="text-xs text-slate-500">טלפון: 054-7515142 | דוא״ל: yossi10@duck.com</p>
          </div>
          <div className="text-left">
            <div className="border border-slate-900 p-2 text-xs font-mono rounded">
              <p className="font-bold">מספר מסמך: ARX-CHK-2026</p>
              <p>תאריך הפקה: {new Date().toLocaleDateString('he-IL')}</p>
              <p>מהנדס מאשר: אינג׳ יוסי</p>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 border border-slate-200 bg-slate-50 rounded-xl">
          <h2 className="text-xl font-bold text-slate-900 mb-3">פרטי הנכס והבדיקה</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>שם המזמין:</strong> _________________________</p>
              <p className="mt-2"><strong>כתובת הנכס:</strong> _________________________</p>
            </div>
            <div>
              <p><strong>סוג הנכס:</strong> דירה חדשה מקבלן / דירת יד 2 / בית פרטי</p>
              <p className="mt-2"><strong>חתימת המהנדס וחותמת:</strong> ___________________</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">רשימת בדיקה הנדסית (פרוטוקול בדק בית מקיף)</h3>
      </div>

      {/* Hero Section - Online Only */}
      <div className="no-print bg-slate-900 text-white relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_45%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-blue-500/20">
              <ShieldCheck className="w-4 h-4" />
              מפרט הנדסי רשמי קביל בית משפט
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-white">
              רשימת תיוג הנדסית <br />
              <span className="text-blue-500">מה אנחנו בודקים בנכס?</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              רשימה מפורטת ומקצועית של סעיפי הבדיקה שמהנדס חברת אריקס ביקורת מבנים מבצע במהלך בדק הבית. תוכלו לסמן את הסעיפים, לעקוב אחר ההתקדמות ולהדפיס את המפרט כקובץ PDF רשמי עבורכם.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handlePrint}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/15 transition-all cursor-pointer"
              >
                <Printer className="w-5 h-5" />
                הורדה כקובץ PDF / הדפסת מסמך
              </button>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-6 py-4 rounded-xl transition-all border border-slate-700"
              >
                הזמנת בדיקת מהנדס בנכס
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        
        {/* Statistics & Quick Actions - Online Only */}
        <div className="no-print grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Progress Tracker Card */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <ClipboardList className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">מד התקדמות הבדיקה המקוונת</h2>
                <p className="text-sm text-slate-500">
                  סמנו סעיפים כדי להבין את עומק הבדיקה ההנדסית של אריקס ביקורת מבנים.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-64 shrink-0">
              <div className="flex items-center justify-between text-sm font-bold text-slate-700 mb-2">
                <span>{progressPercent}% הושלמו</span>
                <span>{checkedCount} מתוך {totalItemsCount} סעיפים</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-blue-600 h-full rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-center gap-4">
            <div className="text-sm font-bold text-slate-500">פעולות מהירות ברשימה</div>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleSelectAll}
                className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3 px-4 rounded-xl border border-slate-200 text-sm transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                סמן הכל
              </button>
              <button 
                onClick={handleReset}
                className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3 px-4 rounded-xl border border-slate-200 text-sm transition-all"
              >
                <RotateCcw className="w-4 h-4 text-rose-500" />
                איפוס רשימה
              </button>
            </div>
          </div>

        </div>

        {/* Filters and List Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation - Online Only */}
          <div className="no-print lg:col-span-3 space-y-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 px-3 mb-3">קטגוריות הבדיקה</h3>
              <nav className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-right font-bold transition-all text-sm group ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`p-1.5 rounded-lg shrink-0 ${
                          isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        <span>{cat.label}</span>
                      </div>
                      {cat.id !== 'all' && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {CHECKLIST_DATA.filter(item => item.category === cat.id).length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Property Preset Tips */}
            <div className="bg-slate-900 text-slate-200 border border-slate-800 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                <Info className="w-5 h-5 shrink-0" />
                <h4 className="text-sm">התאמת הבדיקה לסוג הנכס</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                כל נכס דורש דגשים שונים. בחרו preset להתאמה מהירה:
              </p>
              <div className="space-y-2">
                <button 
                  onClick={() => setPropertyPreset('all')}
                  className={`w-full text-right text-xs py-2 px-3 rounded-lg border font-bold transition-all ${
                    propertyPreset === 'all' 
                      ? 'bg-blue-600/25 border-blue-500 text-blue-300' 
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  בדיקה כללית מקיפה
                </button>
                <button 
                  onClick={() => setPropertyPreset('new')}
                  className={`w-full text-right text-xs py-2 px-3 rounded-lg border font-bold transition-all ${
                    propertyPreset === 'new' 
                      ? 'bg-blue-600/25 border-blue-500 text-blue-300' 
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  דגש: דירה מקבלן (פרוטוקול מסירה)
                </button>
              </div>
            </div>
          </div>

          {/* Main List Area */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Search and Filters Bar - Online Only */}
            <div className="no-print bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:max-w-md">
                <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="חיפוש מהיר של סעיף בדיקה, תקן או מכשיר..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-11 pl-4 text-right text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="text-xs text-slate-500 font-bold shrink-0">
                מציג {filteredItems.length} סעיפי בדיקה תחת קטגוריית {CATEGORIES.find(c => c.id === activeCategory)?.label}
              </div>
            </div>

            {/* Checklist Loop */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => {
                  const isChecked = !!checkedItems[item.id];
                  const isExpanded = expandedItem === item.id;
                  
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
                      className={`print-card rounded-2xl border transition-all ${
                        isChecked 
                          ? 'bg-blue-50/20 border-blue-100/70 shadow-sm' 
                          : 'bg-white border-slate-200/80 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* Flex container representing the row */}
                      <div className="p-5 flex items-start gap-4">
                        
                        {/* Interactive Checkbox Button - Online Only */}
                        <button 
                          onClick={() => toggleCheck(item.id)}
                          className="no-print mt-1 text-blue-600 hover:text-blue-500 transition-colors cursor-pointer shrink-0"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-6 h-6 text-blue-600" />
                          ) : (
                            <Square className="w-6 h-6 text-slate-300" />
                          )}
                        </button>

                        {/* Print Checkbox Block - Print Only */}
                        <div className="print-only mt-1 mr-2 border border-slate-400 rounded w-5 h-5 shrink-0 flex items-center justify-center">
                          {isChecked && <Check className="w-4 h-4 text-slate-900" />}
                        </div>

                        {/* Text and Badges */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h4 className={`text-lg font-black leading-tight ${
                              isChecked ? 'text-slate-800' : 'text-slate-900'
                            }`}>
                              {item.title}
                            </h4>
                            {getPriorityBadge(item.priority)}
                            <span className="text-xs font-mono text-slate-500 bg-slate-100 py-0.5 px-2 rounded-md">
                              {CATEGORIES.find(c => c.id === item.category)?.label}
                            </span>
                          </div>

                          <p className="text-slate-600 text-sm leading-relaxed mb-3">
                            {item.desc}
                          </p>

                          {/* Meta attributes */}
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-slate-700">תקן ישראלי / נסמך:</span>
                              <span>{item.standard}</span>
                            </div>
                            {item.instrument && (
                              <div className="flex items-center gap-1">
                                <span className="font-bold text-slate-700">כלי עבודה מהנדס:</span>
                                <span>{item.instrument}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Legal Reference Toggle Button - Online Only */}
                        {item.legalRef && (
                          <button
                            onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                            className="no-print self-center text-slate-400 hover:text-blue-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
                            title="למידע משפטי ותקנות"
                          >
                            <Info className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      {/* Expandable Legal Content - Online Only */}
                      {item.legalRef && isExpanded && (
                        <div className="no-print px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-500 leading-relaxed rounded-b-2xl">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            <div>
                              <strong className="text-slate-700">דרישות הדין והחוק:</strong> {item.legalRef}. 
                              ממצא המפר את התקן מהווה עילה לדרישת תיקון רשמית מהקבלן/המוכר בהתאם לחוק המכר (דירות), וקביל לחלוטין לצורך הגשת תביעה משפטית.
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredItems.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">לא נמצאו סעיפי בדיקה תואמים</h4>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    נסו לשנות את מילת החיפוש או לבחור קטגוריה אחרת מהתפריט הצדדי.
                  </p>
                </div>
              )}
            </div>

            {/* Final Professional Info Box */}
            <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100/70 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  דו״ח הנדסי קביל לחלוטין בבתי המשפט בישראל
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  שימוש במצלמות FLIR ומכשירי מדידה מאושרים ומכוילים
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  התחייבות למקצועיות ללא פשרות וליווי מלא מול הקבלן
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  עבודה יסודית בהתאם לתקן ישראלי 5284 לביקורת מבנים
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Official Print Footer */}
      <div className="print-only container mx-auto px-8 py-12 mt-12 border-t border-slate-300 text-center text-xs text-slate-500">
        <p className="font-bold mb-2 text-slate-700">דוח זה הופק באופן דיגיטלי מתוך מפרט הבדיקות הרשמי של אריקס ביקורת מבנים.</p>
        <p>אריקס ביקורת מבנים - מומחים לביקורת מבנים ובדק בית. כל הזכויות שמורות לשנת 2026.</p>
      </div>

    </div>
  );
}
