import React from 'react';

export interface Article {
  id: string;
  slug: string;
  keyword: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
  icon: React.ReactNode;
  author: string;
  datePublished: string;
  category: string;
  // Enhanced User Navigation & Value Trigger fields
  readingTime?: string;
  targetAudience?: string;
  keyQuestion?: string;
  valueTrigger?: string;
  situationId?: 'contractor' | 'second-hand' | 'moisture-sealing' | 'legal' | 'pricing-renovation';
  isFeatured?: boolean;
}
