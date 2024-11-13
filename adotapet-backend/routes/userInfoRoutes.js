const express = require('express');
const router = express.Router();
const UserInfo = require('../models/UserInfo');

router.post('/userInfo', async (req, res) => {
  try {
    console.log('Requisição recebida para /userInfo');
    const { cep, endereco, numero, complemento, telefone, userId } = req.body;
    console.log('Dados recebidos:', { cep, endereco, numero, complemento, telefone, userId });
    const newUserInfo = new UserInfo({ userId, cep, endereco, numero, complemento, telefone });
    await newUserInfo.save();
    console.log('Informações pessoais salvas com sucesso');
    res.status(201).send('Informações pessoais cadastradas com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar informações pessoais:', error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
