const mongoose = require('mongoose');
//Schema del cliente, es el modelo de como son los objetos cliente
const studentSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  id: {
    type: String
  }
});

//Se exporta el modelo para que pueda ser utilizado en app.js
//El primer parámetro es el nombre del modelo y el otro es el schema
//del modelo que se va a utilizar
var Student = (module.exports = mongoose.model(
  'Student',
  studentSchema,
  'students'
));
