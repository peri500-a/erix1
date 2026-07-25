import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | אריקס ביקורת מבנים',
  description: 'מדיניות הפרטיות של אריקס ביקורת מבנים. אנו מכבדים את פרטיותכם ומחויבים להגנה על המידע האישי שלכם במסגרת מתן שירותי בדק הבית וביקורת המבנים.',
  alternates: {
    canonical: '/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%A4%D7%A8%D7%90%D7%99%D7%95%D7%AA',
  },
};

export default function Page() {
  redirect('/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%A4%D7%A8%D7%90%D7%99%D7%95%D7%AA');
}

