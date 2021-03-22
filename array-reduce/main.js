const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});

const initialValue = 0;
let withdrawal = 0;
let deposit = 0;
const balance = account.reduce((accumulator, currentValue, currentIndex) => {
  if (account[currentIndex].type === 'withdrawal') {
    withdrawal += currentValue.amount;
  } else {
    deposit += currentValue.amount;
  }
  return deposit - withdrawal;
}, initialValue);

const composite = traits.reduce((accumulator, currentValue) => {
  const newObject = Object.assign(accumulator, currentValue);
  return newObject;
});
