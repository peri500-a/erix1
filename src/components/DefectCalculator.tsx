'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  HelpCircle, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  Building2, 
  Home, 
  Layers, 
  Plus, 
  Minus,
  RefreshCw,
  PhoneCall
} from 'lucide-react';

interface PropertyType {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  baseInspectionCost: number;
  averageDefects: number;
  description: string;
  multipliers: {
    cosmetic: number;
    systems: number;
    critical: number;
  };
}

const PROPERTY_TYPES: PropertyType[] = [
  {
    id: 'new-apartment',
    name: 'דירה חדשה מקבלן',
    icon: Building2,
    baseInspectionCost: 1500,
    averageDefects: 22,
    description: 'בדיקת התאמה לתקנים ישראלים, מפרט מכר ואיכות גימורים.',
    multipliers: {
      cosmetic: 450,
      systems: 1200,
      critical: 7500
    }
  },
  {
    id: 'second-hand',
    name: 'דירת יד שנייה',
    icon: Home,
    baseInspectionCost: 1600,
    averageDefects: 16,
    description: 'בדיקת בלאי מערכות, נזילות מים סמויות ורטיבות כלואה.',
    multipliers: {
      cosmetic: 400,
      systems: 1500,
      critical: 9000
    }
  },
  {
    id: 'private-house',
    name: 'בית פרטי / וילה',
    icon: Layers,
    baseInspectionCost: 2500,
    averageDefects: 34,
    description: 'בדיקת שלד, פיתוח חצר, מערכות איטום בגגות וקירות חוץ.',
    multipliers: {
      cosmetic: 500,
      systems: 1800,
      critical: 12000
    }
  }
];

