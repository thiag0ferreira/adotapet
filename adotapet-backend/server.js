require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware CORS
app.use(cors());

// Body parsing Middleware
app.use(express.json());

// Conectar ao MongoDB usando variáveis de ambiente
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rota de exemplo
app.get('/', (req, res) => res.send('Hello from AdotaPet backend!'));

// Importação e uso das rotas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const userInfoRoutes = require('./routes/userInfoRoutes');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/userInfo', userInfoRoutes);

// Definição da porta usando variável de ambiente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
