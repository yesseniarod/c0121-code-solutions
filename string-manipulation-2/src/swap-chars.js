/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstPartString = string.substring(0, firstIndex);
  var middlePartString = string.substring(firstIndex + 1, secondIndex);
  var endPartString = string.substring(secondIndex + 1);
  return firstPartString + string[secondIndex] + middlePartString + string[firstIndex] + endPartString;
}
