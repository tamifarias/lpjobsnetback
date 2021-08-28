// Conexão banco de dados com framework express e mongodb online
const express = require('express');
const mongoose = require('mongoose'); //ORM
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://tamiresfc:tami123@cluster0.xoygb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(express.json()); // app.use middleware
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('Rodando na porta 5000');
});