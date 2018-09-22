var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diagnosticos = new Schema({
    diagnostico: String
});

module.exports = mongoose.model('Diagnosticos', diagnosticos);