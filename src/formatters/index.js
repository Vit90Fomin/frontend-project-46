import getStylishFormat from './stylish.js';
import getJsonFormat from './json.js';
import getPlainFormat from './plain.js';

const getFormat = (tree, format) => {
  switch (format) {
    case 'stylish':
      return getStylishFormat(tree);
    case 'json':
      return getJsonFormat(tree);
    case 'plain':
      return getPlainFormat(tree);
    default:
      return new Error(`Unknown type ${format}!`);
  }
};

export default getFormat;
