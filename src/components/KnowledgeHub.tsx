'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
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
  Volume2,
  Clock,
  Target,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  X,
  ExternalLink,
  HelpCircle,
  CheckCircle2,
  Building2,
  Tag,
  MessageSquare
} from 'lucide-react';
import SchemaTags from './SchemaTags';
import { articles as rawArticles } from '../data/articles';
import { Article } from '../types/article';

// Rich Article Enrichment Map for user intent guidance and value triggers
const enrichedMetadataMap: Record<string, Partial<Article>> = {
  'when-to-inspect': {
    situationId: 'second-hand',
    targetAudience: 'רוכשי דירות יד שנייה ודירות חדשות',
    readingTime: '4 דק׳ קריאה',
    keyQuestion: 'מתי בדיוק להזמין מהנדס כדי לא להפסיד את כוח המיקוח בעסקה?',
    valueTrigger: 'גלו מתי לבצע את הבדיקה לפני החתימה כדי להוריד את מחיר הדירה או לחייב את המוכר בתיקון, ואיך מזהים ליקויים סמויים בעין בלתי מזוינת.',
    isFeatured: true,
  },
  'cumbersome-reports': {
    situationId: 'contractor',
    targetAudience: 'רוכשי דירה מקבלן ודיירים בבנייה חדשה',
    readingTime: '4 דק׳ קריאה',
    keyQuestion: 'למה 95% מהדוחות בשוק מזיקים לתיקון הליקויים במקום לעזור?',
    valueTrigger: '95% מהדוחות בשוק עמוסים בציטוטים משפטיים שאף פועל בשטח לא קורא. גלו איך דוח הנדסי ויזואלי וממוקד מביא לתיקון מהיר ללא מלחמות מיותרות.',
    isFeatured: true,
  },
  'warranty-year': {
    situationId: 'contractor',
    targetAudience: 'דיירים שנכנסו לדירה חדשה בשנה האחרונה',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'מה הקבלן חייב לתקן בשנת הבדק ומה קורה אם תפספסו את המועד?',
    valueTrigger: 'הסבר מעשי על ההבדל בין תקופת הבדק לאחריות, אילו ליקויים מתגלים רק אחרי שנה של מגורים, ואיך מחייבים את הקבלן לתקן הכל לפני שהאחריות פגה.',
    isFeatured: true,
  },
  'building-violations': {
    situationId: 'second-hand',
    targetAudience: 'רוכשי דירות, בתים פרטיים וצמודי קרקע',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'איך חריגת בנייה של המוכר עלולה להפוך לסיכון פלילי וקנסות שלכם?',
    valueTrigger: 'חריגת בנייה היא סיכון משפטי ותכנוני חמור. גלו איך מהנדס משווה בין תשריט הועדה המקומית לבית בשטח ומונע סיבוך יקר מול הרשויות.',
  },
  'leakage-detection': {
    situationId: 'moisture-sealing',
    targetAudience: 'בעלי דירות הסובלים מרטיבות או נזילה סמויה',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'איך מצלמה תרמית ומד-לחות מוצאים את מקור המים מבלי לשבור קירות?',
    valueTrigger: 'בלי הרס מיותר: למדו איך ציוד תרמי ואקוסטי מתקדם מאתר את מקור הרטיבות המדויק ומונע נזקי עתק לשלד ולריצוף.',
  },
  'court-expert-report': {
    situationId: 'legal',
    targetAudience: 'תובעים, נתבעים ודיירים במחלוקת מול קבלן/יזם',
    readingTime: '5 דק׳ קריאה',
    keyQuestion: 'מתי דוח בדק בית רגיל כבר לא מספיק ונדרשת חוות דעת קבילה משפטית?',
    valueTrigger: 'כשהקבלן מסרב לתקן או מכחיש ליקויים, נדרש דוח קביל בבית המשפט. גלו מה הופך חוות דעת לקבילה משפטית ואיך עדות מהנדס מומחה מכריעה תיקים.',
  },
  'pricing-factors': {
    situationId: 'pricing-renovation',
    targetAudience: 'כל מי ששוקל להזמין בדק בית ורוצה להבין תמחור',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'ממה מורכב מחיר הבדיקה ואיך נמנעים מהצעות מחיר מחשידות?',
    valueTrigger: 'פירוק שקוף של גורמי התמחור (גודל, ציוד טכנולוגי) ואיך בדיקה מקצועית מחזירה את העלות שלה פי 5-10 בחיסכון ישיר מול הקבלן.',
  },
  'electrical-defects': {
    situationId: 'contractor',
    targetAudience: 'רוכשי דירות חדשות ודירות יד שנייה',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'למה בדיקת לוח החשמל וההארקה בדירה חדשה היא מצילת חיים?',
    valueTrigger: 'מערכות חשמל שלא עברו בדיקה תקנית עלולות לגרום להתחשמלות ולשריפות. גלו אילו ליקויי חשמל נפוצים בדירות חדשות ואיך מוודאים בטיחות.',
  },
  'plumbing-issues': {
    situationId: 'moisture-sealing',
    targetAudience: 'רוכשי דירות ובעלי נכסים',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'איך שיפועים הפוכים וחיבורים רופפים מתחת לריצוף יוצרים רטיבות?',
    valueTrigger: 'נזקי צנרת הם מהיקרים ביותר לתיקון. למדו מהם הליקויים הנפוצים בצנרת הדלוחין, ואיך בדיקת לחץ ושיפועים מונעת הצפות חבויות.',
  },
  'roof-inspection': {
    situationId: 'moisture-sealing',
    targetAudience: 'בעלי בתים פרטיים, קומות עליונות ודיירי גג',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'איך מזהים כשל איטומי בגג עוד לפני הגשם הראשון?',
    valueTrigger: 'חלחול מים מהגג גורם לנזק בלתי הפיך לתקרה ולתשתיות. גלו איך בודקים מרזבים, יריעות ביטומניות ושיפועים לפני שמגיע החורף.',
  },
  'structural-safety': {
    situationId: 'second-hand',
    targetAudience: 'קוני בתים ישנים, דירות בבניינים וותיקים ושינויי דיירים',
    readingTime: '4 דק׳ קריאה',
    keyQuestion: 'איך מזהים עמודי תמיכה פגומים או קורות שנפגעו במהלך שיפוץ?',
    valueTrigger: 'בדיקת יציבות ושלד היא לב הביטחון האישי בבית. גלו אילו סימנים מעידים על בעיית עומסים ואיך מהנדס בוחן תוספות בנייה וסדקים.',
  },
  'renovation-inspection': {
    situationId: 'pricing-renovation',
    targetAudience: 'בעלי דירות המתכננים שיפוץ מקיף',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'למה כדאי להזמין מהנדס דווקא לפני שמתחילים לשפץ?',
    valueTrigger: 'שיפוץ ללא ייעוץ הנדסי מוקדם עלול להסתיים בנזק לשלד ובחריגות תקציב אדירות. למדו איזה מפרט הנדסי נדרש להגיש לקבלן השיפוצים מראש.',
  },
  'balcony-sealing': {
    situationId: 'moisture-sealing',
    targetAudience: 'בעלי דירות עם מרפסות שמש וגגות מרוצפים',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'למה מרפסות רבות סובלות מזליגת מים לשכנים בקומה למטה?',
    valueTrigger: 'איטום מרפסת דורש דיוק של רף ניקוז כפול ושיפועים תקניים. גלו מהן הטעויות השכיחות בביצוע האיטום ואיך בדיקת הצפה מונעת עוגמת נפש.',
  },
  'common-areas-inspection': {
    situationId: 'pricing-renovation',
    targetAudience: 'ועדי בתים, נציגויות דיירים ורוכשים בבניינים חדשים',
    readingTime: '4 דק׳ קריאה',
    keyQuestion: 'איך מעליות, משאבות מים וחדרי חשמל משפיעים על הכיס שלכם?',
    valueTrigger: 'ליקויים ברכוש המשותף עולים מאות אלפי שקלים בתחזוקה. למדו איך ועד הבית יכול לחייב את הקבלן לתקן את הלובי והגג לפני תום שנת הבדק.',
  },
  'cracks-analysis': {
    situationId: 'second-hand',
    targetAudience: 'בעלי דירות ורוכשים שנתקלו בסדקים בקיר',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'איך מבדילים בין סדק נימי בטיח לבין סדק אלכסוני בקיר נושא?',
    valueTrigger: 'לא כל סדק מאיים על הבית, אך סדקים קונסטרוקטיביים דורשים טיפול מיידי. מדריך ויזואלי לאבחון סוגי סדקים ואיך מהנדס קובע דרגת סיכון.',
  },
  'acoustics-inspection': {
    situationId: 'moisture-sealing',
    targetAudience: 'דיירים בבנייה רוויה הסובלים ממטרדי רעש',
    readingTime: '3 דק׳ קריאה',
    keyQuestion: 'מה התקן הישראלי קובע לגבי רעש הולם וצעדים מהקומה למעלה?',
    valueTrigger: 'מטרדי רעש מהשכנים פוגעים קשות באיכות החיים. גלו איך בדיקה אקוסטית מדעית מודדת דציבלים מול התקן ומחייבת את הקבלן בהוספת בידוד.',
  },
};

