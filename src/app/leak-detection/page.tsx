import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'איתור נזילות ורטיבות במצלמה תרמית | אריקס ביקורת מבנים',
  description: 'איתור נזילות מים ובעיות איטום ללא הרס. שימוש בטכנולוגיות מתקדמות (מצלמות FLIR) לאיתור מדויק של מקור הרטיבות ומתן פתרונות הנדסיים.',
  alternates: {
    canonical: '/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%A0%D7%96%D7%99%D7%9C%D7%95%D7%AA-%D7%95%D7%A8%D7%96%D7%99%D7%91%D7%95%D7%AA',
  },
};

export default function Page() {
  redirect('/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%A0%D7%96%D7%99%D7%9C%D7%95%D7%AA-%D7%95%D7%A8%D7%96%D7%99%D7%91%D7%95%D7%AA');
}
