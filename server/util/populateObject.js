module.exports = function(object, propsToPopulate) {
  const populatedObj = {};
  const props = propsToPopulate.split(" ");
  for (prop of props) {
    populatedObj[prop] = object[prop];
  }
  return populatedObj;
};
