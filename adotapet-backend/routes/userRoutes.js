const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    console.log('Requisição recebida para /register');
    const { nome, email, senha } = req.body;
    console.log('Dados recebidos:', { nome, email, senha });
    const newUser = new User({ nome, email, password: senha });
    await newUser.save();
    console.log('Usuário salvo com sucesso');
    res.status(201).json('Usuário cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json(error.message);
  }
});

module.exports = router;
