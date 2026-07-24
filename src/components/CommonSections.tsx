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
  excludeFAQ?: boolean;
  excludePergola?: boolean;
  isHomePage?: boolean;
}

const CommonSections: React.FC<CommonSectionsProps> = ({ 
  excludeWhyUs, 
  excludeFAQ,
  excludePergola,
  isHomePage = false
}) => {
  const shouldExcludeWhyUs = excludeWhyUs !== undefined ? excludeWhyUs : !isHomePage;
  const shouldExcludeFAQ = excludeFAQ !== undefined ? excludeFAQ : !isHomePage;
  const shouldExcludePergola = excludePergola !== undefined ? excludePergola : !isHomePage;

  return (
    <>
      {!shouldExcludeWhyUs && <WhyUs />}
      {isHomePage && <Testimonials />}
      <TrustBadges />
      {!shouldExcludeFAQ && <FAQ />}
      {isHomePage && <AccessibilitySection />}
      {!shouldExcludePergola && <PergolaSection />}
      <Contact />
    </>
  );
};

export default CommonSections;
