import _ from 'lodash';

const getCurrentIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount - 2);
const getClosingIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - spacesCount);

const stringify = (obj, depth = 1) => {
  // console.log('DATA IS:', data)
  const iter = (currentValue, depthIter) => {
    const iterIndent = getCurrentIndent(depthIter);
    const closingIndent = getClosingIndent(depthIter);
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const massObj = Object.entries(currentValue);
    const lines = massObj.map(([key, value]) => `${iterIndent}  ${key}: ${iter(value, depthIter + 1)}`);
    const result = ['{', ...lines, `${closingIndent}}`].join('\n');
    return result;
  };
  return iter(obj, depth);
};

const stylish = (obj) => {
  const iter = (tree, depth = 1) => {
    const iterIndent = getCurrentIndent(depth);
    const closingIndent = getClosingIndent(depth);

    const result = tree.flatMap((user) => {
      switch (user.type) {
        case 'nested':
          return `${iterIndent}  ${user.key}: ${iter(user.children, depth + 1)}`;
        case 'deleted':
          return `${iterIndent}- ${user.key}: ${stringify(user.value, depth + 1)}`;
        case 'added':
          return `${iterIndent}+ ${user.key}: ${stringify(user.value, depth + 1)}`;
        case 'changed':
          return [`${iterIndent}- ${user.key}: ${stringify(user.value1, depth + 1)}\n${iterIndent}+ ${user.key}: ${stringify(user.value2, depth + 1)}`];
        default:
          return `${iterIndent}  ${user.key}: ${stringify(user.value, depth + 1)}`;
      }
    });
    return ['{', ...result, `${closingIndent}}`].join('\n');
  };

  return iter(obj);
};

export default stylish;
