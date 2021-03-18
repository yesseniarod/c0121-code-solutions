const data = require('./data.json');
const express = require('express');
const app = express();
const fs = require('fs');

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
    const key = data.nextId;
    req.body.id = key;
    data.notes[key] = req.body;
    data.nextId++;
    res.status(201);
    res.send(req.body);
    const notesObject = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', notesObject, 'utf8', err => {
      if (err) throw err;
    });
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
    const notesObject = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', notesObject, 'utf8', err => {
      if (err) throw err;
    });
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
    if (putId < 0) {
      res.send({ error: 'id must be a positive integer' });
    } else {
      res.send({ error: 'content is a required field' });
    }
  } else if (!data.notes[putId]) {
    res.status(404);
    res.send({ error: `cannot find note with id ${putId}` });
  } else if (data.notes[putId]) {
    const key = putId;
    req.body.id = key;
    data.notes[key] = req.body;
    res.status(200);
    res.send(content);
    const notesObject = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', notesObject, 'utf8', err => {
      if (err) throw err;
    });
  } else {
    res.status(500);
    res.send({ error: 'unexpected error occured' });

  }
});
