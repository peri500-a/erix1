import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'אישור מהנדס לפרגולה - תיקון 101 | אריקס ביקורת מבנים',
  description: 'זקוקים לדיווח לרשות על הקמת פרגולה? אנו מספקים אישור מהנדס קונסטרוקציה לפרגולות במהירות ומקצועיות, בהתאם לדרישות תיקון 101 לחוק התכנון והבנייה.',
  alternates: {
    canonical: '/%D7%90%D7%99%D7%A9%D7%95%D7%A8-%D7%9E%D7%94%D7%A0%D7%93%D7%A1-%D7%9C%D7%A4%D7%A8%D7%92%D7%95%D7%9C%D7%94',
  },
};

export default function Page() {
  redirect('/%D7%90%D7%99%D7%A9%D7%95%D7%A8-%D7%9E%D7%94%D7%A0%D7%93%D7%A1-%D7%9C%D7%A4%D7%A8%D7%92%D7%95%D7%9C%D7%94');
}

