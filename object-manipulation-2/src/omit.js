/* exported omit */
function omit(source, keys) {
  var omitObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      omitObj[key] = source[key];
    }
  }
  return omitObj;
}
