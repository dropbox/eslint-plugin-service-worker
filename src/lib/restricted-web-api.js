const { JSDOM } = require('jsdom');

const jsdom = new JSDOM();

const blockList = [
  ...Object.keys(jsdom.window),
  'XMLHttpRequest',
];

const allowList = [
  'console',
  'atob',
  'btoa',
  'setTimeout',
  'setInterval',
  'clearInterval',
  'clearTimeout',
  'navigator',
  'fetch',
  'crypto',
  'self',
];

const restrictedApiList = blockList.filter((api) => !allowList.includes(api));

const isWebApiRestricted = (api) => restrictedApiList.includes(api);

module.exports = {
  isWebApiRestricted,
};
