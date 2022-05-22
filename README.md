# eslint-plugin-service-worker
ESLint plugin for service worker environment.

## Installation
```bash
npm install eslint eslint-plugin-service-worker -D
```

## Configuration
```js
// .eslintrc.js
module.exports = {
  ...
  plugin: [
    "service-worker"
  ],
  rules: {
    "service-worker/no-restricted-web-api": "error",
    "service-worker/no-deprecated-extension-api": "error",
    "service-worker/no-dynamic-import": "error"
  },
  ...
}
```

## Rules
### no-restricted-web-api
In web extension service worker, certain web APIs will be restricted in use, such as `XMLHttpRequest` and `window` API. The rule catch the use of restricted Web APIs in service worker.

### no-deprecated-extension-api
As part of Manifest V3 upgrade, certain extension APIs, such as `browser.browserAction` and `browser.pageAction` were deprecated. The rule will catch the usage of the deprecated extension APIS in service worker.

### no-dynamic-import
Service worker does not allow dynamic import, `import()`. This rule will catch the usage of dynamic import in service worker.

## License
Apache 2.0
