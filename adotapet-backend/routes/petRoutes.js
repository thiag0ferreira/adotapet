const express = require('express');
const multer = require('multer');
const router = express.Router();
const Pet = require('../models/Pet'); // Caminho correto para o seu modelo

// Configuração do multer
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  }
});

// Rota para registrar um pet com uma foto opcional
router.post('/registerPet', upload.single('foto'), async (req, res) => {
  try {
    const petData = req.body;
    if (req.file) {
      petData.foto = req.file.path;
    }
    const newPet = new Pet(petData);
    await newPet.save();
    res.status(201).json('Pet cadastrado com sucesso!');
  } catch (error) {
    console.error('Error registering pet:', error);
    res.status(500).json({ message: 'Erro ao cadastrar pet', details: error.message });
  }
});


// Rota para buscar pets por nome e/ou localização
router.get('/searchPets', async (req, res) => {
  const { name, location } = req.query;
  try {
    let query = {};
    if (name) {
      query.nome = { $regex: name, $options: "i" }; // busca insensível à caixa
    }
    if (location) {
      query.localizacao = { $regex: location, $options: "i" };
    }
    const pets = await Pet.find(query);
    res.json(pets);
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    res.status(500).json({ message: 'Erro ao buscar pets' });
  }
});

// Rota para buscar todos os pets
router.get('/all', async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (error) {
    console.error('Falha ao buscar todos os pets:', error);
    res.status(500).send(error.message);
  }
});

// Rota para buscar um pet específico pelo ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json(pet);
  } catch (error) {
    console.error('Erro ao buscar o pet:', error);
    res.status(500).json({ message: 'Erro ao buscar informações do pet' });
  }
});

// Rota para confirmar a adoção de um pet
router.post('/confirmar-adocao/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    // Supondo que exista um campo 'adotado' no modelo
    pet.adotado = true;
    await pet.save();
    res.json({ message: 'Adoção confirmada com sucesso!' });
  } catch (error) {
    console.error('Erro ao confirmar adoção:', error);
    res.status(500).json({ message: 'Erro ao confirmar adoção' });
  }
});

// Rota para cancelar a adoção (neste exemplo, apenas retorna uma mensagem)
router.post('/cancelar-adocao/:id', async (req, res) => {
  try {
    // Log de cancelamento ou outras ações poderiam ser implementadas aqui
    res.json({ message: 'Adoção cancelada' });
  } catch (error) {
    console.error('Erro ao cancelar adoção:', error);
    res.status(500).json({ message: 'Erro ao cancelar adoção' });
  }
});



module.exports = router;
