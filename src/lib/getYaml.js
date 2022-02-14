import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

/*
import { fileURLToPath } from 'url';1
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
*/
export default function getYaml(fileName) {
  const pathname = path.join(process.cwd(), fileName);
  try {
    const data = fs.readFileSync(pathname, 'utf8');
    return yaml.load(data);
  } catch (e) {
    console.error(e);
  }
}
