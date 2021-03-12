const dataModel = require('./data.json')
const fs = require('fs');


for (let key in dataModel.notes) {
  if (process.argv[2] === 'read') {
    console.log(`${key}: ${dataModel.notes[key]}`);
  }
}


  if (process.argv[2] === 'create') {
   let key = dataModel.nextId;
    dataModel.notes[key] = process.argv[3];
    dataModel.nextId++;
    let dataObject = JSON.stringify(dataModel, null, 2);
    fs.writeFile('data.json', dataObject,'utf8', (err) => {
      if (err) throw err;
    });
  }

    for (let key in dataModel.notes) {
      if (process.argv[2] === 'delete' && key === process.argv[3]) {
          delete dataModel.notes[key];
        let dataObject = JSON.stringify(dataModel, null, 2);
        fs.writeFile('data.json', dataObject, 'utf8', (err) => {
          if (err) throw err;
        });
      }
    }


 if (process.argv[2] === 'update') {
   let key = process.argv[3];
   dataModel.notes[key] = process.argv[4];
   let dataObject = JSON.stringify(dataModel, null, 2);
   fs.writeFile('data.json', dataObject, 'utf8', (err) => {
     if (err) throw err;
   });
 }
