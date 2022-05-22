const mapApiToPropertySet = new Map([
  ['URL', new Set(['createObjectURL'])],
]);

const isWebApiPropertyRestricted = (object, property) => {
  if (!mapApiToPropertySet.has(object)) {
    return false;
  }
  const propertySet = mapApiToPropertySet.get(object);
  return propertySet.has(property);
};

module.exports = {
  isWebApiPropertyRestricted,
};
