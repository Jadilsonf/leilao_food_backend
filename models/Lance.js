const mongoose = require('mongoose');

const lanceSchema = new mongoose.Schema({
    valor: { 
        type: Number,
        required: true,
    },
    ofertante: { 
        type: String,
        required: true,
    },
    data: { 
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Lance', lanceSchema);
