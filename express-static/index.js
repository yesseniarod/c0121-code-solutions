const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, 'public');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.static(join));