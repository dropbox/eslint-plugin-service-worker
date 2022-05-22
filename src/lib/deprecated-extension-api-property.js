const mapApiToPropertySet = {
  browser: new Set(['browserAction', 'pageAction']),
  chrome: new Set(['browserAction', 'pageAction']),
  tabs: new Set(['executeScript']),
};

const isExtensionApiPropertyDeprecated = (object, property) => {
  const propertySet = mapApiToPropertySet[object];
  if (!propertySet || propertySet.size < 1) {
    return false;
  }
  return propertySet.has(property);
};

module.exports = {
  isExtensionApiPropertyDeprecated,
};
