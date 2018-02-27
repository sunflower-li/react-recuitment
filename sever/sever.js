const express = require('express');
// 新建app
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>hello 2018</h1>')
})

app.get('/data', function (req, res) {
  res.json({ name: 'test', type: 'it', gender: 'male'});
})
app.listen(9333, function () {
  console.log('Node app start at port 9093');
})
