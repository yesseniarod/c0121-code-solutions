/* exported getWords */
function getWords(string) {
  var splitWords;
  var noWords = [];
  if (string !== '') {
    splitWords = string.split(' ');
  } else {
    return noWords;
  }
  return splitWords;
}
