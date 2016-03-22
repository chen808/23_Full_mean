// FRIENDS.JS
// located at server/controllers/friends.js

// the following allows us to access our model through var Persons
var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = (function(){
	return {

		index: function(req, res){
			Person.find({}, function(err, results){
				if(err){
					console.log("Error loading data");
				}
				else{
					res.json(results);
				}
			})
		},

		create: function(req, res){
			Person.create(req.body, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},

		remove: function(req, res, id){
			Person.remove({_id: id}, function(err){
				if(err){
					res.send('error finding id to remove')
				}
				else{
					Person.find({}, function(err, results){
						if(err){
							console.log("error from database!");
						}
						else{
							res.json(results);
						}
					});
				}
				
			});
		},









	}

})();