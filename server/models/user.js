var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new mongoose.Schema({
  cedula: String,
  nombre: String,
  apellido: String
});

module.exports = mongoose.model('usuarios', UsuarioSchema);