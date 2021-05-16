const express = require('express');
const router = express.Router();
const uuid = require("uuid").v4();
const mongoose = require('mongoose');
const { BrechaModel } = require('../../models/brecha.model');
const brechasMock = require("../../mocks/brechas.json");

const Brecha = mongoose.model('Brecha', BrechaModel);

//Brecha.insertMany(brechasMock)

router.get('/', async (req, res) => {
    try {
        const response = await Brecha.find({})
        res.json(response)
    } catch (error) {
        res.json({error})
    }
});


router.post("/", async (req, res) => {
    req.body.id = uuid;
    //res.json(brechasMock)
    //req.body.password = hass;
    let newBrecha = new Brecha(brechasMock);
    newBrecha
      .save()
      .then(() =>
        res
          .json({
            message: "Brecha creada",
            headers: req.headers,
            body: req.body
          })
          .status(201)
      )
      .catch((error) => res.json({mensaje: "Error al crear una brecha", error}).status(400));

  });

module.exports = router;
