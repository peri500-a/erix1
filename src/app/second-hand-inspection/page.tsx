import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'בדק בית לפני קניית דירה יד שנייה | אריקס ביקורת מבנים',
  description: 'ביקורת מקיפה לנכסים יד שנייה. איתור ליקויי בנייה, רטיבות, בעיות קונסטרוקציה והערכת עלויות תיקון לפני הרכישה הגדולה שלכם.',
  alternates: {
    canonical: '/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%99%D7%93-%D7%A9%D7%A0%D7%99%D7%99%D7%94',
  },
};

export default function Page() {
  redirect('/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%99%D7%93-%D7%A9%D7%A0%D7%99%D7%99%D7%94');
}

