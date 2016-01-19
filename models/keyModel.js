var mongoose = require('mongoose');
var keySchema = mongoose.Schema({});
var Key =mongoose.model('Key',keySchema);
exports.Key = Key;
