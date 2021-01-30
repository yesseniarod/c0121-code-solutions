/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0];
  var firstLetterUpperCase = firstLetter.toUpperCase();
  var cutWord = word.slice(1);
  var lowerCaseAll = cutWord.toLowerCase();
  var updatedWord = firstLetterUpperCase + lowerCaseAll;
  return updatedWord;
}
