const mongoose = require('mongoose');

const ContattoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  messaggio: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contatto', ContattoSchema);
