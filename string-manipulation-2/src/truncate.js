/* exported truncate */
function truncate(length, string) {
  var shortenString = string.slice(0, length);
  var updatedString = shortenString + '...';
  return updatedString;
}
