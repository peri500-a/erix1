import { MetadataRoute } from 'next';
import { articles } from '../data/articles';

export const dynamic = 'force-static';

const baseUrl = 'https://www.homeinspection.co.il';

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

const mainRoutes = [
  '',
  '/אודות',
  '/בדק-בית-מקבלן',
  '/בדק-בית-יד-שנייה',
  '/בדק-בית-לבית-פרטי-וילה',
  '/בדק-בית-סוף-שנת-בדק',
  '/איתור-נזילות-ורטיבות',
  '/איתור-ליקויי-בנייה-מורכבים',
  '/חוות-דעת-הנדסית-לבית-משפט',
  '/בדק-בית-מחיר',
  '/הצהרת-נגישות',
  '/מדיניות-פרטיות',
  '/אישור-מהנדס-לפרגולה',
  '/איתור-חריגות-בנייה',
  '/בדק-בית-תמא-38-פינוי-בינוי',
  '/מדד-אריקס-נתוני-ליקויי-בניה',
  '/מה-אנחנו-בודקים',
  '/מאגר-הידע-ההנדסי',
  '/services',
  '/sample-report',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes = locationSlugs.map(slug => `/${slug}`);
  const articleRoutes = articles.map(article => `/${article.slug}`);

  const allRoutes = [...mainRoutes, ...locationRoutes, ...articleRoutes];
  const uniqueRoutes = Array.from(new Set(allRoutes));

  return uniqueRoutes.map((route) => {
    // Safely encode URI paths for Hebrew characters
    const encodedPath = route
      .split('/')
      .map(segment => encodeURIComponent(segment))
      .join('/');

    const isHome = route === '';
    const isPrimaryServiceOrLocation =
      route.includes('בדק-בית') ||
      route.includes('איתור') ||
      route.includes('חוות-דעת');

    return {
      url: `${baseUrl}${encodedPath}`,
      lastModified: new Date(),
      changeFrequency: isHome ? 'weekly' : isPrimaryServiceOrLocation ? 'weekly' : 'monthly',
      priority: isHome ? 1.0 : isPrimaryServiceOrLocation ? 0.9 : 0.7,
    };
  });
}

