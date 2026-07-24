import React, { Suspense } from 'react';
import type { Metadata } from "next";
import { Rubik, Assistant } from "next/font/google";
import "../index.css";
import WhatsAppButton from "../components/WhatsAppButton";
import SchemaTags from "../components/SchemaTags";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import StickyQuoteButton from "../components/StickyQuoteButton";
import AccessibilityButton from "../components/AccessibilityButton";
import CookieConsent from "../components/CookieConsent";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "אריקס ביקורת מבנים",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  title: {
    default: "בדק בית ברעננה, ת\"א והמרכז | אריקס ביקורת מבנים - מהנדס מוסמך",
    template: "%s | אריקס ביקורת מבנים"
  },
  description: "למעלה מ-10,000 בדיקות ו-30 שנות ניסיון הנדסי. בדק בית לפני קנייה, בדק בית מקבלן ואיתור נזילות בטכנולוגיה תרמית. דוח הנדסי קביל בבית משפט - קבלו ייעוץ חינם עוד היום.",
  keywords: [
    "בדק בית",
    "ביקורת מבנים",
    "ביקורת הנדסית",
    "מהנדס בדק בית",
    "בדק בית מקבלן",
    "איתור נזילות",
    "חוות דעת הנדסית",
    "ביקורת דירה לפני קנייה",
    "בדק בית מומלץ",
    "אריקס ביקורת מבנים",
    "אריקס ביקורת מבנים",
    "ליקויי בנייה"
  ],
  metadataBase: new URL('https://www.homeinspection.co.il'),
  openGraph: {
    title: "אריקס ביקורת מבנים | בדק בית, ביקורת הנדסית ואיתור ליקויים ע\"י מהנדס",
    description: "מומחים בביקורת הנדסית, בדק בית לפני קניה ואיתור רטיבות במצלמה תרמית. קבלו דו\"ח הנדסי מחייב ומקצועי.",
    url: 'https://www.homeinspection.co.il',
    type: "website",
    siteName: "אריקס ביקורת מבנים",
    locale: "he_IL",
    images: [
      {
        url: 'https://res.cloudinary.com/dbzklnlcx/image/upload/v1774888746/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%94%D7%90%D7%AA%D7%A8_%D7%94%D7%A8%D7%90%D7%A9%D7%991_yinn5i.jpg',
        width: 1200,
        height: 630,
        alt: 'אריקס ביקורת מבנים - בדק בית וביקורת הנדסית',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "אריקס ביקורת מבנים | בדק בית וביקורת הנדסית ברמה הגבוהה ביותר",
    description: "ליווי הנדסי מלא בביצוע בדק בית לדירה חדשה או יד שניה. איתור ליקויים סמויים בטכנולוגיה מתקדמת.",
    images: ['https://res.cloudinary.com/dbzklnlcx/image/upload/v1774888746/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%94%D7%90%D7%AA%D7%A8_%D7%94%D7%A8%D7%90%D7%A9%D7%991_yinn5i.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // User will need to update this
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-right" suppressHydrationWarning>
        <SchemaTags 
          type="WebSite" 
          data={{
            name: "אריקס ביקורת מבנים",
            alternateName: ["אריקס ביקורת מבנים", "Erix Engineering", "Erix Building Inspection", "אריקס בדק בית", "אריקס"],
            url: "https://www.homeinspection.co.il/"
          }} 
        />
        <SchemaTags 
          type="LocalBusiness" 
          data={{
            name: "אריקס ביקורת מבנים - מהנדס בדק בית",
            image: "https://res.cloudinary.com/dbzklnlcx/image/upload/v1774888746/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%94%D7%90%D7%AA%D7%A8_%D7%94%D7%A8%D7%90%D7%A9%D7%991_yinn5i.jpg",
            telephone: "052-2501008",
            email: "erix1008@gmail.com",
            url: "https://www.homeinspection.co.il/",
            priceRange: "₪₪",
            address: {
              "@type": "PostalAddress",
              addressLocality: "רעננה",
              addressRegion: "המרכז והשרון",
              addressCountry: "IL"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.1848,
              longitude: 34.8713
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                opens: "08:00",
                closes: "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday"],
                opens: "08:00",
                closes: "13:00"
              }
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "128"
            },
            areaServed: [
              "רעננה", "תל אביב", "ירושלים", "הרצליה", "הוד השרון", "רמת השרון", "שוהם", "נס ציונה", "תל מונד", "אבן יהודה", "מרכז", "שרון"
            ]
          }} 
        />
        <Suspense fallback={<div className="h-20 bg-white" />}>
          <Header />
        </Suspense>
        <main id="main-content" className="outline-none">
          {children}
        </main>
        <Suspense fallback={<div className="h-40 bg-slate-900" />}>
          <Footer />
        </Suspense>
        <WhatsAppButton />
        <Suspense fallback={null}>
          <BackToTop />
        </Suspense>
        <Suspense fallback={null}>
          <StickyQuoteButton />
        </Suspense>
        <Suspense fallback={null}>
          <AccessibilityButton />
        </Suspense>
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
      </body>
    </html>
  );
}
