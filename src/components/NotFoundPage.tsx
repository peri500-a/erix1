'use client';

import React from 'react';
import { Home, ArrowRight, Search } from 'lucide-react';

import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20 bg-slate-50">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-100 p-6 rounded-full">
            <Search className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">אופס! הדף שחיפשתם לא נמצא</h2>
        
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          ייתכן שהדף הועבר לכתובת חדשה או שהוסר מהאתר. 
          אל דאגה, המומחים שלנו עדיין כאן בשבילכם.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-200/50"
          >
            <Home className="w-5 h-5" />
            חזרה לדף הבית
          </Link>
          <Link 
            href="/בדק-בית-מחיר"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
          >
            למחירון בדק בית
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">בדק בית מקבלן</h3>
            <p className="text-sm text-slate-500 mb-3">ביקורת דירה חדשה לפני מסירה</p>
            <Link href="/בדק-בית-מקבלן" className="text-blue-600 text-sm font-bold hover:underline">למידע נוסף ←</Link>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">איתור נזילות</h3>
            <p className="text-sm text-slate-500 mb-3">גילוי רטיבות במצלמה תרמית</p>
            <Link href="/איתור-נזילות-ורטיבות" className="text-blue-600 text-sm font-bold hover:underline">למידע נוסף ←</Link>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">חוות דעת מומחה</h3>
            <p className="text-sm text-slate-500 mb-3">דוחות קבילים לבית משפט</p>
            <Link href="/חוות-דעת-הנדסית-לבית-משפט" className="text-blue-600 text-sm font-bold hover:underline">למידע נוסף ←</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
