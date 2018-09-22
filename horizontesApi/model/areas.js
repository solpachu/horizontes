var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areas = new Schema({
    nombreArea: String
});

module.exports = mongoose.model('Areas', areas);