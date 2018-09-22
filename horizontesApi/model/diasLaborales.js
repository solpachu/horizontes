var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var diasLaborales = new Schema({
    dia: String,
    dateInicio: Date,
    dateFinal: Date,
    profesional:{type: ObjectId, ref:'Profesionales'}
});

module.exports = mongoose.model('DiasLaborales', diasLaborales);