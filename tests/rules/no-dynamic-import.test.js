const { ruleTester } = require('../utils/rule-tester');
const { noDynamicImport } = require('../../src/rules/no-dynamic-import');

ruleTester.run('no-dynamic-import', noDynamicImport, {
  valid: [
    'import * as _ from "lodash";',
  ],
  invalid: [
    {
      code: 'const lastLoaded = import("https://www.test.com")',
      errors: [
        {
          message: 'dynamic import is restricted in service worker.',
        },
      ],
    },
  ],
});
