const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  localizacao: { type: String, required: true },
  especie: { type: String, required: true },
  idadeEstimada: { type: Number, required: true },
  peso: { type: String, required: true },
  porte: { type: String, required: true },
  raca: { type: String, required: true },
  sexo: { type: String, required: true },
  cor: { type: String, required: false },
  tipoPelo: { type: String, required: false },
  necessidadesEspeciais: { type: Boolean, required: false },
  descricaoNecessidades: { type: String, required: function() { return this.necessidadesEspeciais; } },
  castrado: { type: Boolean, required: true },
  vermifugado: { type: Boolean, required: true },
  pedigree: { type: Boolean, required: true },
  vacinado: { type: Boolean, required: true },
  sobrePet: { type: String, required: true },
  foto: { type: String, required: false } // Considerando que você vai armazenar o caminho do arquivo
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;

