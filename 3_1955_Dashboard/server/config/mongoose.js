
// MONGOOSE.JS
// located in server/config/mongoose.js

// require mongoose
var mongoose = require('mongoose');

// require file-system so that we can load, read, require
// all of the model file
var fs = require('fs');

// connecting to database
mongoose.connect('mongodb://localhost/Dashboard_1955');

// specify the path to all of the models
var models_path = __dirname + '/../models'

// read all of the files in the models_path
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('js') > 0){
		require(models_path + '/' + file);
	}
})