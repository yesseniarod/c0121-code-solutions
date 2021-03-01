/* exported takeRight */
function takeRight(array, count) {
   var endArray = [];
   var countLength = array.length - count;
   if (array.length === 0) {
     return array;
  } for (var i = array.length - 1; i >= countLength; i--) {
     endArray.unshift(array[i]);
   }
   return endArray;
}
