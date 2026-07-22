import type { Metadata } from "next";
import PrivacySection from "../../components/PrivacySection";

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | אריקס ביקורת מבנים',
  description: 'מדיניות הפרטיות של אריקס ביקורת מבנים. אנו מכבדים את פרטיותכם ומחויבים להגנה על המידע האישי שלכם במסגרת מתן שירותי בדק הבית וביקורת המבנים.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function Page() {
  return (
    <div className="pt-24 bg-white">
      <PrivacySection />
    </div>
  );
}
