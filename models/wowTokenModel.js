var mongoose = require('mongoose');
var wowTokenSchema = mongoose.Schema({});
var WowToken = mongoose.model('WowToken',wowTokenSchema);
exports.WowToken = wowToken;
