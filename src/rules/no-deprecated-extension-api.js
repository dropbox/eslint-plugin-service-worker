const { isExtensionApiPropertyDeprecated } = require('../lib/deprecated-extension-api-property');
const { isIdentifier, isMemberExpression } = require('../utils/ast');
const { report } = require('../utils/report');

const noDeprecatedExtensionApi = {
  create(context) {
    return {
      MemberExpression({ object, property }) {
        if (!isIdentifier(object) && !isMemberExpression(object)) {
          return;
        }

        const parent = isMemberExpression(object) ? object.property : object;

        if (isExtensionApiPropertyDeprecated(parent.name, property.name)) {
          report(context, parent, property);
        }
      },
    };
  },
};

module.exports = {
  noDeprecatedExtensionApi,
};
