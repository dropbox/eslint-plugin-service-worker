const { RuleTester } = require('eslint');

const ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
});

module.exports = {
  ruleTester,
};
