/* exported ransomCase */
function ransomCase(string) {
  var newString = string.toLowerCase().split('');
  for (var i = 1; i < newString.length; i += 2) {
    newString[i] = newString[i].toUpperCase();
  }
  return newString.join('');
}
