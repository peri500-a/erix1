import React from 'react';
import { Metadata } from 'next';
import KnowledgeHub from "../../components/KnowledgeHub";
import LocationPage from "../../components/LocationPage";
import AboutPage from "../../components/AboutPage";
import ContractorInspectionPage from "../../components/ContractorInspectionPage";
import SecondHandInspectionPage from "../../components/SecondHandInspectionPage";
import VillaInspectionPage from "../../components/VillaInspectionPage";
import WarrantyInspectionPage from "../../components/WarrantyInspectionPage";
import LeakDetectionPage from "../../components/LeakDetectionPage";
import CourtExpertPage from "../../components/CourtExpertPage";
import PricingPage from "../../components/PricingPage";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import AccessibilityStatement from "../../components/AccessibilityStatement";
import Breadcrumbs from "../../components/Breadcrumbs";
import PergolaSection from "../../components/PergolaSection";
import CommonSections from "../../components/CommonSections";
import Contact from "../../components/Contact";
import { articles } from "../../data/articles";
import InspectionChecklist from "../../components/InspectionChecklist";
import ViolationsComparisonTable from "../../components/ViolationsComparisonTable";
import ComplexBuildingDefectsPage from "../../components/ComplexBuildingDefectsPage";

import { notFound } from 'next/navigation';

const locationMapping: Record<string, string> = {
  // Hebrew Slugs
  'בדק-בית-בתל-אביב': 'תל אביב',
  'בדק-בית-בירושלים': 'ירושלים',
  'בדק-בית-ברעננה': 'רעננה',
  'בדק-בית-בהוד-השרון': 'הוד השרון',
  'בדק-בית-בהרצליה': 'הרצליה',
  'בדק-בית-ברמת-השרון': 'רמת השרון',
  'בדק-בית-בשוהם': 'שוהם',
  'בדק-בית-בנס-ציונה': 'נס ציונה',
  'בדק-בית-בתל-מונד': 'תל מונד',
  'בדק-בית-באבן-יהודה': 'אבן יהודה',
  
  // English Aliases (Legacy)
  'home-inspection-tel-aviv': 'תל אביב',
  'home-inspection-jerusalem': 'ירושלים',
  'raanana-inspection': 'רעננה',
  'hod-hasharon-inspection': 'הוד השרון',
  'herzliya-inspection': 'הרצליה',
  'ramat-hasharon-inspection': 'רמת השרון',
  'shoham-inspection': 'שוהם',
  'ness-ziona-inspection': 'נס ציונה',
  'tel-mond-inspection': 'תל מונד',
  'even-yehuda-inspection': 'אבן יהודה',
};

