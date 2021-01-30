/* exported getIndexes */
function getIndexes(array) {
  var indexNumbers = [];
  var currentIndex = 0;
  while (currentIndex < array.length) {
    indexNumbers.push(currentIndex);
    currentIndex++;
  }
  return indexNumbers;
}
