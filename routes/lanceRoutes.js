const express = require('express');
const Lance = require('../models/Lance');
const router = express.Router();

//Criar um novo lance
router.post('/', async (req, res) => {
    try {
        const { valor, ofertante } = req.body;
        const novoLance = new Lance({ valor, ofertante });
        await novoLance.save();
        res.status(201).json(novoLance);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao salvar o lance.' });
    }
});

//Obter o lance atual mais alto
router.get('/atual', async (req, res) => {
    try {
        const maiorLance = await Lance.findOne().sort({ valor: -1 });
        res.json(maiorLance);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao obter o lance atual.' });
    }
});

module.exports = router;
