const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello Twice');
});

app.get('/tzuyu', (req, res) => {
  res.send('<h1>I love Tzuyu</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
