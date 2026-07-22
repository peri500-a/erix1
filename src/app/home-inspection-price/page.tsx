import type { Metadata } from "next";
import PricingPage from "../../components/PricingPage";

export const metadata: Metadata = {
  title: "כמה עולה בדק בית? מחירון בדק בית מעודכן | אריקס ביקורת מבנים",
  description: "מחפשים בדק בית מחיר משתלם ושקוף? היכנסו למחירון המלא של אריקס ביקורת מבנים. מחירים מפורטים לפי גודל הדירה, סוג הנכס (קבלן/יד שנייה) והסברים על עלויות.",
  alternates: {
    canonical: '/%D7%91%D7%93%D7%A7-%D7%91%D7%99%D7%AA-%D7%9E%D7%97%D7%99%D7%A8',
  },
};

export default function Page() {
  return <PricingPage />;
}
