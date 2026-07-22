'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Info, ZoomIn, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  issues: string[];
  description: string;
}

const hotspots: Hotspot[] = [
  {
    id: 'chimney',
    x: 37,
    y: 35,
    title: 'הצטברות קריאוזוט וסכנת שריפה בארובה',
    description: 'הצטברות של תוצרי לוואי דליקים בתוך הארובה מהווים סכנה בטיחותית חמורה.',
    issues: [
      'הצטברות קריאוזוט (חומר דליק) בתוך הארובה',
      'סכנת התלקחות ודליקה במבנה',
      'חסימות המונעות פליטת גזים רעילים'
    ]
  },
  {
    id: 'roof',
    x: 69,
    y: 28,
    title: 'רעפי גג פגומים וחסרים',
    description: 'כשלים בחיפוי הגג הם הגורם העיקרי לחדירת רטיבות ופגיעה בשלד העליון.',
    issues: [
      'רעפים שבורים, סדוקים או חסרים',
      'איטום לקוי בחיבורי הגג (פלאשינג)',
      'חדירת מים לקומות העליונות'
    ]
  },
  {
    id: 'settling',
    x: 42,
    y: 53,
    title: 'יסודות ושקיעה מבנית',
    description: 'תזוזות בקרקע או כשל ביסודות עלולים להוביל לעיוותים מבניים משמעותיים.',
    issues: [
      'שקיעה מבנית (Structural Settling) לא אחידה',
      'לחץ על שלד המבנה הגורם לעיוותים',
      'סדקים אלכסוניים בפתחי הבית'
    ]
  },
  {
    id: 'electrical',
    x: 33,
    y: 75,
    title: 'חיווט חשמלי בלוי ולא בטוח',
    description: 'מערכת חשמל שאינה תקינה או חשופה מהווה סכנת התחשמלות ושריפה.',
    issues: [
      'חיווט חשמלי בלוי (Unsafe Wiring) וחשוף',
      'חיבורים מאולתרים שאינם עומדים בתקן',
      'העדר הגנה פיזית ובידוד תקין'
    ]
  },
  {
    id: 'foundation',
    x: 44,
    y: 91,
    title: 'סדקים ביסודות וחדירת מים',
    description: 'סדקים בבסיס המבנה מאפשרים חדירת לחץ מים ורטיבות קפילארית מהקרקע.',
    issues: [
      'סדקים המאפשרים חדירת מים (Water Intrusion)',
      'פגיעה בזיון הפלדה בתוך הבטון עקב קורוזיה',
      'ריחות טחב ועובש בקומות התחתונות'
    ]
  },
  {
    id: 'gfci',
    x: 84,
    y: 79,
    title: 'חסר שקע GFCI ליד מקור מים',
    description: 'בטיחות בחיבורי חשמל בקרבת מים היא קריטית למניעת אסון.',
    issues: [
      'העדר שקע הגנה (GFCI) ליד ברזים',
      'סיכון גבוה להתחשמלות במגע עם מים',
      'העדר הארקה תקינה לאביזרי קצה'
    ]
  },
  {
    id: 'gutters',
    x: 82,
    y: 45,
    title: 'מרזבים וניקוז גג לקוי',
    description: 'מערכת ניקוז סתומה או שבורה מובילה להצטברות מים בחיבורי הגג ולנזילות פנימיות.',
    issues: [
      'מרזבים סתומים בעלים ולכלוך',
      'חוסר שיפוע המונע זרימת מים תקינה',
      'נטיפי חלודה וחורים בצינורות הניקוז'
    ]
  },
  {
    id: 'ac',
    x: 58,
    y: 48,
    title: 'מערכת מיזוג ואוורור (HVAC)',
    description: 'תחזוקה לקויה של יחידות מיזוג גורמת לצריכת חשמל גבוהה, נזילות מים פנימיות וזיהום אוויר.',
    issues: [
      'צנרת ניקוז מזגן סתומה הגורמת לרטיבות בקירות',
      'העדר פילטרים נקיים הפוגע באיכות האוויר',
      'מנוע רועש או לא מיוצב המעביר רעידות לשלד'
    ]
  },
  {
    id: 'insulation',
    x: 35,
    y: 22,
    title: 'כשל בבידוד תרמי',
    description: 'בידוד חסר או לקוי בחלל הגג גורם לאובדן אנרגיה משמעותי ועומס על מערכות המיזוג.',
    issues: [
      'גשרי קור וחום בתקרות הקומה העליונה',
      'פריסה לא אחידה של חומרי הבידוד',
      'סימני עיבוי (Condensation) על התקרה בחורף'
    ]
  }
];

