const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User } = require("../../models/usuario.model");
const Usuario = mongoose.model("Usuario", User);
const uuid = require("uuid").v4();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

router.post("/login", async (req, res) => {
  const response = await Usuario.findOne({ email: req.body.email }).exec();
  let iguales;
  if(response){
      bcrypt.compare(req.body.password, response.password, (err, response) => {
        const token = jwt.sign({ id: response.id, role: 'admin' } , 'olakease');
        response ? res.json({token}) : res.json({error: 'Login incorrecto'})



        // response ? res.json({message: 'login correcto'}) : res.json({message: 'login incorrecto'})
      })
  }

});

router.post("/registro", async (req, res) => {
  try {
    const exist = await Usuario.find({email: req.body.email})

    if(exist.length > 0) throw {message: 'este email ya existe en la base de datos'}
  
    req.body.id = uuid;
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    
    const newUser = new Usuario(req.body);
    await newUser.save();
    res.json({
      message: "Usuario creado",
      headers: req.headers,
      body: req.body
    }).status(201);
  } catch (error) {
    res.send(error)
  }


});

module.exports = router;
