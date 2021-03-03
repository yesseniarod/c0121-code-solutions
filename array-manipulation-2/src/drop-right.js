/* exported dropRight */
function dropRight(array, count) {
  var takeArray = [];
  var countLength = array.length - count;
  if (array.length === 0) {
    return array;
  } for (var i = 0; i < countLength; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
