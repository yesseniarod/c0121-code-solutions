const pg = require('pg');
const express = require('express');

const dataBase = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `
      select *
      from "grades"
  `;

  dataBase.query(sql)
    .then(result => {
      const grades = result.rows;
      if (grades) {
        res.status(200);
        res.send(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send({ error: 'Unexpected error occured' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrades = req.body;
  const newGradeId = Number(req.body.id);
  // error with logic in if statement
  // will still add newGrades to table
  if (req.body.score <= 0 || Object.keys(newGrades).length === 0) {
    res.status(400);
    if (Object.keys(newGrades).length === 0) {
      res.send({ error: 'must include name, course, and score' });
    } else {
      res.send({ error: 'score must be a positive integer' });
      return;
    }
  }

  const sql = `
        insert into "grades"("name", "course", "score")
        values ($1, $2, $3)
        returning *
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  dataBase.query(sql, values)
    .then(result => {
      const newRow = result.rows[newGradeId];
      if (newGrades) {
        res.status(201);
        res.send(newRow);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send({ error: 'Unexpected error occured' });
    });
});
