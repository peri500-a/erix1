'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import SchemaTags from './SchemaTags';
import CommonSections from './CommonSections';
import Modal from './Modal';
import Contact from './Contact';
import { 
  BarChart3, 
  Building2, 
  ShieldCheck, 
  AlertTriangle, 
  Droplets, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  MessageCircle, 
  TrendingUp, 
  Search,
  Zap,
  Info,
  Check,
  Award
} from 'lucide-react';

interface DefectItem {
  name: string;
  frequency: string;
  frequencyPercent: number;
  severity: string;
  severityCategory: 'cosmetic' | 'attention' | 'repair' | 'significant' | 'rare';
}

const defectData: DefectItem[] = [
  {
    name: 'התקנה לקויה של ארון לוח חשמל ראשי (עקום, לא במישור, דלתיות לא נסגרות)',
    frequency: '90%',
    frequencyPercent: 90,
    severity: 'קוסמטי-איכותי',
    severityCategory: 'cosmetic'
  },
  {
    name: 'ליקויי ריצוף וחיפוי קירות',
    frequency: '80%+',
    frequencyPercent: 82,
    severity: 'דורש תשומת לב',
    severityCategory: 'attention'
  },
  {
    name: 'מעקה ברזל - נדרש שיפור/הסרת חלודה',
    frequency: '80%',
    frequencyPercent: 80,
    severity: 'דורש תיקון',
    severityCategory: 'repair'
  },
  {
    name: 'ליקויי רובה (פוגה)',
    frequency: '70%+',
    frequencyPercent: 72,
    severity: 'דורש תשומת לב',
    severityCategory: 'attention'
  },
  {
    name: 'לוח חשמל ראשי - סגירת רווחים וסימון לא הושלמו',
    frequency: '60%',
    frequencyPercent: 60,
    severity: 'קל וזול לתיקון',
    severityCategory: 'cosmetic'
  },
  {
    name: 'כיווני פתיחה/סגירה הפוכים בתריסי גלילה',
    frequency: '50%',
    frequencyPercent: 50,
    severity: 'קל לתיקון',
    severityCategory: 'cosmetic'
  },
  {
    name: 'שיפועים לא תקניים במרפסות פתוחות',
    frequency: '40%',
    frequencyPercent: 40,
    severity: 'משמעותי',
    severityCategory: 'significant'
  },
  {
    name: 'מחסומי רצפה שלא הותקנו לפי תקן',
    frequency: '40%',
    frequencyPercent: 40,
    severity: 'משמעותי',
    severityCategory: 'significant'
  },
  {
    name: 'ליקויי צבע לא אחיד',
    frequency: '30%',
    frequencyPercent: 30,
    severity: 'ברוב המקרים נפתר בתיקוני קבלן טרם המסירה',
    severityCategory: 'cosmetic'
  },
  {
    name: 'ליקויי התקנת משקופי דלתות',
    frequency: '30%',
    frequencyPercent: 30,
    severity: 'קל ומהיר לתיקון',
    severityCategory: 'cosmetic'
  },
  {
    name: 'כיווני פתיחה/מחסום ריח לקוי באגנית מקלחון',
    frequency: '20%',
    frequencyPercent: 20,
    severity: 'דורש תשומת לב',
    severityCategory: 'attention'
  },
  {
    name: 'סיפונים לא תקניים מתחת לכיורים',
    frequency: '20%',
    frequencyPercent: 20,
    severity: 'דורש תשומת לב',
    severityCategory: 'attention'
  },
  {
    name: 'ברזים מסוג נחות',
    frequency: '10%',
    frequencyPercent: 10,
    severity: 'קל לתיקון',
    severityCategory: 'cosmetic'
  },
  {
    name: 'חוסר פס סגירה לארגז תריס באלומיניום',
    frequency: '10%',
    frequencyPercent: 10,
    severity: 'קל לתיקון',
    severityCategory: 'cosmetic'
  },
  {
    name: 'מסילת אלומיניום תחתונה ללא ניקוז פנימי תקני',
    frequency: '10%',
    frequencyPercent: 10,
    severity: 'דורש תשומת לב',
    severityCategory: 'attention'
  },
  {
    name: 'קירות עקומים וטיח גלי',
    frequency: 'פחות מ-10%',
    frequencyPercent: 8,
    severity: 'נדיר',
    severityCategory: 'rare'
  },
  {
    name: 'רטיבות בדירה',
    frequency: '2% (98% ללא רטיבות)',
    frequencyPercent: 2,
    severity: 'נדיר',
    severityCategory: 'rare'
  }
];

