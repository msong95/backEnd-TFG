const express = require('express');
const router = express.Router();

const usuariosRoute = require('./api/usuarios')
const preguntasRoute = require('./api/preguntas')
const authRoute = require('./api/auth')

router.use('/usuarios', usuariosRoute)
router.use('/preguntas', preguntasRoute)
router.use('/auth', authRoute)

module.exports = router
