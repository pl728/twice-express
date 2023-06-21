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

app.get('/twice-members', function (req, res) {
  res.json({
    members: [
      {
        name: 'Nayeon',
        full_name: 'Im Na-yeon',
        birthday: '1995-09-22',
        position: 'Lead Vocalist, Lead Dancer, Center',
        nationality: 'Korean',
      },
      {
        name: 'Jeongyeon',
        full_name: 'Yoo Jeong-yeon',
        birthday: '1996-11-01',
        position: 'Lead Vocalist',
        nationality: 'Korean',
      },
      {
        name: 'Momo',
        full_name: 'Hirai Momo',
        birthday: '1996-11-09',
        position: 'Main Dancer, Vocalist, Rapper',
        nationality: 'Japanese',
      },
      {
        name: 'Sana',
        full_name: 'Minatozaki Sana',
        birthday: '1996-12-29',
        position: 'Lead Dancer, Vocalist',
        nationality: 'Japanese',
      },
      {
        name: 'Jihyo',
        full_name: 'Park Ji-hyo',
        birthday: '1997-02-01',
        position: 'Main Vocalist, Leader',
        nationality: 'Korean',
      },
      {
        name: 'Mina',
        full_name: 'Myoui Mina',
        birthday: '1997-03-24',
        position: 'Main Dancer, Vocalist',
        nationality: 'Japanese',
      },
      {
        name: 'Dahyun',
        full_name: 'Kim Da-hyun',
        birthday: '1998-05-28',
        position: 'Lead Rapper, Vocalist',
        nationality: 'Korean',
      },
      {
        name: 'Chaeyoung',
        full_name: 'Son Chae-young',
        birthday: '1999-04-23',
        position: 'Main Rapper, Vocalist',
        nationality: 'Korean',
      },
      {
        name: 'Tzuyu',
        full_name: 'Chou Tzu-yu',
        birthday: '1999-06-14',
        position: 'Lead Dancer, Vocalist, Visual, Maknae',
        nationality: 'Taiwanese',
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
