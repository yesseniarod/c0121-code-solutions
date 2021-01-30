/* exported reverseWord */
function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString = newString + word[i];

  }
  return newString;
}
