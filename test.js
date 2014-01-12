// Set up express
var express = require('express');
var app = express();

// Set up static file serving
app.use(express.static(__dirname + '/public'));

// Import gnome
var gnome = require('./gnome');

// Send in the express app
gnome.setExpress(app);

// Send in the mongodb uri
gnome.setMongoURI('mongodb://shrimpboyho:shrimprockman@ds051378.mongolab.com:51378/gnome');

// Initialize the blog api
gnome.initBlog();

// Listen
app.listen(8000);
console.log('Listening on port 8000');