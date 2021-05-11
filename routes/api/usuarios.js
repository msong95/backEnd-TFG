var express = require('express');
var router = express.Router();
const { mongoose } = require('../../db');
const { User } = require('../../models/usuario.model');
const uuid = require('uuid');

const Usuario = mongoose.model('Cat', User);


/* GET home page. */
router.get('/', async function(req, res, next) {
    const response = await Cat.find({})
    res.json(response)

});

module.exports = router;
