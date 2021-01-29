/* exported oddOrEven */
function oddOrEven(numbers) {
  var result = [];
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result = 'even';
      newArray.push(result);
    } else {
      result = 'odd';
      newArray.push(result);
    }
  }
  return newArray;
}
