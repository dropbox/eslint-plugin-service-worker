/*
const mapApiToPropertySet = {
  browser: new Set(['browserAction', 'pageAction']),
  chrome: new Set(['browserAction', 'pageAction']),
  tabs: new Set(['executeScript']),
};
*/
const mapApiToPropertySet = new Map([
  ['browser', new Set(['browserAction', 'pageAction'])],
  ['chrome', new Set(['browserAction', 'pageAction'])],
  ['tabs', new Set(['executeScript'])],
  ['runtime', new Set(['getBackgroundPage'])],
  ['extension', new Set(['getBackgroundPage', 'getExtensionTabs', 'getViews'])],
]);

const isExtensionApiPropertyDeprecated = (object, property) => {
  if (!mapApiToPropertySet.has(object)) {
    return false;
  }
  const propertySet = mapApiToPropertySet.get(object);
  return propertySet.has(property);
};

module.exports = {
  isExtensionApiPropertyDeprecated,
};