// Situation Filter Definitions
interface SituationCategory {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  color: string;
}

const SITUATION_CATEGORIES: SituationCategory[] = [
  {
    id: 'all',
    title: 'כל המאמרים',
    subtitle: 'כל מאגר הידע ההנדסי במקום אחד',
    badge: '16 מאמרים',
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    color: 'border-blue-200 bg-blue-50/50 text-blue-900',
  },
  {
    id: 'contractor',
    title: 'דירה חדשה מקבלן',
    subtitle: 'מסירה ראשונית, שנת בדק, דוח עבודה',
    badge: 'לקראת מפתח / שנת בדק',
    icon: <Building2 className="w-5 h-5 text-indigo-600" />,
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-900',
  },
  {
    id: 'second-hand',
    title: 'יד שנייה / בית פרטי',
    subtitle: 'בדיקה לפני חוזה, חריגות בנייה, סדקים',
    badge: 'לפני חתימה בעסקה',
    icon: <Home className="w-5 h-5 text-emerald-600" />,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900',
  },
  {
    id: 'moisture-sealing',
    title: 'רטיבות, איטום ורעש',
    subtitle: 'איתור נזילות, גגות, מרפסות, אקוסטיקה',
    badge: 'אבחון ליקויים סמויים',
    icon: <Droplets className="w-5 h-5 text-cyan-600" />,
    color: 'border-cyan-200 bg-cyan-50/50 text-cyan-900',
  },
  {
    id: 'legal',
    title: 'משפטי ובית משפט',
    subtitle: 'חוות דעת קבילה, סכסוכי קבלן',
    badge: 'מחלוקות והליכים משפטיים',
    icon: <Scale className="w-5 h-5 text-violet-600" />,
    color: 'border-violet-200 bg-violet-50/50 text-violet-900',
  },
  {
    id: 'pricing-renovation',
    title: 'עלויות, שיפוצים ורכוש משותף',
    subtitle: 'מחירים, בדיקה לפני שיפוץ, ועד בית',
    badge: 'תקציב, ועד בית ושיפוצים',
    icon: <DollarSign className="w-5 h-5 text-amber-600" />,
    color: 'border-amber-200 bg-amber-50/50 text-amber-900',
  },
];

