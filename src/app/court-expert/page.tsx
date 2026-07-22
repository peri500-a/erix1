import type { Metadata } from "next";
import CourtExpertPage from "../../components/CourtExpertPage";

export const metadata: Metadata = {
  title: 'חוות דעת הנדסית לבית משפט | מהנדס מומחה קביל משפטית - אריקס',
  description: 'זקוקים לחוות דעת הנדסית לבית משפט? אריקס ביקורת מבנים מספקת חוות דעת מומחה קבילות לחלוטין, מבוססות על תקנים ישראליים וכוללות ליווי ומתן עדות מומחה בערכאות.',
  alternates: {
    canonical: '/court-expert',
  },
};

export default function Page() {
  return <CourtExpertPage />;
}
