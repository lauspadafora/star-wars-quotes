var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: String,
    year: Number
});

module.exports = mongoose.model('Movie', MovieSchema);