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
  console.log(response);
 
  if(response){
    bcrypt.compare(req.body.password, response.password, (err, response) => {
     const token = jwt.sign({ id: response.id, role: 'admin' } , 'olakease');
      response ? res.json({token}) : res.json({error: '0'})
      // response ? res.json({message: 'login correcto'}) : res.json({message: 'login incorrecto'})
    })
  }else{
    const token =null;
      response ? res.json({token}) : res.json({error: '1'})
  }

});

router.post("/registro", async (req, res) => {
 
  //buscamos si existe
  const response = await Usuario.findOne({ email: req.body.email }).exec();
  console.log(response);

  //si existe el usuario entonces no se puede registrar
  if(response){
    const token=null;
    response ? res.json({token}) : res.json({error: '1'})
    // en caso contrario si se puede
  }else{
    const token=null;
      req.body.id = uuid;
      await bcrypt.hash(req.body.password, 10, (err, hass) => {
        req.body.password = hass;
        let newUser = new Usuario(req.body);
        newUser.save();
        response ? res.json({token}) : res.json({error: '0', message: 'error'})
      });
  }
});

router.post("/modificar", async (req, res) => {
 //criptear clave
  await bcrypt.hash(req.body.password, 10, (err, hass) => {
    req.body.password = hass;
    console.log("modificamos");

    Usuario.updateOne({email:req.body.email},{username: req.body.username, password: req.body.password }, function(
      error,result){
        console.log(result);
          if(error){
            const token=null;
            response ? res.json({token}) : res.json({error: '1'})
          }else{
            response ? res.json({result}) : res.json({error: '0', message: 'error'})
          }
      });
  });
});


module.exports = router;
