// require express so tha twe can build an express app
var express	= require('express');
// require path so tha twe can use path stuff like path.join
var path 	= require('path');
// instantiate the app
var app 	= express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// the following serves up the client folder as a static folder
// gives the index.html persmission to use any additonal static file it 
// needs to present the page (css, js, images)
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// this line requires and runs the code from our routes.js
// file and passes it app so that we can attach our routing
// rules to our express application
require('./server/config/routes.js')(app);





















// set up a static server that points to the 'client' directory
app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function(){
	console.log('cool stuff on 8000');
})