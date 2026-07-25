'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck, AlertTriangle, Info, ArrowLeft, Landmark, DollarSign, Scale, Hammer, Percent } from 'lucide-react';

interface ComparisonRow {
  id: string;
  parameter: string;
  icon: React.ComponentType<{ className?: string }>;
  withViolations: {
    text: string;
    status: 'risk' | 'warning' | 'info';
    details: string;
  };
  compliant: {
    text: string;
    status: 'safe' | 'info';
    details: string;
  };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    id: 'mortgage',
    parameter: 'אישור משכנתא מהבנק',
    icon: Landmark,
    withViolations: {
      text: 'סירוב מוחלט או הפחתה משמעותית בסכום המשכנתא עקב הערכת שמאי מופחתת.',
      status: 'risk',
      details: 'שמאי הבנק מזהה את החריגות ומפחית את שווי הנכס בהתאם, ובמקרים רבים הבנק יסרב לתת הלוואה עד להסדרת החריגה או הריסתה.'
    },
    compliant: {
      text: 'קבלת משכנתא רגילה בהתאם לשווי השוק המלא של הנכס וללא קשיים.',
      status: 'safe',
      details: 'הערכת השמאי מתקבלת במלואה, והבנק מאשר את תנאי המימון הרגילים ללא התניות מיוחדות.'
    }
  },
  {
    id: 'demolition',
    parameter: 'צווי הריסה ואישומים פליליים',
    icon: Hammer,
    withViolations: {
      text: 'חשיפה לצו הריסה מנהלי או שיפוטי, כתבי אישום פליליים אישיים וקנסות יומיים.',
      status: 'risk',
      details: 'אחריות פלילית מועברת אליכם כרוכשים (חוק התכנון והבנייה סעיף 243). הרשות המקומית יכולה לתבוע את הריסת החלק הלא חוקי.'
    },
    compliant: {
      text: 'חסינות מלאה מפני הליכי אכיפה תכנוניים ועירוניים.',
      status: 'safe',
      details: 'כל חלקי המבנה בנויים לפי היתר מאושר, אין סכנה של תביעות, קנסות או הליכים משפטיים מצד הוועדה המקומית.'
    }
  },
  {
    id: 'value',
    parameter: 'ערך הנכס ויכולת מכירה חוזרת',
    icon: DollarSign,
    withViolations: {
      text: 'ירידת ערך קשה (30%-15%), קושי אדיר במציאת קונה בעתיד והפסד כספי משמעותי.',
      status: 'warning',
      details: 'קונים פוטנציאליים ידרשו הנחה דרסטית או יימנעו מרכישה עקב הסיכונים ואי-היכולת לקבל משכנתא על הנכס.'
    },
    compliant: {
      text: 'שמירה על ערך הנכס, נזילות גבוהה ומכירה מהירה במחיר השוק המלא.',
      status: 'safe',
      details: 'נכס נקי מחריגות מהווה מוצר מבוקש בשוק המקרקעין שקל להעריך ולמכור ללא כל התמקחות על נושאי רישוי.'
    }
  },
  {
    id: 'registration',
    parameter: 'רישום בטאבו והעברת בעלות',
    icon: Scale,
    withViolations: {
      text: 'עיכוב או חסימה מוחלטת של רישום הבעלות עקב היעדר "אישור עירייה לטאבו" (סעיף 324).',
      status: 'risk',
      details: 'ללא הסדרת החריגה, הרשות המקומית תסרב להנפיק אישור על היעדר חובות והתאמה להיתר, והעסקה לא תוכל להסתיים ברישום.'
    },
    compliant: {
      text: 'רישום מהיר וחלק בטאבו מיד עם סיום העסקה.',
      status: 'safe',
      details: 'הרשות המקומית מנפיקה אישור לטאבו ללא קושי, ומשרד עורכי הדין משלים את העברת הזכויות כסדרה.'
    }
  },
  {
    id: 'regularization',
    parameter: 'עלויות הסדרה ("הלבנה")',
    icon: Percent,
    withViolations: {
      text: 'עלויות של עשרות עד מאות אלפי שקלים עבור אדריכלים, מהנדסים, היטלי השבחה ואגרות.',
      status: 'warning',
      details: 'תהליך "לגליזציה" הוא ארוך ומתיש (בין שנה ל-3 שנים), דורש תשלום היטלי השבחה כבדים, ואינו מבטיח קבלת אישור בסופו.'
    },
    compliant: {
      text: 'אפס עלויות הסדרה, אגרות או היטלים תכנוניים.',
      status: 'safe',
      details: 'אין צורך בשום הליך אדריכלי או הנדסי. הנכס חוקי לחלוטין מתחילתו ואינו דורש הוצאות בלתי צפויות.'
    }
  },
  {
    id: 'safety',
    parameter: 'בטיחות הנדסית וכיסוי ביטוחי',
    icon: ShieldCheck,
    withViolations: {
      text: 'סיכון ליציבות המבנה, חוסר פיקוח הנדסי וביטול פוליסת ביטוח המבנה במקרה של אסון.',
      status: 'risk',
      details: 'תוספות בנייה לא חוקיות (כמו פרגולות כבדות, סגירות מרפסת או חפירות) לרוב נבנות ללא פיקוח מהנדס, חברות הביטוח יתנערו מאחריות.'
    },
    compliant: {
      text: 'אישור הנדסי מוסמך, שקט נפשי וכיסוי ביטוחי מלא.',
      status: 'safe',
      details: 'המבנה נבנה תחת בקרת איכות ותואם את דרישות הבטיחות המחמירות. חברות הביטוח מבטחות את המבנה בכיסוי מלא.'
    }
  }
];

