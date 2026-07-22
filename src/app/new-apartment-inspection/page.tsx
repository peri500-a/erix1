import type { Metadata } from "next";
import ContractorInspectionPage from "../../components/ContractorInspectionPage";

export const metadata: Metadata = {
  title: 'בדק בית לדירה חדשה מקבלן | אריקס ביקורת מבנים',
  description: 'ביקורת דירה חדשה לפני מסירה לאיתור ליקויי בנייה ואי התאמות למפרט המכר. דוח הנדסי מקצועי, ליווי מול הקבלן והבטחת ההשקעה שלכם.',
  alternates: {
    canonical: '/new-apartment-inspection',
  },
};

export default function Page() {
  return <ContractorInspectionPage />;
}
