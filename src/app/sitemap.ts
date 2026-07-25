import { articles } from '../data/articles';

export const dynamic = 'force-static';

const locationSlugs = [
  'בדק-בית-בתל-אביב',
  'בדק-בית-בירושלים',
  'בדק-בית-ברעננה',
  'בדק-בית-בהוד-השרון',
  'בדק-בית-בהרצליה',
  'בדק-בית-ברמת-השרון',
  'בדק-בית-בשוהם',
  'בדק-בית-בנס-ציונה',
  'בדק-בית-בתל-מונד',
  'בדק-בית-באבן-יהודה',
];

export default function sitemap() {
  const baseUrl = 'https://www.homeinspection.co.il';
  
  const mainRoutes = [
    '',
    '/אודות',
    '/בדק-בית-מקבלן',
    '/בדק-בית-יד-שנייה',
    '/בדק-בית-לבית-פרטי-וילה',
    '/בדק-בית-סוף-שנת-בדק',
    '/איתור-נזילות-ורטיבות',
    '/חוות-דעת-הנדסית-לבית-משפט',
    '/בדק-בית-מחיר',
    '/הצהרת-נגישות',
    '/מדיניות-פרטיות',
    '/אישור-מהנדס-לפרגולה',
    '/ליקויי-בנייה',
    '/מה-אנחנו-בודקים',
    '/sample-report',
  ];

  const locationRoutes = locationSlugs.map(slug => `/${slug}`);
  const articleRoutes = articles.map(article => `/${article.slug}`);

  const allRoutes = [...mainRoutes, ...locationRoutes, ...articleRoutes];

  // Map to unique routes and format for sitemap
  return Array.from(new Set(allRoutes)).map((route) => {
    // For Hebrew URLs in sitemap, it's safer to encode them
    const segments = route.split('/').map(segment => encodeURIComponent(segment));
    const encodedRoute = segments.join('/');
    
    return {
      url: `${baseUrl}${encodedRoute}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : (route.includes('inspection') || route.includes('בדק-בית') ? 0.9 : 0.7),
    };
  });
}
