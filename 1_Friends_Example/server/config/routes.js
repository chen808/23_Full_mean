// ROUTES
// define all of our routing rules

// require the controller
var friends = require('./../controllers/friends.js');

module.exports = function(app){
	// GET return all friends
	app.get('/friends', function(req, res){
		// calls controller method from back end
		friends.index(req, res);
	})
}
// we are delegating to the controller and passing along req and rez