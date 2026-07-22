'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CertificationBadge {
  id: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badgeText: string;
}

const TrustCertificationsStrip: React.FC = () => {
  const certifications: CertificationBadge[] = [
    {
      id: 'certified-engineer',
      title: 'מהנדס רשוי ומורשה',
      englishTitle: 'Certified Engineer',
      subtitle: 'אינג\' יוסי פרי – מ.ר 78687',
      description: 'מהנדס בניין רשוי ורשום בפנקס המהנדסים והאדריכלים בישראל, עם מעל 30 שנות ניסיון מעשי בהנדסה אזרחית ופיקוח.',
      badgeText: 'פנקס המהנדסים',
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'association-member',
      title: 'חבר איגוד המהנדסים',
      englishTitle: 'Israel Building Association Member',
      subtitle: 'איגוד המהנדסים לבנייה ותשתיות בישראל',
      description: 'חברות פעילה באיגוד המקצועי המוביל בארץ, המבטיחה עמידה קפדנית בקודי האתיקה והסטנדרטים ההנדסיים הגבוהים ביותר.',
      badgeText: 'חבר איגוד רשמי',
      icon: <Building2 className="w-8 h-8 text-blue-600" />
    },
    {
      id: 'authorized-inspector',
      title: 'מבקר מבנים מוסמך',
      englishTitle: 'Authorized Inspector',
      subtitle: 'חוות דעת קבילה בבתי המשפט',
      description: 'הסמכה מקצועית לביצוע ביקורות מבנים מקיפות, איתור ליקויי בנייה קונסטרוקטיביים והפקת דוחות הנדסיים מוסמכים.',
      badgeText: 'חוות דעת קבילה',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="trust-certifications-strip" className="relative py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      {/* Background architectural grid pattern for a high-tech engineering feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" dir="rtl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block mb-3">
            הסמכות, תעודות וסטנדרטים
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            גב הנדסי חזק ומקצועיות ללא פשרות
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
            כשתתקשרו איתנו, אתם מקבלים ביקורת הנדסית רשמית המגובה בתעודות והסמכות מהגופים המובילים בישראל
          </p>
        </div>

        {/* 3 Columns for Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={`cert-badge-card-${cert.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Icon and Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100/50 shadow-inner">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{cert.badgeText}</span>
                  </div>
                </div>

                {/* Hebrew Title */}
                <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                {/* English Title & Subtitle */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider mb-1">
                    {cert.englishTitle}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md inline-block">
                    {cert.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50/50 px-2.5 py-1 rounded-md">
                  סטנדרט אריקס הנדסה
                </span>
                <span className="text-[10px] text-slate-400">
                  נבדק ואושר
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCertificationsStrip;
