const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../../models/usuario.model");
const Usuario = mongoose.model("Usuario", User);
const uuid = require("uuid").v4();
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  const response = await Usuario.findOne({ email: req.body.email }).exec();
  let iguales;
  if(response){
      bcrypt.compare(req.body.password, response.password, (err, response) => {
        response ? res.json({message: 'login correcto'}) : res.json({message: 'login incorrecto'})
      })

  }

});

router.post("/registro", async (req, res) => {
  req.body.id = uuid;
  await bcrypt.hash(req.body.password, 10, (err, hass) => {
    req.body.password = hass;
    let newUser = new Usuario(req.body);
    newUser
      .save()
      .then(() =>
        res
          .json({
            message: "Usuario creado",
            headers: req.headers,
            body: req.body
          })
          .status(201)
      )
      .catch(() => res.send("Error al crear un usuario").status(400));
  });
});

module.exports = router;
