import type { Metadata } from "next";
import LeakDetectionPage from "../../components/LeakDetectionPage";

export const metadata: Metadata = {
  title: 'איתור נזילות ורטיבות במצלמה תרמית | אריקס ביקורת מבנים',
  description: 'איתור נזילות מים ובעיות איטום ללא הרס. שימוש בטכנולוגיות מתקדמות (מצלמות FLIR) לאיתור מדויק של מקור הרטיבות ומתן פתרונות הנדסיים.',
  alternates: {
    canonical: '/leak-detection',
  },
};

export default function Page() {
  return <LeakDetectionPage />;
}
