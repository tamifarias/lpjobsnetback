const mongoose = require('mongoose');

const CandidatoSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidato', CandidatoSchema);
