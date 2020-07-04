const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(genero => res.json(genero))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const genero = req.body.genero;

  const newUser = new User({genero});

  newUser.save()
    .then(() => res.json('Dados salvo'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;