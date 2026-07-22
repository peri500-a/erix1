'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SchemaTags from './SchemaTags';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const pathname = usePathname();

  const getResolvedHref = (item: BreadcrumbItem, index: number): string => {
    if (item.href) return item.href;
    
    const label = item.label.trim();
    if (label === 'שירותים') return '/services';
    if (label === 'אזורי שירות') return '/';
    
    // If it's the last element of the list, it's the current page
    if (index === items.length - 1) {
      return pathname || '/';
    }
    
    return '/';
  };

  const breadcrumbSchema = {
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ראשי",
        "item": "https://www.homeinspection.co.il/"
      },
      ...items.map((item, index) => {
        const resolvedHref = getResolvedHref(item, index);
        // Ensure starting with / if not absolute
        const normalizedHref = resolvedHref.startsWith('/') ? resolvedHref : `/${resolvedHref}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          "item": `https://www.homeinspection.co.il${normalizedHref}`
        };
      })
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-bold text-slate-800">
      <SchemaTags type="BreadcrumbList" data={breadcrumbSchema} />
      <Link 
        href="/" 
        className="text-gray-500 hover:text-blue-400 transition-colors"
      >
        ראשי
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const resolvedHref = getResolvedHref(item, index);
        const hasClickableLink = item.href || (!isLast && resolvedHref !== '/');

        return (
          <React.Fragment key={index}>
            <svg className="w-4 h-4 text-gray-700 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
            {hasClickableLink ? (
              <Link 
                href={resolvedHref}
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-blue-500" : "text-gray-500"} aria-current={isLast ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
