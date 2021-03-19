/* exported isPalindromic */
function isPalindromic(string) {
  var reverseString = '';
  var originalString = string.replace(/\s/g, '');
  for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
    var reverseNoSpace = reverseString.replace(/\s/g, '');
  }
  if (reverseNoSpace === originalString) {
    return true;
  } else {
    return false;
  }
}
