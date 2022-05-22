const noDynamicImport = {
  create(context) {
    return {
      ImportExpression(node) {
        context.report({
          node,
          message: 'dynamic import is restricted in service worker.',
        });
      },
    };
  },
};

module.exports = {
  noDynamicImport,
};
