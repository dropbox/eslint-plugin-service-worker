const { ruleTester } = require('../utils/rule-tester');
const { noRestrictedApi } = require('../../src/rules/no-restricted-api');

ruleTester.run('no-restricted-api', noRestrictedApi, {
  valid: [
    'console.log("hello world");',
    'const res = await fetch("https://www.test.com");',
    'self.addListener(() => {});',
    'const canvas = new OffscreenCanvas(100, 1)',
    'const file = new File();',
    'const fileReader = new FileReader();',
    'const url = new URL();',
    'const keys = await crypto.subtle.generateKey();',
    'const p = () => new Promise((resolve, reject) => resolve(true));',
    'p().then(() => {}).catch(() => {});',
    'const plainText = atob(btoa("a")); // "a"',
    'export const window = { notBrowserWindow: true };',
  ],
  invalid: [
    {
      code: 'open("https://www.test.com");',
      errors: [
        {
          message: 'open does not exist in service worker.',
        },
      ],
    },
    {
      code: 'alert("hello world");',
      errors: [
        {
          message: 'alert does not exist in service worker.',
        },
      ],
    },
    {
      code: 'var xhr = new XMLHttpRequest();',
      errors: [
        {
          message: 'XMLHttpRequest does not exist in service worker.',
        },
      ],
    },
    {
      code: 'var xhr = new window.XMLHttpRequest();',
      errors: [
        {
          message: 'window does not exist in service worker.',
        },
      ],
    },
    {
      code: 'window.addListener(() => {})',
      errors: [
        {
          message: 'window does not exist in service worker.',
        },
      ],
    },
    {
      code: 'var canvas = document.createElement(\'canvas\');',
      errors: [
        {
          message: 'document does not exist in service worker.',
        },
      ],
    },
    {
      code: 'const objectUrl = URL.createObjectURL()',
      errors: [
        {
          message: 'URL.createObjectURL does not exist in service worker.',
        },
      ],
    },
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
  ],
});
