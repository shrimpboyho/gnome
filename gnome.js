/* Dependencies */
var express = require('express');
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = require('url');
var colors = require('colors');

/* Global variables */
var expressGiven;
var uriGiven;

/* The set server (express) function */

function setExpress(server) {

  // Create a global variable
  expressGiven = server;

  /* TODO: find a way to serve the client javascript file */
}

/* Sets the mongodb uri */

function setMongoURI(uri) {
  uriGiven = uri;
}

function initBlog() {
  // Serve the client file
  expressGiven.get('/gnome/gnomeclient.js', function(request, response) {
    response.sendfile(__dirname + '/client/gnomeclient.js');
  });

  // Handle new blog post request
  expressGiven.get('/gnome/newblogpost', function(request, response) {

    // JSON data parameters
    var title = request.query.title;
    var body = request.query.body;
    var author = request.query.author;
    var tags = request.query.tags;

    mongo.connect(uriGiven, function(err, db) {

      if (err) {
        console.log('Gnome is unable to connect to mongodb');
        response.send({
          status: 'fail'
        });
      }

      // Create collection if it doesn't already exist
      if (!db.collection('gnomeblog'))
        db.createCollection('gnomeblog', function(err, collection) {});

      db.collection('gnomeblog').insert({
        'title': title,
        'body': body,
        'author': author,
        'tags': tags
      }, function(err, inserted) {
        response.send({
          status: 'success'
        });
      });

    });

  });

  // Handle request to fetch blogs posts
  expressGiven.get('/gnome/fetchposts', function(request, response) {

    // Make sense of JSON in request

    var reqjson = request.query;

    mongo.connect(uriGiven, function(err, db) {

      if (err)
        console.log('Unable to connect to mongodb');

      var collection = db.collection('gnomeblog');

      // TODO: if a single post by id is required send it
      if (reqjson.id) {
        console.log(reqjson.id);
        var id = ObjectId(reqjson.id);
        collection.find({
          "_id": id
        }).toArray(function(err, docs) {
          console.log(docs)
          response.send(docs);
        });
      }
      // or just pack everything and send it
      else {
        collection.find({}).toArray(function(err, docs) {
          response.send(docs);
        });
      }

    });

  });

  console.log("Gnome blog server initialized.".green)

}

/* The exports */

exports.setExpress = setExpress;
exports.initBlog = initBlog;
exports.setMongoURI = setMongoURI;