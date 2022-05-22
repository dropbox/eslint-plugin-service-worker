const { noDynamicImport } = require('./rules/no-dynamic-import');
const { noRestrictedWebApi } = require('./rules/no-restricted-web-api');
const { noDeprecatedExtensionApi } = require('./rules/no-deprecated-extension-api');

module.exports = {
  rules: {
    'no-restricted-web-api': noRestrictedWebApi,
    'no-deprecated-extension-api': noDeprecatedExtensionApi,
    'no-dynamic-import': noDynamicImport,
  },
};
