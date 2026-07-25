import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'בדק בית לקראת סיום שנת בדק | אריקס ביקורת מבנים',
  description: 'ביקורת מבנים רגע לפני שנגמרת אחריות הקבלן. איתור ליקויי בנייה שהתפתחו במהלך השנה הראשונה והוצאת דוח הנדסי מחייב לתיקון הליקויים.',
  alternates: {
    canonical: '/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%A1%D7%95%D7%A3-%D7%A9%D7%A0%D7%AA-%D7%91%D7%93%D7%A7',
  },
};

export default function Page() {
  redirect('/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%A1%D7%95%D7%A3-%D7%A9%D7%A0%D7%AA-%D7%91%D7%93%D7%A7');
}

