import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello asdfWosaaasdfsdsdffsdfrld');
});

app.listen(3000);
