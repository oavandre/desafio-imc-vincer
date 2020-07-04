const router = require('express').Router();
let Imc = require('../models/imc.model');

router.route('/').get((req, res) => {
  Imc.find()
    .then(imc => res.json(imc))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const genero = req.body.genero;
  const altura = Number(req.body.altura);
  const massa = Number(req.body.massa);
  const valor = Number(req.body.valor);

  const novoIMC = new Imc({
    genero,
    altura,
    massa,
    valor,
  });

  novoIMC.save()
  .then(() => res.json('Dados adicionados!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Imc.findById(req.params.id)
    .then(imc => res.json(imc))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Imc.findByIdAndDelete(req.params.id)
    .then(() => res.json('Dados deletados.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Imc.findById(req.params.id)
    .then(imc => {
      imc.genero = req.body.genero;
      imc.altura = Number(req.body.altura);
      imc.massa = Number(req.body.massa);
      imc.valor = Number(req.body.valor);



      imc.save()
        .then(() => res.json('IMC atualizado!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;