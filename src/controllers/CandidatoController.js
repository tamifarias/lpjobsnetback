const Candidato = require('../models/Candidato');


module.exports = {
    async register(req, res) {

        const { nome, cargo, dtnascimento, estadocivil, sexo, endereco,
        bairro, cidade, cep, telnum, telnum2, 
        celular, email, identidade, cpf, veiculo, habilitacao } = req.body;

        const newCandidato = new Candidato();

        newCandidato.nome = nome;
        newCandidato.cargo = cargo;
        newCandidato.dtnascimento = dtnascimento;
        newCandidato.estadocivil = estadocivil;

        newCandidato.sexo = sexo;
        newCandidato.endereco = endereco;
        newCandidato.bairro = bairro;
        newCandidato.cidade = cidade;

        newCandidato.cep = cep;
        newCandidato.telnum = telnum;
        newCandidato.telnum2 = telnum2;
        
        newCandidato.celular = celular;
        newCandidato.email = email;
        newCandidato.identidade = identidade;

        newCandidato.cpf = cpf;
        newCandidato.veiculo = veiculo;
        newCandidato.habilitacao = habilitacao;

        newCandidato.save((err, savedCandidato) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro ao salvar dados!'); // Retorna o erro para o front-end
            }

            return res.status(200).send(savedCandidato);
        });
    },



};