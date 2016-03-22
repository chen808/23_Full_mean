// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned

// the following allows us to access our model through var Friend
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');



module.exports = (function() {
 return {
  index: function(req, res) {
     Friend.find({}, function(err, results) {
       if(err) {
         console.log(err);
       }
       else {
         res.json(results);
       }
   })
  },


  // create friend
  create: function(req, res){
    Friend.create(req.body, function(err, results){
      if(err) {
         console.log(err);
       }
       else {
         res.json(results);
       }
    })
  }





 }
})();