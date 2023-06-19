import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';

import genDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

// const jsonDiff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
const resultExpected = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('genDiffJsonFile', () => {
  const jsonDiff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(jsonDiff).toEqual(resultExpected('jsonTest.txt'));
});

test('genDiffYamlFile', () => {
  const yamlDiff = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  expect(yamlDiff).toEqual(resultExpected('jsonTest.txt'));
});
