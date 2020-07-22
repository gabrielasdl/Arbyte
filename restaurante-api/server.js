const express = require('express');  // 
const routerRestaurante = require('./routers/restaurante'); //a variavel routerRestaurantes recebe tudo o que esta no arquivo restaurante.js
const db = require('./banco-dados');
const app = express();   // a variavel app acessa todos os metodos do express




app.use('/restaurante', routerRestaurante)   // chamando a rota que esta no arquivo restaurante.js


app.listen(3000);