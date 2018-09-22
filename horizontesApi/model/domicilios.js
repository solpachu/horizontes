var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var domicilios = new Schema({
    direccion: String,
    localidad: String,
    ciudad: String,
    pais: String
});

module.exports = mongoose.model('Domicilios', domicilios);