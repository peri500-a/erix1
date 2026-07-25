import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'חוות דעת הנדסית לבית משפט | מהנדס מומחה קביל משפטית - אריקס',
  description: 'זקוקים לחוות דעת הנדסית לבית משפט? אריקס ביקורת מבנים מספקת חוות דעת מומחה קבילות לחלוטין, מבוססות על תקנים ישראליים וכוללות ליווי ומתן עדות מומחה בערכאות.',
  alternates: {
    canonical: '/%D7%97%D7%95%D7%95%D7%AA-%D7%93%D7%A2%D7%AA-%D7%94%D7%A0%D7%93%D7%A1%D7%99%D7%AA-%D7%9C%D7%91%D7%99%D7%AA-%D7%9E%D7%A9%D7%A4%D7%90',
  },
};

export default function Page() {
  redirect('/%D7%97%D7%95%D7%95%D7%AA-%D7%93%D7%A2%D7%AA-%D7%94%D7%A0%D7%93%D7%A1%D7%99%D7%AA-%D7%9C%D7%91%D7%99%D7%AA-%D7%9E%D7%A9%D7%A4%D7%90');
}
