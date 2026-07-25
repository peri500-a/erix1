import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace imports from './components/...' to './ui-components/...'
  const importRegex1 = /from\s+['"]\.\/components\/(.*?)['"]/g;
  if (importRegex1.test(content)) {
    content = content.replace(importRegex1, "from './ui-components/$1'");
    changed = true;
  }

  // Replace imports from '../components/...' to '../ui-components/...'
  const importRegex2 = /from\s+['"]\.\.\/components\/(.*?)['"]/g;
  if (importRegex2.test(content)) {
    content = content.replace(importRegex2, "from '../ui-components/$1'");
    changed = true;
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
