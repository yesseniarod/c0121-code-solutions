/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringUpperCase = string.toLowerCase().split(' ');
  for (var i = 0; i < stringUpperCase.length; i++) {
    stringUpperCase[i] = stringUpperCase[i][0].toUpperCase() + stringUpperCase[i].substring(1);
  }

  return stringUpperCase.join(' ');
}
