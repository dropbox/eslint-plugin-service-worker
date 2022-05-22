const { noRestrictedApi } = require('./rules/no-restricted-api');
const { noDynamicImport } = require('./rules/no-dynamic-import');

module.exports = {
  rules: {
    'no-restricted-api': noRestrictedApi,
    'no-dynamic-import': noDynamicImport,
  },
};
