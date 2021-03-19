/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var seperateWord = lowerCase.slice(1, 4);
  var firstLetter = word[0];
  var upperCase = firstLetter.toUpperCase();
  if (lowerCase === 'javascript') {
    var newWord = 'JavaScript';
  } else {
    newWord = upperCase + seperateWord;
  }
  return newWord;
}
