import type { Metadata } from "next";
import KnowledgeHub from "../../components/KnowledgeHub";
import CommonSections from "../../components/CommonSections";
import Breadcrumbs from "../../components/Breadcrumbs";
import ViolationsComparisonTable from "../../components/ViolationsComparisonTable";

export const metadata: Metadata = {
  title: 'איתור חריגות בנייה ובדיקת היתרים | אריקס ביקורת מבנים',
  description: 'לפני שקונים נכס, חשוב לוודא שהוא תואם להיתר הבנייה. אנו מבצעים בדיקת חריגות בנייה יסודית למניעת צווי הריסה, קנסות ובעיות משפטיות בעתיד.',
  alternates: {
    canonical: '/building-violations',
  },
};

export default function Page() {
  return (
    <div className="pt-24 bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'איתור חריגות בנייה' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-8 mb-6 text-right">איתור חריגות בנייה <br/><span className="text-blue-600">ובדיקת היתרים</span></h1>
      </div>
      
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-right">
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                חריגות בנייה הן ליקוי שאינו הנדסי גרידא, אלא משפטי-תכנוני. קניית נכס עם חריגה פירושה לקיחת אחריות על עבירת בנייה שבוצעה בעבר. אנו עוזרים לכם לזהות את החריגות הללו מבעוד מועד.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                 <div className="flex gap-4 items-start flex-row-reverse">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0">!</div>
                    <div>
                       <h4 className="font-bold text-slate-900">סיכון קנסות</h4>
                       <p className="text-sm text-slate-500 italic">קנסות כבדים מהרשות המקומית על בנייה לא חוקית.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start flex-row-reverse">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0">!</div>
                    <div>
                       <h4 className="font-bold text-slate-900">צווי הריסה</h4>
                       <p className="text-sm text-slate-500 italic">חשש לצו הריסה על תוספות בנייה שלא אושרו.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <ViolationsComparisonTable />

      <div className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">מאמרים מקצועיים בנושא</h3>
        <KnowledgeHub initialArticleId="building-violations" preventScroll={true} />
      </div>
      
      <CommonSections />
    </div>
  );
}
