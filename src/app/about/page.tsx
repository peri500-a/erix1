import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'אודות אריקס ביקורת מבנים | ניסיון ומקצועיות בביקורת מבנים',
  description: 'הכירו את אריקס ביקורת מבנים: חברת הנדסה מובילה המתמחה בבדק בית, ביקורת מבנים וייעוץ הנדסי. המהנדס יוסי אריקס וצוות המומחים שלנו עומדים לשירותכם.',
  alternates: {
    canonical: '/%D7%90%D7%95%D7%93%D7%95%D7%AA',
  },
};

export default function Page() {
  redirect('/%D7%90%D7%95%D7%93%D7%95%D7%AA');
}
