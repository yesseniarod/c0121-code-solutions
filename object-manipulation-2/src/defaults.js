/* exported defaults */
function defaults (target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
    target[key] = source[key];
    }
  }
}
