import type { Metadata } from "next";
import ComplexBuildingDefectsPage from "../../components/ComplexBuildingDefectsPage";

export const metadata: Metadata = {
  title: 'איתור ליקויי בנייה הנדסיים מורכבים (ת"י 1920) | אריקס ביקורת מבנים',
  description: 'אבחון ומיפוי ליקויי בנייה מורכבים ע"י מהנדס מוסמך בהתאם לתקן ת"י 1920. סדקים מבניים, כשלי קונסטרוקציה ובעיות בטיחות עם דוח הנדסי מחייב.',
  alternates: {
    canonical: '/איתור-ליקויי-בנייה-מורכבים',
  },
};

export default function Page() {
  return <ComplexBuildingDefectsPage />;
}
