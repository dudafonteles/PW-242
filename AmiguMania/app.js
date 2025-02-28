const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

const app = express();

// Conectar ao MongoDB
connectDB();

// Configuração de middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Configurar as views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Importar rotas
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/api', productsRouter);

module.exports = app;
