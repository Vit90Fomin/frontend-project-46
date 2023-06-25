import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const resultExpected = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  {
    file1: 'file1.json', file2: 'file2.json', format: undefined, expected: 'stylishTest.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: undefined, expected: 'stylishTest.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'stylish', expected: 'stylishTest.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'stylish', expected: 'stylishTest.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'plain', expected: 'plainTest.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'plain', expected: 'plainTest.txt',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'json', expected: 'jsonTest.txt',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'json', expected: 'jsonTest.txt',
  },
])('displaying file in differences form', ({
  file1, file2, format, expected,
}) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), format))
    .toEqual(resultExpected(expected));
});
