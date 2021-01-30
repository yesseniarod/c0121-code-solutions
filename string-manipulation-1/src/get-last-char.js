/* exported getLastChar */
function getLastChar(string) {
  var lastString = '';
  var lastIndex = '';
  for (var i = 0; i < string.length; i++) {
    lastString = string.length - 1;
    lastIndex = string[lastString];
  }
  return lastIndex;
}
