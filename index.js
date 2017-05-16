"use strict";
//require express, bodyParser and mongoose
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// require DB settings and our Todo schema
let db  = require( './db' );
let Todo  = require( './Todo.model' );

// start the Server on the specified port
let port = 3000;
app.listen(port, function() {
  console.log('app listening on port ' + port);
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

/* GET Todo list /api */
app.get('/', function(req, res) {
  res.send('API is located at /api/todo');
});

/* GET Todo list /api */
app.get('/api', function(req, res) {
  res.send('API is located at /api/todo');
});

/* GET Todo list /api/todo */
app.get('/api/todo', function(req, res) {
  console.log('getting all todos');
  Todo.find({})
    .exec(function(err, item) {
      if(err) {
        res.status(400);
        res.send('error occured')        
      } else {
        console.log(item);
        res.status(200);
        res.json(item);
      }
    });
});


/* GET Todo by id /api/todo/:id */
app.get('/api/todo/:id', function(req, res) {
  console.log('getting item ' + req.params.id);
  Todo.findById({
    _id: req.params.id
  }, function(err, item) {
    if(err) {
      res.status(400);
      res.send('error finding item')
    } else {
      console.log(item);
      res.status(200);
      res.send(item);
    }
  });
});

/* POST Todo list /api/todo */
app.post('/api/todo', function(req, res) {
  Todo.create(req.body, function(err, item) {
    if(err) {
      res.send('error creating item');
      res.status(400);
    } else {
      console.log(item);
      res.status(201);
      res.send(item);      
    }
  });
});

/* DELETE Todo list /api/todo/:id */
app.delete('/api/todo/:id', function(req, res) {
  Todo.findOneAndRemove({
    _id: req.params.id
  }, function(err, item) {
    if(err) {
      res.status(400);
      res.send('error removing item')
    } else {
      console.log(item);      
      res.status(200);
      res.send(item);
    }
  });
});

/* PUT (update) Todo list /api/todo */
app.put('/api/todo/:id', function(req, res) {
  Todo.findOneAndUpdate({
    _id: req.params.id
    },
    { $set: { content: req.body.content }
  }, {upsert: true}, function(err, item) {
    if (err) {
      res.status(400);
      res.send('error updating todo item');
    } else {
      console.log(item);
      res.status(200);
      res.send(item);      
    }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Show errors for debugging:

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});