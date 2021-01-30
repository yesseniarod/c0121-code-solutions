/* exported countdown */
function countdown(number) {
  var arrayNumber = [];
  while (number >= 0) {
    arrayNumber.push(number);
    number--;
  }
  return arrayNumber;
}
