import _ from 'lodash';

const getType = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const getPlainFormat = (tree) => {
  const iter = (tree2, path = '') => {
    const filterTree = tree2.filter((item) => item.type !== 'unchanged');
    const mapTree = filterTree.map((child) => {
      const pathTree = `${path}${child.key}`;
      switch (child.type) {
        case 'nested':
          return iter(child.children, `${pathTree}.`);
        case 'added':
          return `Property '${pathTree}' was added with value: ${getType(child.value)}`;
        case 'changed':
          return `Property '${pathTree}' was updated. From ${getType(child.value1)} to ${getType(child.value2)}`;
        default:
          return `Property '${pathTree}' was removed`;
      }
    });
    return mapTree.join('\n');
  };
  return iter(tree);
};

export default getPlainFormat;
