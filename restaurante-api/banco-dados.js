const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/restaurantes',    //se conecta ao banco de dados
    {
        auth: {
            authSource: "admin"
        },
        user: "gabi",
        pass: "123", 
        useNewUrlParser: true, useUnifiedTopology: true
    }); 
    mongoose.set('debug', true);

const db = mongoose.connection; //

db.once('open', () => console.log("Ok"));
db.on('error', (error) => console.log(error));

module.exports = db;