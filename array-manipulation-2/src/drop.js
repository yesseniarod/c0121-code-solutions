/* exported drop */
function drop(array, count) {
  var dropArray = [];
  if (array.length === 0) {
    return array;
  } for (var i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
