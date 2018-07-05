//Importar las dependencias del proyecto
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Importar modelos de mongoose
const Student = require('./models/Student');
const Admin = require('./models/Admin');
// import path from require('path');
//Cors permite hacer requests a otros dominios sin ser bloqueado, Se mandarán requests del
//dominio localhost:4200 hacia el dominio localhost:27017
const cors = require('cors');
const passport = require('passport');
var loggedIn = false;

//inicializar express
const app = express();

//Numero del puerto donde se va a iniciar el servidor ExpressJS
var port = 3000;

// Ruta a la base de datos, mongodb://127.0.0.1:27017/<nombre de la base de datos>
var rutaBD = 'mongodb://localhost:27017' + '/crud-app';

//Configuracion de Cors
app.use(cors());

//Configuración de Bodyparser
//Se encarga de hacer parsing a objetos JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Conectar a la base de datos con Mongoose y verificar la conexión
mongoose.connect(rutaBD);

const connection = mongoose.connection;

//Connection.once() solo corre una sola vez
connection.once('open', () => {
  console.log('Connection to the database successful.');
});

//Ruta principal
app.get('/', (req, res) => {
  res.send('Server started');
});

//Router de express para manejar las rutas
const router = express.Router();
app.use('/', router);

//Ruta para cargar la lista de estudiantes
router.route('/students').get((req, res) => {
  Student.find((err, student) => {
    if (err) console.log(err);
    else res.json(student);
  });
});

//Ruta para añadir un estudiante
router.route('/students/add').post((req, res) => {
  let student = new Student(req.body);
  student
    .save()
    .then(student => {
      res.send('Added Successfully');
    })
    .catch(err => {
      res.send('Failed to add a new student');
    });
});

//Ruta para actualizar un estudiante
router.route('/students/update/:id').post((req, res) => {
  Student.findOneAndUpdate(
    req.params.id,
    req.body,
    { new: false },
    (err, student) => {
      if (!student) res.send('Student could not be updated');
      else return res.send('Successfully updated');
    }
  );
});

//Ruta para eliminar un estudiante
router.route('/students/delete/:id').delete((req, res) => {
  Student.findOneAndRemove({ id: req.params.id }, (err, student) => {
    if (!student) res.send('Student could not be removed');
    else res.send('Student removed successfully');
  });
});

//Ruta para registrar administradores para el login
router.route('/register').post((req, res) => {
  let admin = new Admin(req.body);
  admin
    .save()
    .then(admin => {
      res.send('Admin registered Successfully');
    })
    .catch(err => {
      res.send('Failed to register a new admin');
    });
});

//Ruta para verificar el login
router.route('/login/auth').post((req, res) => {
  User.find((err, admin) => {
    if (!admin) console.log(err);
    else res.json(admin);
  });
});

//Iniciar el servidor en el puerto determinado
app.listen(port, () => {
  console.log('Empezando el servidor en el puerto ' + port);
});
