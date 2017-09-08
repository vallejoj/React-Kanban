const express = require('express');
const  app = express();

const db = require ('../models');
const bp = require('body-parser');
const Card = require('../models').Card
const PORT = process.env.PORT || 8080;
app.use(bp.urlencoded( ));

app.get('/cards', function (req, res){

  Card.findAll()
  .then((cards) =>{
    console.log("testing out get request",cards);
    res.json(cards)
  })
  .catch((err)=>{
    console.log(err)
  })
});

app.post('/new', function(req,res){
  Card.create({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    progress: req.body.progress
  }).then((cards)=>{
    res.end()
  })
  .catch((err)=>{
    console.log(err)
  })
})


const server = app.listen(PORT, () =>{
    db.sequelize.sync()
  console.log(`Running on ${PORT}`);
});
