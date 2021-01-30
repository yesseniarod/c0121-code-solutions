/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
