const sum = require('./add');
const difference = require('./subtract');
const product = require('./multiply');
const divide = require('./divide');

// console.log(process.argv[3]);
function calculate () {
  var x = Number(process.argv[2]);
  var y = Number(process.argv[4]);
if (process.argv[3] === 'plus') {
  console.log('result:', sum(x,y));
} else if (process.argv[3] === 'minus') {
  console.log('result:', difference(x,y));
} else if (process.argv[3] === 'times') {
  console.log('result:', product(x,y));
} else if (process.argv[3] === 'over') {
  console.log('result:', divide(x,y));
}
}

calculate();
