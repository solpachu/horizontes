var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var profesionales = new Schema({
    nombre: String,
    apellido: String,
    dni: String,    
    domicilio: {type: ObjectId, ref:'Domicilios'},
    area:{type: ObjectId, ref:'Area'}
});

module.exports = mongoose.model('Profesionales', profesionales);