const { isWebApiRestricted } = require('../lib/restricted-web-api');
const { isWebApiPropertyRestricted } = require('../lib/restricted-web-api-property');
const { isIdentifier, isMemberExpression } = require('../utils/ast');
const { report } = require('../utils/report');

const noRestrictedWebApi = {
  create(context) {
    return {
      Program() {
        const scope = context.getScope();
        // Report variables declared elsewhere (ex: variables defined as "global" by eslint)
        scope.variables.forEach((variable) => {
          if (!variable.defs.length && isWebApiRestricted(variable.name)) {
            variable.references.forEach((reference) => {
              report(context, reference.identifier);
            });
          }
        });

        // Report variables not declared at all
        scope.through.forEach((reference) => {
          if (isWebApiRestricted(reference.identifier.name)) {
            report(context, reference.identifier);
          }
        });
      },
      MemberExpression({ object, property }) {
        if (!isIdentifier(object) && !isMemberExpression(object)) {
          return;
        }

        const parent = isMemberExpression(object) ? object.property : object;

        if (isWebApiPropertyRestricted(parent.name, property.name)) {
          report(context, parent, property);
        }
      },
    };
  },
};

module.exports = {
  noRestrictedWebApi,
};
