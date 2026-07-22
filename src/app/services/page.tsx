import type { Metadata } from "next";
import Services from "../../components/Services";
import CommonSections from "../../components/CommonSections";

export const metadata: Metadata = {
  title: 'שירותי הנדסה וביקורת מבנים | אריקס ביקורת מבנים',
  description: 'מגוון שירותי הנדסה מתקדמים: בדק בית לדירות חדשות ויד שנייה, איתור נזילות, חוות דעת מומחה לבית משפט, ואישור פרגולות. הכל תחת קורת גג אחת.',
  alternates: {
    canonical: '/services',
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      <CommonSections />
    </div>
  );
}
