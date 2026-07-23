'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowLeft, CheckCircle, Sparkles, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [phone, setPhone] = React.useState('');
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
          "service": "ייעוץ ראשוני מהיר",
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
          
          {/* Right Side: Main Text & High-Converting Actions */}
          <div className="lg:col-span-7 space-y-6 text-right relative z-20">
            {/* Front-loaded Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-black border border-blue-100">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                אינג׳ יוסי פרי - מהנדס רשוי
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-black border border-emerald-100">
                ✓ מעל 30 שנות ניסיון
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 px-3 py-1.5 rounded-full text-xs font-black border border-slate-200">
                ⚖️ דוח קביל בבית משפט
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.2rem] font-black text-slate-900 leading-[1.15] tracking-tight">
              אריקס ביקורת מבנים: <br />
              <span className="text-blue-600">בדק בית וביקורת הנדסית</span>
            </h1>

            <div className="text-slate-700 text-sm sm:text-base space-y-2 font-bold max-w-2xl leading-relaxed">
              <p>
                עומדים לפני רכישת דירת יד שנייה, קבלת דירה חדשה מקבלן, או זקוקים לחוות דעת מהנדס קבילה בבית משפט? אריקס ביקורת מבנים מספקת מענה הנדסי מקיף ומקצועי.
              </p>
              <p>
                עם למעלה מ-30 שנות ניסיון, אנו מבטיחים בדיקה יסודית המשלבת מכשור טכנולוגי מתקדם, ליווי אישי ודוח הנדסי מפורט להגנה מלאה על ההשקעה והזכויות שלכם.
              </p>
            </div>

            {/* Quick Conversion Widget (Zero Friction Form) */}
            <div className="bg-white border border-blue-100/80 p-6 rounded-3xl shadow-xl max-w-xl relative">
              <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                שיחת ייעוץ חינם ללא התחייבות
              </div>
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
                  className="space-y-3"
                >
                  <input type="hidden" name="form-name" value="quick-callback" />
                  <input type="hidden" name="name" value="פנייה מהירה מההרו" />
                  <input type="hidden" name="service" value="ייעוץ ראשוני מהיר" />
                  <p className="hidden">
                    <label>Don’t fill this out: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} /></label>
                  </p>

                  <div className="text-sm font-black text-slate-800 mb-1 mt-1">
                    השאירו מספר טלפון ומהנדס יחזור אליכם בדקות הקרובות:
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
                </form>
              )}
            </div>

            {/* Actions Block - Clean & Minimalist */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
                {/* 1. Calculator Action */}
                <button 
                  onClick={() => document.getElementById('recommender')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl shadow-sm transition-all active:scale-95 text-sm flex items-center justify-center gap-2 cursor-pointer group"
                >
                  התחילו בדיקה דיגיטלית מהירה
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* 2. Direct Call Action */}
                <a 
                  href="tel:054-7515142"
                  className="px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-black rounded-xl transition-all active:scale-95 text-sm flex items-center justify-center gap-2 border border-blue-100"
                >
                  <Phone className="w-4 h-4" />
                  שיחה ישירה ליוסי: 054-7515142
                </a>

                {/* 3. Sample Report Action */}
                <Link 
                  href="/sample-report"
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all active:scale-95 text-sm flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  דוח לדוגמא (PDF)
                </Link>
              </div>

              {/* Minimalist inline mentions */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mr-1 font-bold">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  בדיקה יסודית ללא שום התחייבות
                </span>
                <span className="text-slate-300">|</span>
                <a 
                  href={`https://wa.me/972547515142?text=${encodeURIComponent('שלום לכם, נשמח אם תוכלו לחזור אלינו בקשר להצעת מחיר')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-600 hover:underline flex items-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                  שלחו הודעה מהירה ב-WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Left Side: Gorgeous Interactive Visual Frame matching the image exactly */}
          <div className="lg:col-span-5 relative px-4 lg:px-0 flex justify-center lg:justify-end lg:-mr-24 xl:-mr-36 z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[500px] lg:max-w-[636px]"
            >
              {/* Outer decorative card shadow blur */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 to-slate-900/10 rounded-[2.5rem] blur opacity-45"></div>
              
              {/* Main Image Frame */}
              <div className="relative rounded-[2.5rem] border-[12px] border-white shadow-2xl overflow-hidden aspect-[24/25] bg-white">
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
                
                {/* Bottom Overlay Frosted Glass Banner */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/45 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between z-10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-white text-xs font-black leading-none">זמין לקריאות</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-300 block font-black leading-none mb-1">דסק לקריאות</span>
                    <span className="text-white text-sm font-black block">פריסה ארצית מלאה</span>
                  </div>
                </div>
              </div>

              {/* Top-Right Badge (+20 Years Experience) half-overlapping the border */}
              <div className="absolute -top-5 -right-5 bg-white rounded-3xl py-4.5 px-6 shadow-xl border border-slate-100 flex flex-col items-center justify-center z-20 min-w-[105px] hover:scale-105 transition-transform">
                <span className="text-3xl font-black text-blue-600 leading-none">+20</span>
                <span className="text-[10px] font-extrabold text-slate-400 mt-2 text-center leading-tight">שנות <br />ניסיון</span>
              </div>

              {/* Bottom-Left Badge (Court-Certified Report) half-overlapping the border */}
              <div className="absolute top-[60%] -left-6 bg-white rounded-3xl p-5 shadow-xl border border-slate-100 flex flex-col items-center justify-center z-20 max-w-[145px] text-center hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[11px] font-black text-slate-800 leading-tight">דוח הנדסי <br />קביל משפטית</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