// Map slugs to component types or render functions to avoid immediate JSX creation
const mainPageMapping: Record<string, () => React.ReactNode> = {
  'אודות': () => <AboutPage />,
  'about': () => <AboutPage />,
  'בדק-בית-מקבלן': () => <ContractorInspectionPage />,
  'new-apartment-inspection': () => <ContractorInspectionPage />,
  'בדק-בית-יד-שנייה': () => <SecondHandInspectionPage />,
  'second-hand-inspection': () => <SecondHandInspectionPage />,
  'בדק-בית-לבית-פרטי-וילה': () => <VillaInspectionPage />,
  'villa-inspection': () => <VillaInspectionPage />,
  'בדק-בית-סוף-שנת-בדק': () => <WarrantyInspectionPage />,
  'warranty-inspection': () => <WarrantyInspectionPage />,
  'איתור-נזילות-ורטיבות': () => <LeakDetectionPage />,
  'leak-detection': () => <LeakDetectionPage />,
  'איתור-ליקויי-בנייה-מורכבים': () => <ComplexBuildingDefectsPage />,
  'complex-building-defects': () => <ComplexBuildingDefectsPage />,
  'חוות-דעת-הנדסית-לבית-משפט': () => <CourtExpertPage />,
  'court-expert': () => <CourtExpertPage />,
  'בדק-בית-מחיר': () => <PricingPage />,
  'pricing': () => <PricingPage />,
  'home-inspection-price': () => <PricingPage />,
  'מדיניות-פרטיות': () => <PrivacyPolicy />,
  'privacy-policy': () => <PrivacyPolicy />,
  'הצהרת-נגישות': () => <AccessibilityStatement />,
  'accessibility-statement': () => <AccessibilityStatement />,
  'מאגר-הידע-ההנדסי': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'ראשי', href: '/' }, { label: 'מאגר הידע ההנדסי' }]} />
      </div>
      <KnowledgeHub />
      <CommonSections />
    </div>
  ),
  'knowledge-hub': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'ראשי', href: '/' }, { label: 'מאגר הידע ההנדסי' }]} />
      </div>
      <KnowledgeHub />
      <CommonSections />
    </div>
  ),
  'engineering-knowledge-hub': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'ראשי', href: '/' }, { label: 'מאגר הידע ההנדסי' }]} />
      </div>
      <KnowledgeHub />
      <CommonSections />
    </div>
  ),
  'אישור-מהנדס-לפרגולה': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'אישור מהנדס לפרגולה' }]} />
      </div>
      <PergolaSection />
      <Contact />
    </div>
  ),
  'pergola-approval': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'אישור מהנדס לפרגולה' }]} />
      </div>
      <PergolaSection />
      <Contact />
    </div>
  ),
  'ליקויי-בנייה': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'איתור חריגות בנייה' }]} />
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-right py-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
          איתור חריגות בנייה <br/>
          <span className="text-blue-600">ובדיקת היתרים</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          חריגות בנייה הן ליקוי שאינו הנדסי גרידא, אלא משפטי-תכנוני. קניית נכס עם חריגה פירושה לקיחת אחריות על עבירת בנייה שבוצעה בעבר.
        </p>
      </div>
      <ViolationsComparisonTable />
      <div className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">מאמרים מקצועיים בנושא</h3>
        <KnowledgeHub initialArticleId="building-violations" preventScroll={true} />
      </div>
      <CommonSections />
    </div>
  ),
  'building-violations': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'איתור חריגות בנייה' }]} />
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-right py-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
          איתור חריגות בנייה <br/>
          <span className="text-blue-600">ובדיקת היתרים</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          חריגות בנייה הן ליקוי שאינו הנדסי גרידא, אלא משפטי-תכנוני. קניית נכס עם חריגה פירושה לקיחת אחריות על עבירת בנייה שבוצעה בעבר.
        </p>
      </div>
      <ViolationsComparisonTable />
      <div className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">מאמרים מקצועיים בנושא</h3>
        <KnowledgeHub initialArticleId="building-violations" preventScroll={true} />
      </div>
      <CommonSections />
    </div>
  ),
  'what-we-check': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 no-print">
        <Breadcrumbs items={[{ label: 'ראשי', href: '/' }, { label: 'מה אנחנו בודקים' }]} />
      </div>
      <InspectionChecklist />
      <div className="no-print">
        <Contact />
      </div>
    </div>
  ),
  'מה-אנחנו-בודקים': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 no-print">
        <Breadcrumbs items={[{ label: 'ראשי', href: '/' }, { label: 'מה אנחנו בודקים' }]} />
      </div>
      <InspectionChecklist />
      <div className="no-print">
        <Contact />
      </div>
    </div>
  ),
  'checklist': () => (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 no-print">
        <Breadcrumbs items={[{ label: 'ראשי', href: '/' }, { label: 'מה אנחנו בודקים' }]} />
      </div>
      <InspectionChecklist />
      <div className="no-print">
        <Contact />
      </div>
    </div>
  ),
};

