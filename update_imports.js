import fs from 'fs';
import path from 'path';

const replacements = {
  'NotFound': 'NotFoundPage',
  'Contact': 'ContactSection',
  'WhatsAppButton': 'WhatsAppBtn',
  'StickyQuoteButton': 'StickyQuoteBtn',
  'BackToTop': 'BackToTopBtn',
  'Breadcrumbs': 'BreadcrumbNav',
  'Logo': 'SiteLogo',
  'Process': 'WorkProcess',
  'Testimonials': 'ClientTestimonials',
  'FAQ': 'FaqSection',
  'CookieConsent': 'CookieBanner',
  'BlogSpotlight': 'BlogSection',
  'CaseStudies': 'CaseStudiesSection',
  'ComparisonTable': 'CompareTable',
  'LegalPower': 'LegalPowerSection',
  'DefectGallery': 'DefectsGallery',
  'SchemaTags': 'SeoSchemaTags'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldName, newName] of Object.entries(replacements)) {
    // Replace import variable name
    const importVarRegex = new RegExp(`import\\s+${oldName}\\s+from\\s+['"]([^'"]*\\/)${newName}['"]`, 'g');
    if (importVarRegex.test(content)) {
      content = content.replace(importVarRegex, `import ${newName} from '$1${newName}'`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir('./src');
