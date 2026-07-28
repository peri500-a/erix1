'use client';

import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'שירות יוצא מן הכלל. מהשיחה הראשונה ועד קבלת הדוח הרגשנו שיש על מי לסמוך. הדוח היה ברור ומקצועי, ועזר לנו מאוד במשא ומתן.',
      name: 'סיגל כהן',
      city: 'ראשון לציון',
      initial: 'ס',
      tag: 'לקוח מאומת'
    },
    {
      quote: 'חשבנו שהבית שמצאנו מושלם, אבל הבדיקה גילתה בעיות איטום רציניות בגג. המהנדס היה יסודי והסביר הכל בסבלנות. מנעתם מאיתנו אסון כלכלי.',
      name: 'תומר ושירי',
      city: 'באר שבע',
      initial: 'ת',
      tag: 'לקוח מאומת'
    },
    {
      quote: 'הגענו דרך המלצה ולא התאכזבנו. הדוח המפורט חשף ליקויים שהקבלן שכח לציין. בזכותם נכנסנו לדירה מושלמת וחסכנו עשרות אלפי שקלים.',
      name: 'משפחת אבידן',
      city: 'רעננה',
      initial: 'מ',
      tag: 'לקוח מאומת'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50/60 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 font-bold text-sm md:text-base tracking-wide block mb-2">
            המלצות לקוחות
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            אלפי לקוחות מרוצים
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            השקט הנפשי שלכם הוא המשימה שלנו. הנה כמה סיפורים מהשטח.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.google.com/maps/place//@32.0076968,34.9659148,10z/data=!3m1!4b1!4m3!3m2!1s0x1502b359b8db2f6b:0xaad745e4d96444d3!12e1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm md:text-base px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>לכל הביקורות וההמלצות בגוגל מפות</span>
              <svg className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 left-6 text-blue-200 opacity-80 pointer-events-none">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3561 14 14.017 12.6609 14.017 11V7H20.017V14L20.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017V14H7.017C5.35614 14 4.017 12.6609 4.017 11V7H10.017V14L10.017 21H4.017Z" />
                </svg>
              </div>

              <div className="mb-6 pt-2">
                {/* Review Quote */}
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium mb-6">
                  &quot;{item.quote}&quot;
                </p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div>
                <hr className="border-slate-100 mb-5" />

                <div className="flex items-center justify-between">
                  {/* Verified Customer Badge */}
                  <span className="inline-flex items-center bg-emerald-50 text-emerald-600 font-bold text-xs px-3 py-1.5 rounded-full">
                    {item.tag}
                  </span>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 dir-rtl">
                    <div className="text-right">
                      <p className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                        <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{item.city}</span>
                      </p>
                    </div>

                    {/* Blue Avatar Circle */}
                    <div className="w-10 h-10 bg-blue-600 text-white font-bold text-base rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      {item.initial}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;