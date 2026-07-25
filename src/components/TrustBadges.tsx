'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, GraduationCap } from 'lucide-react';

const badges = [
  {
    name: 'לשכת המהנדסים',
    description: 'חבר בלשכת המהנדסים והאדריכלים בישראל',
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    name: 'מומחה קביל משפטית',
    description: 'הדוחות שלנו קבילים בבתי המשפט בישראל כעדות מומחה',
    icon: <Award className="w-8 h-8" />
  },
  {
    name: 'תקן ISO 9001',
    description: 'עמידה בסטנדרטים בינלאומיים של בקרת איכות',
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    name: 'ביטוח אחריות מקצועית',
    description: 'כיסוי מלא לכל הבדיקות המבוצעות ע"י המשרד',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

const TrustBadges: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 transition-all duration-500 hover:scale-105"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100 shadow-md transition-colors">
                {badge.icon}
              </div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">{badge.name}</h4>
              <p className="text-[11px] text-slate-500 max-w-xs">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
