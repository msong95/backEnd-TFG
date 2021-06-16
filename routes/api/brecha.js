const express = require('express');
const router = express.Router();
const uuid = require("uuid").v4();
const mongoose = require('mongoose');
const { BrechaModel } = require('../../models/brecha.model');
const brechasMock = require("../../mocks/brechas.json");

const Brecha = mongoose.model('Brecha', BrechaModel);

//Brecha.insertMany(brechasMock)

router.get('/recuperarBrecha', async (req, res) => {

        const response = await Brecha.find({})
        res.json(response)

});

router.post("/crearBrecha", async (req, res) => {

    let newBrecha= new Brecha(req.body);
    const token=newBrecha;
     
    newBrecha.save();
    res.jsonp({token})
});
module.exports = router;
