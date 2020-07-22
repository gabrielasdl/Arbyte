const express = require('express');
const router = express.Router();
const Restaurante = require('../restaurante-schema');


// router.use(function(req, res, next) {
//     console.log("Middleware restaurante");
//     next();
// });

router.get('/', async function (req, res) {
    const restaurantes = await Restaurante.find();
    res
        .status(200)
        .json(restaurantes);

})


module.exports = router