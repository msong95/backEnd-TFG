const mongoose = require("mongoose");
let url = 'mongodb+srv://nodejs:nodejs214365@cluster0.zkdg2.mongodb.net/app-tfg?retryWrites=true&w=majority'

let uri = '';

switch (process.env.ENVIROMENT) {
    case 'dev':
        uri = 'mongodb+srv://nodejs:nodejs214365@cluster0.zkdg2.mongodb.net/app-tfg?retryWrites=true&w=majority';
        break;
    case 'local':
        uri = 'mongodb://localhost:27017/app-brecha';
        break;
}

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    if (response) console.log(`base de datos conectada, entorno -> ${process.env.ENVIROMENT} -> url: ${uri}`);
  })
  .catch(err => err ? console.error('error en la conexion a la base de datos') : null);

module.exports = { mongoose };
