const express = require('express');
const  app = express();

const db = require ('../models');
const bp = require('body-parser');
const PORT = process.env.PORT || 8080;
app.use(bp.urlencoded());

app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/kanban', function (req, res) {


    res.send('hello worlds')

});


const server = app.listen(PORT, () =>{
    db.sequelize.sync()
  console.log(`Running on ${PORT}`);
});
