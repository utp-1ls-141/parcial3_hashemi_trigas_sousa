const mongoose = require('mongoose');
//Schema del cliente, es el modelo de como son los objetos cliente
const adminSchema = mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

//Se exporta el modelo para que pueda ser utilizado en app.js
//El primer parámetro es el nombre del modelo y el otro es el schema
//del modelo que se va a utilizar
var User = (module.exports = mongoose.model('Admin', adminSchema, 'admins'));
