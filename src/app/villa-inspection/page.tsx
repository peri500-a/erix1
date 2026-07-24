import type { Metadata } from "next";
import VillaInspectionPage from "../../components/VillaInspectionPage";

export const metadata: Metadata = {
  title: 'בדק בית לבתים פרטיים ווילות | אריקס ביקורת מבנים',
  description: 'ביקורת מבנים מקיפה לצמודי קרקע ווילות יוקרה. בדיקת מערכות גג, פיתוח חצר, שלד ואיטום ע"י מהנדס מומחה. הגנה הנדסית מושלמת לבית הפרטי שלכם.',
  alternates: {
    canonical: '/בדק-בית-לבית-פרטי-וילה',
  },
};

export default function Page() {
  return <VillaInspectionPage />;
}
