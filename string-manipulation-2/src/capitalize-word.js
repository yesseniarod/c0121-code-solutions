/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var seperateWord = lowerCase.slice(1, 4);
  var firstLetter = word[0];
  var upperCase = firstLetter.toUpperCase();
  if (lowerCase === 'javascript') {
    var remainderOfWord = lowerCase.slice(5, 10);
    var specialCase = word[4];
    var specialUpperCase = specialCase.toUpperCase();
    var newWord = upperCase + seperateWord + specialUpperCase + remainderOfWord;
  } else {
    newWord = upperCase + seperateWord;
  }
  return newWord;
}
