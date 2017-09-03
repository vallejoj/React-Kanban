var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/kanban', function (req, res) {


    res.send('hello worlds')

});


const server = app.listen(PORT, () =>{

  console.log(`Running on ${PORT}`);
});
