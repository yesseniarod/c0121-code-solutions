/* exported isUpperCased */
function isUpperCased(word) {
  var wordUpperCase = word.toUpperCase();
  if (word === wordUpperCase) {
    return true;
  } else {
    return false;
  }
}
