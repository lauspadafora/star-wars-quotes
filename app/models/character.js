var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    first_name: String,
    last_name: String
});

module.exports = mongoose.model('Character', CharacterSchema);