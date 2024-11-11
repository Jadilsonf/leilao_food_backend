require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const lanceRoutes = require('./routes/lanceRoutes');
const cors = require('cors')


const app = express();

app.use(express.json());

app.use(cors());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/lances', lanceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
