const express = require('express');
const router = express.Router();
const uuid = require("uuid").v4();
const mongoose = require('mongoose');
const { ResultadoModel } = require('../../models/resultado.model');

const Resultado = mongoose.model('Resultado', ResultadoModel);

//Brecha.insertMany(brechasMock)

router.get('/resultados', async (req, res) => {
    try {
        const response = await Resultado.find({})
        res.json(response)
    } catch (error) {
        res.json({error})
    }
});

module.exports = router;
