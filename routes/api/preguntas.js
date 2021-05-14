var express = require('express');
var router = express.Router();
const preguntasMock = require('../../mocks/preguntas.json');
const PreguntaModel = require('../../models/pregunta.model')
const mongoose = require('mongoose');
const Pregunta = mongoose.model('Pregunta',PreguntaModel)



/* GET home page. */
router.get('/',  async (req, res) => {
    const response = await Pregunta.find({})
    let preguntas = {};
    let arrPreguntas = [];
    let secciones = []

    response.forEach(pregunta => {
        secciones.push(pregunta._doc.seccion); // recoge todos los section
        secciones = secciones.filter((seccion, index) => secciones.indexOf(seccion) === index); // elimina duplicados

        //preguntas[pregunta._doc.seccion] = []; // inicializa el objeto con la key del section

        //preguntas[pregunta._doc.seccion].push(pregunta)

    })
    for(let seccion of secciones){
        preguntas[seccion] = []
    }

    response.forEach(pregunta => {
        preguntas[pregunta._doc.seccion].push(pregunta)
    })

    res.json(preguntas)

});

function secciones() {

}

module.exports = router;
