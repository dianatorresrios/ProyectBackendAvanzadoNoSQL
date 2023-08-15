const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  DNI: String,
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  rol: String,
  telefono: String,
  correo: String,
  contraseña: String,
  nombreUsuario: String,
});

module.exports = mongoose.model('User', userSchema);
