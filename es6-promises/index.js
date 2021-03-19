const takeAChance = require('./take-a-chance');

const promiseReturn = takeAChance('Yessenia');

promiseReturn.then(value => {
  console.log(value);
});

promiseReturn.catch(function (e) {
  console.error(e.message);
});
