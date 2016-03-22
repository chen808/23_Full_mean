// FRIEND.JS
// /server/models/friend.js

var mongoose = require('mongoose');

// create our PersonSchema
var PersonSchema = new mongoose.Schema({
	name: String
}, { collection: 'person' });

mongoose.model('Person', PersonSchema);