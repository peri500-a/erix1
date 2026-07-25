'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FileWarning, 
  Calendar, 
  Droplets, 
  Scale, 
  DollarSign, 
  Zap, 
  Wrench, 
  Home, 
  Shield, 
  Hammer, 
  Layers, 
  Users, 
  Search, 
  Volume2 
} from 'lucide-react';
import SchemaTags from './SchemaTags';
import { articles } from '../data/articles';

const getArticleIcon = (id: string) => {
  const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
  switch (id) {
    case 'when-to-inspect':
      return <BookOpen {...iconProps} className={`${iconProps.className} text-blue-600`} />;
    case 'building-violations':
      return <FileWarning {...iconProps} className={`${iconProps.className} text-amber-600`} />;
    case 'warranty-year':
      return <Calendar {...iconProps} className={`${iconProps.className} text-indigo-600`} />;
    case 'leakage-detection':
      return <Droplets {...iconProps} className={`${iconProps.className} text-cyan-600`} />;
    case 'court-expert-report':
      return <Scale {...iconProps} className={`${iconProps.className} text-violet-600`} />;
    case 'pricing-factors':
      return <DollarSign {...iconProps} className={`${iconProps.className} text-emerald-600`} />;
    case 'electrical-defects':
      return <Zap {...iconProps} className={`${iconProps.className} text-yellow-500`} />;
    case 'plumbing-issues':
      return <Wrench {...iconProps} className={`${iconProps.className} text-teal-600`} />;
    case 'roof-inspection':
      return <Home {...iconProps} className={`${iconProps.className} text-sky-600`} />;
    case 'structural-safety':
      return <Shield {...iconProps} className={`${iconProps.className} text-rose-600`} />;
    case 'renovation-inspection':
      return <Hammer {...iconProps} className={`${iconProps.className} text-orange-600`} />;
    case 'balcony-sealing':
      return <Layers {...iconProps} className={`${iconProps.className} text-blue-500`} />;
    case 'common-areas-inspection':
      return <Users {...iconProps} className={`${iconProps.className} text-purple-600`} />;
    case 'cracks-analysis':
      return <Search {...iconProps} className={`${iconProps.className} text-red-500`} />;
    case 'acoustics-inspection':
      return <Volume2 {...iconProps} className={`${iconProps.className} text-pink-600`} />;
    default:
      return <BookOpen {...iconProps} className={`${iconProps.className} text-blue-600`} />;
  }
};

export { articles };

const KnowledgeHub: React.FC<{ initialArticleId?: string | null; preventScroll?: boolean }> = ({ initialArticleId, preventScroll = false }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(articles.map(a => a.category)))];

  const toggleExpand = (id: string, slug?: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        if (slug) {
          window.history.pushState(null, '', `/${slug}`);
        }
      }
      return next;
    });
  };

  const filteredArticles = activeTab === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeTab);

  useEffect(() => {
    if (initialArticleId) {
      const article = articles.find(a => a.slug === initialArticleId || a.id === initialArticleId);
      if (article) {
        setExpandedIds(new Set([article.id]));
        if (!preventScroll) {
          setTimeout(() => {
            const element = document.getElementById(`article-${article.id}`);
            if (element) {
              const offset = 120;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 500);
        }
      }
    }
  }, [initialArticleId, preventScroll]);

  return (
    <section id="knowledge" className="py-6 md:py-12 bg-slate-50 relative overflow-hidden" suppressHydrationWarning>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10" suppressHydrationWarning>
        <div className="text-center mb-4 md:mb-8" suppressHydrationWarning>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            מרכז המומחים של אריקס ביקורת מבנים
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            מאגר ידע <span className="text-blue-600">הנדסי</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            כל מה שצריך לדעת על בדק בית, איתור ליקויי בנייה וזכויות הרוכשים. המומחים שלנו ריכזו עבורכם את המידע העדכני ביותר כדי שתקבלו החלטות מושכלות.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeTab === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat === 'all' ? 'כל המאמרים' : cat}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => {
              const isExpanded = expandedIds.has(article.id);
              return (
                <motion.article
                  key={article.id}
                  id={`article-${article.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isExpanded 
                      ? 'border-blue-200 shadow-2xl ring-1 ring-blue-50' 
                      : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-8 md:p-10 flex flex-col w-full">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-14 h-14 bg-slate-100/60 flex items-center justify-center rounded-2xl shadow-sm border border-slate-200/50 flex-shrink-0">
                          {getArticleIcon(article.id)}
                        </span>
                        <div className="text-right">
                          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">{article.category}</span>
                          <span className="text-slate-400 text-[10px] md:text-xs">פורסם ב-{article.datePublished}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                        {article.title}
                      </h3>
                      
                      <div className={`text-slate-600 leading-relaxed text-base mb-8 ${isExpanded ? '' : 'line-clamp-3'}`}>
                        {article.excerpt}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <button
                          onClick={() => toggleExpand(article.id, article.slug)}
                          className={`flex items-center gap-3 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                            isExpanded 
                              ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:-translate-y-1'
                          }`}
                        >
                          <span>{isExpanded ? 'סגור מאמר' : 'קרא עוד'}</span>
                          <motion.svg 
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="text-xs font-bold">{article.author}</span>
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
                             <span className="text-xs">👤</span>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-12 mt-12 border-t border-slate-100">
                              <SchemaTags 
                                type="Article" 
                                data={{
                                  headline: article.title,
                                  description: article.seoDescription,
                                  image: article.image,
                                  author: { "@type": "Person", "name": article.author },
                                  datePublished: article.datePublished
                                }} 
                              />
                              <div className="prose prose-blue max-w-none prose-lg md:prose-xl text-slate-700 leading-[1.8]">
                                {article.content}
                              </div>

                              {/* Author E-E-A-T Bio Box */}
                              <div className="mt-12 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row gap-5 items-center sm:items-start text-right">
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md border border-blue-500">
                                  יפ
                                </div>
                                <div>
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h4 className="font-black text-slate-900 text-lg">נכתב ונבדק מקצועית ע&quot;י אינג&apos; יוסי פרי</h4>
                                    <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">מהנדס רשוי</span>
                                  </div>
                                  <p className="text-xs text-blue-600 font-bold mb-2">
                                    מהנדס בניין מורשה ורשום (מ.ר 78687) | מומחה בדק בית וחוות דעת הנדסית לבית משפט
                                  </p>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    בעל למעלה מ-30 שנות ניסיון מעשי בהנדסה אזרחית, ניהול פרויקטים, ביקורת מבנים ואיתור ליקויים סמויים. העיד במאות תיקים משפטיים כמומחה מוסמך מטעם בית המשפט.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="mt-16 flex justify-center">
                                <button
                                  onClick={() => toggleExpand(article.id)}
                                  className="text-slate-400 hover:text-blue-600 font-bold flex flex-col items-center gap-2 transition-colors group"
                                >
                                  <span className="text-sm">חזרה למעלה</span>
                                  <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 transition-all">
                                    <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      
      <style>{`
        .prose strong {
          color: #2563eb;
          font-weight: 800;
        }
        .prose h3 {
          color: #1e293b;
          font-weight: 900;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </section>
  );
};

export default KnowledgeHub;
