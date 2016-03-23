// ROUTES.JS
// located in server/config/routes.js

// require the controller
var persons = require('./../controllers/persons.js');

module.exports = function(app){

	// GETS
	app.get('/persons', function(req, res){
		persons.index(req, res);
	})

	app.get('/remove/:id', function(req, res){
		persons.remove(req, res, req.params.id);
	})

	// POSTS
	app.post('/persons', function(req, res){
		persons.create(req, res);
	})

};