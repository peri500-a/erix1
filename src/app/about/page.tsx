import type { Metadata } from "next";
import AboutPage from "../../components/AboutPage";

export const metadata: Metadata = {
  title: 'אודות אריקס ביקורת מבנים | ניסיון ומקצועיות בביקורת מבנים',
  description: 'הכירו את אריקס ביקורת מבנים: חברת הנדסה מובילה המתמחה בבדק בית, ביקורת מבנים וייעוץ הנדסי. המהנדס יוסי אריקס וצוות המומחים שלנו עומדים לשירותכם.',
  alternates: {
    canonical: '/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
