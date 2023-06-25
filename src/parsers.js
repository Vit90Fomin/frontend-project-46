import yaml from 'js-yaml';

const getParser = (fileContent, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
      return yaml.load(fileContent);
    case 'yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Format ${format} is not defined`);
  }
};

export default getParser;
