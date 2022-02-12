import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

import logExecutionTimeAsync from './logExecutionTime';
/*
import { fileURLToPath } from 'url';1
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
*/
export default function getYaml(fileName) {
  const pathname = path.join(process.cwd(), fileName);
  try {
    const f = () => {
      const data = fs.readFileSync(pathname, 'utf8');
      return yaml.load(data);
    };
    return logExecutionTimeAsync(f, `${path.basename(pathname)} is loaded`);
  } catch (e) {
    console.error(e);
  }
}

