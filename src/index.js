import { readFileSync } from 'fs';
import path, { resolve } from 'path';
import { cwd } from 'process';
import getDiffTree from './getDiff.js';
import getParser from './parsers.js';
import stylish from './stylish.js';

const getFileContent = (filePath) => readFileSync(resolve(cwd(), filePath), 'utf-8');
const getType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filePath1, filePath2) => {
  const firstObject = getParser(getFileContent(filePath1), getType(filePath1));
  const secondObject = getParser(getFileContent(filePath2), getType(filePath2));

  // console.log(getFileContent(filePath1));
  // console.log(getParser(getFileContent(filePath1)));
  // console.log(firstObject);
  // console.log(secondObject);
  return stylish(getDiffTree(firstObject, secondObject));
};

// export default getDiffTree;
export default genDiff;
