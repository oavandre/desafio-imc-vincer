const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imcSchema = new Schema({
  genero: { type: String, required: true },
  altura: { type: Number, required: true },
  massa: { type: Number, required: true },
  valor: { type: Number, required: true },
}, {
  timestamps: true,
});

const imc = mongoose.model('imc', imcSchema);

module.exports = imc;