var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipoUsuarios = new Schema({
    descripcion: String
});

module.exports = mongoose.model('TipoUsuarios', tipoUsuarios);