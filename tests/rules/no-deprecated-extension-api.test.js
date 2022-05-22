const { ruleTester } = require('../utils/rule-tester');
const { noDeprecatedExtensionApi } = require('../../src/rules/no-deprecated-extension-api');

ruleTester.run('no-deprecated-extension-api', noDeprecatedExtensionApi, {
  valid: [
    'browser.action.setIcon()',
  ],
  invalid: [
    {
      code: 'browser.browserAction.setIcon();',
      errors: [
        {
          message: 'browser.browserAction does not exist in service worker.',
        },
      ],
    },
    {
      code: 'browser.pageAction.setIcon();',
      errors: [
        {
          message: 'browser.pageAction does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.browserAction.setIcon();',
      errors: [
        {
          message: 'chrome.browserAction does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.pageAction.setIcon();',
      errors: [
        {
          message: 'chrome.pageAction does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.tabs.executeScript();',
      errors: [
        {
          message: 'tabs.executeScript does not exist in service worker.',
        },
      ],
    },
    {
      code: 'browser.tabs.executeScript();',
      errors: [
        {
          message: 'tabs.executeScript does not exist in service worker.',
        },
      ],
    },
    {
      code: 'tabs.executeScript();',
      errors: [
        {
          message: 'tabs.executeScript does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.runtime.getBackgroundPage();',
      errors: [
        {
          message: 'runtime.getBackgroundPage does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.extension.getBackgroundPage();',
      errors: [
        {
          message: 'extension.getBackgroundPage does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.extension.getExtensionTabs();',
      errors: [
        {
          message: 'extension.getExtensionTabs does not exist in service worker.',
        },
      ],
    },
    {
      code: 'chrome.extension.getViews();',
      errors: [
        {
          message: 'extension.getViews does not exist in service worker.',
        },
      ],
    },
  ],
});
