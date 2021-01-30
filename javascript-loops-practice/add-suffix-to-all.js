/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  var i = 0;
  while (i < words.length) {
    var newWords = words[i] + suffix;
    newArray.push(newWords);
    i++;
  }
  return newArray;
}
