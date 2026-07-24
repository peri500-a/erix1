import type { Metadata } from "next";
import PergolaSection from "../../components/PergolaSection";
import Contact from "../../components/Contact";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'אישור מהנדס לפרגולה - תיקון 101 | אריקס ביקורת מבנים',
  description: 'זקוקים לדיווח לרשות על הקמת פרגולה? אנו מספקים אישור מהנדס קונסטרוקציה לפרגולות במהירות ומקצועיות, בהתאם לדרישות תיקון 101 לחוק התכנון והבנייה.',
  alternates: {
    canonical: '/אישור-מהנדס-לפרגולה',
  },
};

export default function Page() {
  return (
    <div className="pt-24 bg-white">
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: 'שירותים' }, { label: 'אישור מהנדס לפרגולה' }]} />
      </div>
      <PergolaSection />
      <div className="container mx-auto px-6 py-16 text-right max-w-4xl">
        <h3 className="text-3xl font-black text-slate-900 mb-6">למה צריך אישור מהנדס לפרגולה?</h3>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          על פי תיקון 101 לחוק התכנון והבנייה (המכונה גם &quot;רפורמת הפרגולות&quot;), הקמת פרגולה אינה מצריכה היתר בנייה, אך היא מחייבת דיווח לרשות המקומית תוך 45 יום מהקמתה. הדיווח חייב לכלול <strong>אישור מהנדס קונסטרוקציה</strong> המעיד על יציבותה ובטיחותה של הפרגולה.
        </p>
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
           <h4 className="font-bold text-blue-900 mb-4">היתרונות של אריקס ביקורת מבנים:</h4>
           <ul className="space-y-3">
             <li className="flex items-center justify-end gap-3 text-slate-700 font-medium">מענה מהיר - ביקורת ואישור תוך זמן קצר <span className="w-2 h-2 bg-blue-600 rounded-full"></span></li>
             <li className="flex items-center justify-end gap-3 text-slate-700 font-medium">מומחיות הנדסית בכל סוגי החומרים <span className="w-2 h-2 bg-blue-600 rounded-full"></span></li>
             <li className="flex items-center justify-end gap-3 text-slate-700 font-medium">מחיר הוגן ותחרותי <span className="w-2 h-2 bg-blue-600 rounded-full"></span></li>
           </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}
