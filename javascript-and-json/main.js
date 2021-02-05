var bookList = [
  {
    isbn: '0735211299',
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    isbn: '9781878424310',
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz'
  },
  {
    isbn: '0062315005',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  }
];

console.log('booklist array:', bookList);
console.log('typeof booklist:', typeof bookList);

var objectToString = JSON.stringify(bookList);
console.log('objectToString:', objectToString);
console.log('typeOf objectToString:', typeof objectToString);

var student = '{"numberID": "00000141247","name": "test"}';

console.log('JSON string:', student);
console.log('typeOf student:', typeof student);

var stringToObject = JSON.parse(student);
console.log('stringToObject:', stringToObject);
console.log('typeOf strinToObject:', typeof stringToObject);