export default function ErixIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'significant' | 'common' | 'rare'>('all');

  const filteredDefects = defectData.filter(item => {
    if (activeFilter === 'significant') return item.severityCategory === 'significant' || item.severityCategory === 'repair';
    if (activeFilter === 'common') return item.frequencyPercent >= 50;
    if (activeFilter === 'rare') return item.frequencyPercent < 20;
    return true;
  });

  const getSeverityBadge = (category: string, severityText: string) => {
    switch (category) {
      case 'significant':
        return <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-800 border border-red-200">{severityText}</span>;
      case 'repair':
        return <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{severityText}</span>;
      case 'attention':
        return <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">{severityText}</span>;
      case 'rare':
        return <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">{severityText}</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{severityText}</span>;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans" dir="rtl">
      <SchemaTags 
        type="Article" 
        data={{
          headline: "מדד אריקס 2026: מה באמת מוצאים בבדיקת דירה חדשה מקבלן",
          description: "ניתחנו למעלה מ-600 דוחות בדק בית טרום-מסירה בדירות חדשות מקבלן. אילו ליקויים הכי נפוצים, אילו באמת חשובים, ולמה רוב הפחדים ברשתות מוגזמים. המדד המלא של אריקס ביקורת מבנים.",
          author: {
            "@type": "Person",
            "name": "אינג' יוסי פרי",
            "jobTitle": "מהנדס רשום ומורשה - אריקס ביקורת מבנים"
          },
          publisher: {
            "@type": "Organization",
            "name": "אריקס ביקורת מבנים",
            "logo": {
              "@type": "ImageObject",
              "url": "https://erix.co.il/favicon.svg"
            }
          },
          datePublished: "2026-01-15",
          dateModified: "2026-01-15"
        }}
      />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { label: 'ראשי', href: '/' },
                { label: 'מדד אריקס 2026 - נתוני ליקויי בניה' }
              ]} 
            />
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-6">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span>מחקר שטח מבוסס נתונים - 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.15] mb-6">
              מדד אריקס 2026: מה באמת מוצאים בבדיקת דירה חדשה מקבלן
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              לצורך המדד ניתחנו את ממצאי בדיקות טרום-מסירה שביצענו בלמעלה מ-600 דירות חדשות מקבלן ברחבי הארץ. המטרה: לתת לרוכשי דירות תמונה מבוססת נתונים - לא תחושת בטן ולא הפחדה - על מה שבאמת מתגלה כשמהנדס בודק דירה חדשה לפני קבלת המפתח.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-3 text-lg"
              >
                <span>קבעו ייעוץ חינם עם אינג&apos; יוסי פרי</span>
                <Phone className="w-5 h-5" />
              </button>
              <a 
                href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D,%20%D7%A7%D7%A8%D7%90%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%9E%D7%93%D7%93%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>התכתבו איתנו בוואטסאפ</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stats Counter Block */}
      <section className="-mt-10 relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 flex items-center gap-5 transform hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">600+</div>
              <div className="text-slate-600 font-medium text-sm mt-1">דירות חדשות שנבדקו ברחבי הארץ</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 flex items-center gap-5 transform hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
              <Droplets className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-600">98%</div>
              <div className="text-slate-600 font-medium text-sm mt-1">מהדירות - ללא רטיבות כלל</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 flex items-center gap-5 transform hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
              <Zap className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <div className="text-3xl font-black text-amber-600">90%</div>
              <div className="text-slate-600 font-medium text-sm mt-1">ליקוי בארון לוח חשמל ראשי</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 flex items-center gap-5 transform hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-600">80%+</div>
              <div className="text-slate-600 font-medium text-sm mt-1">ליקויי ריצוף וחיפוי קירות</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bar Chart & Table Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-2">הממצא המרכזי</div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                טבלת הליקויים המלאה ושכיחותם בשטח
              </h2>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                הכל (17 ליקויים)
              </button>
              <button 
                onClick={() => setActiveFilter('common')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFilter === 'common' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                שכיחים (50%+)
              </button>
              <button 
                onClick={() => setActiveFilter('significant')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFilter === 'significant' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                משמעותיים לתיקון
              </button>
              <button 
                onClick={() => setActiveFilter('rare')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFilter === 'rare' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                נדירים (&lt;20%)
              </button>
            </div>
          </div>

          {/* Visual Progress Bar Breakdown */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <span>התפלגות ויזואלית של שכיחות הליקויים</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {filteredDefects.map((defect, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 hover:border-blue-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs flex items-center justify-center shrink-0 font-mono">
                        {idx + 1}
                      </span>
                      {defect.name}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      {getSeverityBadge(defect.severityCategory, defect.severity)}
                      <span className="font-black text-slate-900 text-base min-w-[60px] text-left">
                        {defect.frequency}
                      </span>
                    </div>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        defect.frequencyPercent >= 70 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                          : defect.frequencyPercent >= 40 
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600' 
                          : 'bg-gradient-to-r from-emerald-500 to-teal-600'
                      }`}
                      style={{ width: `${Math.max(defect.frequencyPercent, 5)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Full Data Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-base">
                  <th className="p-4 font-bold border-b border-slate-800">ליקוי</th>
                  <th className="p-4 font-bold border-b border-slate-800 text-center w-36">שכיחות</th>
                  <th className="p-4 font-bold border-b border-slate-800 w-48">חומרה / משמעות</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm md:text-base">
                {defectData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="p-4 font-medium text-slate-900">{row.name}</td>
                    <td className="p-4 font-black text-slate-900 text-center bg-slate-100/50">{row.frequency}</td>
                    <td className="p-4">{getSeverityBadge(row.severityCategory, row.severity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Analysis Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              ניתוח: למה חלק מהליקויים כל כך נפוצים?
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              העמקה בממצאי המהנדס - מה הסיבות ההנדסיות והתעשייתיות מאחורי הסטטיסטיקה:
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="w-2 h-full bg-blue-600 absolute right-0 top-0" />
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-600 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">
                  ארון לוח החשמל הראשי (90% מהדירות)
                </h3>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed pt-1">
                הליקוי הנפוץ ביותר שמצאנו, אך גם המפתיע ביותר בהסברו. מדובר במוצר עשוי פלסטיק, זול יחסית, שלמרות איכותו הנמוכה הוא לרוב המוצר היחיד בשוק שמצליח לעמוד בתקן הישראלי הרלוונטי. יש כאן פער בין דרישת התקן לבין איכות המוצרים שמייצרים בפועל את אותו תקן - נקודה שכדאי שמתקיני התקן הישראלי ייקחו בחשבון בעדכונים עתידיים.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="w-2 h-full bg-indigo-600 absolute right-0 top-0" />
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-indigo-600 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">
                  ריצוף, חיפוי קירות ורובה (70-80% מהדירות)
                </h3>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed pt-1">
                אלו הליקויים השכיחים ביותר בבנייה החדשה בישראל, אך ברוב המקרים מדובר בליקויים אסתטיים או קלים לתיקון (סדק ברובה, אריח לא ישר) ולא בבעיה מבנית.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="w-2 h-full bg-emerald-600 absolute right-0 top-0" />
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">
                  קירות עקומים וטיח גלי (פחות מ-10%)
                </h3>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed pt-1">
                דווקא הליקוי ה&quot;קלאסי&quot; שהכי מפחיד אנשים, נדיר יחסית. השתכללות שיטות עבודת הטיח, ולעיתים גם ההסתמכות על עובדים זרים מיומנים (בעיקר מסין) בעבודות אלו, הביאה לירידה משמעותית בשכיחות הליקוי הזה.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="w-2 h-full bg-amber-600 absolute right-0 top-0" />
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">
                  שיפועים במרפסות פתוחות ומחסומי רצפה (40% כל אחד)
                </h3>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed pt-1">
                אלו מבין הליקויים המשמעותיים ביותר שמצאנו. התקן דורש שיפוע של כ-1% לכיוון הקולטן במרפסות פתוחות; כשהשיפוע לא תקין, מים עלולים להצטבר ולגרום לנזק לאורך זמן. מחסום רצפה שלא הותקן לפי תקן עלול להוביל לסתימות בצנרת הניקוז - שני הליקויים האלו שווים תשומת לב אמיתית ולא רק &quot;רישום בדוח&quot;.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="w-2 h-full bg-teal-600 absolute right-0 top-0" />
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6 text-teal-600 shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">
                  רטיבות - רק 2% מהדירות
                </h3>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed pt-1">
                זהו אחד הממצאים המעודדים ביותר במדד: ב-98% מהדירות החדשות שבדקנו לא נמצאה כל רטיבות. זה מרגיע ביחס לחשש הנפוץ ביותר בקרב רוכשי דירות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Erix Perspective Key Callout Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 p-8 md:p-14 rounded-3xl shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm">
              <Award className="w-4 h-4 text-blue-400" />
              <span>הפרספקטיבה של אריקס ביקורת מבנים</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              המסקנה שלנו: ההפחדה ברשתות החברתיות אינה במקומה
            </h2>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              בניגוד לתדמית שיוצרות רשתות חברתיות ופורומים סביב &quot;ליקויי בנייה&quot; בישראל, הנתונים שלנו מראים תמונה מאוזנת יותר: כן, כמעט בכל דירה חדשה יימצאו ליקויים - זו כמעט עובדה סטטיסטית ודאית. אבל <strong className="text-blue-300">רוב הליקויים הללו קלים, זולים ומהירים לתיקון</strong> - ליקוי במשקוף דלת, כיוון הפוך של תריס, או ארון חשמל שצריך יישור, אינם אסון. חלק מחברות בדק הבית מייחסות משקל דרמטי מדי לליקויים קלים כאלה, ללא הצדקה עניינית אמיתית.
            </p>

            {/* Related Article Box */}
            <div className="bg-slate-800/90 border border-blue-500/30 p-6 rounded-2xl my-4 text-right space-y-3">
              <div className="text-blue-400 text-xs font-bold uppercase tracking-wider">מאמר מומלץ ממאגר הידע</div>
              <h4 className="text-xl font-bold text-white">
                למה דוחות בדק בית בישראל כל כך מסורבלים - ולמה אנחנו לא כותבים ככה?
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                95% מדוחות בדק הבית מנופחים בציטוטים משפטיים שמשרתים תחושת &quot;תמורה לכסף&quot; במקום לעזור לתקן את הליקוי בפועל. קראו איך אריקס כותבת דוחות עבודה שבאמת עוזרים לכם לקבל דירה תקינה.
              </p>
              <Link 
                href="/למה-דוחות-בדק-בית-מסורבלים"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm underline pt-1"
              >
                <span>לקריאת המאמר המלא</span>
                <span>◀</span>
              </Link>
            </div>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed pt-2">
              יחד עם זאת, אי אפשר - וגם לא נכון - להתעלם מכך שבחלק מהדירות מתגלים ליקויים רבים ומטרידים במיוחד, ואף אחד לא רוצה שזו תהיה הדירה שלו. זו בדיוק הסיבה שאנשים בוחרים לבצע בדק בית גם כשהסיכוי הכולל לליקוי חמור אינו גבוה: השקט הנפשי, והידיעה המדויקת מה בדיוק מקבלים - שווים את זה.
            </p>

            <div className="pt-6 border-t border-slate-700/80 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xl">
                  יפ
                </div>
                <div>
                  <div className="font-bold text-white text-lg">אינג&apos; יוסי פרי</div>
                  <div className="text-slate-400 text-sm">מהנדס רשום ומורשה - אריקס ביקורת מבנים</div>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <span>קבעו ייעוץ אישי</span>
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            רוצים לדעת בדיוק מה מסתתר בדירה החדשה שלכם?
          </h2>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            ומה מתוך הליקויים שיימצאו דורש תשומת לב אמיתית ומה לא? קבעו ייעוץ חינם עם אינג&apos; יוסי פרי.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 hover:bg-blue-50 font-black px-10 py-5 rounded-2xl transition-all shadow-xl text-xl flex items-center gap-3"
            >
              <span>תיאום ייעוץ הנדסי חינם</span>
              <Phone className="w-6 h-6 text-blue-600" />
            </button>
            <a 
              href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D,%20%D7%A7%D7%A8%D7%90%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%9E%D7%93%D7%93%20%D7%90%D7%A8%D7%99%D7%A7%D7%A1%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-5 rounded-2xl transition-all shadow-xl text-xl flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>ייעוץ מהיר בוואטסאפ</span>
            </a>
          </div>
        </div>
      </section>

      {/* Common Sections */}
      <CommonSections />

      {/* Modal Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-2">
          <h3 className="text-2xl font-black text-slate-900 mb-2 text-center">
            ייעוץ הנדסי חינם - אינג&apos; יוסי פרי
          </h3>
          <p className="text-slate-600 text-center mb-6 text-sm">
            השאירו פרטים ונחזור אליכם בהקדם לבדיקת הדירה החדשה שלכם
          </p>
          <Contact compact />
        </div>
      </Modal>
    </div>
  );
}
