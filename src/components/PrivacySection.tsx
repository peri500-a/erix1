
import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';

const PrivacySection: React.FC = () => {
  return (
    <section id="privacy-policy" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">מדיניות פרטיות</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">אנו מכבדים את פרטיותך ומחויבים להגן עליה.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
          <PrivacyPolicy />
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
