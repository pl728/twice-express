const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello Twice');
});

app.get('/tzuyu', function (req, res) {
  res.sendFile(__dirname + '\\tzuyu.html');
});
app.get('/jihyo', function (req, res) {
  res.sendFile(__dirname + '\\jihyo.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
