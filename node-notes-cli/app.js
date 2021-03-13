const dataModel = require('./data.json');
const fs = require('fs');

for (const key in dataModel.notes) {
  if (process.argv[2] === 'read') {
    console.log(`${key}: ${dataModel.notes[key]}`);
  }
}

if (process.argv[2] === 'create') {
  const key = dataModel.nextId;
  dataModel.notes[key] = process.argv[3];
  dataModel.nextId++;
  const dataObject = JSON.stringify(dataModel, null, 2);
  fs.writeFile('data.json', dataObject, 'utf8', err => {
    if (err) throw err;
  });
}

// for (const key in dataModel.notes) {
if (process.argv[2] === 'delete') {
  const key = process.argv[3];
  delete dataModel.notes[key];
  const dataObject = JSON.stringify(dataModel, null, 2);
  fs.writeFile('data.json', dataObject, 'utf8', err => {
    if (err) throw err;
  });
}
// }

if (process.argv[2] === 'update') {
  const key = process.argv[3];
  dataModel.notes[key] = process.argv[4];
  const dataObject = JSON.stringify(dataModel, null, 2);
  fs.writeFile('data.json', dataObject, 'utf8', err => {
    if (err) throw err;
  });
}
