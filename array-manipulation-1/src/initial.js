/* exported initial */
function initial(array) {
  var leaveOutLastArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    leaveOutLastArray.push(array[i]);
  }
  return leaveOutLastArray;
}