const InteractiveHousePlan = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);

  return (
    <section 
      className="py-24 bg-white overflow-hidden relative" 
      id="interactive-plan"
      style={{
        backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
        backgroundSize: '60px 60px'
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-black mb-6 shadow-xl shadow-blue-200"
          >
            <ZoomIn className="w-4 h-4" />
            <span>תרשים בדיקת בית קריטי</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            איפה מסתתרים <span className="text-blue-600">הליקויים?</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            הבית נראה מושלם מבחוץ, אבל המהנדסים שלנו יודעים בדיוק איפה לחפש. לחצו על הנקודות האדומות כדי לגלות מה מסתתר מתחת לפני השטח.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* House Visualization */}
          <div className="lg:col-span-7 relative bg-slate-50 rounded-[3rem] p-4 md:p-8 flex items-center justify-center border border-slate-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="relative w-full max-w-[650px] mx-auto z-10">
              <svg 
                viewBox="0 0 800 750" 
                className="w-full h-auto"
              >
                <defs>
                   {/* Gradients for the cartoony look */}
                  <linearGradient id="wallYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff9c4" />
                    <stop offset="100%" stopColor="#fff176" />
                  </linearGradient>
                  <linearGradient id="roofRed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e53935" />
                    <stop offset="100%" stopColor="#b71c1c" />
                  </linearGradient>
                </defs>

                {/* Ground Shadow */}
                <path d="M50,680 Q400,720 750,680 L750,700 Q400,740 50,700 Z" fill="#1e293b" opacity="0.8" />

                {/* House Structure */}
                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Main Yellow Body - Cartoonish shape with slight curves */}
                  <path 
                    d="M200,680 L600,680 L620,400 L400,150 L180,400 Z" 
                    fill="url(#wallYellow)" 
                    stroke="#1e293b" 
                    strokeWidth="6" 
                    strokeLinejoin="round" 
                  />

                  {/* Window (Blue) - Moved to center */}
                  <rect x="340" y="430" width="120" height="110" rx="8" fill="#64b5f6" stroke="#1e293b" strokeWidth="5" />
                  <line x1="400" y1="430" x2="400" y2="540" stroke="#1e293b" strokeWidth="3" />
                  <line x1="340" y1="485" x2="460" y2="485" stroke="#1e293b" strokeWidth="3" />

                  {/* Door (Red) */}
                  <path d="M450,680 L550,680 L560,560 Q505,540 450,560 Z" fill="#d32f2f" stroke="#1e293b" strokeWidth="6" />
                  <circle cx="535" cy="630" r="5" fill="#1e293b" />

                  {/* Visual Cracks on Walls */}
                  <path d="M400,680 L420,630 L405,600 L425,560" fill="none" stroke="#1e293b" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                  <path d="M350,680 L330,640 L345,610" fill="none" stroke="#1e293b" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />

                  {/* Roof Structure */}
                  <path 
                    d="M150,420 L405,170 L660,420" 
                    fill="none" 
                    stroke="#1e293b" 
                    strokeWidth="20" 
                    strokeLinecap="round"
                    opacity="0.3" 
                  />
                  <path 
                    d="M130,440 L405,160 L680,440 L650,460 L405,210 L160,460 Z" 
                    fill="url(#roofRed)" 
                    stroke="#1e293b" 
                    strokeWidth="6" 
                  />
                  
                  {/* Damaged Roof Shingles Visual */}
                  <path d="M450,280 L480,260 L500,290" fill="#7f0000" opacity="0.4" />
                  <path d="M250,380 L280,360 L300,390" fill="#7f0000" opacity="0.4" />

                  {/* Chimney */}
                  <path d="M280,350 L280,200 L360,210 L360,260" fill="#d32f2f" stroke="#1e293b" strokeWidth="6" strokeLinejoin="round" />
                  <rect x="270" y="190" width="100" height="20" rx="4" fill="#1e293b" />

                  {/* Thick Smoke with Sparks */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <path d="M320,180 Q250,150 300,100 Q350,50 220,50" fill="none" stroke="#64748b" strokeWidth="35" strokeLinecap="round" opacity="0.6">
                       <animate attributeName="d" dur="4s" repeatCount="indefinite" values="M320,180 Q250,150 300,100 Q350,50 220,50; M320,180 Q380,150 320,100 Q260,50 380,50; M320,180 Q250,150 300,100 Q350,50 220,50" />
                    </path>
                    {/* Embers/Sparks */}
                    <circle cx="340" cy="140" r="3" fill="#ff9800" opacity="0.8">
                      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="280" cy="90" r="2.5" fill="#ffb74d" opacity="0.8">
                      <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
                    </circle>
                  </motion.g>

                  {/* Exposed Wires on Left */}
                  <g transform="translate(190,620)">
                    <path d="M0,0 Q-30,40 10,80" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                    <path d="M-5,10 Q-35,50 5,90" fill="none" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" />
                    <path d="M5,-5 Q-25,35 15,75" fill="none" stroke="#42a5f5" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Spark connectors */}
                    <circle cx="10" cy="80" r="4" fill="#ffc107">
                       <animate attributeName="scale" values="1;1.5;1" dur="0.5s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Water Tap on Right */}
                  <g transform="translate(620,620) scale(1.8)">
                    <path d="M0,0 L20,0 L20,10 L15,10" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="20" cy="0" r="3" fill="#1e293b" />
                    <path d="M20,5 Q25,5 25,18" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                    <motion.circle 
                       animate={{ y: [18, 35], opacity: [1, 0] }}
                       transition={{ duration: 1.5, repeat: Infinity }}
                       cx="25" cy="18" r="3" fill="#64b5f6" 
                    />
                  </g>
                </motion.g>

                {/* Interactive Elements (The Red Points) */}
                {hotspots.map((spot) => (
                  <g 
                    key={spot.id}
                    onMouseEnter={() => setHoveredHotspotId(spot.id)}
                    onMouseLeave={() => setHoveredHotspotId(null)}
                  >
                    <circle cx={`${spot.x}%`} cy={`${spot.y}%`} r="24" className="fill-red-500 opacity-20 pointer-events-none">
                      <animate attributeName="r" from="18" to="35" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <motion.circle
                      cx={`${spot.x}%`}
                      cy={`${spot.y}%`}
                      r={hoveredHotspotId === spot.id ? 22 : 18}
                      className={`cursor-pointer drop-shadow-xl transition-all duration-300 ${
                        activeHotspot?.id === spot.id ? 'fill-red-700' : 'fill-red-600 hover:fill-red-500'
                      }`}
                      animate={{ 
                        scale: activeHotspot?.id === spot.id ? 1.25 : 1,
                      }}
                      onClick={() => setActiveHotspot(spot)}
                    />
                    
                    <AnimatePresence>
                      {hoveredHotspotId === spot.id ? (
                        <motion.g
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="pointer-events-none"
                        >
                          <rect 
                            x={`${spot.x}%`} 
                            y={`${spot.y}%`} 
                            width="240" 
                            height="40" 
                            rx="12" 
                            fill="#1e293b" 
                            transform={`translate(-120, -75)`}
                            className="drop-shadow-2xl"
                          />
                          <text 
                            x={`${spot.x}%`} 
                            y={`${spot.y}%`} 
                            textAnchor="middle" 
                            fill="white" 
                            fontWeight="900" 
                            fontSize="14" 
                            transform={`translate(0, -49)`}
                          >
                            {spot.title}
                          </text>
                        </motion.g>
                      ) : (
                        <text 
                          x={`${spot.x}%`} 
                          y={`${spot.y}%`} 
                          dy="7"
                          textAnchor="middle" 
                          fill="white" 
                          fontWeight="900" 
                          fontSize="18" 
                          className="pointer-events-none"
                        >!</text>
                      )}
                    </AnimatePresence>
                  </g>
                ))}
              </svg>
            </div>
            
            <div className="absolute top-8 left-8 flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-[0.2em] bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 shadow-xl">
              <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
              <span>אלמנטים אינטראקטיביים</span>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              {activeHotspot ? (
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  className="bg-slate-900 text-white rounded-[3.5rem] p-8 md:p-14 shadow-2xl flex-grow border border-slate-800 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="max-w-[80%]">
                      <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                        ממצא בדיקה הנדסית
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black leading-tight text-white mb-2">{activeHotspot.title}</h3>
                    </div>
                    <button 
                      onClick={() => setActiveHotspot(null)}
                      className="p-4 bg-slate-800/80 hover:bg-slate-700 rounded-3xl transition-all text-slate-400 group border border-slate-700"
                    >
                      <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>

                  <div className="flex-grow">
                    <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                      {activeHotspot.description}
                    </p>

                    <div className="space-y-10 relative z-10">
                      <h4 className="text-[18px] font-black uppercase tracking-tight text-red-500 flex items-center gap-3">
                         <ShieldAlert className="w-6 h-6" />
                         ליקויי בנייה שכיחים באזור זה:
                      </h4>
                      <ul className="space-y-8">
                        {activeHotspot.issues.map((issue, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-5 group"
                          >
                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-600 group-hover:border-red-600 transition-all shadow-lg shadow-red-900/20">
                               <CheckCircle2 className="w-5 h-5 text-red-500 group-hover:text-white" />
                            </div>
                            <span className="text-slate-100 text-lg font-bold leading-tight group-hover:text-red-200 transition-colors">{issue}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-16 pt-12 border-t border-slate-800 relative z-10">
                    <a 
                      href="#contact"
                      className="flex items-center justify-between group bg-red-600 hover:bg-white text-white hover:text-red-700 p-7 rounded-[2rem] transition-all duration-500 shadow-2xl shadow-red-900/50"
                    >
                      <span className="font-black text-sm uppercase tracking-widest">הזמינו בדק בית מקצועי</span>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-red-600/10 flex items-center justify-center transition-all">
                        <ChevronRight className="w-7 h-7 rotate-180 group-hover:translate-x-[-6px] transition-transform" />
                      </div>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3.5rem] p-12 h-full flex flex-col items-center justify-center text-center space-y-10"
                >
                  <div className="w-28 h-28 bg-red-600/10 rounded-[2.5rem] flex items-center justify-center text-red-600 relative">
                    <ShieldAlert className="w-14 h-14" />
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 bg-red-600 rounded-[2.5rem] -z-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-slate-800 mb-5 tracking-tight">לחצו לזיהוי ליקויים קריטיים</h3>
                    <p className="text-slate-500 text-xl max-w-sm mx-auto leading-relaxed font-bold">
                      המהנדסים של אריקס ביקורת מבנים פיתחו תרשים זיהוי ראשוני לליקויים השכיחים ביותר. בחרו נקודה במפה להתחלת הסימולציה.
                    </p>
                  </div>
                  <div className="pt-8 grid grid-cols-2 gap-4 w-full max-w-md">
                    {hotspots.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => setActiveHotspot(s)}
                        className="text-[15px] font-black leading-snug px-5 py-5 bg-white border border-slate-200 rounded-2xl hover:border-red-500 hover:text-red-600 hover:shadow-2xl transition-all shadow-md group border-b-4 ACTIVE:border-b-0 ACTIVE:translate-y-1"
                      >
                        <span className="group-hover:scale-105 block transition-transform">{s.title}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-900 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default InteractiveHousePlan;
