import _ from 'lodash';

import { readFileSync } from 'fs';
import path, { resolve } from 'path';
import { cwd } from 'process';
import getParser from './parsers.js';

const getDiffTree = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  // console.log(data1);
  // console.log(data2);

  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  // console.log(sortedKeys);

  const getStylishFormat = sortedKeys.map((key) => {
    /*  if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        } */
    if (data1[key] === data2[key]) {
      return `${'    '}${key}: ${data1[key]}`;
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `${'  '}${'-'} ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return `${'  '}${'+'} ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `${'  '}${'-'} ${key}: ${data1[key]}\n${'  '}${'+'} ${key}: ${data2[key]}`;
    }
    return `${'    '}${key}: ${data2[key]}`;
  });

  return `{\n${getStylishFormat.join('\n')}\n}`;
};

const getFileContent = (filePath) => readFileSync(resolve(cwd(), filePath), 'utf-8');
const getType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filePath1, filePath2) => {
  const firstObject = getParser(getFileContent(filePath1), getType(filePath1));
  const secondObject = getParser(getFileContent(filePath2), getType(filePath2));

  // console.log(getFileContent(filePath1));
  // console.log(getParser(getFileContent(filePath1)));
  // console.log(firstObject);
  // console.log(secondObject);
  return getDiffTree(firstObject, secondObject);
};

// export default getDiffTree;
export default genDiff;
