'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Home as HomeIcon, 
  Droplets, 
  Hammer, 
  Scale, 
  FileCheck, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  MessageSquare, 
  PhoneCall, 
  RotateCcw, 
  ShieldAlert, 
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

interface ResultRecommendation {
  title: string;
  subTitle: string;
  approxDefectsValue: string;
  duration: string;
  whyThisFits: string;
  whatsAppText: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceWizard() {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedSubOption, setSelectedSubOption] = useState<string>('');

  const handleReset = () => {
    setStep(1);
    setSelectedType('');
    setSelectedSubOption('');
  };

  const propertyTypes = [
    {
      id: 'contractor',
      title: 'דירה חדשה מקבלן',
      desc: 'בדק בית ופרוטוקול מסירה רשמי',
      icon: <Building className="w-8 h-8 text-blue-600" />,
      subOptions: [
        { id: 'apt_small', title: 'דירת 2-3 חדרים', value: '30,000' },
        { id: 'apt_med', title: 'דירת 4-5 חדרים', value: '45,000' },
        { id: 'apt_large', title: 'פנטהאוז / דופלקס / מיוחדת', value: '65,000' }
      ]
    },
    {
      id: 'second_hand',
      title: 'דירת יד שנייה',
      desc: 'בדיקה הנדסית יסודית לפני קניה',
      icon: <HomeIcon className="w-8 h-8 text-indigo-600" />,
      subOptions: [
        { id: 'sh_small', title: 'עד 3 חדרים', value: '25,005' },
        { id: 'sh_med', title: 'דירת 4-5 חדרים (ישן/חדש)', value: '38,000' },
        { id: 'sh_large', title: 'דירה גדולה או מפוצלת', value: '55,000' }
      ]
    },
    {
      id: 'villa',
      title: 'בית פרטי / וילה',
      desc: 'בדיקת מעטפת, שלד, ניקוז וגגות',
      icon: <Hammer className="w-8 h-8 text-emerald-600" />,
      subOptions: [
        { id: 'v_small', title: 'קוטג\' / וילה עד 150 מ"ר', value: '50,000' },
        { id: 'v_med', title: 'בית פרטי 150-250 מ"ר', value: '75,000' },
        { id: 'v_large', title: 'וילת יוקרה מעל 250 מ"ר', value: '110,000' }
      ]
    },
    {
      id: 'leak',
      title: 'איתור נזילות ורטיבות',
      desc: 'מצלמה תרמית דיגיטלית ללא הרס',
      icon: <Droplets className="w-8 h-8 text-cyan-500" />,
      subOptions: [
        { id: 'leak_local', title: 'נזילה מקומית (חדר אחד/תקרה)', value: '15,000' },
        { id: 'leak_severe', title: 'רטיבות כלואה מתחת לריצוף', value: '35,000' },
        { id: 'leak_fight', title: 'סכסוך שכנים / נזקי צד ג\'', value: '40,000' }
      ]
    },
    {
      id: 'pergola',
      title: 'אישור מהנדס לפרגולה',
      desc: 'הגשת אישור יציבות חתום לעירייה (תיקון 101)',
      icon: <FileCheck className="w-8 h-8 text-amber-500" />,
      subOptions: [
        { id: 'p_wood', title: 'פרגולת עץ סטנדרטית', value: '0' },
        { id: 'p_alu', title: 'פרגולת אלומיניום / חשמלית', value: '0' },
        { id: 'p_other', title: 'סככה, סוכך או מבנה קל אחר', value: '0' }
      ]
    },
    {
      id: 'court_appraisal',
      title: 'חוות דעת לבית משפט',
      desc: 'דוח הנדסי רשמי וקביל משפטית',
      icon: <Scale className="w-8 h-8 text-rose-500" />,
      subOptions: [
        { id: 'ca_court', title: 'חוות דעת מומחה לבית משפט', value: '60,000' },
        { id: 'ca_neighbor', title: 'סכסוך הנדסי / ליקויי קונסטרוקציה', value: '80,000' }
      ]
    }
  ];

  const currentTypeData = propertyTypes.find(t => t.id === selectedType);

