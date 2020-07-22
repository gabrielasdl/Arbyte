const mongoose = require('mongoose');

const restaurantesSchema = new mongoose.Schema({
    name: String,
    borough: String,
    cusine: String,
});

const Restaurante = mongoose.model('Restaurante', restaurantesSchema); // transforma o Schema em uma classe 

module.exports = Restaurante;