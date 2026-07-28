'use client';

import React, { useState } from 'react';

const PROFESSIONAL_EMAIL = "yossi10@duck.com"; 
const PHONE_NUMBER = "054-7515142";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: '',
    'bot-field': '' // Honeypot
  });

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') setEmailError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('אנא הזן כתובת אימייל תקינה');
      return;
    }

    setStatus('submitting');
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "contact",
          ...formData 
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '', service: '', 'bot-field': '' });
        setEmailError(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('error');
    }
  };

  const services = [
    'בדיקה לפני רכישה',
    'בדיקת דירה חדשה מקבלן',
    'איתור ליקויי בניה ורטיבות',
    'ליווי ופיקוח בבנייה',
    'חוות דעת הנדסית לבית משפט',
  ];

  const whatsappLink = `https://wa.me/972${PHONE_NUMBER.substring(1).replace('-', '')}?text=${encodeURIComponent('היי, אשמח לקבל הצעת מחיר לבדק בית')}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0B132A] scroll-mt-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Form Side (White Card) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-100 text-slate-900">
              {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in" role="alert">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">הפנייה נשלחה בהצלחה!</h4>
                  <p className="text-slate-600 text-base mb-8">תודה שפנית לאריקס ביקורת מבנים. נחזור אליך בהקדם עם כל המידע.</p>
                  <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold hover:underline text-base">
                    שליחת פנייה נוספת
                  </button>
                </div>
              ) : (
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-5" 
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don’t fill this out: <input name="bot-field" onChange={handleChange} /></label>
                  </p>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="text-xs font-bold text-slate-800 mb-1.5 block">
                      שם מלא
                    </label>
                    <input 
                      id="name" 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm font-medium" 
                      placeholder="שמכם המלא" 
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="text-xs font-bold text-slate-800 mb-1.5 block">
                      טלפון
                    </label>
                    <input 
                      id="phone" 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm font-medium" 
                      placeholder="מספר הטלפון שלכם" 
                    />
                  </div>

                  {/* Service select field */}
                  <div>
                    <label htmlFor="service" className="text-xs font-bold text-slate-800 mb-1.5 block">
                      סוג השירות
                    </label>
                    <div className="relative">
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none text-sm font-medium"
                      >
                        <option value="" disabled>בחרו שירות...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-slate-800 mb-1.5 block">
                      אימייל (אופציונלי)
                    </label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "email-error" : undefined}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none text-sm font-medium ${emailError ? 'border-red-400' : 'border-slate-200/90'}`} 
                      placeholder="כתובת האימייל שלכם" 
                    />
                    {emailError && <p id="email-error" className="text-red-500 text-xs mt-1.5 font-bold" role="alert">{emailError}</p>}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="text-xs font-bold text-slate-800 mb-1.5 block">
                      תיאור הנכס / הודעה
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={3} 
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none text-sm font-medium" 
                      placeholder="ספרו לנו קצת על הנכס..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-bold text-center" role="alert">חלה שגיאה בשליחה. אנא נסו שוב או פנו אלינו בוואטסאפ.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'} 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-2"
                  >
                    <span className="sr-only" role="status">
                      {status === 'submitting' ? 'מעבד פנייה...' : ''}
                    </span>
                    {status === 'submitting' ? 'מעבד פנייה...' : 'שלחו הצעה עבורי'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information & Title Side */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center space-y-6 pt-2">
            <div>
              <span className="text-blue-400 font-bold text-xs md:text-sm tracking-wide block mb-2">
                צרו קשר
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                בואו נבטיח את הנכס שלכם
              </h2>
              <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
                השאירו פרטים ונציג מקצועי יחזור אליכם תוך זמן קצר עם הצעת מחיר מותאמת אישית.
              </p>
            </div>

            {/* 3 Dark Info Cards */}
            <div className="space-y-4 pt-2">
              {/* Phone Card */}
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="bg-[#10192F] hover:bg-[#162342] border border-slate-800/80 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 group"
              >
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">התקשרו אלינו</p>
                  <p className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                    {PHONE_NUMBER}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href={`mailto:${PROFESSIONAL_EMAIL}`} 
                className="bg-[#10192F] hover:bg-[#162342] border border-slate-800/80 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 group"
              >
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">שלחו מייל</p>
                  <p className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors break-all">
                    {PROFESSIONAL_EMAIL}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#10192F] hover:bg-[#162342] border border-slate-800/80 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 group"
              >
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">וואטסאפ מהיר</p>
                  <p className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    שלחו הודעה עכשיו
                  </p>
                </div>
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.423 4.842 1.425 5.303 0 9.617-4.312 9.619-9.617.001-2.571-1.003-4.985-2.83-6.81s-4.239-2.827-6.801-2.829c-5.304 0-9.619 4.313-9.621 9.618-.001 1.738.476 3.426 1.38 4.898l-1.035 3.778 3.846-1.007zm11.303-5.004c-.312-.156-1.848-.912-2.141-1.017-.293-.104-.506-.156-.719.156-.213.312-.826 1.017-1.012 1.25-.187.234-.373.26-.686.104-.312-.156-1.316-.486-2.507-1.548-.927-.827-1.553-1.849-1.735-2.162-.182-.312-.019-.481.137-.635.141-.138.312-.364.469-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.719-1.731-.985-2.37-.259-.622-.523-.538-.719-.547l-.613-.013c-.213 0-.559.081-.852.403-.293.322-1.118 1.094-1.118 2.67s1.145 3.1 1.303 3.308c.158.208 2.254 3.441 5.459 4.823.761.329 1.355.525 1.817.671.764.243 1.459.208 2.009.127.613-.091 1.848-.755 2.11-1.485.261-.73.261-1.355.183-1.485-.077-.13-.285-.208-.597-.364z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;