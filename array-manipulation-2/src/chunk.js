/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  var i = 0;
  if (array.length === 0) {
    return array;
  }
while (i < array.length) {
  chunkArray.push(array.slice(i, i += size));
}
  return chunkArray;
}
