import type { Metadata } from "next";
import WarrantyInspectionPage from "../../components/WarrantyInspectionPage";

export const metadata: Metadata = {
  title: 'בדק בית לקראת סיום שנת בדק | אריקס ביקורת מבנים',
  description: 'ביקורת מבנים רגע לפני שנגמרת אחריות הקבלן. איתור ליקויי בנייה שהתפתחו במהלך השנה הראשונה והוצאת דוח הנדסי מחייב לתיקון הליקויים.',
  alternates: {
    canonical: '/warranty-inspection',
  },
};

export default function Page() {
  return <WarrantyInspectionPage />;
}