  const getRecommendation = (): ResultRecommendation => {
    const subObj = currentTypeData?.subOptions.find(so => so.id === selectedSubOption);
    const subTitle = subObj ? subObj.title : '';

    switch (selectedType) {
      case 'contractor':
        return {
          title: 'בדק בית מקיף לדירה חדשה מקבלן',
          subTitle: subTitle,
          approxDefectsValue: subObj ? `₪${subObj.value}` : '₪45,000',
          duration: '3 - 2 שעות בשטח, דוח מוכן תוך 3 ימי עסקים',
          whyThisFits: 'דירות חדשות סובלות בממוצע מ-25 ליקויים שונים (רטיבות, סטיות ריצוף, אי התאמות תכנוניות). הדו"ח ההנדסי הרשמי שלנו יאלץ את הקבלן לתקן את הכל על חשבונו לפני פרוטוקול המסירה!',
          whatsAppText: `שלום אריקס ביקורת מבנים, השתמשתי במחשבון ההתאמה באתר. קניתי דירה חדשה מקבלן (${subTitle}). אשמח לייעוץ ראשוני ותמחור לבדק בית!`,
          icon: <Building className="w-12 h-12 text-blue-600" />,
          href: '/בדק-בית-מקבלן'
        };
      case 'second_hand':
        return {
          title: 'ביקורת ליקויי בנייה יסודית לדירת יד שנייה',
          subTitle: subTitle,
          approxDefectsValue: subObj ? `₪${subObj.value}` : '₪38,000',
          duration: 'כ-2 שעות סיור יסודי, מפרט הוכחות מלא תוך 48 שעות',
          whyThisFits: 'בנקודה זו לפני החתימה על החוזה, מציאת ליקויים סמויים (כמו לחות בקירות או סדקים קונסטרוקטוריים) מעניקה לכם קלף מיקוח אדיר להוריד את מחיר הרכישה באלפי או עשרות אלפי שקלים.',
          whatsAppText: `היי אריקס ביקורת מבנים, אני רגע לפני קניית דירת יד שנייה (${subTitle}) ומעוניין לבצע בדק בית מקצועי שיעניק לי ביטחון רפואי ויכולת משא ומתן. אשמח להצעת מחיר!`,
          icon: <HomeIcon className="w-12 h-12 text-indigo-600" />,
          href: '/בדק-בית-יד-שנייה'
        };
      case 'villa':
        return {
          title: 'בדק בית מקיף לצמודי קרקע וילה ובית פרטי',
          subTitle: subTitle,
          approxDefectsValue: subObj ? `₪${subObj.value}` : '₪75,000',
          duration: '3.5 - 4 שעות בדיקת עומק (כולל תשתיות חוץ וגג רעפים)',
          whyThisFits: 'בתים פרטיים מורכבים משמעותית מדירות: מעטפת, בעיות ניקוז חצר, מרתפים עם רטיבות קפילארית ויסודות. בדיקה יסודית מונעת מפגעי ענק שיכולים לעלות מאות אלפי שקלים לשיקום עצמאי.',
          whatsAppText: `היי יוסי, אני צריך בדק בית לבית פרטי / קוטג' קרוב לחתימה או לאחר סיום שלד. פרטי הנכס: ${subTitle}. אשמח להתייעצות מהירה!`,
          icon: <Hammer className="w-12 h-12 text-emerald-600" />,
          href: '/בדק-בית-לבית-פרטי-וילה'
        };
      case 'leak':
        return {
          title: 'איתור נזילות במצלמה תרמית ללא הרס',
          subTitle: subTitle,
          approxDefectsValue: subObj ? `₪${subObj.value}` : '₪30,000',
          duration: 'שעה עד שעה וחצי בשטח, דוח טכנולוגי קביל מיידי',
          whyThisFits: 'אנו משתמשים במצלמות INFRARED תרמיות ומודדי לחות שמשקפים בדיוק מה קורה מתחת לבטון. דוח חסין לערעורים של מהנדס בניין מוסמך קוטע ספקות מול השכן מלמעלה או מול הקבלן.',
          whatsAppText: `שלום יוסי, יש לי בעיית רטיבות/נזילת מים בנכס (${subTitle}). אשמח לתאם הגעה עם מצלמה תרמית ואבחון הנדסי מדוייק.`,
          icon: <Droplets className="w-12 h-12 text-cyan-500" />,
          href: '/איתור-נזילות-ורטיבות'
        };
      case 'pergola':
        return {
          title: 'אישור מהנדס קונסטרוקטור מוסמך לפרגולה',
          subTitle: subTitle,
          approxDefectsValue: 'אישור יציבות חוקי',
          duration: 'בדיקת קונסטרוקטור קצרה, מסירת אישור חתום תוך 24 שעות',
          whyThisFits: 'אישור חוקי לעירייה לפי דרישות תיקון 101. אנו נוודא יציבות, נערוך גיבוי הנדסי ונפיק עבורכם את האישור הנדרש במהירות ובקלות.',
          whatsAppText: `אהלן, הקמתי פרגולה / מבנה קל מסוג (${subTitle}) ואני חייב אישור יציבות חתום על ידי מהנדס בניין קונסטרוקטור לצורך דיווח לעירייה. אשמח לעזרה מהירה!`,
          icon: <FileCheck className="w-12 h-12 text-amber-500" />,
          href: '/אישור-מהנדס-לפרגולה'
        };
      case 'court_appraisal':
      default:
        return {
          title: 'חוות דעת הנדסית לבית משפט',
          subTitle: subTitle,
          approxDefectsValue: subObj ? `₪${subObj.value}` : '₪60,000',
          duration: 'בדיקה עמוקה, הצלבת תקנים קשיחה, הפקת חוות דעת תוך 14 יום',
          whyThisFits: 'הדוחות שלנו מכינים סביבה בטוחה ומנומקת בערכאות שיפוטיות ובוררויות. הדו"חות מבוססים על תקנות התכנון והבנייה ועל חוקי התכנון להגנה מלאה בבית משפט.',
          whatsAppText: `היי אריקס ביקורת מבנים, דרושה לי חוות דעת משפטית רשמית לבית המשפט בעקבות ליקויים מורכבים (${subTitle}). אשמח לשיחת אבחון והכוונה.`,
          icon: <Scale className="w-12 h-12 text-rose-500" />,
          href: '/חוות-דעת-הנדסית-לבית-משפט'
        };
    }
  };

