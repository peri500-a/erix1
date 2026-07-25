'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, FileCheck, Award, HelpCircle } from 'lucide-react';

const TrustAndProfessionalism: React.FC = () => {
  const credentials = [
    {
      id: 'licensed-engineer',
      title: 'מהנדס רשוי ומורשה',
      badge: 'מ.ר 78687 בפנקס המהנדסים',
      description: 'בדיקה הנדסית יסודית המבוצעת באופן אישי ע״י אינג׳ יוסי פרי – מהנדס בניין רשוי (B.Sc בהנדסה אזרחית) עם מעל 30 שנות ניסיון מעשי בענף הבנייה, הפיקוח והביקורת.',
      highlight: 'בדיקה ישירה ע״י מהנדס רשוי בכיר, ללא קבלני משנה או הנדסאים חסרי סמכות קונסטרוקטיבית.',
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'legal-expert',
      title: 'חוות דעת קבילה בבית משפט',
      badge: 'תקנות סדר דין 2018',
      description: 'הדוחות והביקורות ההנדסיות שלנו מנוסחים וחתומים כחוות דעת מומחה משפטית רשמית. הדוח מהווה כלי הרתעה רב-עוצמה מול קבלנים ויזמים, ומשמש כראיה מכרעת בבתי משפט.',
      highlight: 'ניסיון עשיר במתן עדות מומחה בבתי משפט והגנה על ממצאי הדוח מול חוות דעת נגדיות.',
      icon: <Scale className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'standards-compliant',
      title: 'ביקורת לפי התקנים הרשמיים',
      badge: 'תאימות לחוק המכר ותקנות התכנון והבנייה',
      description: 'איתור ליקויים קפדני המגובה במיכשור טכנולוגי מתקדם (פרוטימטר לרטיבות, מדי לייזר, מד זווית דיגיטלי) ובהסתמך ישיר על חוק המכר (דירות), תקנות התכנון והבנייה ותקני המכון הישראלי לתקינה (ת״י).',
      highlight: 'תקן ת״י 4422 (ממ״דים), ת״י 1142 (מעקות), ת״י 1205 (אינסטלציה) ות״י 1555 (חיפויים).',
      icon: <FileCheck className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="trust-credentials" className="py-6 md:py-12 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" dir="rtl">
        {/* Header section deleted per user request */}

        {/* 3 Core Trust Badges / Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {credentials.map((cred, idx) => (
            <motion.div
              key={cred.id}
              id={`trust-card-${cred.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-50/50 rounded-3xl border border-slate-100 p-8 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between group h-full relative"
            >
              {/* Card Top */}
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm border border-blue-100/50">
                    {cred.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1.5 rounded-full border border-slate-100/80 shadow-sm">
                    {cred.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {cred.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {cred.description}
                </p>
              </div>

              {/* Card Bottom / Real-world Value-add Highlight */}
              <div className="mt-auto pt-6 border-t border-slate-100/80 bg-slate-50/20 group-hover:bg-blue-50/20 p-4 rounded-2xl transition-all duration-500">
                <span className="text-[11px] font-black uppercase text-blue-600 tracking-wider block mb-1">
                  ערך הנדסי ומשפטי:
                </span>
                <p className="text-slate-700 text-xs font-bold leading-relaxed">
                  {cred.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAndProfessionalism;
