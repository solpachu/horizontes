var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var registroTurnos = new Schema({
    nroTurno: {type: ObjectId, ref:'NroTurnos'},
    paciente:{type: ObjectId, ref:'Pacientes'},
    consultorio: {type: ObjectId, ref:'Consultorios'},
    usuario:{type: ObjectId, ref:'Usuarios'}
});

module.exports = mongoose.model('RegistroTurnos', registroTurnos);