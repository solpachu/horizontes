var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var usuarios = new Schema({
    nombre: String,
    apellido: String,
    usuario: String,
    password: String,
    tipoUsuario: {type: ObjectId, ref:'TipoUsuarios'}
});

module.exports = mongoose.model('Usuarios', usuarios);