const mapApiToPropertySet = {
  URL: new Set(['createObjectURL']),
};

const isWebApiPropertyRestricted = (object, property) => {
  const propertySet = mapApiToPropertySet[object];
  if (!propertySet || propertySet.size < 1) {
    return false;
  }
  return propertySet.has(property);
};

module.exports = {
  isWebApiPropertyRestricted,
};
