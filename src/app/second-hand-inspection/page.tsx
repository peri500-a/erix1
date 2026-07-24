import type { Metadata } from "next";
import SecondHandInspectionPage from "../../components/SecondHandInspectionPage";

export const metadata: Metadata = {
  title: 'בדק בית לפני קניית דירה יד שנייה | אריקס ביקורת מבנים',
  description: 'ביקורת מקיפה לנכסים יד שנייה. איתור ליקויי בנייה, רטיבות, בעיות קונסטרוקציה והערכת עלויות תיקון לפני הרכישה הגדולה שלכם.',
  alternates: {
    canonical: '/בדק-בית-יד-שנייה',
  },
};

export default function Page() {
  return <SecondHandInspectionPage />;
}
