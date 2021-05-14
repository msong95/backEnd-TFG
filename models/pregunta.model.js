const { Schema } = require('mongoose');
const { stringify } = require('uuid');

const PreguntaModel = new Schema({
    id: Number,
    seccion: String,
    titulo: String,
    respuestas: [
        {
            id: String,
            respuesta: String,
            puntuacion: String,
        }
    ],
    tipo: String
})

module.exports = { PreguntaModel }
