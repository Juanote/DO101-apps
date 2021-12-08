var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello New World 3!\n');
});
app.get('/marte', function (req, res) {
  res.send('Hello Marte!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

