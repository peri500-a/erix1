import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'איתור ליקויי בנייה הנדסיים מורכבים (ת"י 1920) | אריקס ביקורת מבנים',
  description: 'אבחון ומיפוי ליקויי בנייה מורכבים ע"י מהנדס מוסמך בהתאם לתקן ת"י 1920. סדקים מבניים, כשלי קונסטרוקציה ובעיות בטיחות עם דוח הנדסי מחייב.',
  alternates: {
    canonical: '/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%9C%D7%99%D7%A1%D7%95%D7%99%D7%99-%D7%91%D7%A0%D7%99%D7%99%D7%94-%D7%9E%D7%95%D7%A8%D7%9B%D7%91%D7%99%D7%9D',
  },
};

export default function Page() {
  redirect('/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%9C%D7%99%D7%A1%D7%95%D7%99%D7%99-%D7%91%D7%A0%D7%99%D7%99%D7%94-%D7%9E%D7%95%D7%A8%D7%9B%D7%91%D7%99%D7%9D');
}

