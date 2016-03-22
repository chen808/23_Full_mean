// require express so we can build a express app
var express = require('express');

// require path so that we can use path.join
var path = require('path');

// instantiate the app
var app = express();

// require body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// allow index.html to use any additional static files it needs
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);










// set up static file server
app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function(){
	console.log('Batman is listening on port 8000');
});