const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/twice.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
