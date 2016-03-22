// friends.js (located at /server/controllers/friends.js)

// the following allows us to access our model through var Friend
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


module.exports = (function(){
	return {
		index: function(req, res){
			// find method
			// call to database
			// retrieve data
			// check for error
			// sends http response with json
			Friend.find({}, function(err, results){

				console.log("nightwing");
					console.log(results);

				if(err){
					console.log(err);
				}
				else{
					// responding (returning) raw json data which
					// Angular handles very well
					// from here, it goes back to FACTORY
					res.json(results);
				}
			})

		}
	}
})();