import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'בדק בית לדירה חדשה מקבלן | אריקס ביקורת מבנים',
  description: 'ביקורת דירה חדשה לפני מסירה לאיתור ליקויי בנייה ואי התאמות למפרט המכר. דוח הנדסי מקצועי, ליווי מול הקבלן והבטחת ההשקעה שלכם.',
  alternates: {
    canonical: '/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%9E%D7%A1%D7%91%D7%9C%D7%9F',
  },
};

export default function Page() {
  redirect('/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%9E%D7%A1%D7%91%D7%9C%D7%9F');
}
