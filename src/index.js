// Conexão banco de dados com framework express e mongodb online
const express = require('express');
const mongoose = require('mongoose'); //ORM
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://tamiresfc:tami123@cluster0.xoygb.mongodb.net/bdados?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json()); // app.use middleware
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('Servidor na porta 5000');
});