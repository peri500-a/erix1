import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'איתור חריגות בנייה ובדיקת היתרים | אריקס ביקורת מבנים',
  description: 'לפני שקונים נכס, חשוב לוודא שהוא תואם להיתר הבנייה. אנו מבצעים בדיקת חריגות בנייה יסודית למניעת צווי הריסה, קנסות ובעיות משפטיות בעתיד.',
  alternates: {
    canonical: '/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%97%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%91%D7%A0%D7%99%D7%99%D7%94',
  },
};

export default function Page() {
  redirect('/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%97%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%91%D7%A0%D7%99%D7%99%D7%94');
}
