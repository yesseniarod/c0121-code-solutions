var student = {
  firstName: 'Yessenia ',
  lastName: 'Rodriguez',
  age: 27
};

var fullName = student.firstName + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'veterinary assistant';

console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Rav4',
  year: 2018
};

vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;

console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

var pet = {
  name: 'Marz',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('pet:', pet);
