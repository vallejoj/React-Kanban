const express = require('express');
const app = express();

const db = require('../models');
const bp = require('body-parser');
const Card = require('../models').Card
const PORT = process.env.PORT || 8080;
app.use(bp.urlencoded());

app.get('/cards', function(req, res) {

  Card.findAll().then((cards) => {
    res.json(cards)
  }).catch((err) => {
    console.log(err)
  })
});

app.post('/new', function(req, res) {
  console.log('posting', req.body)
  Card.create({title: req.body.title, description: req.body.description, priority: req.body.priority, progress: req.body.progress}).then((cards) => {

    Card.findAll().then((cards) => {
      res.json(cards);
    })
  }).catch((err) => {
    console.log(err)
  })
})

app.delete('/delete/:id/edit', function(req, res) {
  Card.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    Card.findAll().then((cards) => {
      res.json(cards);
    });
  }).catch((err) => {
    console.log(err)
  })
})

app.put('/move/:id/edit', (req, res) => {
  console.log('server cards',req.body.progress)
  var cardId = parseInt(req.params.id);
  Card.findById(cardId)
    .then((card) => {
      console.log('server cards',req.params.id)
      card.update(req.body)
        .then(() => {
          Card.findAll()
            .then((cards) => {
              res.json(cards);
            });
        });
    });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync()
  console.log(`Running on ${PORT}`);
});