const metadataMapping: Record<string, { title: string; description: string; keywords?: string[] }> = {
  'בדק-בית-בירושלים': {
    title: 'בדק בית בירושלים | מהנדס מוסמך - אריקס ביקורת מבנים',
    description: 'בדק בית בירושלים ע"י מהנדס מוסמך עם 30 שנות ניסיון. איתור ליקויי בנייה, רטיבות ובעיות איטום ייחודיות לבנייה הירושלמית. דוח הנדסי מפורט - קבלו ייעוץ חינם.',
    keywords: ['בדק בית בירושלים', 'מהנדס בדק בית בירושלים', 'ביקורת מבנים בירושלים', 'איתור ליקויי בנייה בירושלים']
  },
  'home-inspection-jerusalem': {
    title: 'בדק בית בירושלים | מהנדס מוסמך - אריקס ביקורת מבנים',
    description: 'בדק בית בירושלים ע"י מהנדס מוסמך עם 30 שנות ניסיון. איתור ליקויי בנייה, רטיבות ובעיות איטום ייחודיות לבנייה הירושלמית. דוח הנדסי מפורט - קבלו ייעוץ חינם.',
  },
  'אודות': {
    title: 'אודות אריקס ביקורת מבנים | ניסיון ומקצועיות בביקורת מבנים',
    description: 'הכירו את אריקס ביקורת מבנים - חברת בוטיק מובילה לביקורת מבנים ובדק בית בהובלת מהנדסים רשומים מומחים המביאים את הסטנדרט המקצועי הגבוה ביותר.',
    keywords: ['אודות אריקס ביקורת מבנים', 'מהנדס יוסי', 'ביקורת מבנים מומחה', 'מהנדס בניין רשום']
  },
  'about': {
    title: 'אודות אריקס ביקורת מבנים | ניסיון ומקצועיות בביקורת מבנים',
    description: 'הכירו את אריקס ביקורת מבנים - חברת בוטיק מובילה לביקורת מבנים ובדק בית בהובלת מהנדסים רשומים מומחים המביאים את הסטנדרט המקצועי הגבוה ביותר.',
  },
  'בדק-בית-מקבלן': {
    title: 'בדק בית מקבלן | בדיקת דירה חדשה לפני מסירה | אריקס ביקורת מבנים',
    description: 'בצעו בדק בית לדירה חדשה מקבלן עם אריקס ביקורת מבנים. מהנדסי בניין מומחים, איתור ליקויי בנייה סמויים ורטיבות במצלמה תרמית. הגנה מושלמת על כספכם ודו"ח קביל בבית משפט.',
    keywords: ['בדק בית מקבלן', 'ליקויי בנייה דירה חדשה', 'ביקורת דירה מקבלן', 'פרוטוקול מסירה ראשון']
  },
  'new-apartment-inspection': {
    title: 'בדק בית מקבלן | בדיקת דירה חדשה לפני מסירה | אריקס ביקורת מבנים',
    description: 'בצעו בדק בית לדירה חדשה מקבלן עם אריקס ביקורת מבנים. מהנדסי בניין מומחים, איתור ליקויי בנייה סמויים ורטיבות במצלמה תרמית. הגנה מושלמת על כספכם ודו"ח קביל בבית משפט.',
  },
  'בדק-בית-יד-שנייה': {
    title: 'בדק בית יד שנייה | בדיקת דירה לפני קנייה | אריקס ביקורת מבנים',
    description: 'בדיקה הנדסית יסודית לדירה יד שנייה או נכס לפני קנייה. איתור ליקויי שלד, רטיבות כלואה, בעיות איטום וחריגות בנייה. הגנו על כספכם ונהלו משא ומתן חכם עם דו"ח הנדסי.',
    keywords: ['בדק בית יד שנייה', 'בדיקת דירה לפני קנייה', 'ליקויים סמויים בדירה', 'בדק בית לקניית דירה']
  },
  'second-hand-inspection': {
    title: 'בדק בית יד שנייה | בדיקת דירה לפני קנייה | אריקס ביקורת מבנים',
    description: 'בדיקה הנדסית יסודית לדירה יד שנייה או נכס לפני קנייה. איתור ליקויי שלד, רטיבות כלואה, בעיות איטום וחריגות בנייה. הגנו על כספכם ונהלו משא ומתן חכם עם דו"ח הנדסי.',
  },
  'בדק-בית-לבית-פרטי-וילה': {
    title: 'בדק בית לבית פרטי או וילה | ביקורת מבנים מקיפה | אריקס ביקורת מבנים',
    description: 'בדיקה הנדסית יסודית ומבנית לבתים פרטיים, וילות יוקרה ודו-משפחתיים. איתור ליקויי איטום, סדקים קונסטרוקטיביים ותשתיות חוץ על ידי מהנדס בניין מוסמך.',
    keywords: ['בדק בית לוילה', 'בדק בית לבית פרטי', 'ביקורת בית פרטי', 'מהנדס בניין לוילות']
  },
  'villa-inspection': {
    title: 'בדק בית לבית פרטי או וילה | ביקורת מבנים מקיפה | אריקס ביקורת מבנים',
    description: 'בדיקה הנדסית יסודית ומבנית לבתים פרטיים, וילות יוקרה ודו-משפחתיים. איתור ליקויי איטום, סדקים קונסטרוקטיביים ותשתיות חוץ על ידי מהנדס בניין מוסמך.',
  },
  'בדק-בית-סוף-שנת-בדק': {
    title: 'בדק בית לסוף שנת בדק | אריקס ביקורת מבנים',
    description: 'אל תפספסו את תקופת האחריות של חוק המכר! בדיקה הנדסית מקצועית לאיתור ליקויים שהתפתחו בשנה הראשונה, לחיוב קבלן הבנייה בתיקונים מקיפים בחינם.',
    keywords: ['בדק בית סוף שנת בדק', 'שנת בדק דירה', 'אחריות חוק המכר', 'דוח ליקויים לקבלן']
  },
  'warranty-inspection': {
    title: 'בדק בית לסוף שנת בדק | אריקס ביקורת מבנים',
    description: 'אל תפספסו את תקופת האחריות של חוק המכר! בדיקה הנדסית מקצועית לאיתור ליקויים שהתפתחו בשנה הראשונה, לחיוב קבלן הבנייה בתיקונים מקיפים בחינם.',
  },
  'איתור-נזילות-ורטיבות': {
    title: 'איתור נזילות ורטיבות במצלמה תרמית | איתור נזילות מומחה | אריקס ביקורת מבנים',
    description: 'איתור נזילות, כשלי איטום ורטיבות קפילארית סמויה באמצעות מכשור תרמוגרפי מתקדם (מצלמות FLIR). דוח מהנדס מפורט עם המלצות וקבילות משפטית.',
    keywords: ['איתור נזילות', 'איתור רטיבות', 'בדיקה תרמית לדירה', 'מצלמה תרמית פליר', 'איתור נזילות מים']
  },
  'leak-detection': {
    title: 'איתור נזילות ורטיבות במצלמה תרמית | איתור נזילות מומחה | אריקס ביקורת מבנים',
    description: 'איתור נזילות, כשלי איטום ורטיבות קפילארית סמויה באמצעות מכשור תרמוגרפי מתקדם (מצלמות FLIR). דוח מהנדס מפורט עם המלצות וקבילות משפטית.',
  },
  'איתור-ליקויי-בנייה-מורכבים': {
    title: 'איתור ליקויי בנייה הנדסיים מורכבים (ת"י 1920) | אריקס ביקורת מבנים',
    description: 'אבחון ומיפוי ליקויי בנייה מורכבים ע"י מהנדס מוסמך בהתאם לתקן ת"י 1920. סדקים מבניים, כשלי קונסטרוקציה ובעיות בטיחות עם דוח הנדסי מחייב.',
    keywords: ['איתור ליקויי בנייה מורכבים', 'סדקים מבניים', 'תקן ת"י 1920', 'בדיקת קונסטרוקציה', 'ליקויי שלד ובטיחות']
  },
  'complex-building-defects': {
    title: 'איתור ליקויי בנייה הנדסיים מורכבים (ת"י 1920) | אריקס ביקורת מבנים',
    description: 'אבחון ומיפוי ליקויי בנייה מורכבים ע"י מהנדס מוסמך בהתאם לתקן ת"י 1920. סדקים מבניים, כשלי קונסטרוקציה ובעיות בטיחות עם דוח הנדסי מחייב.',
  },
  'חוות-דעת-הנדסית-לבית-משפט': {
    title: 'חוות דעת הנדסית לבית משפט | מהנדס מומחה קביל משפטית - אריקס',
    description: 'זקוקים לחוות דעת הנדסית לבית משפט? אריקס ביקורת מבנים מספקת חוות דעת מומחה קבילות לחלוטין, מבוססות על תקנים ישראליים וכוללות ליווי ומתן עדות מומחה בערכאות.',
    keywords: ['חוות דעת הנדסית לבית משפט', 'מהנדס מומחה בית משפט', 'עד מומחה בדק בית', 'ליטיגציה הנדסית', 'ביקורת הנדסית לבית משפט']
  },
  'court-expert': {
    title: 'חוות דעת הנדסית לבית משפט | מהנדס מומחה קביל משפטית - אריקס',
    description: 'זקוקים לחוות דעת הנדסית לבית משפט? אריקס ביקורת מבנים מספקת חוות דעת מומחה קבילות לחלוטין, מבוססות על תקנים ישראליים וכוללות ליווי ומתן עדות מומחה בערכאות.',
  },
  'בדק-בית-מחיר': {
    title: 'כמה עולה בדק בית? מחירון בדק בית מעודכן 2026 | אריקס ביקורת מבנים',
    description: 'מחפשים בדק בית מחיר משתלם ושקוף? היכנסו למחירון המלא של אריקס ביקורת מבנים. מחירים מפורטים לפי גודל הדירה, סוג הנכס (קבלן או יד שנייה) והסברים מקיפים.',
    keywords: ['בדק בית מחיר', 'עלות בדק בית', 'מחירון ביקורת מבנים', 'כמה עולה מהנדס בדק בית', 'מחירון בדק בית מעודכן']
  },
  'pricing': {
    title: 'כמה עולה בדק בית? מחירון בדק בית מעודכן 2026 | אריקס ביקורת מבנים',
    description: 'מחפשים בדק בית מחיר משתלם ושקוף? היכנסו למחירון המלא של אריקס ביקורת מבנים. מחירים מפורטים לפי גודל הדירה, סוג הנכס (קבלן או יד שנייה) והסברים מקיפים.',
  },
  'home-inspection-price': {
    title: 'כמה עולה בדק בית? מחירון בדק בית מעודכן 2026 | אריקס ביקורת מבנים',
    description: 'מחפשים בדק בית מחיר משתלם ושקוף? היכנסו למחירון המלא של אריקס ביקורת מבנים. מחירים מפורטים לפי גודל הדירה, סוג הנכס (קבלן או יד שנייה) והסברים מקיפים.',
  },
  'אישור-מהנדס-לפרגולה': {
    title: 'אישור מהנדס לפרגולה - אישור קונסטרוקטור מוסמך (תיקון 101) | אריקס ביקורת מבנים',
    description: 'צריכים אישור מהנדס לפרגולה? אריקס ביקורת מבנים מציעה הנפקת אישור קונסטרוקציה לפרגולות אלומיניום, עץ וברזל בהתאם לתיקון 101 לחוק התכנון והבנייה. פתרון הנדסי מהיר, מקצועי ובטוח ביום אחד.',
    keywords: ['אישור מהנדס לפרגולה', 'אישור קונסטרוקציה לפרגולה', 'אישור לפרגולה תיקון 101', 'אישור יציבות פרגולה', 'מהנדס קונסטרוקטור לפרגולה', 'אישור פרגולה לעירייה', 'אישור מהנדס לפרגולת אלומיניום']
  },
  'pergola-approval': {
    title: 'אישור מהנדס לפרגולה - אישור קונסטרוקטור מוסמך (תיקון 101) | אריקס ביקורת מבנים',
    description: 'צריכים אישור מהנדס לפרגולה? אריקס ביקורת מבנים מציעה הנפקת אישור קונסטרוקציה לפרגולות אלומיניום, עץ וברזל בהתאם לתיקון 101 לחוק התכנון והבנייה. פתרון הנדסי מהיר, מקצועי ובטוח ביום אחד.',
  },
  'מדיניות-פרטיות': {
    title: 'מדיניות פרטיות | אריקס ביקורת מבנים',
    description: 'מדיניות השמירה על הפרטיות ואבטחת המידע של משתמשי אתר אריקס ביקורת מבנים בדק בית וביקורת מבנים.'
  },
  'privacy-policy': {
    title: 'מדיניות פרטיות | אריקס ביקורת מבנים',
    description: 'מדיניות השמירה על הפרטיות ואבטחת המידע של משתמשי אתר אריקס ביקורת מבנים בדק בית וביקורת מבנים.'
  },
  'הצהרת-נגישות': {
    title: 'הצהרת נגישות | אריקס ביקורת מבנים',
    description: 'הצהרת הנגישות ודרכי הנגשת תוכן האתר לרווחת כלל קהל המשתמשים ואנשים עם מוגבלות.'
  },
  'accessibility-statement': {
    title: 'הצהרת נגישות | אריקס ביקורת מבנים',
    description: 'הצהרת הנגישות ודרכי הנגשת תוכן האתר לרווחת כלל קהל המשתמשים ואנשים עם מוגבלות.'
  },
  'מאגר-הידע-ההנדסי': {
    title: 'מאגר הידע ההנדסי | מדריכים ומאמרים בבדק בית | אריקס ביקורת מבנים',
    description: 'מאגר ידע הנדסי מקיף ומקצועי בנושאי בדק בית, ליקויי בנייה, איתור נזילות, תקנים הנדסיים וזכויות רוכשי דירות מאת מהנדסי אריקס ביקורת מבנים.',
    keywords: ['מאגר הידע ההנדסי', 'מאמרים בדק בית', 'מדריך בדק בית', 'ליקויי בנייה מאמרים', 'תקני בנייה בישראל']
  },
  'knowledge-hub': {
    title: 'מאגר הידע ההנדסי | מדריכים ומאמרים בבדק בית | אריקס ביקורת מבנים',
    description: 'מאגר ידע הנדסי מקיף ומקצועי בנושאי בדק בית, ליקויי בנייה, איתור נזילות, תקנים הנדסיים וזכויות רוכשי דירות מאת מהנדסי אריקס ביקורת מבנים.',
  },
  'engineering-knowledge-hub': {
    title: 'מאגר הידע ההנדסי | מדריכים ומאמרים בבדק בית | אריקס ביקורת מבנים',
    description: 'מאגר ידע הנדסי מקיף ומקצועי בנושאי בדק בית, ליקויי בנייה, איתור נזילות, תקנים הנדסיים וזכויות רוכשי דירות מאת מהנדסי אריקס ביקורת מבנים.',
  },
  'ליקויי-בנייה': {
    title: 'איתור חריגות בנייה ובדיקת היתרים | אריקס ביקורת מבנים',
    description: 'בדיקת חריגות בנייה קריטית לפני קניית דירה. בדיקת התאמה בין המצב בפועל להיתרי הבנייה של הוועדה המקומית לתכנון ובנייה ע"י מהנדס מוסמך.',
    keywords: ['חריגות בנייה', 'איתור חריגות בנייה', 'בדיקת היתר בנייה', 'בדיקת היתרים לדירה', 'ליקויי בנייה משפטיים']
  },
  'building-violations': {
    title: 'איתור חריגות בנייה ובדיקת היתרים | אריקס ביקורת מבנים',
    description: 'בדיקת חריגות בנייה קריטית לפני קניית דירה. בדיקת התאמה בין המצב בפועל להיתרי הבנייה של הוועדה המקומית לתכנון ובנייה ע"י מהנדס מוסמך.',
  },
  'what-we-check': {
    title: 'רשימת תיוג לבדק בית (מה אנחנו בודקים?) | אריקס ביקורת מבנים',
    description: 'הכירו את מפרט הבדיקות ההנדסי המלא של אריקס ביקורת מבנים. רשימת תיוג אינטראקטיבית וקובץ PDF להורדה עם כל נקודות הבדיקה לבדק בית מקיף ועמוק.',
    keywords: ['מה אנחנו בודקים בבדק בית', 'רשימת תיוג לבדק בית', 'פרוטוקול בדק בית', 'צקליסט בדק בית', 'מפרט בדיקת מהנדס']
  },
  'מה-אנחנו-בודקים': {
    title: 'רשימת תיוג לבדק בית (מה אנחנו בודקים?) | אריקס ביקורת מבנים',
    description: 'הכירו את מפרט הבדיקות ההנדסי המלא של אריקס ביקורת מבנים. רשימת תיוג אינטראקטיבית וקובץ PDF להורדה עם כל נקודות הבדיקה לבדק בית מקיף ועמוק.',
    keywords: ['מה אנחנו בודקים בבדק בית', 'רשימת תיוג לבדק בית', 'פרוטוקול בדק בית', 'צקליסט בדק בית', 'מפרט בדיקת מהנדס']
  },
  'checklist': {
    title: 'רשימת תיוג לבדק בית (מה אנחנו בודקים?) | אריקס ביקורת מבנים',
    description: 'הכירו את מפרט הבדיקות ההנדסי המלא של אריקס ביקורת מבנים. רשימת תיוג אינטראקטיבית וקובץ PDF להורדה עם כל נקודות הבדיקה לבדק בית מקיף ועמוק.',
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  let slug = resolvedParams.slug;
  if (!slug) return {};

  let decodedSlug = slug;
  if (decodedSlug.startsWith('/')) {
    decodedSlug = decodedSlug.substring(1);
  }

  try {
    let prev = '';
    while (decodedSlug.includes('%') && decodedSlug !== prev) {
      prev = decodedSlug;
      decodedSlug = decodeURIComponent(decodedSlug);
    }
  } catch (e) {}

  decodedSlug = decodedSlug.normalize('NFC').toLowerCase();

  // 1. Check metadataMapping
  const mappingKeys = Object.keys(metadataMapping);
  const foundMapKey = mappingKeys.find(mk => {
    const normalised = mk.normalize('NFC').toLowerCase();
    return normalised === decodedSlug || encodeURIComponent(normalised).toLowerCase() === decodedSlug;
  });

  if (foundMapKey) {
    const matched = metadataMapping[foundMapKey];
    return {
      title: matched.title,
      description: matched.description,
      keywords: matched.keywords || [],
      alternates: {
        canonical: `/${encodeURIComponent(foundMapKey)}`,
      },
      openGraph: {
        title: matched.title,
        description: matched.description,
        url: `https://www.homeinspection.co.il/${encodeURIComponent(foundMapKey)}`,
        locale: "he_IL",
        type: "website",
      }
    };
  }

  // 2. Check location mapping
  const locKeys = Object.keys(locationMapping);
  const foundLocKey = locKeys.find(lk => {
    const normalised = lk.normalize('NFC').toLowerCase();
    return normalised === decodedSlug || encodeURIComponent(normalised).toLowerCase() === decodedSlug;
  });

  if (foundLocKey) {
    const city = locationMapping[foundLocKey];
    const cityTitle = `בדק בית ב${city} | ביקורת מבנים מקצועית ע"י מהנדס | אריקס ביקורת מבנים`;
    const cityDesc = `צריכים בדק בית ב${city}? אריקס ביקורת מבנים מציעה שירות בדק בית מקיף ואיתור ליקויים ב${city} ובאזור המרכז ע"י מהנדסי בניין מוסמכים (B.Sc) וציוד טכנולוגי מתקדם.`;
    return {
      title: cityTitle,
      description: cityDesc,
      keywords: [`בדק בית ב${city}`, `ביקורת מבנים ב${city}`, `מהנדס בדק בית ב${city}`, `איתור נזילות ב${city}`],
      alternates: {
        canonical: `/${encodeURIComponent(foundLocKey)}`,
      },
      openGraph: {
        title: cityTitle,
        description: cityDesc,
        url: `https://www.homeinspection.co.il/${encodeURIComponent(foundLocKey)}`,
        locale: "he_IL",
        type: "website",
      }
    };
  }

  // 3. Check articles
  const article = articles.find(a => {
    const normSlug = a.slug.normalize('NFC').toLowerCase();
    return normSlug === decodedSlug || a.id.toLowerCase() === decodedSlug || encodeURIComponent(normSlug).toLowerCase() === decodedSlug;
  });

  if (article) {
    const title = `${article.title} | אריקס ביקורת מבנים`;
    const desc = article.seoDescription || article.excerpt || `קראו מאמר בנושא ${article.title} מאת מומחי אריקס ביקורת מבנים לביקורת מבנים ובדק בית.`;
    return {
      title,
      description: desc,
      alternates: {
        canonical: `/${encodeURIComponent(article.slug)}`,
      },
      openGraph: {
        title,
        description: desc,
        url: `https://www.homeinspection.co.il/${encodeURIComponent(article.slug)}`,
        locale: "he_IL",
        type: "article",
      }
    };
  }

  return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let slug = resolvedParams.slug;
  
  if (!slug) return notFound();

  // Next.js params are usually already decoded, but we handle both cases carefully.
  // We also handle cases where the slug might incorrectly include a leading slash.
  let decodedSlug = slug;
  if (decodedSlug.startsWith('/')) {
    decodedSlug = decodedSlug.substring(1);
  }

  try {
    // If it's already decoded, decodeURIComponent is a no-op or might throw if it has unescaped %
    // We try to decode until no more % are present or it stabilizes
    let prev = '';
    while (decodedSlug.includes('%') && decodedSlug !== prev) {
      prev = decodedSlug;
      decodedSlug = decodeURIComponent(decodedSlug);
    }
  } catch (e) {
    // Fallback if decoding fails
  }
  
  decodedSlug = decodedSlug.normalize('NFC');
  
  const findMatch = (mapping: Record<string, any>) => {
    const target = decodedSlug.toLowerCase();
    return Object.keys(mapping).find(k => {
      const normalizedKey = k.normalize('NFC').toLowerCase();
      // Check for direct match or encoded match
      return normalizedKey === target || encodeURIComponent(normalizedKey).toLowerCase() === target;
    });
  };

  // 1. Check main page mapping
  const mainKey = findMatch(mainPageMapping);
  if (mainKey) {
    const render = mainPageMapping[mainKey];
    return <>{render()}</>;
  }

  // 2. Check location mapping
  const locKey = findMatch(locationMapping);
  if (locKey) {
    return <LocationPage city={locationMapping[locKey]} />;
  }

  // 3. KnowledgeHub article check
  const article = articles.find(a => {
    const normSlug = a.slug.normalize('NFC').toLowerCase();
    const target = decodedSlug.toLowerCase();
    return normSlug === target || a.id.toLowerCase() === target || encodeURIComponent(normSlug).toLowerCase() === target;
  });
  
  if (article) {
    return <KnowledgeHub initialArticleId={article.id} />;
  }

  // 4. Default fallback - check if it matches an article ID directly
  const articleById = articles.find(a => a.id.toLowerCase() === decodedSlug.toLowerCase());
  if (articleById) {
    return <KnowledgeHub initialArticleId={articleById.id} />;
  }

  // 5. Final fallback - not found
  return notFound();
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const existingRoutes = new Set([
    'about', 'accessibility-statement', 'building-violations',
    'court-expert', 'home-inspection-price', 'leak-detection', 'new-apartment-inspection',
    'pergola-approval', 'pricing', 'privacy-policy', 'second-hand-inspection',
    'services', 'villa-inspection', 'warranty-inspection'
  ]);

  const rawSlugs = [
    ...Object.keys(locationMapping),
    ...Object.keys(mainPageMapping),
    ...articles.map(a => a.slug),
    ...articles.map(a => a.id),
  ];
  
  const slugs = new Set<string>();
  rawSlugs.forEach(s => {
    if (!s) return;
    
    // Clean leading/trailing slashes
    let cleaned = s.normalize('NFC');
    while (cleaned.startsWith('/')) {
      cleaned = cleaned.substring(1);
    }
    while (cleaned.endsWith('/')) {
      cleaned = cleaned.substring(0, cleaned.length - 1);
    }
    
    if (!cleaned || existingRoutes.has(cleaned)) return;
    
    try {
      // Decode if it was encoded, and store the pure decoded Unicode string
      const decoded = decodeURIComponent(cleaned).normalize('NFC');
      if (decoded && !existingRoutes.has(decoded)) {
        slugs.add(decoded);
        
        // Also add the URI-encoded version to satisfy Next.js static exporter crawl
        const encoded = encodeURIComponent(decoded);
        if (encoded && encoded !== decoded && !existingRoutes.has(encoded)) {
          slugs.add(encoded);
        }
      } else if (!existingRoutes.has(cleaned)) {
        slugs.add(cleaned);
        const encoded = encodeURIComponent(cleaned);
        if (encoded && encoded !== cleaned && !existingRoutes.has(encoded)) {
          slugs.add(encoded);
        }
      }
    } catch (e) {
      if (!existingRoutes.has(cleaned)) {
        slugs.add(cleaned);
      }
    }
  });
  
  return Array.from(slugs).map((slug) => ({
    slug,
  }));
}

