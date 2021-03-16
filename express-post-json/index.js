const express = require('express');
const app = express();
const nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  var gradesArray = [];
  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const data = express.json();
app.use(data);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  res.status(201);
  res.send(req.body);
  grades[nextId] = req.body;
});
