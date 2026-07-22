'use client';

import React, { useState, useEffect, useCallback } from 'react';

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return parts[0][0] + parts[1][0];
  }
  return name.slice(0, 2);
};

const getAvatarStyle = (name: string) => {
  if (name.includes('אבידן')) {
    return 'bg-blue-50 text-blue-700 border-blue-200';
  }
  if (name.includes('תומר')) {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  }
  return 'bg-purple-50 text-purple-700 border-purple-200';
};

const TestimonialCard: React.FC<{ quote: string; name: string; city: string; isActive: boolean }> = ({ quote, name, city, isActive }) => (
  <div className={`w-full shrink-0 px-4 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
    <div className="prestige-card p-10 md:p-16 flex flex-col items-center text-center group bg-white border-0 shadow-2xl relative">
      {/* Dynamic Profile Avatar Badge with Initials */}
      <div className="mb-6 relative">
        <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center font-black text-2xl shadow-sm tracking-tight transition-transform duration-500 group-hover:scale-105 ${getAvatarStyle(name)}`}>
          {getInitials(name)}
        </div>
        <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-md">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3561 14 14.017 12.6609 14.017 11V7H20.017V14L20.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017V14H7.017C5.35614 14 4.017 12.6609 4.017 11V7H10.017V14L10.017 21H4.017Z" />
          </svg>
        </div>
      </div>

      <div className="flex gap-1.5 mb-6 justify-center">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5.5 h-5.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-slate-800 italic mb-8 leading-relaxed text-xl md:text-2xl font-medium max-w-3xl">
        &quot;{quote}&quot;
      </p>
      
      <div className="pt-6 border-t border-slate-100 w-full max-w-sm mx-auto">
        <div className="font-black text-slate-900 text-xl mb-1 flex items-center justify-center gap-1.5">
          <span>{name}</span>
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
            ✓ לקוח מאומת
          </span>
        </div>
        <div className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">{city}</div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: 'הגענו דרך המלצה ולא התאכזבנו. הדוח המפורט חשף ליקויים שהקבלן "שכח" לציין. בזכותם נכנסנו לדירה מושלמת וחסכנו עשרות אלפי שקלים.',
      name: 'משפחת אבידן',
      city: 'רעננה',
    },
    {
      quote: 'חשבנו שהבית שמצאנו מושלם, אבל הבדיקה גילתה בעיות איטום רציניות בגג. המהנדס היה יסודי והסביר הכל בסבלנות. מנעתם מאיתנו אסון כלכלי.',
      name: 'תומר ושירי',
      city: 'באר שבע',
    },
    {
      quote: 'שירות יוצא מן הכלל. מהשיחה הראשונה ועד קבלת הדוח הרגשנו שיש על מי לסמוך. הדוח היה ברור ומקצועי, ועזר לנו מאוד במשא ומתן.',
      name: 'סיגל כהן',
      city: 'ראשון לציון',
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="py-6 md:py-12 bg-white scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4 md:mb-8">
          <span className="block text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">אלפי לקוחות מרוצים</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">המלצות <span className="text-blue-600">לקוחות</span></h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">השקט הנפשי שלכם הוא המשימה שלנו. הנה כמה סיפורים מהשטח.</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[600px] sm:h-[500px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-20">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-lg group"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 transform rotate-180 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-20">
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-lg group"
              aria-label="Next"
            >
              <svg className="w-6 h-6 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-1 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 focus:outline-none group"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className={`h-2 transition-all duration-500 rounded-full ${index === activeIndex ? 'w-12 bg-blue-600' : 'w-2 bg-slate-200 group-hover:bg-slate-300'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;