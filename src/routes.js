const express = require('express');
const CandidatoController = require('./controllers/CandidatoController');
const routes = new express.Router();

routes.post('/register', CandidatoController.register);
routes.get('/', (req, res) => {
    res.send('Ok');
});


module.exports = routes;