var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var nroTurnos = new Schema({
    disponibilidad: Boolean,
    dateInicio: Date,
    dateFinal: Date,
    diaLaboral:{type: ObjectId, ref:'DiasLaborales'}
});

module.exports = mongoose.model('NroTurnos', nroTurnos);