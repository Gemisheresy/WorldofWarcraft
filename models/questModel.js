var mongoose = require('mongoose');
var questSchema = mongoose.Schema({
  id: : Number,
title: : String,
reqLevel: : Number,
suggestedPartyMembers: : Number,
category: : String,
level: : Number,
});
var Quest =mongoose.model('Quest',questSchema);
exports.Quest = Quest;