export default function ViolationsComparisonTable() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white text-right" id="violations-comparison" dir="rtl">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-red-50 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full border border-red-200 mb-4">
            היבטים משפטיים וכלכליים ברכישת דירה
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            השוואת סיכונים: נכס עם חריגות מול נכס תקין
          </h2>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            חריגת בנייה היא לא רק ״חתיכת פלסטיק״ או ״סגירה תמימה של מרפסת״. זוהי עבירה פלילית הגוררת השלכות כלכליות ומשפטיות מרחיקות לכת. ראו את ההבדל:
          </p>
        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-sm">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-base">
                <th className="py-6 px-6 font-black w-1/4">פרמטר הבדיקה</th>
                <th className="py-6 px-6 font-black w-3/8 bg-red-950/20 text-red-400 border-r border-slate-800">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                    <span>נכס עם חריגות בנייה (סיכון גבוה)</span>
                  </div>
                </th>
                <th className="py-6 px-6 font-black w-3/8 bg-emerald-950/20 text-emerald-400 border-r border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span>נכס תקין וחוקי (שקט נפשי)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {COMPARISON_DATA.map((row) => {
                const Icon = row.icon;
                const isSelected = selectedRow === row.id;
                
                return (
                  <React.Fragment key={row.id}>
                    <tr 
                      className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                        isSelected ? 'bg-blue-50/20' : ''
                      }`}
                      onClick={() => setSelectedRow(isSelected ? null : row.id)}
                      id={`row-${row.id}`}
                    >
                      {/* Parameter Label */}
                      <td className="py-5 px-6 font-bold text-slate-900">
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-slate-100 text-slate-600">
                            <Icon className="w-5 h-5" />
                          </span>
                          <span>{row.parameter}</span>
                        </div>
                      </td>

                      {/* With Violations (Risk) */}
                      <td className="py-5 px-6 text-slate-700 border-r border-slate-100 bg-red-50/10">
                        <div className="flex items-start gap-2.5">
                          <X className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold block text-red-900 mb-1">
                              {row.withViolations.status === 'risk' ? 'סכנה ממשית:' : 'אזהרה פיננסית:'}
                            </span>
                            <p className="leading-relaxed">{row.withViolations.text}</p>
                          </div>
                        </div>
                      </td>

                      {/* Compliant (Safe) */}
                      <td className="py-5 px-6 text-slate-700 border-r border-slate-100 bg-emerald-50/10">
                        <div className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold block text-emerald-900 mb-1">תקין וחוקי:</span>
                            <p className="leading-relaxed">{row.compliant.text}</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Explanatory Dropdown Sub-row */}
                    {isSelected && (
                      <tr className="bg-slate-50/50">
                        <td colSpan={3} className="py-4 px-8 border-t border-slate-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                            <div className="bg-red-50/30 p-4 rounded-2xl border border-red-100/50">
                              <span className="font-black text-red-900 block mb-1">הרחבה הנדסית ומשפטית של הסיכון:</span>
                              <p className="text-slate-600 leading-relaxed">{row.withViolations.details}</p>
                            </div>
                            <div className="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100/50">
                              <span className="font-black text-emerald-900 block mb-1">מדוע זה מעניק לכם שקט בבדיקה:</span>
                              <p className="text-slate-600 leading-relaxed">{row.compliant.details}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          <div className="bg-slate-50 text-slate-500 py-3 px-6 text-xs text-center border-t border-slate-100 font-medium">
            💡 לחצו על כל שורה בטבלה לקבלת הסבר מפורט והנחיות משפטיות של המהנדס.
          </div>
        </div>

        {/* Mobile View Accordion List */}
        <div className="block md:hidden space-y-4">
          {COMPARISON_DATA.map((row) => {
            const Icon = row.icon;
            const isSelected = selectedRow === row.id;
            
            return (
              <div 
                key={row.id} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                id={`mobile-row-${row.id}`}
              >
                {/* Header */}
                <button
                  onClick={() => setSelectedRow(isSelected ? null : row.id)}
                  className="w-full py-4 px-5 flex items-center justify-between text-right font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-slate-100 text-slate-600">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span>{row.parameter}</span>
                  </div>
                  <ArrowLeft className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isSelected ? '-rotate-90 text-blue-600' : ''
                  }`} />
                </button>

                {/* Content */}
                {isSelected && (
                  <div className="p-5 border-t border-slate-100 space-y-4 bg-slate-50/40 text-sm">
                    {/* With Violations Card */}
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                      <div className="flex items-center gap-2 mb-2 text-red-900 font-bold">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>בנכס עם חריגות:</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-3">{row.withViolations.text}</p>
                      <div className="text-xs text-slate-500 bg-white/50 p-2.5 rounded-lg border border-red-100/60 leading-relaxed">
                        <strong>פירוט הסיכון:</strong> {row.withViolations.details}
                      </div>
                    </div>

                    {/* Compliant Card */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                      <div className="flex items-center gap-2 mb-2 text-emerald-900 font-bold">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>בנכס תקין וחוקי:</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-3">{row.compliant.text}</p>
                      <div className="text-xs text-slate-500 bg-white/50 p-2.5 rounded-lg border border-emerald-100/60 leading-relaxed">
                        <strong>ההסבר ההנדסי:</strong> {row.compliant.details}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informative Tip Box */}
        <div className="mt-12 bg-slate-900 text-white p-8 rounded-[2rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_45%)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-right">
              <h3 className="text-xl sm:text-2xl font-black mb-3 text-white">כיצד אריקס ביקורת מבנים מגנים עליכם מחריגות בנייה?</h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                לפני כל רכישת דירת יד שנייה או בית פרטי, המהנדס יוסי רוכש באופן פעיל את תיק הבניין המלא מהעירייה, ומבצע השוואה פיזית קפדנית בין התשריט וההיתרים המקוריים לבין המבנה הקיים בשטח, קיר אחר קיר.
              </p>
            </div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/15 transition-all shrink-0 text-sm sm:text-base cursor-pointer"
            >
              הזמנת בדיקת היתרים מקיפה
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
