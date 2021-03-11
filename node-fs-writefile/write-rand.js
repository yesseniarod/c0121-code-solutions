const fs = require('fs');
const number = Math.random();

fs.writeFile('random.txt', number.toString() + '\n', (err) => {
  if (err) throw err;
});
