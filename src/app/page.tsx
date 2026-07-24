import type { Metadata } from "next";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import CommonSections from "../components/CommonSections";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <CommonSections excludeWhyUs excludePergola isHomePage />
    </main>
  );
}
