[gnome]() - A Simple Node.js Blog Engine
========================================
[![Build Status](https://drone.io/github.com/shrimpboyho/gnome/status.png)](https://drone.io/github.com/shrimpboyho/gnome/latest)

###How To Install

You can easily drop ```gnome``` into your project through the package manager.

```bash
$ npm install gnome
```

###How To Use

####Server Side

You can easily integrate ```gnome``` into your ```express.js``` project.

```js
// Set up express
var express = require('express');
var app = express();

// Set up server homepage
app.get('/', function(req, res) {
	res.send('Yeah');
});

// Import gnome
var gnome = require('gnome');

// Send in the express app
gnome.setExpress(app);

// Send in the mongodb uri
gnome.setMongoURI('mongodb://shrimpboyho:shrimprockman@ds051378.mongolab.com:51378/gnome');

// Initialize the blog api
gnome.initBlog();

// Listen
app.listen(8000);
console.log('Listening on port 8000');
```

####Client Side

There is a client side js file that can be called via HTML. (It is dependent on jQuery)

```html
<script src="jquery.min.js"></script>
<script src="gnome/gnomeclient.js"></script>
<script src="yourjavascript.js"></script>
```

There are several jQuery extensions now availible.

```js
// Create a post
var post = {
	
	title: "How To Use Node.js",
	author: "NodeNinja",
	body: "BLAHBLAHBLAH",
	tags: ['tutorials','nodejs','projects']

};

// Publish the post
$.newPost(post);

// Get all posts in a JSON object
var history = $.getAllPosts();

// Get a single post by id (unique object id)
var singlepost = $.getPostById('5265d92146b9320c02000001');
```

###About MongoDB Configuration

```gnome``` stores your blog posts in MongoDB, within a collection called ```gnomeblog```


