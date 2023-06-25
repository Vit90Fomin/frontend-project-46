import { readFileSync } from 'fs';
import path, { resolve } from 'path';
import { cwd } from 'process';
import getDiffTree from './getDiff.js';
import getParser from './parsers.js';
import getFormat from './formatters/index.js';

const getFileContent = (filePath) => readFileSync(resolve(cwd(), filePath), 'utf-8');
const getType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const firstObject = getParser(getFileContent(filePath1), getType(filePath1));
  const secondObject = getParser(getFileContent(filePath2), getType(filePath2));

  return getFormat(getDiffTree(firstObject, secondObject), format);
};

export default genDiff;
