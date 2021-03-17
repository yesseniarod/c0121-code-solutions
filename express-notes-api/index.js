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
  if (req.body['content-length'] === 0) {
    res.status(400);
    res.send({ error: 'content is a required field' });
    // does not work, will still post with empty content
    // how can we check if req.body content is empty
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
