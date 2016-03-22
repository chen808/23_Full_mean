// friend.js file located at /server/models/friend.js

// create a file that has the schema for our friends and creates a model that we
// can then call upon in our controller

var mongoose = require('mongoose');

// create our friendSchema
var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
})

// use the schema to create the model
// note: creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Friend', FriendSchema);

// notice we are not exporting anything -- this is because this file will be run when we
// require it using our config file and then since the model is defined we'll be able to access
// it from our controller
