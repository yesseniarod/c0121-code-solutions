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

  if (req.body.score < 1 || req.body.score > 100) {
    res.status(400).json({ error: 'score must be a number between 1 and 100' });
    return;
  } else if (req.body.name === undefined) {
    res.status(400).json({ error: 'must include name' });
    return;
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'must include course' });
    return;
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'must include score' });
    return;
  }

  const sql = `
        insert into "grades"("name", "course", "score")
        values ($1, $2, $3)
        returning *
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  dataBase.query(sql, values)
    .then(result => {
      const newRow = result.rows[0];
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

app.put('/api/grades/:gradeId', (req, res) => {
  const updateGradeId = parseInt(req.params.gradeId, 10);
  if (updateGradeId < 1 || !Number.isInteger(updateGradeId)) {
    res.status(400).json({ error: 'invalid gradeId' });
    return;
  } else if (req.body.name === undefined) {
    res.status(400).json({ error: 'must include name' });
    return;
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'must include course' });
    return;
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'must include score' });
    return;
  } else if (req.body.score < 1 || req.body.score > 100) {
    res.status(400).json({ error: 'score must be a number between 1 and 100' });
    return;
  }

  const sql = `
        update "grades"
        set "name" = $1,
          "course" = $2,
          "score" =  $3
        where "gradeId" = $4
        returning *
  `;

  const values = [req.body.name, req.body.course, req.body.score, updateGradeId];

  dataBase.query(sql, values)
    .then(result => {
      const updateGrade = result.rows[0];

      if (updateGrade) {
        res.status(200);
        res.send(updateGrade);

      } else {
        res.status(404);
        res.send({ error: `cannot find grade with gradeId ${updateGradeId}` });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send({ error: 'unexpected error occurred' });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const deleteGradeId = parseInt(req.params.gradeId, 10);
  if (deleteGradeId <= 0) {
    res.status(400);
    res.send({ error: 'invalid gradeId must be positive integer' });
    return;
  }

  const sql = `
        delete from "grades"
        where "gradeId" = $1
        returning *
  `;

  const values = [deleteGradeId];

  dataBase.query(sql, values)
    .then(result => {
      const deleteGrade = result.rows[0];
      if (!deleteGrade) {
        res.status(404);
        res.send({ error: `cannot find gradeId ${deleteGradeId}` });
      } else {
        res.status(204);
        res.send(deleteGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send({ error: 'unexpected error occurred' });
    });
});
