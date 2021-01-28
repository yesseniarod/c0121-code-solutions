var length = 2;
var width = 3;
var height = 5;

var maximumValue = Math.max(length, width, height);
console.log('maximumValue:', maximumValue);

var heroes = ['Wonder Woman', 'Spider-Man', 'IronMan', 'Captain Marvel'];
var randomNumber = Math.random();
randomNumber = (Math.random() * heroes.length);

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    title: 'Talking to Strangers',
    author: 'Malcolm Gladwell'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Yessenia' + ' ' + 'Rodriguez';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
