/* exported toObject */
function toObject(keyValuePair) {
  var createObject = {};
  var objectKey = keyValuePair[0];
  createObject[objectKey] = keyValuePair[1];
  return createObject;
}
