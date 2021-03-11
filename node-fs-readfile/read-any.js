const fs = require('fs');

fs.readFile('hopper.txt', 'utf8', (err, data) => {
  console.log(data);
});
