import React from 'react';

interface SchemaTagsProps {
  type: 'LocalBusiness' | 'FAQPage' | 'Article' | 'WebSite' | 'Service' | 'BreadcrumbList' | 'AboutPage';
  data: Record<string, unknown>;
}

const SchemaTags: React.FC<SchemaTagsProps> = ({ type, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaTags;