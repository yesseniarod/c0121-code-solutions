const data = require('./data.json');
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  if (notesArray.length === 0) {
    res.json(notesArray);
  } else {
    res.status(200);
    res.json(notesArray);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400);
    res.send({ error: 'id must be a positive integer' });
  } else if (data.notes[id]) {
    res.status(200);
    res.send(data.notes[id]);
  } else {
    res.status(404);
    res.send({ error: `cannot find note with id ${id}` });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const content = req.body;
  if (Object.keys(content).length === 0) {
    res.status(400);
    res.send({ error: 'content is a required field' });
  } else if (content && res.statusCode === 200) {
    let nextId = data.nextId;
    req.body.id = nextId++;
    res.status(201);
    res.send(req.body);
    data.notes[nextId] = req.body;
  } else if (content && res.statusCode !== 200) {
    res.status(500);
    res.send({ error: 'unexpected error occured' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (deleteId < 0) {
    res.status(400);
    res.send({ error: 'id must be a positive integer' });
  } else if (!data.notes[deleteId]) {
    res.status(404);
    res.send({ error: `cannot find note with id ${deleteId}` });
  } else if (data.notes[deleteId]) {
    delete data.notes[deleteId];
    res.sendStatus(204);
  } else {
    res.status(500);
    res.send({ error: 'unexpected error occurred' });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  const putId = Number(req.params.id);
  const content = req.body;
  if (putId < 0 || Object.keys(content).length === 0) {
    res.status(400);
    res.send({ error: 'id must be a positive integer' });
    res.send({ error: 'content is a required field' });
    // messages sent should correlate with issue
  } else if (!data.notes[putId]) {
    res.status(404);
    res.send({ error: `cannot find note with id ${putId}` });
  }
});

// stopped at clients can replace note #3
