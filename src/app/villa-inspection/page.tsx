import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'בדק בית לבתים פרטיים ווילות | אריקס ביקורת מבנים',
  description: 'ביקורת מבנים מקיפה לצמודי קרקע ווילות יוקרה. בדיקת מערכות גג, פיתוח חצר, שלד ואיטום ע"י מהנדס מומחה. הגנה הנדסית מושלמת לבית הפרטי שלכם.',
  alternates: {
    canonical: '/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%9C%D7%91%D7%99%D7%AA-%D7%A4%D7%A8%D7%90%D7%99-%D7%95%D7%99%D7%9C%D7%94',
  },
};

export default function Page() {
  redirect('/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%9C%D7%91%D7%99%D7%AA-%D7%A4%D7%A8%D7%90%D7%99-%D7%95%D7%99%D7%9C%D7%94');
}

