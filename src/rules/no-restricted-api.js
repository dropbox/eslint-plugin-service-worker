const { isWebApiRestricted } = require('../lib/restricted-web-api');
const { isWebApiPropertyRestricted } = require('../lib/restricted-web-api-property');
const { isExtensionApiPropertyDeprecated } = require('../lib/deprecated-extension-api-property');
const { isIdentifier, isMemberExpression } = require('../utils/ast');

const noRestrictedApi = {
  create(context) {
    const report = (...nodes) => {
      const n = nodes.length;
      if (n < 1) {
        throw new Error('report requires at least one argument!');
      }
      const nodePath = nodes.map(({ name }) => name).join('.');
      context.report({
        node: nodes[n - 1],
        message: `${nodePath} does not exist in service worker.`,
      });
    };
    return {
      Program() {
        const scope = context.getScope();
        // References not declared at all
        scope.through.forEach((reference) => {
          if (isWebApiRestricted(reference.identifier.name)) {
            report(reference.identifier);
          }
        });
      },
      MemberExpression({ object, property }) {
        if (!isIdentifier(object) && !isMemberExpression(object)) {
          return;
        }

        const parent = isMemberExpression(object) ? object.property : object;

        if (
          isWebApiPropertyRestricted(parent.name, property.name)
                    || isExtensionApiPropertyDeprecated(parent.name, property.name)
        ) {
          report(parent, property);
        }
      },
    };
  },
};

module.exports = {
  noRestrictedApi,
};
