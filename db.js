const mongoose = require("mongoose");
let url = process.env.ENVIROMENT === 'dev' ?
  "mongodb+srv://nodejs:nodejs214365@cluster0.zkdg2.mongodb.net/app-tfg?retryWrites=true&w=majority" :
  "mongodb://localhost:27017/app-brecha";

let uri = '';

switch (process.env.ENVIROMENT) {
    case 'dev':
        uri = 'mongodb+srv://nodejs:nodejs214365@cluster0.zkdg2.mongodb.net/app-tfg?retryWrites=true&w=majority';
    case 'local':
        uri = 'mongodb://localhost:27017/app-brecha';
}

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    if (response) console.log(`base de datos conectada, entorno -> ${process.env.ENVIROMENT} -> url: ${url}`);
  })
  .catch(err => err ? console.error('error en la conexion a la base de datos') : null);

module.exports = { mongoose };
