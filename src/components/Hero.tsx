'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, FileText, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [phone, setPhone] = React.useState('');
  const [selectedService, setSelectedService] = React.useState('בדיקה לפני רכישה');
  const [botField, setBotField] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setStatus('submitting');
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "quick-callback",
          "phone": phone,
          "name": "פנייה מהירה מההרו",
          "service": selectedService || "בדיקה לפני רכישה",
          "bot-field": botField
        }).toString()
      });
      setStatus('success');
      setPhone('');
      setBotField('');
    } catch (err) {
      console.error(err);
      setStatus('success');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-white grid-bg" 
      dir="rtl"
      suppressHydrationWarning
    >
      {/* Soft Blue Radial Background Glows matching the photo design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Side: Main Text & Consolidated High-Converting Action */}
          <div className="lg:col-span-7 space-y-6 text-right relative z-20">
            {/* Unified Front-loaded Trust Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                אינג׳ יוסי פרי - מהנדס רשוי
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                מעל 30 שנות ניסיון
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                דוח קביל בבית משפט
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[3.8rem] xl:text-[4rem] font-black text-slate-900 leading-[1.15] tracking-tight">
              אריקס ביקורת מבנים: <br />
              <span className="text-blue-600 font-black">בדק בית וביקורת הנדסית</span>
            </h1>

            <div className="text-slate-900 text-base sm:text-[1.05rem] space-y-3.5 font-bold max-w-2xl leading-relaxed">
              <p>
                עומדים לפני רכישת דירת יד שנייה, קבלת דירה חדשה מקבלן, או זקוקים לחוות דעת מהנדס קבילה בבית משפט? <span className="text-blue-700 font-extrabold">אריקס ביקורת מבנים</span> מלווה אתכם עם מעל 30 שנות ניסיון הנדסי ו-10,000+ בדיקות מוצלחות ברחבי הארץ.
              </p>
              <p className="bg-blue-50/80 p-3 rounded-xl border-r-4 border-blue-600 text-slate-900">
                כל דוח נכתב ונחתם אישית ע&quot;י <span className="font-extrabold text-blue-900">אינג&apos; יוסי פרי, מהנדס בניין רשוי</span> — לא צוות פרילנסרים משתנה — כך שאתם מקבלים אחריות אישית מלאה לאורך כל התהליך.
              </p>
              <p>
                באמצעות מצלמות תרמיות ומכשור דיגיטלי, אנו מאתרים ליקויים סמויים, רטיבות וכשלי בנייה לפני שהם הופכים להפתעה לא נעימה — ומספקים לכם דוח הנדסי מפורט, קביל במלואו בבית משפט, שמעניק לכם כוח מיקוח אמיתי מול הקבלן או המוכר ויכול לשמש אתכם לצילום מצב קיים.
              </p>
            </div>

            {/* Quick Conversion Widget (Primary Focused CTA) */}
            <div className="bg-white border border-blue-100/80 p-6 rounded-3xl shadow-xl max-w-xl relative">
              {status === 'success' ? (
                <div className="text-right text-emerald-700 font-black flex items-center gap-2 py-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>הבקשה התקבלה! יוסי יחזור אליך בהקדם לשיחת ייעוץ חינם.</span>
                </div>
              ) : (
                <form 
                  name="quick-callback"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleQuickSubmit} 
                  className="space-y-3.5"
                >
                  <input type="hidden" name="form-name" value="quick-callback" />
                  <input type="hidden" name="name" value="פנייה מהירה מההרו" />
                  <input type="hidden" name="service" value={selectedService} />
                  <p className="hidden">
                    <label>Don’t fill this out: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} /></label>
                  </p>

                  <div className="text-sm font-black text-slate-800 mb-1 mt-1 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>השאירו מספר טלפון ומהנדס יחזור אליכם בדקות הקרובות:</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="tel" 
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="לדוגמא: 05X-XXXXXXX"
                      className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:bg-white focus:border-blue-500 transition-all outline-none text-base font-bold text-right"
                      dir="rtl"
                    />
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all text-base cursor-pointer whitespace-nowrap"
                    >
                      {status === 'submitting' ? 'שולח...' : 'ייעוץ חינם עכשיו'}
                    </button>
                  </div>

                  {/* Service Type Selection & 1-Click Quick Choice */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>בחירה מהירה בלחיצה אחת של סוג השירות:</span>
                    </div>

                    {/* Quick 1-Click Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'בדיקה לפני רכישה', full: 'בדיקה לפני רכישה (בדק בית יד שנייה)' },
                        { label: 'דירה חדשה מקבלן', full: 'בדיקת דירה חדשה מקבלן' },
                        { label: 'איתור ליקויים ורטיבות', full: 'איתור ליקויי בניה ורטיבות' },
                        { label: 'חוות דעת לבית משפט', full: 'חוות דעת הנדסית לבית משפט' },
                        { label: 'ליווי ופיקוח בנייה', full: 'ליווי ופיקוח בבנייה' }
                      ].map((srv) => {
                        const isSelected = selectedService === srv.full;
                        return (
                          <button
                            key={srv.label}
                            type="button"
                            onClick={() => setSelectedService(srv.full)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border-slate-200'
                            }`}
                          >
                            {srv.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Dropdown Select option matching user design */}
                    <div className="pt-1">
                      <select
                        name="service-dropdown"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 text-xs font-bold focus:bg-white focus:border-blue-500 transition-all outline-none text-right cursor-pointer"
                        dir="rtl"
                      >
                        <option value="בדיקה לפני רכישה (בדק בית יד שנייה)">בדיקה לפני רכישה (בדק בית יד שנייה)</option>
                        <option value="בדיקת דירה חדשה מקבלן">בדיקת דירה חדשה מקבלן</option>
                        <option value="איתור ליקויי בניה ורטיבות">איתור ליקויי בניה ורטיבות</option>
                        <option value="ליווי ופיקוח בבנייה">ליווי ופיקוח בבנייה</option>
                        <option value="חוות דעת הנדסית לבית משפט">חוות דעת הנדסית לבית משפט</option>
                      </select>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Consolidated Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link 
                href="/sample-report"
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl border border-slate-200/80 transition-all text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                צפו בדוח לדוגמא (PDF)
              </Link>
            </div>
          </div>

          {/* Left Side: Clean, High-Impact Hero Photo */}
          <div className="lg:col-span-5 relative px-4 lg:px-0 flex justify-center lg:justify-end lg:-mr-28 xl:-mr-40 z-10 -mt-6 lg:-mt-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[550px] lg:max-w-[700px]"
            >
              {/* Outer decorative card shadow blur */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 to-slate-900/10 rounded-[2.5rem] blur opacity-45"></div>
              
              {/* Main Image Frame - height increased ~15% from aspect-[132/125] to aspect-[132/145] */}
              <div className="relative rounded-[2.5rem] border-[12px] border-white shadow-2xl overflow-hidden aspect-[132/145] bg-white">
                <Image 
                  src="https://res.cloudinary.com/dbzklnlcx/image/upload/v1784734874/main-photo_ycy6j8.jpg" 
                  alt="בדק בית מקצועי אריקס ביקורת מבנים" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                  {...({ fetchPriority: "high" } as any)}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Consolidated Trust & Stat Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-xs">
            <div className="text-2xl md:text-3xl font-black text-blue-600">+30</div>
            <div className="text-xs md:text-sm font-bold text-slate-700 mt-1">שנות ניסיון הנדסי</div>
          </div>
          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-xs">
            <div className="text-2xl md:text-3xl font-black text-blue-600">100%</div>
            <div className="text-xs md:text-sm font-bold text-slate-700 mt-1">דוחות קבילים בבית משפט</div>
          </div>
          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-xs">
            <div className="text-2xl md:text-3xl font-black text-blue-600">10,000+</div>
            <div className="text-xs md:text-sm font-bold text-slate-700 mt-1">בדיקות נכסים מוצלחות</div>
          </div>
          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-xs">
            <div className="text-2xl md:text-3xl font-black text-blue-600">פריסה ארצית</div>
            <div className="text-xs md:text-sm font-bold text-slate-700 mt-1">מענה מהיר בכל הארץ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
