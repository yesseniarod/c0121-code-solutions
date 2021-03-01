/* exported invert */
function invert(source) {
  var invertObj = {};
  for (var key in source) {
    invertObj[source[key]] = key;
  }
  return invertObj;
}
