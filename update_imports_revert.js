import fs from 'fs';
import path from 'path';

const replacements = {
  'NotFoundPage': 'NotFound',
  'ContactSection': 'Contact',
  'WhatsAppBtn': 'WhatsAppButton',
  'StickyQuoteBtn': 'StickyQuoteButton',
  'BackToTopBtn': 'BackToTop',
  'BreadcrumbNav': 'Breadcrumbs',
  'SiteLogo': 'Logo',
  'WorkProcess': 'Process',
  'ClientTestimonials': 'Testimonials',
  'FaqSection': 'FAQ',
  'CookieBanner': 'CookieConsent',
  'BlogSection': 'BlogSpotlight',
  'CaseStudiesSection': 'CaseStudies',
  'CompareTable': 'ComparisonTable',
  'LegalPowerSection': 'LegalPower',
  'DefectsGallery': 'DefectGallery',
  'SeoSchemaTags': 'SchemaTags'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldName, newName] of Object.entries(replacements)) {
    // Replace import statements
    const importRegex = new RegExp(`import\\s+([A-Za-z0-9_]+)\\s+from\\s+['"]([^'"]*\\/)${oldName}['"]`, 'g');
    if (importRegex.test(content)) {
      content = content.replace(importRegex, `import $1 from '$2${newName}'`);
      changed = true;
    }
    
    // Replace component usage
    const jsxRegex = new RegExp(`<${oldName}(\\s|\\/|>)`, 'g');
    if (jsxRegex.test(content)) {
      content = content.replace(jsxRegex, `<${newName}$1`);
      changed = true;
    }
    
    // Replace component usage closing tag
    const jsxCloseRegex = new RegExp(`<\\/${oldName}>`, 'g');
    if (jsxCloseRegex.test(content)) {
      content = content.replace(jsxCloseRegex, `</${newName}>`);
      changed = true;
    }

    // Replace import variable name
    const importVarRegex = new RegExp(`import\\s+${oldName}\\s+from\\s+['"]([^'"]*\\/)${newName}['"]`, 'g');
    if (importVarRegex.test(content)) {
      content = content.replace(importVarRegex, `import ${newName} from '$1${newName}'`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
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
