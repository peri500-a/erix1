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
  isHomePage?: boolean;
}

const CommonSections: React.FC<CommonSectionsProps> = ({ 
  excludeWhyUs = false, 
  excludePergola = false,
  isHomePage = false
}) => {
  return (
    <>
      {!excludeWhyUs && <WhyUs />}
      {isHomePage && <Testimonials />}
      <TrustBadges />
      <FAQ />
      {isHomePage && <AccessibilitySection />}
      {!excludePergola && <PergolaSection />}
      <Contact />
    </>
  );
};

export default CommonSections;
