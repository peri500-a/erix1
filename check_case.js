import fs from 'fs';
import path from 'path';

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.')) {
      const dir = path.dirname(filePath);
      let resolvedPath = path.resolve(dir, importPath);
      
      // Check if file exists with exact casing
      let found = false;
      const extensions = ['.tsx', '.ts', '.css', '.json', ''];
      for (const ext of extensions) {
        const fullPath = resolvedPath + ext;
        if (fs.existsSync(fullPath)) {
          // Check exact casing
          const dirName = path.dirname(fullPath);
          const baseName = path.basename(fullPath);
          const files = fs.readdirSync(dirName);
          if (!files.includes(baseName)) {
            console.log(`CASE MISMATCH in ${filePath}: import '${importPath}' resolves to ${baseName} but actual file is different casing.`);
          }
          found = true;
          break;
        }
      }
      if (!found) {
        // console.log(`NOT FOUND in ${filePath}: import '${importPath}'`);
      }
    }
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      checkFile(fullPath);
    }
  }
}

walkDir('./src');
