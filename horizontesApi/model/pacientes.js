var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var pacientes = new Schema({
    nombre: String,
    apellido: String,
    dni: String,
    nroObraSocial: String,
    autonomia: Boolean,
    observaciones: String,
    domicilio: {type: ObjectId, ref:'Domicilios'}
});

module.exports = mongoose.model('Pacientes', pacientes);