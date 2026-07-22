import type { Metadata } from "next";
import AccessibilityStatement from "../../components/AccessibilityStatement";

export const metadata: Metadata = {
  title: 'הצהרת נגישות | אריקס ביקורת מבנים',
  description: 'אריקס ביקורת מבנים מחויבת להנגשת שירותיה ואתר האינטרנט שלה לכלל האוכלוסייה, כולל אנשים עם מוגבלויות. קראו את הצהרת הנגישות המלאה שלנו.',
  alternates: {
    canonical: '/accessibility-statement',
  },
};

export default function Page() {
  return <AccessibilityStatement />;
}
