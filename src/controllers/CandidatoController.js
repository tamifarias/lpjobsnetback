const Candidato = require('../models/Candidato');


module.exports = {
    async register(req, res) {

        const { email, gender, name, cep } = req.body;

        const newCandidato = new Candidato();

        newCandidato.email = email;
        newCandidato.name = name;
        newCandidato.gender = gender;
        newCandidato.cep = cep;

        newCandidato.save((err, savedCandidato) => {
            if (err) {
                console.log(err);
                return res.status(500).send('iti malia deu probleminha!'); // Retorna o erro para o front-end
            }

            return res.status(200).send(savedCandidato);
        });
    },



};