var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var pacienteDiagnostico = new Schema({
    diagnostico: [{type: ObjectId, ref:'Diagnosticos'}],
    paciente:{type: ObjectId, ref:'Pacientes'}
});

module.exports = mongoose.model('PacienteDiagnostico', pacienteDiagnostico);