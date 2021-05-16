const express = require('express');
const router = express.Router();

const usuariosRoute = require('./api/usuarios')
const preguntasRoute = require('./api/preguntas')
const authRoute = require('./api/auth')
const brechaRoute = require('./api/brecha')

router.use('/usuarios', usuariosRoute)
router.use('/preguntas', preguntasRoute)
router.use('/brecha', brechaRoute)
router.use('/auth', authRoute)

module.exports = router


/**
 * TODO: endpoint para editar el usuario /auth/edit
 * TODO: endpoint para registro de brechas POST /brechas
 * TODO: endpoint para listado de brechas GET /brechas
 *
 * ? comprobar si el usuario existe en la bbdd antes de el registro
 *
 */
