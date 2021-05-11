const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { User } = require('../../models/usuario.model');
const Usuario = mongoose.model('Usuario', User);
const uuid = require('uuid').v4();
const bcrypt = require('bcryptjs');

/* GET home page. */
router.post('/login', function(req, res, next) {

  res.send('POST /api/login')
});

router.post('/registro', function(req, res, next) {
    req.body.id = uuid;
    let newUser = new Usuario(req.body)
    newUser.save()
        .then(response => console.log(response))
        .catch(err => console.error(err))
  res.send('POST /api/registro')
});

module.exports = router;
