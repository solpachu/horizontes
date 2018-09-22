var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var consultorios = new Schema({
    nombre: String,
    tipo: String
});

module.exports = mongoose.model('Consultorios', consultorios);