function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}
var greetResult = greet('Beavis');
console.log('greet:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('getArea:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement:', getLastElementResult);
