import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | אריקס ביקורת מבנים',
  description: 'אריקס ביקורת מבנים מחויבת להנגשת שירותיה ואתר האינטרנט שלה לכלל האוכלוסייה, כולל אנשים עם מוגבלויות. קראו את הצהרת הנגישות המלאה שלנו.',
  alternates: {
    canonical: '/%D7%94%D7%A6%D7%97%D7%A8%D7%AA-%D7%90%D7%92%D7%99%D7%A9%D7%95%D7%AA',
  },
};

export default function Page() {
  redirect('/%D7%94%D7%A6%D7%97%D7%A8%D7%AA-%D7%90%D7%92%D7%99%D7%A9%D7%95%D7%AA');
}
