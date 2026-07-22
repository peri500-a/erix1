import type { Metadata } from "next";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import KnowledgeHub from "../components/KnowledgeHub";
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
      <KnowledgeHub />
      <CommonSections excludeWhyUs excludePergola />
    </main>
  );
}
