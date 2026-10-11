import { chmod } from 'node:fs/promises';
import { resolve } from 'node:path';

const target = process.argv[2];
if (target === undefined) {
  throw new TypeError('usage: node mark-executable.mjs <path>');
}
if (process.platform !== 'win32') {
  await chmod(resolve(process.cwd(), target), 0o755);
}
