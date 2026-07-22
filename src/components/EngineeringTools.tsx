'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Camera, Zap, Ruler, ShieldCheck, Thermometer, Microscope } from 'lucide-react';

const tools = [
  {
    name: 'מצלמה תרמית FLIR',
    description: 'איתור נזילות ורטיבות כלואה מתחת לריצוף ובתוך קירות ללא הרס.',
    icon: <Camera className="w-8 h-8" />,
    stats: 'דיוק של 0.1°C'
  },
  {
    name: 'מד לייזר BOSCH',
    description: 'מדידת סטיות במישוריות הקירות והרצפה בדיוק מילימטרי.',
    icon: <Ruler className="w-8 h-8" />,
    stats: 'סטייה < 1.5mm'
  },
  {
    name: 'מד לחות דיגיטלי',
    description: 'מדידת אחוזי לחות בבטון וביצוע בדיקות לעמידה בתקן 1555.',
    icon: <Thermometer className="w-8 h-8" />,
    stats: 'בדיקות תקן 1555'
  },
  {
    name: 'ציוד אקוסטי מתקדם',
    description: 'בדיקת בידוד אקוסטי בין קומות ודירות ואיתור כשלי אטימה לרעש.',
    icon: <Zap className="w-8 h-8" />,
    stats: 'עמידה בת"י 1004'
  }
];

const EngineeringTools: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative" id="engineering-tech">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              הטכנולוגיה בשירות המהנדס
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              ציוד הנדסי <span className="text-blue-500">בחזית הטכנולוגיה</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-16 h-16 rounded-2xl border-4 border-slate-800 bg-slate-700 flex items-center justify-center text-white shadow-2xl">
                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                  </div>
                ))}
             </div>
             <p className="text-slate-400 font-bold max-w-xs leading-snug">
               כל הבדיקות מבוצעות ע&quot;י מהנדס מצויד במיטב הכלים המדעיים לאבחון מדויק.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] border border-slate-700/50 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-700 text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {tool.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4">{tool.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {tool.description}
              </p>
              <div className="pt-6 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{tool.stats}</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringTools;
