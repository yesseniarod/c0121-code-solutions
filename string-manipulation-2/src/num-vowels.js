/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var vowels = 'aeiouAEIOU';
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}
