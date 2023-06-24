import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  // console.log(data1);
  // console.log(data2);

  const sortedKeys = _.sortBy(_.union(keys1, keys2));
  // console.log(sortedKeys);

  const getTree = sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { type: 'nested', key, children: getDiffTree(data1[key], data2[key]) };
    }
    if (data1[key] === data2[key]) {
      return { type: 'unchanged', key, value: data1[key] };
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    return {
      type: 'changed', key, value1: data1[key], value2: data2[key],
    };
  });

  return getTree;
};

export default getDiffTree;
