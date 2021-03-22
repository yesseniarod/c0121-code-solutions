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

// post route works
app.post('/api/grades', (req, res) => {
  const newGrades = req.body;

  if (req.body.score <= 0 || Object.keys(newGrades).length < 2) {
    res.status(400);
    if (Object.keys(newGrades).length < 2) {
      res.send({ error: 'must include name, course, and score' });
      return;
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
      const newRow = result.rows[result.rows.length - 1];
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
  const grade = req.body;
  const updateGradeId = parseInt(req.params.gradeId, 10);

  if (updateGradeId <= 0 || Object.keys(grade).length < 2) {
    res.status(400);
    if (updateGradeId <= 0) {
      res.send({ error: 'invalid gradeId' });
      return;
    } else {
      res.send({ error: 'name, course, or score may be invalid or missing' });
      return;
    }
  }

  const sql = `
        update "grades"
        set "name" = $1,
          "course" = $2,
          "score" =  $3
        where "gradeId" = $4
        returning *
  `;

  const values = [req.body.name, req.body.course, req.body.score, req.param.gradeId];
  // const checkId = [updateGradeId];
  // const updatedRowIndex = updateGradeId - 1;

  dataBase.query(sql, values)
    .then(result => {
      const updateGrade = result.rows[updateGradeId - 1];
      // tried numerical value and still gave errors
      if (updateGrade) {
        res.status(200);
        res.send(updateGrade);
        // if valid gradeId, will give error

      } else if (!updateGrade) {
        res.status(404);
        res.send({ error: `cannot find grade with gradeId ${updateGradeId}` });
        // will post grade even if it says id not found
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send({ error: 'unexpected error occurred' });
    });

});
