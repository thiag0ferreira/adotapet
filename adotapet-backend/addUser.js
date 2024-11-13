const mongoose = require('mongoose');
const User = require('./models/User'); // Ajuste o caminho conforme necessário

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost/adotapet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const addUser = async () => {
  try {
    const newUser = new User({
      name: 'Test User',
      email: 'test@email.com',
      password: 'test1234'
    });

    await newUser.save();
    console.log('Usuário adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error.message);
  }

  mongoose.disconnect();
};

addUser();
