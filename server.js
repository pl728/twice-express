const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/twice.html');
});

const members = [];
members.push(
  'tzuyu',
  'mina',
  'jihyo',
  'sana',
  'dahyun',
  'chaeyoung',
  'nayeon',
  'jeongyoung',
  'momo'
);

app.get('/choose', (req, res) => {
  res.send(members[Math.floor(Math.random() * members.length)]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
