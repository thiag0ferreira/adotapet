const mongoose = require('mongoose');

// Definição do esquema para informações pessoais do usuário
const UserInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cep: {
    type: String,
    required: [true, 'CEP é obrigatório']
  },
  endereco: {
    type: String,
    required: [true, 'Endereço é obrigatório']
  },
  numero: {
    type: String,
    required: [true, 'Número é obrigatório']
  },
  complemento: {
    type: String
  },
  telefone: {
    type: String,
    required: [true, 'Telefone é obrigatório']
  }
}, {
  timestamps: true // Adiciona campos createdAt e updatedAt automaticamente
});

// Criação do modelo com base no esquema definido
const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

module.exports = UserInfo;
