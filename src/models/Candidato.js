const mongoose = require('mongoose');

const CandidatoSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: false },
    dtnascimento: { type: String, unique: false, required: true },
    estadocivil: { type: String, unique: false, required: false },

    sexo: { type: String, unique: false, required: false },
    endereco: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: false },
    cidade: { type: String, unique: false, required: false },

    cep: { type: Number, unique: false, required: true },
    telnum: { type: Number, unique: false, required: false },
    telnum2: { type: Number, unique: false, required: false },
    

    celular: { type: Number, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    identidade: { type: Number, unique: false, required: true },

    cpf: { type: Number, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidato', CandidatoSchema);