  const handleTypeSelect = (id: string) => {
    setSelectedType(id);
    setStep(2);
  };

  const handleSubOptionSelect = (id: string) => {
    setSelectedSubOption(id);
    setStep(3);
  };

  const currentRecommendation = step === 3 ? getRecommendation() : null;

  return (
    <section id="recommender" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" dir="rtl">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-extrabold text-xs mb-4 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            מחשבון אינטראקטיבי חדשני
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            איזה בדיקה אתם צריכים <br />
            <span className="text-blue-600">וכמה כסף תוכלו לחסוך?</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-bold">
            ענו על 2 שאלות פשוטות וקבלו אבחון מיידי של שירות הבדק המתאים, הערכת שווי ליקויים ממוצעת הניתנת להחזר, והכוונה מקצועית ממהנדס!
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="max-w-xl mx-auto mb-10 flex items-center justify-between relative px-2">
          <div className="absolute inset-x-0 h-1 bg-slate-200 top-1/2 -translate-y-1/2 rounded-full z-0" />
          <div 
            className="absolute left-0 right-0 h-1 bg-blue-600 top-1/2 -translate-y-1/2 rounded-full z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%`, right: 'auto', left: '0' }} // Standard progress calculation in RTL
          />
          
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${
                  step >= num 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-4 ring-blue-50' 
                    : 'bg-slate-100 text-slate-400 border border-slate-300'
                }`}
              >
                {num}
              </div>
              <span className={`text-[11px] font-bold mt-2 ${step >= num ? 'text-blue-600 font-black' : 'text-slate-400'}`}>
                {num === 1 ? 'סוג הנכס' : num === 2 ? 'פרטי המבנה' : 'אפיון וחיסכון'}
              </span>
            </div>
          ))}
        </div>

        {/* Wizard Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] border border-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.04)] p-8 md:p-14 relativeMIN-h-[450px]">
          
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Select Property Type / Issue */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-black text-slate-900 mb-8 text-center sm:text-right">שלב 1: מהו סטטוס או סוג הנכס שלכם?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleTypeSelect(type.id)}
                      className="group flex flex-col p-6 rounded-3xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-right group ACTIVE:scale-95 cursor-pointer border-b-4 border-b-slate-100 hover:border-b-blue-600"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                        {type.icon}
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {type.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {type.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Select Property Size / Sub Details */}
            {step === 2 && currentTypeData && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      שלב 2: ספרו לנו קצת על {currentTypeData.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">אנא בחרו את סיווג הנכס המתאים ביותר</p>
                  </div>
                  <button 
                    onClick={() => setStep(1)} 
                    className="flex items-center gap-2 px-4 py-2 text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all text-xs font-black"
                  >
                    <ArrowRight className="w-4 h-4" />
                    חזרה לשלב הקודם
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {currentTypeData.subOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSubOptionSelect(opt.id)}
                      className="group flex flex-col p-8 rounded-3xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center group cursor-pointer border-b-4 border-b-slate-100 hover:border-b-blue-600"
                    >
                      <h4 className="text-lg font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {opt.title}
                      </h4>
                      
                      {opt.value !== '0' && (
                        <div className="mt-auto">
                          <span className="text-xs font-bold text-slate-400 block uppercase mb-1">פוטנציאל חיסכון מוערך:</span>
                          <span className="text-2xl font-black text-emerald-600 leading-none">
                            ₪{opt.value}
                          </span>
                        </div>
                      )}
                      {opt.value === '0' && (
                        <div className="mt-auto">
                          <span className="text-xs font-extrabold text-blue-600 block bg-blue-50 py-1.5 px-3 rounded-full">
                            אישור מהיר לעירייה
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Beautiful Result & Personalized Recommendations */}
            {step === 3 && currentRecommendation && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  
                  {/* Left Column: Diagnostics and metrics */}
                  <div className="lg:col-span-7 flex flex-col text-right">
                    <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest block mb-1">▶ המלצה ואבחון הנדסי מותאם</span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                      {currentRecommendation.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      שיוך נכס: <strong className="text-slate-900">{currentRecommendation.subTitle}</strong>
                    </p>

                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl mb-8 flex-grow">
                      <p className="text-slate-700 text-base leading-relaxed">
                        {currentRecommendation.whyThisFits}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 block leading-none">משך הבדיקה</span>
                          <span className="text-xs font-black text-slate-800 leading-tight block mt-1">{currentRecommendation.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 block leading-none">דוח קצה</span>
                          <span className="text-xs font-black text-slate-800 leading-tight block mt-1">קביל בבית משפט, חתום B.Sc</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation inside result screen */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <button 
                        onClick={handleReset}
                        className="flex items-center gap-2 px-5 py-3 text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all text-xs font-black select-none"
                      >
                        <RotateCcw className="w-4 h-4" />
                        חשבו שוב מההתחלה
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Savings, ROI and instant CTA cards */}
                  <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                    
                    {currentRecommendation.approxDefectsValue !== 'אישור יציבות חוקי' && (
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 text-emerald-400 rounded-full text-[10px] font-black uppercase mb-4">
                          <TrendingUp className="w-3.5 h-3.5" />
                          ממוצע חיסכון / תביעה מוערך
                        </div>
                        <div className="text-5xl md:text-6xl font-black text-emerald-400 leading-none">
                          {currentRecommendation.approxDefectsValue}
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mt-3">
                          זהו ערך הנזקים, פגמי האיטום והסטיות ההנדסיות שמתגלים בדוחות שלנו, ותוכלו לתבוע ישירות מהמוכר / קבלן לתקן על חשבונו!
                        </p>
                      </div>
                    )}

                    {currentRecommendation.approxDefectsValue === 'אישור יציבות חוקי' && (
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/15 text-blue-400 rounded-full text-[10px] font-black uppercase mb-4">
                          <CheckCircle className="w-3.5 h-3.5" />
                          חוק המכר והתקנות
                        </div>
                        <div className="text-4xl md:text-5xl font-black text-blue-400 leading-none">
                          אישור מהיר
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mt-4">
                          פתיחה יציבה והגשת אישור {"חנ\"ר"} חתום קונסטרוקטור לעירייה תוך 24 שעות במחירי השוק ההוגנים ביותר.
                        </p>
                      </div>
                    )}

                    <div className="space-y-4 mt-auto">
                      <a 
                        href={`https://wa.me/972547515142?text=${encodeURIComponent(currentRecommendation.whatsAppText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-2xl transition-all shadow-lg shadow-emerald-600/10 hover:-translate-y-0.5 text-base text-center"
                      >
                        <MessageSquare className="w-5 h-5" />
                        דברו עם מהנדס ב-WhatsApp
                      </a>
                      
                      <a 
                        href="tel:054-7515142"
                        className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold py-3 px-6 rounded-2xl transition-all text-sm text-center"
                      >
                        <PhoneCall className="w-4 h-4 text-blue-400" />
                        טלפון ישיר: 054-7515142
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