export default function DefectCalculator() {
  const [selectedPropId, setSelectedPropId] = useState<string>('new-apartment');
  const [calcMode, setCalcMode] = useState<'quick' | 'detailed'>('quick');
  
  // Quick mode state
  const [defectCount, setDefectCount] = useState<number>(20);

  // Detailed mode states
  const [cosmeticCount, setCosmeticCount] = useState<number>(10);
  const [systemsCount, setSystemsCount] = useState<number>(5);
  const [criticalCount, setCriticalCount] = useState<number>(1);

  const selectedProp = useMemo(() => {
    return PROPERTY_TYPES.find(p => p.id === selectedPropId) || PROPERTY_TYPES[0];
  }, [selectedPropId]);

  // Handle property change and auto-set realistic defaults
  const handlePropChange = (id: string) => {
    setSelectedPropId(id);
    const prop = PROPERTY_TYPES.find(p => p.id === id) || PROPERTY_TYPES[0];
    setDefectCount(prop.averageDefects);
    
    // Distribute detailed counts realistically based on new average
    const total = prop.averageDefects;
    const crit = Math.max(1, Math.round(total * 0.08)); // ~8% critical
    const sys = Math.round(total * 0.3); // ~30% systems
    const cosm = Math.max(0, total - crit - sys); // remainder cosmetic
    
    setCosmeticCount(cosm);
    setSystemsCount(sys);
    setCriticalCount(crit);
  };

  // Calculations for quick mode
  const quickResult = useMemo(() => {
    const { multipliers } = selectedProp;
    // Realistically distribute the slider value
    const crit = Math.max(0, Math.round(defectCount * 0.08));
    const sys = Math.round(defectCount * 0.32);
    const cosm = Math.max(0, defectCount - crit - sys);

    const cosmeticCost = cosm * multipliers.cosmetic;
    const systemsCost = sys * multipliers.systems;
    const criticalCost = crit * multipliers.critical;
    const totalCost = cosmeticCost + systemsCost + criticalCost;

    return {
      cosm,
      sys,
      crit,
      cosmeticCost,
      systemsCost,
      criticalCost,
      totalCost
    };
  }, [defectCount, selectedProp]);

  // Calculations for detailed mode
  const detailedResult = useMemo(() => {
    const { multipliers } = selectedProp;
    const cosmeticCost = cosmeticCount * multipliers.cosmetic;
    const systemsCost = systemsCount * multipliers.systems;
    const criticalCost = criticalCount * multipliers.critical;
    const totalCost = cosmeticCost + systemsCost + criticalCost;

    return {
      totalCount: cosmeticCount + systemsCount + criticalCount,
      cosmeticCost,
      systemsCost,
      criticalCost,
      totalCost
    };
  }, [cosmeticCount, systemsCount, criticalCount, selectedProp]);

  const currentTotalCost = calcMode === 'quick' ? quickResult.totalCost : detailedResult.totalCost;
  const currentTotalDefects = calcMode === 'quick' ? defectCount : detailedResult.totalCount;
  
  const roiMultiplier = useMemo(() => {
    if (currentTotalCost === 0) return 0;
    return parseFloat((currentTotalCost / selectedProp.baseInspectionCost).toFixed(1));
  }, [currentTotalCost, selectedProp.baseInspectionCost]);

  const resetCalculator = () => {
    handlePropChange(selectedPropId);
  };

  return (
    <section id="defect-calculator" className="py-16 bg-slate-50 relative overflow-hidden text-right" dir="rtl">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black mb-4 border border-blue-200"
          >
            <Calculator className="w-4 h-4" />
            כלי הערכה אינטראקטיבי
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
            מחשבון שווי ליקויים – כמה שווה בדק הבית שלכם?
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            הזינו את כמות הליקויים המוערכת או השתמשו במדדים הממוצעים בענף כדי לגלות את המשמעות הכספית של הליקויים שיתגלו בנכס שלכם, ואת פוטנציאל החיסכון והחזר ההשקעה העצום מול הקבלן או המוכר.
          </p>
        </div>

        {/* Outer Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Form Side (7 cols) */}
          <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 border-b lg:border-b-0 lg:border-l border-slate-100 flex flex-col justify-between">
            <div>
              {/* Step 1: Property Type */}
              <div id="step-property-type" className="mb-8">
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-3">שלב 1: בחרו את סוג הנכס שלכם</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROPERTY_TYPES.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedPropId === type.id;
                    return (
                      <button
                        id={`btn-prop-${type.id}`}
                        key={type.id}
                        onClick={() => handlePropChange(type.id)}
                        className={`flex flex-col items-center sm:items-start p-4 rounded-2xl border text-right transition-all duration-300 relative overflow-hidden ${
                          isSelected 
                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' 
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-2 rounded-xl mb-3 ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'}`}>
                          <Icon className="w-6 h-6 shrink-0" />
                        </div>
                        <span className="font-black text-sm mb-1">{type.name}</span>
                        <span className={`text-2xs leading-snug text-center sm:text-right ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                          {type.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Calculation Mode Toggle */}
              <div id="step-calc-mode" className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">שלב 2: הגדירו את כמות הליקויים</span>
                  <div className="inline-flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      id="btn-mode-quick"
                      onClick={() => setCalcMode('quick')}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                        calcMode === 'quick' 
                          ? 'bg-white text-slate-900 shadow-sm' 
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      חישוב מהיר
                    </button>
                    <button
                      id="btn-mode-detailed"
                      onClick={() => setCalcMode('detailed')}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                        calcMode === 'detailed' 
                          ? 'bg-white text-slate-900 shadow-sm' 
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      פירוט ידני
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {calcMode === 'quick' ? (
                    <motion.div
                      key="quick-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-slate-700">סה״כ ליקויים משוערים בנכס:</span>
                        <span className="text-xl font-black text-blue-600 bg-blue-100/60 px-3 py-1 rounded-lg">
                          {defectCount} ליקויים
                        </span>
                      </div>
                      <input
                        id="input-quick-defects-slider"
                        type="range"
                        min="2"
                        max="60"
                        value={defectCount}
                        onChange={(e) => setDefectCount(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-2xs text-slate-400 mt-2 font-bold">
                        <span>מינימום (2)</span>
                        <span className="text-blue-600">ממוצע בענף לנכס זה: {selectedProp.averageDefects}</span>
                        <span>מקסימום (60)</span>
                      </div>
                      
                      <div className="mt-4 flex gap-2 items-start bg-blue-50/50 border border-blue-100 rounded-xl p-3 text-2xs text-blue-900 leading-relaxed">
                        <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <strong>כיצד מבוצע החישוב המהיר?</strong> על פי הסטטיסטיקה של אלפי דוחות, אנו מחלקים את סך הליקויים שבחרתם ל-3 רמות חומרה (8% קריטיים, 32% בינוניים, וכל השאר קוסמטיים) ומכפילים בעלויות התיקון הממוצעות המקובלות בשוק הבנייה.
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="detailed-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {/* Cosmetic Defect Row */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="max-w-md">
                          <h4 className="font-black text-sm text-slate-900 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                            ליקויי קוסמטיקה, צבע וגימור
                          </h4>
                          <p className="text-2xs text-slate-500 mt-1 leading-relaxed">
                            סדקים קלים בטיח, צביעה לא אחידה, פנלים שבורים, פגמים מקומיים באריחים, ארונות מטבח לא מכוונים.
                            <br />
                            <span className="font-bold text-slate-700">עלות תיקון ממוצעת לליקוי: {selectedProp.multipliers.cosmetic} ₪</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <button
                            id="btn-dec-cosmetic"
                            onClick={() => setCosmeticCount(Math.max(0, cosmeticCount - 1))}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-black text-base text-slate-800">{cosmeticCount}</span>
                          <button
                            id="btn-inc-cosmetic"
                            onClick={() => setCosmeticCount(cosmeticCount + 1)}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Systems Defect Row */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="max-w-md">
                          <h4 className="font-black text-sm text-slate-900 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                            ליקויי תפקוד, פתחים ומערכות
                          </h4>
                          <p className="text-2xs text-slate-500 mt-1 leading-relaxed">
                            חוסר איטום בחלונות, דלתות שאינן נסגרות, בעיות זרימה/ספיקה בצנרת, אי עמידה בתקני קומפוזיציית חשמל.
                            <br />
                            <span className="font-bold text-slate-700">עלות תיקון ממוצעת לליקוי: {selectedProp.multipliers.systems} ₪</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <button
                            id="btn-dec-systems"
                            onClick={() => setSystemsCount(Math.max(0, systemsCount - 1))}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-black text-base text-slate-800">{systemsCount}</span>
                          <button
                            id="btn-inc-systems"
                            onClick={() => setSystemsCount(systemsCount + 1)}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Critical Defect Row */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="max-w-md">
                          <h4 className="font-black text-sm text-slate-900 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                            ליקויים קריטיים, רטיבות ואיטום
                          </h4>
                          <p className="text-2xs text-slate-500 mt-1 leading-relaxed">
                            רטיבות כלואה קשה תחת הריצוף, כשלי איטום במרפסות/מקלחות, סדקים קונסטרוקטיביים בקירות נושאים, חריגות בנייה קשות מההיתר.
                            <br />
                            <span className="font-bold text-slate-700">עלות תיקון ממוצעת לליקוי: {selectedProp.multipliers.critical} ₪</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <button
                            id="btn-dec-critical"
                            onClick={() => setCriticalCount(Math.max(0, criticalCount - 1))}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-black text-base text-slate-800">{criticalCount}</span>
                          <button
                            id="btn-inc-critical"
                            onClick={() => setCriticalCount(criticalCount + 1)}
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end mt-4">
              <button
                id="btn-reset-calculator"
                onClick={resetCalculator}
                className="inline-flex items-center gap-1.5 text-2xs font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-xl border border-slate-200/50"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                אפס ערכי ברירת מחדל
              </button>
            </div>
          </div>

          {/* Result Side (5 cols) */}
          <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#131d35] to-slate-950 text-white flex flex-col justify-between relative">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] rounded-b-3xl lg:rounded-b-none lg:rounded-l-3xl"></div>
            
            <div className="relative z-10">
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider block mb-4">סיכום אומדן כספי מוערך</span>
              
              {/* Total Cost Display */}
              <div className="mb-8 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <span className="text-slate-300 text-xs font-bold block mb-1">עלות תיקון מוערכת של הליקויים:</span>
                <span className="text-3xl sm:text-4xl font-black text-blue-400 leading-none">
                  {currentTotalCost.toLocaleString()} ₪
                </span>
                <p className="text-2xs text-slate-400 mt-2">
                  *המחיר הנו אומדן הנדסי גס ומבוסס על מחירונים מקובלים כגון &apos;דקל&apos; לביצוע ע&quot;י קבלן מזדמן.
                </p>
              </div>

              {/* Statistics Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-slate-400">נכס נבחר:</span>
                  <span className="font-bold text-white">{selectedProp.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-slate-400">כמות הליקויים המחושבת:</span>
                  <span className="font-bold text-blue-400">{currentTotalDefects} ליקויים</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-slate-400">עלות משוערת של בדק הבית:</span>
                  <span className="font-bold text-white">~{selectedProp.baseInspectionCost} ₪</span>
                </div>
              </div>

              {/* ROI and Value Box */}
              {currentTotalCost > 0 && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl mb-8">
                  <div className="flex items-center gap-2 text-emerald-400 font-black text-sm mb-1.5">
                    <TrendingUp className="w-5 h-5 shrink-0" />
                    החזר השקעה פי {roiMultiplier} מהבדיקה!
                  </div>
                  <p className="text-2xs text-slate-300 leading-relaxed">
                    דוח בדק בית של מהנדס מוסמך מהווה כלי משפטי והוכחה רשמית. כל ליקוי שיצוין בדוח מחייב את הקבלן לתקן על חשבונו או לקזז את עלותו משווי הרכישה. בדק בית אינו הוצאה – הוא חיסכון וודאי המגן עליכם מפני הפסדי ענק.
                  </p>
                </div>
              )}
            </div>

            {/* CTA inside card */}
            <div className="relative z-10 pt-4">
              <a
                id="btn-calc-cta"
                href="tel:054-7515142"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center text-sm"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                תיאום בדק בית מיידי: 054-7515142
              </a>
              <span className="text-center block text-3xs text-slate-400 mt-2">
                שיחת ייעוץ הנדסית ללא התחייבות עם המהנדס יוסי אריקס
              </span>
            </div>

          </div>

        </div>

        {/* Informative Grid below calculator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-right">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <h4 className="font-black text-slate-900 text-base mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
              מניעת כשלי איטום ורטיבות
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              רטיבות כלואה מתחת לריצוף מדרדרת את איכות המבנה ומייצרת עובש מסוכן לבריאות. תיקון נזילות וייבוש חול רטוב מתחת לריצוף עשוי להגיע בקלות ל-15,000 ₪ ומעלה. זיהוי מוקדם במצלמה תרמית חוסך את זה לחלוטין.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <h4 className="font-black text-slate-900 text-base mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
              חובת תיקון על פי חוק
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              על פי חוק המכר (דירות), לקבלן ישנה מחויבות מלאה לתקן כל אי התאמה וליקוי שנתגלו בדירה במהלך תקופת הבדק והאחריות. הדוח ההנדסי של אריקס מספק לכם את הרקע המשפטי והמקצועי המחייב למימוש זכויותיכם.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <h4 className="font-black text-slate-900 text-base mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
              הערכת שווי לפי מחירון דקל
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              הערכות שווי הליקויים במחשבון ובדוחות שלנו מחושבות לפי המחירונים הרשמיים המקובלים ביותר בבתי המשפט ובקרב מהנדסים (מחירון דקל). הדבר מעניק לדוח קבילות ומקצועיות ברמות הגבוהות ביותר.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
