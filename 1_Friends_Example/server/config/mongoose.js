// mongoose.js (located at server/config/mongoose.js)

// this is a config file that connects to MongoDB and loads all of our models for us. We
// do this here because we don't want to have to connect to the DB every time we require
// a model!

// require mongoose
var mongoose = require('mongoose');

// require file-system so that we can load, read, require all of the model file-system
var fs = require('fs');

// connect to the database
mongoose.connect('mongodb://localhost/FullMean_Friends');

// specify the path to all of the models
var models_path = __dirname + '/../models'

// read all of the files in the models_path and for each one check it it
// it is a javascript file before require it
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})