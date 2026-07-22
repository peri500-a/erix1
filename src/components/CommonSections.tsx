import React from 'react';
import Services from "./Services";
import WhyUs from "./WhyUs";
import KnowledgeHub from "./KnowledgeHub";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import AccessibilitySection from "./AccessibilitySection";
import Contact from "./Contact";
import PergolaSection from "./PergolaSection";
import TrustBadges from "./TrustBadges";

interface CommonSectionsProps {
  excludeWhyUs?: boolean;
  excludePergola?: boolean;
}

const CommonSections: React.FC<CommonSectionsProps> = ({ excludeWhyUs = false, excludePergola = false }) => {
  return (
    <>
      {!excludeWhyUs && <WhyUs />}
      <Testimonials />
      <TrustBadges />
      <FAQ />
      <AccessibilitySection />
      {!excludePergola && <PergolaSection />}
      <Contact />
    </>
  );
};

export default CommonSections;