const QUICK_TAGS = [
  { label: '#קבלן', query: 'קבלן' },
  { label: '#רטיבות', query: 'רטיבות' },
  { label: '#שנת_בדק', query: 'שנת בדק' },
  { label: '#חריגות_בנייה', query: 'חריגות' },
  { label: '#בית_משפט', query: 'משפט' },
  { label: '#דוח_מסורבל', query: 'מסורבל' },
  { label: '#סדקים', query: 'סדקים' },
  { label: '#מחיר', query: 'מחיר' },
];

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

export { rawArticles as articles };

const KnowledgeHub: React.FC<{ initialArticleId?: string | null; preventScroll?: boolean }> = ({ 
  initialArticleId, 
  preventScroll = false 
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedSituation, setSelectedSituation] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Combine raw articles with enrichment metadata
  const articles: Article[] = useMemo(() => {
    return rawArticles.map(art => {
      const extra = enrichedMetadataMap[art.id] || {};
      return {
        ...art,
        ...extra,
        readingTime: extra.readingTime || '3 דק׳ קריאה',
        targetAudience: extra.targetAudience || 'רוכשי דירות ובעלי נכסים',
        keyQuestion: extra.keyQuestion || art.title,
        valueTrigger: extra.valueTrigger || art.excerpt,
        situationId: extra.situationId || 'second-hand',
      };
    });
  }, []);

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

  // Filter articles by Situation and Search Query
  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      // Situation filter
      const matchesSituation = selectedSituation === 'all' || art.situationId === selectedSituation;
      
      // Search query filter
      if (!matchesSituation) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = art.title.toLowerCase().includes(q);
      const excerptMatch = art.excerpt.toLowerCase().includes(q);
      const triggerMatch = art.valueTrigger?.toLowerCase().includes(q);
      const questionMatch = art.keyQuestion?.toLowerCase().includes(q);
      const categoryMatch = art.category.toLowerCase().includes(q);
      const audienceMatch = art.targetAudience?.toLowerCase().includes(q);

      return titleMatch || excerptMatch || triggerMatch || questionMatch || categoryMatch || audienceMatch;
    });
  }, [articles, selectedSituation, searchQuery]);

  // Featured articles
  const featuredArticles = useMemo(() => {
    return articles.filter(a => a.isFeatured);
  }, [articles]);

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
  }, [initialArticleId, preventScroll, articles]);

  return (
    <section id="knowledge" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden text-right" suppressHydrationWarning>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10" suppressHydrationWarning>
        
        {/* Header Block */}
        <div className="text-center mb-10 max-w-4xl mx-auto" suppressHydrationWarning>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 border border-blue-200 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>מרכז הידע והמומחיות ההנדסית - אריקס ביקורת מבנים</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight"
          >
            איך למצוא בדיוק את המידע ההנדסי <span className="text-blue-600">שאתם צריכים?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            בלי גיבובי מילים וציטוטי חוקים מיותרים — המאמרים כאן נכתבו מתוך ניסיון שטח של 30 שנה כדי לתת לכם ערך מעשי, להסביר מה מגיע לכם בחוק ואיך לקבל בית תקין.
          </motion.p>
        </div>

        {/* STEP 1: Life Situation Selector Tiles */}
        <div className="mb-10" role="region" aria-label="סינון מאמרים לפי נושא">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs sm:text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-4.5 h-4.5 text-blue-700" />
              באיזה שלב או מצב אתם נמצאים? (בחרו לסינון מהיר)
            </span>
            {selectedSituation !== 'all' && (
              <button 
                onClick={() => setSelectedSituation('all')}
                aria-label="הצג את כל המאמרים - ביטול סינון"
                className="text-xs sm:text-sm text-blue-800 font-black hover:underline flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none rounded-lg p-1"
              >
                <span>הצג את כל המאמרים</span>
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SITUATION_CATEGORIES.map((cat) => {
              const isSelected = selectedSituation === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSituation(cat.id)}
                  aria-pressed={isSelected}
                  aria-label={`סינון לפי ${cat.title} - ${cat.badge}`}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between relative group min-h-[110px] focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:outline-none ${
                    isSelected
                      ? 'bg-blue-800 border-blue-900 text-white shadow-lg scale-[1.02] ring-2 ring-blue-600'
                      : 'bg-white border-slate-300 text-slate-900 hover:border-blue-700 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-white text-blue-900' : 'bg-slate-100 text-slate-800'}`}>
                      {cat.icon}
                    </div>
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-900'
                    }`}>
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className={`font-black text-sm mb-1 ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                      {cat.title}
                    </h4>
                    <p className={`text-xs leading-tight line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-700'}`}>
                      {cat.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Interactive Search & Quick Tags Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-300 shadow-sm mb-12" role="search" aria-label="חיפוש במאגר הידע">
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full flex-1">
              <label htmlFor="knowledge-search-input" className="sr-only">
                חפשו במאגר הידע ההנדסי
              </label>
              <Search className="w-5 h-5 text-slate-600 absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input 
                id="knowledge-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חפשו לפי נושא או שאלה: למשל 'רטיבות', 'קבלן', 'שנת בדק', 'מחיר', 'סדקים'..."
                className="w-full pl-10 pr-12 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-slate-900 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all placeholder:text-slate-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  aria-label="ניקוי תא החיפוש"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-700 hover:text-slate-950 bg-slate-200 hover:bg-slate-300 rounded-full focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Clear Filter Indicator */}
            {(searchQuery || selectedSituation !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSituation('all');
                }}
                aria-label="איפוס כל המסננים והצגת כל הכתבות"
                className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-black text-xs sm:text-sm rounded-2xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none"
              >
                <span>איפוס סינון ({filteredArticles.length} תוצאות)</span>
                <X className="w-4 h-4 text-slate-900" />
              </button>
            )}
          </div>

          {/* Quick Tag Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200">
            <span className="text-xs sm:text-sm font-black text-slate-700 ml-2 flex items-center gap-1">
              <Tag className="w-4 h-4 text-blue-700" aria-hidden="true" />
              תגיות נפוצות:
            </span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag.label}
                onClick={() => setSearchQuery(tag.query)}
                aria-label={`חפש מאמרים בנושא ${tag.query}`}
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-xl transition-all font-bold focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none ${
                  searchQuery === tag.query
                    ? 'bg-blue-800 text-white font-black shadow-sm'
                    : 'bg-slate-100 text-slate-800 border border-slate-300 hover:bg-blue-100 hover:text-blue-900'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 3: Curated Featured Spotlight Articles (Only when no specific search query or active filter) */}
        {selectedSituation === 'all' && !searchQuery && (
          <div className="mb-14" role="region" aria-label="מאמרי חובה נבחרים">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-7 bg-blue-700 rounded-full" aria-hidden="true"></span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                מאמרי חובה לקריאה — ערך הנדסי מעשי
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArticles.map((art) => (
                <div 
                  key={`featured-${art.id}`}
                  className="bg-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl border-2 border-slate-700 flex flex-col justify-between hover:border-blue-400 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-slate-950" aria-hidden="true" />
                        מאמר חובה
                      </span>
                      <span className="text-slate-100 text-xs sm:text-sm font-bold flex items-center gap-1.5 bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-700">
                        <Clock className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
                        {art.readingTime}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                      {art.title}
                    </h4>

                    {art.keyQuestion && (
                      <div className="bg-slate-800 border-2 border-amber-400/50 p-3.5 rounded-xl mb-4 text-xs sm:text-sm text-slate-100 font-bold leading-relaxed">
                        <span className="font-black text-amber-300 block mb-0.5">❓ השאלה המרכזית:</span> 
                        {art.keyQuestion}
                      </div>
                    )}

                    <p className="text-slate-100 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {art.valueTrigger}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleExpand(art.id, art.slug)}
                      aria-expanded={expandedIds.has(art.id)}
                      aria-controls={`article-${art.id}`}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-black px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none"
                    >
                      <span>{expandedIds.has(art.id) ? 'סגור מאמר' : 'קריאה מהירה'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedIds.has(art.id) ? 'rotate-180' : ''}`} />
                    </button>

                    <Link 
                      href={`/${art.slug}`}
                      aria-label={`פתיחת המאמר ${art.title} בעמוד נפרד`}
                      className="text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-black underline flex items-center gap-1 transition-colors p-1 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:outline-none rounded-md"
                    >
                      <span>דף נפרד</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Main Articles Cards Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 flex items-center gap-2">
              <span>מאמרים רלוונטיים</span>
              <span className="text-sm font-black bg-slate-300 text-slate-900 px-3 py-0.5 rounded-full border border-slate-400">
                {filteredArticles.length}
              </span>
            </h3>

            {selectedSituation !== 'all' && (
              <span className="text-xs sm:text-sm text-slate-800 font-black bg-slate-200 px-3 py-1 rounded-lg">
                מסונן לפי: {SITUATION_CATEGORIES.find(c => c.id === selectedSituation)?.title}
              </span>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            /* Zero-Results Fallback Box */
            <div className="bg-white border-2 border-slate-300 p-12 rounded-3xl text-center space-y-4 my-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                🔎
              </div>
              <h4 className="text-xl font-black text-slate-950">
                לא מצאנו מאמר שמתאים בדיוק לחיפוש &quot;{searchQuery}&quot;
              </h4>
              <p className="text-slate-800 font-medium max-w-md mx-auto text-sm sm:text-base">
                מערך הידע שלנו מתעדכן באופן שוטף. אם יש לכם שאלה הנדסית ספציפית שאינה מופיעה כאן, תוכלו להתייעץ ישירות עם אינג&apos; יוסי פרי.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSituation('all');
                  }}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition-all border border-slate-400 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none"
                >
                  הצג את כל המאמרים
                </button>
                <a 
                  href="https://wa.me/972547515142?text=%D7%A9%D7%9C%D7%95%D7%9D,%20%D7%99%D7%A9%20%D7%9C%D7%99%20%D7%A9%D7%90%D7%9C%D7%94%20%D7%94%D7%A0%D7%93%D7%A1%D7%99%D7%AA%20%D7%A1%D7%A4%D7%A6%D7%99%D7%A4%D7%99%D7%AA%20%D7%A9%D7%9C%D7%90%20%D7%9E%D7%A6%D7%90%D7%AA%D7%99%20%D7%91%D7%9E%D7%90%D7%92%D7%A8%20%D7%94%D7%99%D7%93%D7%A2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:outline-none"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>שאלו את אינג&apos; יוסי פרי בוואטסאפ</span>
                </a>
              </div>
            </div>
          ) : (
            /* Responsive Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((article) => {
                  const isExpanded = expandedIds.has(article.id);

                  return (
                    <motion.article
                      key={article.id}
                      id={`article-${article.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                        isExpanded 
                          ? 'border-blue-700 shadow-2xl ring-2 ring-blue-300 col-span-1 md:col-span-2' 
                          : 'border-slate-300 shadow-sm hover:shadow-md hover:border-blue-600'
                      }`}
                    >
                      <div className="p-6 sm:p-8 flex flex-col h-full">
                        
                        {/* Top Card Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-2xl border border-blue-200 shrink-0">
                              {getArticleIcon(article.id)}
                            </span>
                            <div>
                              <span className="text-blue-800 font-black text-xs sm:text-sm block">
                                {article.category}
                              </span>
                              <span className="text-slate-700 font-bold text-xs flex items-center gap-1 mt-0.5">
                                <Clock className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
                                {article.readingTime}
                              </span>
                            </div>
                          </div>

                          <span className="bg-slate-200 text-slate-950 text-xs font-black px-3 py-1 rounded-full border border-slate-300 shrink-0">
                            🎯 {article.targetAudience}
                          </span>
                        </div>

                        {/* Article Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 leading-snug">
                          {article.title}
                        </h3>

                        {/* Burning Question Trigger Box */}
                        {article.keyQuestion && (
                          <div className="bg-blue-50 border-r-4 border-blue-800 p-3.5 rounded-xl mb-4 text-xs sm:text-sm text-slate-900 font-bold leading-relaxed border border-blue-200">
                            <span className="text-blue-900 font-black block mb-0.5">❓ השאלה המרכזית:</span>
                            {article.keyQuestion}
                          </div>
                        )}

                        {/* Value Trigger / Teaser */}
                        <div className="bg-amber-50 border-2 border-amber-300 p-3.5 rounded-xl mb-6 text-xs sm:text-sm text-slate-950 leading-relaxed font-medium">
                          <span className="text-amber-950 font-black block mb-1">💡 מה תגלו במאמר?</span>
                          {article.valueTrigger}
                        </div>

                        {/* Bottom Card Controls */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 gap-3">
                          <button
                            onClick={() => toggleExpand(article.id, article.slug)}
                            aria-expanded={isExpanded}
                            aria-controls={`article-content-${article.id}`}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs sm:text-sm uppercase transition-all focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none ${
                              isExpanded 
                                ? 'bg-slate-300 text-slate-950 hover:bg-slate-400 border border-slate-400' 
                                : 'bg-blue-800 text-white hover:bg-blue-900 shadow-md hover:-translate-y-0.5'
                            }`}
                          >
                            <span>{isExpanded ? 'סגור קריאה' : 'קריאה מהירה בדף'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>

                          <Link 
                            href={`/${article.slug}`}
                            aria-label={`עבור לעמוד הנפרד של המאמר ${article.title}`}
                            className="text-blue-900 hover:text-blue-950 text-xs sm:text-sm font-black underline flex items-center gap-1 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none"
                          >
                            <span>פתיחת עמוד נפרד</span>
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>

                        {/* Expanded Article Body Inline Reader */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              id={`article-content-${article.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-8 mt-8 border-t-2 border-slate-300 space-y-8">
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

                                <div className="prose prose-blue max-w-none prose-lg text-slate-900 leading-relaxed font-normal">
                                  {article.content}
                                </div>

                                {/* Author E-E-A-T Bio Box */}
                                <div className="p-6 bg-slate-100 border-2 border-slate-300 rounded-2xl flex flex-col sm:flex-row gap-5 items-center sm:items-start text-right">
                                  <div className="w-16 h-16 rounded-2xl bg-blue-800 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md border border-blue-900">
                                    יפ
                                  </div>
                                  <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                      <h4 className="font-black text-slate-950 text-lg">נכתב ונבדק מקצועית ע&quot;י אינג&apos; יוסי פרי</h4>
                                      <span className="text-xs bg-blue-800 text-white font-black px-3 py-1 rounded-full">מהנדס רשוי</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-blue-900 font-black mb-2">
                                      מהנדס בניין מורשה ורשום (מ.ר 78687) | מומחה בדק בית וחוות דעת הנדסית לבית משפט
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                                      בעל למעלה מ-30 שנות ניסיון מעשי בהנדסה אזרחית, ניהול פרויקטים, ביקורת מבנים ואיתור ליקויים סמויים. העיד במאות תיקים משפטיים כמומחה מוסמך מטעם בית המשפט.
                                    </p>
                                  </div>
                                </div>

                                {/* WhatsApp Consultation Callout */}
                                <div className="bg-emerald-50 border-2 border-emerald-400 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                                  <div className="text-right">
                                    <h5 className="font-black text-emerald-950 text-base sm:text-lg mb-1">
                                      נמצאים במצב דומה וזקוקים לחוות דעת הנדסית?
                                    </h5>
                                    <p className="text-xs sm:text-sm text-emerald-900 font-bold">
                                      התייעצו ישירות עם אינג&apos; יוסי פרי בוואטסאפ ללא שום התחייבות.
                                    </p>
                                  </div>
                                  <a 
                                    href={`https://wa.me/972547515142?text=${encodeURIComponent(`שלום, קראתי את המאמר "${article.title}" ואשמח להתייעץ לגבי הנכס שלי.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-emerald-900 focus-visible:outline-none"
                                  >
                                    <MessageSquare className="w-4 h-4" />
                                    <span>ייעוץ אישי בוואטסאפ</span>
                                  </a>
                                </div>

                                {/* Collapse / Back to top button */}
                                <div className="pt-4 flex justify-center">
                                  <button
                                    onClick={() => toggleExpand(article.id)}
                                    aria-label="סגירת קריאה של המאמר בחזרה למעלה"
                                    className="text-slate-700 hover:text-blue-900 font-black text-xs sm:text-sm flex items-center gap-2 transition-colors p-2 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:outline-none rounded-lg"
                                  >
                                    <span>סגירת קריאה בחזרה למעלה</span>
                                    <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
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
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default KnowledgeHub;
