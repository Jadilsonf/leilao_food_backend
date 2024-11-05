const mongoose = require('mongoose');

const lanceSchema = new mongoose.Schema({
    valor: { // Valor do lance
        type: Number,
        required: true,
    },
    ofertante: { // Nome do ofertante
        type: String,
        required: true,
    },
    data: { // Data do lance
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Lance', lanceSchema);
